# Makefile to run both backend and frontend in Docker

# Docker Compose command to bring up the services
up:
	@docker-compose up -d

# Build the services
build:
	@docker-compose build

# Stop and remove all running services
down:
	@docker-compose down

# View the logs of the services
logs:
	@docker-compose logs -f

# Restart all services
restart: down up

# Clean up the environment (stop, remove containers, networks, images)
clean:
	@docker-compose down --volumes --rmi all

# Run frontend and backend with a single command
start:
	@docker-compose up -d frontend backend

