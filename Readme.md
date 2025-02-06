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


### `make clean`
- **Description:** Cleans up Docker containers, networks, and volumes.
- **Usage:** `make clean`
