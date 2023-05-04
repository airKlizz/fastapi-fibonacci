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
