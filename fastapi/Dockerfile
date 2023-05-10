FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
RUN apt update && apt upgrade \
    && apt install cpulimit
COPY *.py /app/
EXPOSE 80
ARG CPULIMIT=100
CMD ["/bin/bash", "-c", "cpulimit -f -l $CPULIMIT -- uvicorn main:app --host 0.0.0.0 --port 80"]
