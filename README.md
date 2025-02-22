# NestJS Net Ninja Tutorial

This project is a NestJS application built while following the [Net Ninja NestJS Tutorial](https://www.youtube.com/watch?v=pcX97ZrTE6M&list=PL4cUxeGkcC9g8YFseGdkyj9RH9kVs_cMr). It demonstrates the fundamental concepts of building RESTful APIs using NestJS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone the repository.
2. Install dependencies using pnpm:

   ```sh
   pnpm install
   ```

### Running the Application

To start the application in development mode with live reloading, run:

```sh
pnpm run start:dev
```

For production:

```sh
pnpm run build
pnpm run start:prod
```

## API Endpoints

The application is deployed at the base URL: [https://nestjs-netninja-tutorial.app.honghong.me](https://nestjs-netninja-tutorial.app.honghong.me).

You can try the following endpoints using any HTTP client (e.g., Thunder Client, Postman):

- **GET** `/ninjas`  
  List all ninjas  
  URL: `https://nestjs-netninja-tutorial.app.honghong.me/ninjas`

- **GET** `/ninjas/:id`  
  Get a specific ninja by its ID  
  URL example: `https://nestjs-netninja-tutorial.app.honghong.me/ninjas/1`

- **POST** `/ninjas`  
  Create a new ninja  
  URL: `https://nestjs-netninja-tutorial.app.honghong.me/ninjas`  
  Example JSON body:

  ```json
  {
    "name": "ninja3",
    "weapon": "stars"
  }
  ```

- **PUT** `/ninjas/:id`  
  Update an existing ninja  
  URL example: `https://nestjs-netninja-tutorial.app.honghong.me/ninjas/1`  
  Example JSON body:

  ```json
  {
    "name": "ninja3.1",
    "weapon": "sword"
  }
  ```

- **DELETE** `/ninjas/:id`  
  Delete a ninja by its ID  
  URL example: `https://nestjs-netninja-tutorial.app.honghong.me/ninjas/3`

Feel free to import the Thunder Client collection into your tool to test these endpoints quickly.
