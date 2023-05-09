import http from 'k6/http';
import { Rate } from 'k6/metrics';

const scenariosRate = new Rate('scenarios');

export let options = {
    vus: 1000,
    duration: '1m',
};

export function setup() {
    scenariosRate.add(false)
}

export default function () {
    scenariosRate.add(true)
    http.get(`${process.env.BASE_URL}/inefficient_fibonacci/${process.env.FIBONACCI_NUMBER}`);
}

export function teardown() {
    scenariosRate.add(false)
}