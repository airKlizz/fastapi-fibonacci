import requests
import numpy as np
import time
from datetime import datetime

# Define the endpoint and query
prometheus_endpoint = 'http://prometheus:9090/api/v1/query_range'
prometheus_query = 'scaph_process_power_consumption_microwatts{exe="uvicorn"} * on() clamp_max(changes(k6_scenarios_total{scenario="{scenario}"}[1m] offset -30s), 1) + on() vector(0) or on() vector(0)'

# Define the time range
end_time = datetime.now()
start_time = end_time - time.delta(minutes=15)

# Define the scenarios
scenarios = [
    "efficient",
    "inefficient",
    "memoized",
    "inefficient_cpu_intensive",
    "all_in_one",
]

# Loop over the scenarios
for scenario in scenarios:

    # Define the request parameters
    params = {
        'query': prometheus_query.format(scenario=scenario),
        'start': start_time.timestamp(),
        'end': end_time.timestamp(),
        'step': '1s'
    }

    # Send the request
    response = requests.get(prometheus_endpoint, params=params)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        results = response.json()['data']['result']

        # Assuming we have one time series in the result
        values = results[0]['values']

        # Separate timestamps and actual values
        timestamps, values = zip(*values)

        # Convert to numpy arrays for calculations
        timestamps = np.array(timestamps, dtype=float)
        values = np.array(values, dtype=float)

        # Compute the differences between every two points
        dt = np.diff(timestamps)
        dv = np.diff(values)

        # Compute the areas of trapezoids (energy in joules)
        areas = 0.5 * (dv[:-1] + dv[1:]) * dt

        # The total energy under the curve is the sum of these
        total_energy_joules = np.sum(areas)

        # Convert to watt-hours
        total_energy_wh = total_energy_joules / 3600

        print(f'Total energy for {scenario}: {total_energy_wh} Wh')
    else:
        print(f'Request failed with status code {response.status_code}')
