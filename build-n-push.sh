#!/bin/bash

# Build and push frontend image
docker build -t pleasechange_thisibeg/frontend:latest -f frontend/Dockerfile .
docker push pleasechange_thisibeg/frontend:latest

# Build and push backend image
docker build -t pleasechange_thisibeg/backend:latest -f backend/Dockerfile .
docker push pleasechange_thisibeg/backend:latest
