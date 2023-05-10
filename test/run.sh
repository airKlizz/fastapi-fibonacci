#!/bin/bash

sleep 60
k6 run -o experimental-prometheus-rw inefficient_fibonacci.js

sleep 60
k6 run -o experimental-prometheus-rw efficient_fibonacci.js

sleep 60
k6 run -o experimental-prometheus-rw memoized_fibonacci.js

sleep 60
k6 run -o experimental-prometheus-rw inefficient_cpu_intensive_fibonacci.js

sleep 60
k6 run -o experimental-prometheus-rw all_in_one.js