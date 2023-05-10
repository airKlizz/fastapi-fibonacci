# FastAPI Fibonacci Microservice

This project implements a FastAPI microservice that provides different implementations of the Fibonacci sequence calculation. The microservice exposes four endpoints for each implementation:

- Inefficient Recursive Fibonacci
- Efficient Iterative Fibonacci
- Memoized Recursive Fibonacci
- Inefficient CPU-intensive Fibonacci

The main goal of this project is to analyze the performance differences between the various implementations using k6 performance testing and scaphandre.

## Prerequisites

- Docker
- You need docker-compose installed on your machine [doc](https://docs.docker.com.zh.xy2401.com/v17.12/compose/install/)

## Usage

### Running the K6 performance tests under the eye of scaphandre + prometheus + grafana

1. Launch docker-compose with the "docker-compose.yaml" in the folder

```
docker-compose up --build
docker-compose up --build -d (for background exec)
```

2. Head to localhost:3000 and sign with admin / secret

3. Navigate on "Filtered process" and filter on top with "k6"
