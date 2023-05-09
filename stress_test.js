import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        inefficient_fibonacci: {
            exec: 'inefficient_fibonacci',
            executor: 'constant-vus',
            vus: 1000,
            duration: '1m',
            startTime: '1m',
        },
        efficient_fibonacci: {
            exec: 'efficient_fibonacci',
            executor: 'constant-vus',
            vus: 1000,
            duration: '1m',
            startTime: '3m',
        },
        memoized_fibonacci: {
            exec: 'memoized_fibonacci',
            executor: 'constant-vus',
            vus: 1000,
            duration: '1m',
            startTime: '5m',
        },
        inefficient_cpu_intensive_fibonacci: {
            exec: 'inefficient_cpu_intensive_fibonacci',
            executor: 'constant-vus',
            vus: 1000,
            duration: '1m',
            startTime: '7m',
        },
    },
};

const BASE_URL = 'http://fastapi:80';
const FIBONACCI_NUMBER = 20;

export function inefficient_fibonacci() {
    http.get(`${BASE_URL}/inefficient_fibonacci/${FIBONACCI_NUMBER}`);
    sleep(0.5);
}

export function efficient_fibonacci() {
    http.get(`${BASE_URL}/efficient_fibonacci/${FIBONACCI_NUMBER}`);
    sleep(0.5);
}

export function memoized_fibonacci() {
    http.get(`${BASE_URL}/memoized_fibonacci/${FIBONACCI_NUMBER}`);
    sleep(0.5);
}

export function inefficient_cpu_intensive_fibonacci() {
    http.get(`${BASE_URL}/inefficient_cpu_intensive_fibonacci/${FIBONACCI_NUMBER}`);
    sleep(0.5);
}