import numpy as np


def inefficient_fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return inefficient_fibonacci(n - 1) + inefficient_fibonacci(n - 2)


def efficient_fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1

    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b

    return b


def memoized_fibonacci(n, memo):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    elif n not in memo:
        memo[n] = memoized_fibonacci(
            n - 1, memo) + memoized_fibonacci(n - 2, memo)
    return memo[n]


def cpu_intensive_matrix_mult(A, B):
    result = np.zeros((len(A), len(B[0])))

    for i in range(len(A)):
        for j in range(len(B[0])):
            for k in range(len(B)):
                for _ in range(100):
                    result[i][j] += A[i][k] * B[k][j]
            result[i][j] /= 100

    return result


def matrix_pow(M, n):
    if n == 1:
        return M
    elif n % 2 == 0:
        half_pow = matrix_pow(M, n // 2)
        return cpu_intensive_matrix_mult(half_pow, half_pow)
    else:
        return cpu_intensive_matrix_mult(M, matrix_pow(M, n - 1))


def inefficient_cpu_intensive_fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1

    M = np.array([[1, 1], [1, 0]])
    Mn = matrix_pow(M, n - 1)

    return int(Mn[0][0])
