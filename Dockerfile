FROM prom/node-exporter:v1.5.0 as node
FROM python:3.11-slim
WORKDIR /app
COPY --from=node /bin/node_exporter .
COPY requirements.txt /app/requirements.txt
COPY docker-entrypoint /bin/docker-entrypoint
RUN pip install -r requirements.txt
RUN chmod +x /bin/docker-entrypoint
COPY *.py /app/
EXPOSE 80 9100
ENTRYPOINT ["docker-entrypoint"]
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
