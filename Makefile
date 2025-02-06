# Define variables for Docker image names and container names
BACKEND_IMAGE=backend-image
FRONTEND_IMAGE=frontend-image
NETWORK_NAME=app-network

# Default target to build and run the application
.PHONY: all
all: build up

# Build the backend and frontend Docker images
.PHONY: build
build:
	@echo "Building Backend Docker image..."
	docker-compose build backend
	@echo "Building Frontend Docker image..."
	docker-compose build frontend

# Bring up the application using Docker Compose
.PHONY: up
up:
	@echo "Starting up the containers..."
	docker-compose up -d

# View logs for backend and frontend
.PHONY: logs
logs:
	@echo "Viewing Backend Logs..."
	docker-compose logs backend
	@echo "Viewing Frontend Logs..."
	docker-compose logs frontend

# Stop the application
.PHONY: down
down:
	@echo "Stopping and removing the containers..."
	docker-compose down

# Rebuild the Docker images and start the containers
.PHONY: restart
restart:
	@echo "Restarting Backend and Frontend..."
	docker-compose down
	docker-compose up --build -d

# Clean up all containers and volumes
.PHONY: clean
clean:
	@echo "Cleaning up Docker containers, networks, and volumes..."
	docker-compose down --volumes --remove-orphans
