#!/bin/bash

# Build and push frontend image
docker build -t your-dockerhub-username/frontend:latest -f frontend/Dockerfile .
docker push your-dockerhub-username/frontend:latest

# Build and push backend image
docker build -t your-dockerhub-username/backend:latest -f backend/Dockerfile .
docker push your-dockerhub-username/backend:latest

