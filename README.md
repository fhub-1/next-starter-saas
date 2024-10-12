# Next.js SaaS Starter Template

This repository provides a **Next.js SaaS Starter Template** designed for quickly building SaaS applications. It integrates **NextAuth** for authentication, **Drizzle ORM** for database management, and **PostgreSQL** with **Docker** for easy database setup and scalability.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Next.js** for server-side rendering, static generation, and routing.
- **NextAuth** for handling authentication (OAuth, credentials, etc.).
- **TypeScript** for type safety and better developer experience.
- **Drizzle ORM** for interacting with PostgreSQL, providing a lightweight and type-safe way to manage your database.
- **PostgreSQL** for relational database management.
- **Docker** setup for seamless local development and easy deployment.
- Scalable, modular architecture to help you get started quickly on SaaS development.

## Technologies

- **[Next.js](https://nextjs.org/)** - React framework for building production-grade web applications.
- **[NextAuth](https://next-auth.js.org/)** - Authentication for Next.js apps.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset of JavaScript that provides static typing.
- **[Drizzle ORM](https://orm.drizzle.team/)** - Lightweight TypeScript ORM for SQL databases.
- **[PostgreSQL](https://www.postgresql.org/)** - Open-source relational database.
- **[Docker](https://www.docker.com/)** - Platform for developing, shipping, and running applications in containers.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js** v16 or higher
- **Docker** for containerized database setup
- **Git** for version control

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/fhub-1/next-starter-saas.git
    cd next-starter-saas
    ```

2. **Install dependencies:**

    Run the following command to install all required packages:

    ```bash
    npm install
    ```

3. **Start PostgreSQL with Docker:**

    Run the following command to spin up a PostgreSQL container using Docker:

    ```bash
    docker-compose up -d
    ```

4. **Run database migrations:**

    Use Drizzle ORM to run migrations:

    ```bash
    npm run migrate
    ```

5. **Set up environment variables:**

    Copy `.env.example` to `.env` and configure the necessary variables:

    ```bash
    cp .env.example .env
    ```

    Make sure to set your PostgreSQL database URL, NextAuth settings, and other environment-specific variables.

6. **Run the development server:**

    Finally, start the Next.js development server:

    ```bash
    npm run dev
    ```

    The app will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

The following environment variables are required to configure the application:

- `DATABASE_URL` - PostgreSQL connection string.
- `NEXTAUTH_URL` - The URL of your Next.js application.
- `NEXTAUTH_SECRET` - Secret used for signing tokens in NextAuth.
- Other NextAuth providers (if used) will require additional environment variables.

## Development

After the initial setup, you can start the development server with:

```bash
npm run dev
