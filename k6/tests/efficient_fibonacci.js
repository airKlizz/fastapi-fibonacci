import http from 'k6/http';
import { Counter } from 'k6/metrics';

const scenarios = new Counter('scenarios');

export let options = {
    vus: __ENV.VUS,
    iterations: __ENV.ITERATIONS,
};

export default function () {
    scenarios.add(1, { scenario: "efficient" })
    http.get(`${__ENV.BASE_URL}/efficient_fibonacci/${__ENV.FIBONACCI_NUMBER}`);
}
