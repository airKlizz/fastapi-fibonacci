import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 10 },
        { duration: '1m', target: 50 },
        { duration: '30s', target: 10 },
        { duration: '1m', target: 0 },

        { duration: '30s', target: 10 },
        { duration: '1m', target: 50 },
        { duration: '30s', target: 10 },
        { duration: '1m', target: 0 },

        { duration: '30s', target: 10 },
        { duration: '1m', target: 50 },
        { duration: '30s', target: 10 },
        { duration: '1m', target: 0 },

        { duration: '30s', target: 10 },
        { duration: '1m', target: 50 },
        { duration: '30s', target: 10 },
    ],
};

export default function () {
    const BASE_URL = 'http://127.0.0.1:4000';
    const FIBONACCI_NUMBER = 20;
    const stage = __VU * 3 + __ITER;

    if (stage % 12 < 3) {
        http.get(`${BASE_URL}/inefficient_fibonacci/${FIBONACCI_NUMBER}`);
    } else if (stage % 12 < 6) {
        http.get(`${BASE_URL}/efficient_fibonacci/${FIBONACCI_NUMBER}`);
    } else if (stage % 12 < 9) {
        http.get(`${BASE_URL}/memoized_fibonacci/${FIBONACCI_NUMBER}`);
    } else {
        http.get(`${BASE_URL}/inefficient_cpu_intensive_fibonacci/${FIBONACCI_NUMBER}`);
    }
}
