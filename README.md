# Google Forms Clone Backend

## Description
This is the backend server for a Google Forms clone, built with TypeScript and Express. The server uses a JSON file as a database to store form submissions.

## Endpoints
- **GET /ping**: Returns `true`.
- **POST /forms/submit**: Submits a new form.
  - Body parameters: `name`, `email`, `phone`, `github_link`, `stopwatch_time`
- **GET /forms/read**: Reads a form submission by index.
  - Query parameters: `index` (0-based index)

## Setup
1. Clone the repository:
   ```sh
   git clone [<repository-url>](https://github.com/Arnevgarg/Google-forms-Clone-Backend.git)
   cd google-forms-clone-backend
2. Install dependencies:
   ```sh
   npm install
3. Compile TypeScript code:
   ```sh
   npx tsc
4. Run the server:
   ```sh
   node dist/app.js
5. The server will be running on http://localhost:3000.
