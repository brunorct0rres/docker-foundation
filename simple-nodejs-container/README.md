# Simple Node.js Container

A basic Docker project demonstrating containerization of a Node.js Express application with database connectivity simulation.

## Project Overview

This project is a simple web server built with **Node.js** and **Express.js** that demonstrates Docker fundamentals. The application includes a simulated database connection as part of a Docker course learning exercise.

### What the Application Does

- **Web Server**: Runs an Express.js server on port 3000
- **Database Connection**: Simulates connecting to a database with a 1-second delay before the server starts
- **HTTP Endpoint**: Provides a simple GET route at `/` that returns an HTML greeting message
- **Container Ready**: Configured to run completely within a Docker container with all dependencies isolated

## Project Structure

    ```
    simple-nodejs-container/
    ├── app.mjs           # Main Express application file
    ├── helpers.mjs       # Database connection helper function
    ├── package.json      # Node.js dependencies and metadata
    ├── Dockerfile        # Container configuration
    └── README.md         # This file
    ```

## File Descriptions

### `app.mjs`

The main application entry point. It:

- Imports Express.js framework
- Imports the database connection helper
- Defines a GET route at `/` that responds with "Hi, there!"
- Connects to the database before starting the server
- Listens on port 3000

### `helpers.mjs`

Contains the database connection simulation. It:

- Exports a `connectToDatabase()` function
- Returns a Promise that resolves after 1 second
- Simulates real-world database initialization delay

### `package.json`

Node.js project configuration file containing:

- Project metadata (version, author, license)
- Dependencies: `express` (v4.17.1 or higher)

### `Dockerfile`

Container configuration file that:

1. **Base Image**: Uses Node.js version 14 (`node:14`)
2. **Working Directory**: Sets `/app` as the container's working directory
3. **Copy Dependencies**: Copies `package.json` to the container
4. **Install Dependencies**: Runs `npm install` to install Express.js
5. **Copy Source Code**: Copies all application files to the container
6. **Expose Port**: Exposes port 3000 for external access
7. **Start Command**: Runs `node app.mjs` to start the server

## Docker Commands

### Build the Container Image

Creates a Docker image from the Dockerfile:

    ```bash
    docker build .
    ```

This command:

- Reads the Dockerfile in the current directory
- Executes all instructions step by step
- Creates a layered image with your application and dependencies
- Returns an image ID (example: `df5472502284437467e63247b945fdd1ee7a699b9724951b64c80e371d146d37`)

### Run the Container

Starts a container from the built image with port mapping:

    ```bash
    docker run -p 3000:3000 df5472502284437467e63247b945fdd1ee7a699b9724951b64c80e371d146d37
    ```

**Command Breakdown:**

- `docker run`: Creates and starts a new container
- `-p 3000:3000`: Maps port 3000 from the container to port 3000 on your host machine
  - First `3000`: Port on your local machine (host)
  - Second `3000`: Port inside the container
- `df5472502284437467e63247b945fdd1ee7a699b9724951b64c80e371d146d37`: The image ID to run

### Access the Application

Once the container is running, open your browser and visit:

    ```
    http://localhost:3000
    ```

You should see the greeting message: **"Hi, there!"**

## Key Docker Concepts Demonstrated

1. **Base Image**: Using an official Node.js image as the foundation
2. **Working Directory**: Setting a proper directory structure inside the container
3. **Layer Caching**: Copying `package.json` separately before source code for optimization
4. **Dependency Management**: Installing dependencies within the container
5. **Port Mapping**: Exposing and mapping ports between container and host
6. **Image ID**: Using the unique identifier to reference container images
7. **Containerization**: Isolating the entire application environment

## Docker Workflow Summary

    ```
    1. Write Dockerfile → 2. Build Image → 3. Run Container → 4. Access Application
    ```

- **Dockerfile** defines how to build the image
- **docker build** creates the image (produces an image ID)
- **docker run** starts a container from the image
- The container runs independently with all dependencies included

## Requirements

- Docker installed on your system
- No other dependencies needed locally (everything is containerized!)

## Learning Outcomes

This project teaches Docker fundamentals:

- How to containerize a Node.js application
- How Dockerfiles work and what each instruction does
- How to build Docker images
- How to map ports for container networking
- The benefits of containerization: consistency across environments and simplified deployment

---

**Course**: Docker Fundamentals  
**Framework**: Express.js  
**Runtime**: Node.js 14
