import http from 'k6/http';
import { Counter } from 'k6/metrics';

const scenarios = new Counter('scenarios');

export let options = {
    scenarios: {
        efficient: {
            executor: 'shared-iterations',
            exec: 'efficient',
            vus: 1000,
            iterations: 20000,
        },
        inefficient: {
            executor: 'shared-iterations',
            exec: 'inefficient',
            vus: 1000,
            iterations: 20000,
        },
        memoized: {
            executor: 'shared-iterations',
            exec: 'memoized',
            vus: 1000,
            iterations: 20000,
        },
        inefficient_cpu_intensive: {
            executor: 'shared-iterations',
            exec: 'inefficient_cpu_intensive',
            vus: 1000,
            iterations: 20000,
        }
    }
};

export function efficient() {
    scenarios.add(1, { scenario: "all_in_one" })
    http.get(`${__ENV.BASE_URL}/efficient_fibonacci/${__ENV.FIBONACCI_NUMBER}`);
}

export function inefficient() {
    scenarios.add(1, { scenario: "all_in_one" })
    http.get(`${__ENV.BASE_URL}/inefficient_fibonacci/${__ENV.FIBONACCI_NUMBER}`);
}

export function memoized() {
    scenarios.add(1, { scenario: "all_in_one" })
    http.get(`${__ENV.BASE_URL}/memoized_fibonacci/${__ENV.FIBONACCI_NUMBER}`);
}

export function inefficient_cpu_intensive() {
    scenarios.add(1, { scenario: "all_in_one" })
    http.get(`${__ENV.BASE_URL}/inefficient_cpu_intensive_fibonacci/${__ENV.FIBONACCI_NUMBER}`);
}
