import http from 'k6/http';
import { Counter } from 'k6/metrics';

const scenarios = new Counter('scenarios');

export let options = {
    vus: 1000,
    iterations: 20000,
};

export default function () {
    scenarios.add(1, { scenario: "inefficient_cpu_intensive" })
    http.get(`${__ENV.BASE_URL}/inefficient_cpu_intensive_fibonacci/${__ENV.FIBONACCI_NUMBER}`);
}
