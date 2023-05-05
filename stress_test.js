import http from 'k6/http';

export let options = {
    scenarios: {
        inefficient_fibonacci: {
            exec: 'inefficient_fibonacci',
            executor: 'ramping-arrival-rate',
            startRate: 0,
            timeUnit: '1s',
            preAllocatedVUs: 50,
            maxVUs: 100,
            startTime: '0s',
            stages: [
                { duration: '30s', target: 10 },
                { duration: '1m', target: 50 },
                { duration: '30s', target: 10 },
                { duration: '1m', target: 0 },
            ],
        },
        efficient_fibonacci: {
            exec: 'efficient_fibonacci',
            executor: 'ramping-arrival-rate',
            startRate: 0,
            timeUnit: '1s',
            preAllocatedVUs: 50,
            maxVUs: 100,
            startTime: '3m',
            stages: [
                { duration: '30s', target: 10 },
                { duration: '1m', target: 50 },
                { duration: '30s', target: 10 },
                { duration: '1m', target: 0 },
            ],
        },
        memoized_fibonacci: {
            exec: 'memoized_fibonacci',
            executor: 'ramping-arrival-rate',
            startRate: 0,
            timeUnit: '1s',
            preAllocatedVUs: 50,
            maxVUs: 100,
            startTime: '6m',
            stages: [
                { duration: '30s', target: 10 },
                { duration: '1m', target: 50 },
                { duration: '30s', target: 10 },
                { duration: '1m', target: 0 },
            ],
        },
        inefficient_cpu_intensive_fibonacci: {
            exec: 'inefficient_cpu_intensive_fibonacci',
            executor: 'ramping-arrival-rate',
            startRate: 0,
            timeUnit: '1s',
            preAllocatedVUs: 50,
            maxVUs: 100,
            startTime: '9m',
            stages: [
                { duration: '30s', target: 10 },
                { duration: '1m', target: 50 },
                { duration: '30s', target: 10 },
            ],
        },
    },
};

const BASE_URL = 'http://localhost:4000';
const FIBONACCI_NUMBER = 20;

export function inefficient_fibonacci() {
    http.get(`${BASE_URL}/inefficient_fibonacci/${FIBONACCI_NUMBER}`);
}

export function efficient_fibonacci() {
    http.get(`${BASE_URL}/efficient_fibonacci/${FIBONACCI_NUMBER}`);
}

export function memoized_fibonacci() {
    http.get(`${BASE_URL}/memoized_fibonacci/${FIBONACCI_NUMBER}`);
}

export function inefficient_cpu_intensive_fibonacci() {
    http.get(`${BASE_URL}/inefficient_cpu_intensive_fibonacci/${FIBONACCI_NUMBER}`);
}
