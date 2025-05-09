# Express.js Server

A simple Express.js server with Docker support and environment configuration.

## Features

- Express.js REST API
- Docker containerization
- Environment variable configuration
- Basic health check endpoint

## Prerequisites

- Node.js 24
- pnpm
- Docker (optional)

## Setup

1. Clone the repository
2. Copy the environment file:

```sh
cp .env.example .env
```

3. Set the necessary values in `.env`

## Development

Run the server locally:

```sh
pnpm install
pnpm dev
```

## Docker

Build and run with Docker:

```sh
# Build image
docker build -t express-server-ghcr:<VERSION> .

# Run container
docker run -d -p <HOST_PORT>:<DOCKER_PORT> --env-file .env express-server-ghcr:<VERSION> .
```

## API Endpoints

- `GET /`: Health check endpoint
  - Returns: `{ status: true, msg: "Server is up and running!" }`

## Project Structure

```
├── config.js        # Configuration settings
├── index.js         # Main application entry
├── .env.example     # Example environment variables
├── .gitignore       # Git ignore rules
├── Dockerfile       # Docker configuration
├── .Dockerignore    # Specifying which files to not copy in Docker image
└── package.json     # Project metadata and dependencies
```
