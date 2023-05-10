from fastapi import FastAPI, HTTPException
import numpy as np

from func import inefficient_fibonacci, efficient_fibonacci, memoized_fibonacci, inefficient_cpu_intensive_fibonacci

app = FastAPI()


@app.get("/inefficient_fibonacci/{n}")
def get_inefficient_fibonacci(n: int):
    if n < 0:
        raise HTTPException(
            status_code=400, detail="Invalid input: n must be a non-negative integer")
    return {"result": inefficient_fibonacci(n)}


@app.get("/efficient_fibonacci/{n}")
def get_efficient_fibonacci(n: int):
    if n < 0:
        raise HTTPException(
            status_code=400, detail="Invalid input: n must be a non-negative integer")
    return {"result": efficient_fibonacci(n)}


@app.get("/memoized_fibonacci/{n}")
def get_memoized_fibonacci(n: int):
    if n < 0:
        raise HTTPException(
            status_code=400, detail="Invalid input: n must be a non-negative integer")
    memo = {}
    return {"result": memoized_fibonacci(n, memo)}


@app.get("/inefficient_cpu_intensive_fibonacci/{n}")
def get_inefficient_cpu_intensive_fibonacci(n: int):
    if n < 0:
        raise HTTPException(
            status_code=400, detail="Invalid input: n must be a non-negative integer")
    return {"result": inefficient_cpu_intensive_fibonacci(n)}
