# Employee Management REST API

This REST API service provides CRUD (Create, Read, Update, Delete) operations for an Employee table. It is implemented in Node.js using Electron.js and Mongoose with Express. This project was developed as an assignment for a university course.

## Features

- Create new employee records
- Retrieve employee records
- Update existing employee records
- Delete employee records

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Electron.js](https://www.electronjs.org/)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/theFutureGuy/CRUD-Operations.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd employee-api
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the application:**

    ```bash
    npm start
    ```

## Usage

The application will be accessible at `http://localhost:3000`. Use your preferred API client (e.g., Postman, Insomnia) to interact with the API endpoints.

## Endpoints

- **Create Employee Record:**

    ```http
    POST /create
    ```

    Request Body:

    ```json
    {
      "name": "John Doe",
      "position": "Software Engineer",
      "salary": 80000
    }
    ```

- **Retrieve Employee Records:**

    ```http
    GET /read
    ```

- **Update Employee Record:**

    ```http
    PUT /update/:id
    ```

    Request Body:

    ```json
    {
      "salary": 90000
    }
    ```

- **Delete Employee Record:**

    ```http
    DELETE /delete/:id
    ```


## License

This project is licensed under the [MIT License](LICENSE).
``
