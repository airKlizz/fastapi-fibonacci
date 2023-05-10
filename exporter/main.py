import requests
import numpy as np
import time
from datetime import datetime, timedelta

# Define the endpoint and query
prometheus_endpoint = 'http://prometheus:9090/api/v1/query_range'
prometheus_query = 'scaph_process_power_consumption_microwatts{{exe="uvicorn"}} * on() clamp_max(changes(k6_scenarios_total{{scenario="{scenario}"}}[1m] offset -30s), 1) + on() vector(0) or on() vector(0)'

# Define the time range
end_time = datetime.now()
start_time = end_time - timedelta(minutes=60)

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
        
        values = np.array(values, dtype=float)
        
        # Sum values to obtain energy in Joules (works because step = 1s)
        total_energy_joules = np.sum(values) / 1000000

        # Convert to watt-hours
        total_energy_wh = total_energy_joules / 3600

        print(f'{scenario} -> {total_energy_wh:.3f} Wh')
    else:
        print(f'Request failed with status code {response.status_code}')
