import http from 'k6/http';
import { Counter } from 'k6/metrics';

const scenarios = new Counter('scenarios');

export let options = {
    vus: 1000,
    duration: '1m',
};

export default function () {
    scenarios.add(1, {scenario: "memoized"})
    http.get(`${__ENV.BASE_URL}/memoized_fibonacci/${__ENV.FIBONACCI_NUMBER}`);
}
