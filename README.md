# FastAPI Fibonacci Microservice

This project implements a FastAPI microservice that provides different implementations of the Fibonacci sequence calculation. The microservice exposes four endpoints for each implementation:

- Inefficient Recursive Fibonacci
- Efficient Iterative Fibonacci
- Memoized Recursive Fibonacci
- Inefficient CPU-intensive Fibonacci

The main goal of this project is to analyze the performance differences between the various implementations using k6 performance testing.

## Prerequisites

- Docker
- k6 (for performance testing)

## Usage

### Running the FastAPI server with Docker

1. Build the Docker image:

   ```
   docker build -t fastapi-fibonacci .
   ```

2. Run the Docker container:

   ```
   docker run -p 4000:80 fastapi-fibonacci
   ```

The FastAPI application should now be running inside a Docker container. You can access the application at `http://127.0.0.1:4000`, and the documentation at `http://127.0.0.1:4000/docs` or `http://127.0.0.1:4000/redoc`.

### Running the k6 performance tests

1. Install k6 following the instructions on the official k6 website: <https://k6.io/docs/getting-started/installation/>

2. Start the performance tests:

   ```
   k6 run stress_test.js
   ```

### Running the K6 performance tests under the eye of scaphandre + prometheus + grafana

> You need docker-compose installed on your machine [doc](https://docs.docker.com.zh.xy2401.com/v17.12/compose/install/)

1. Go into docker-compose folder

```
cd ./docker-compose
```

2. Launch docker-compose with the "docker-compose.yaml" in the folder

```
docker-compose up --build
docker-compose up --build -d (for background exec)
```

3. Head to localhost:3000 and sign with admin / secret

4. Navigate on "Filtered process" and filter on top with "k6"

