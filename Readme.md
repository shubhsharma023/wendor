# Makefile Commands

This Makefile is used to build, run, and manage Docker containers for both the frontend and backend services. Below is a list of available commands:

## Commands:

### `make all`
- **Description:** Builds and runs the frontend and backend Docker containers.
- **Usage:** `make all`

### `make build`
- **Description:** Builds the Docker images for both the frontend and backend.
- **Usage:** `make build`

### `make up`
- **Description:** Starts the frontend and backend Docker containers in detached mode.
- **Usage:** `make up`

### `make logs`
- **Description:** Shows the logs for both the frontend and backend services.
- **Usage:** `make logs`

### `make down`
- **Description:** Stops and removes the frontend and backend containers.
- **Usage:** `make down`

### `make restart`
- **Description:** Stops, removes, rebuilds, and restarts the frontend and backend containers.
- **Usage:** `make restart`

### `make clean`
- **Description:** Cleans up Docker containers, networks, and volumes.
- **Usage:** `make clean`

---

## Usage Example:

To start the application, use the following command:

```bash
make all
