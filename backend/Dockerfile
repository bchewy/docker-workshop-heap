# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Set environment variables
# ENV DATABASE_URL='' 


# Copy the requirements file into the container
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose the port your application listens on
EXPOSE 8000

# Define the command to run your application
CMD ["python", "app.py"]