import http from 'k6/http';
import { Counter } from 'k6/metrics';

const scenarios = new Counter('scenarios');

export let options = {
    vus: 1000,
    iterations: 20000,
};

export default function () {
    scenarios.add(1, { scenario: "efficient" })
    http.get(`${__ENV.BASE_URL}/efficient_fibonacci/${__ENV.FIBONACCI_NUMBER}`);
}
