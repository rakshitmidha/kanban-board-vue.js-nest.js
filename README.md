# Kanban Board

This project sets up a Kanban board application using Vue.js for the client and NestJS for the server, both running in Docker containers. Docker Compose is used to manage the multi-container environment.

## Prerequisites

*   [Docker](https://www.docker.com/get-started)
*   [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

### 1\. Clone the repository

First, clone this repository to your local machine:

```
git clone kanban-board-vue.js-nest.js
cd kanban-board-vue.js-nest.js
```

### 2\. Build and start the services

Run the following command to build and start the Docker containers using Docker Compose:

```
docker-compose up --build
```

This command will:

*   Build the Docker images for both the client and server services.
*   Start the containers for the client and server.
*   Expose the client on `http://localhost:4173` and the server on `http://localhost:3000`.

### 3\. Access the Application

Once the containers are up and running, you can access the following:

*   **Client**: [http://localhost:4173](http://localhost:5173) (Vue.js frontend)
*   **Server**: [http://localhost:3000](http://localhost:3000) (NestJS backend)

### 4\. Stopping the Services

To stop the running services, use the following command:

```
docker-compose down
```

This will stop and remove the containers.

### 5\. Rebuilding the Services

If you make changes to the Dockerfile or the source code, you may need to rebuild the services. Use the following command to rebuild and restart the containers:

```
docker-compose up --build
```

This command will rebuild the images and restart the containers with the latest changes.