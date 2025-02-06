# Urban Company Booking System

This repository contains a full-stack application for managing bookings with carpenters. It includes a **React.js frontend** and a **NestJS backend**, all containerized using **Docker** and orchestrated with **Docker Compose**.

## Project Structure

The project is organized into two main directories:

- **client**: Contains the React.js frontend.
- **server**: Contains the NestJS backend.

Additionally, **Docker Compose** is used to manage the environment, and a `Makefile` is included for easy management of Docker commands.

## Prerequisites

To get started, make sure you have the following tools installed on your system:

- **Docker**: Required for containerizing the frontend and backend.
- **Docker Compose**: To manage multi-container Docker applications.
- **Make**: A build automation tool for managing commands.

# Makefile Commands

This `Makefile` provides a set of commands to manage your Dockerized frontend, backend, and database services. The following commands are available:

## Commands

### `make up`
- Starts all services in the background (frontend, backend, and database).
- Equivalent to running `docker-compose up -d`.

### `make build`
- Builds Docker images for all services (frontend, backend, and database).
- Equivalent to running `docker-compose build`.

### `make down`
- Stops and removes all running services.
- Equivalent to running `docker-compose down`.

### `make logs`
- Tails the logs of all running services.
- Equivalent to running `docker-compose logs -f`.

### `make restart`
- Stops all services and then restarts them.
- Equivalent to running `docker-compose down && docker-compose up -d`.

### `make clean`
- Stops and removes all containers, volumes, and images associated with the services.
- Equivalent to running `docker-compose down --volumes --rmi all`.

### `make start`
- Starts both frontend and backend services with a single command.
- Equivalent to running `docker-compose up -d frontend backend`.


