# TM_EXPRESS_JS_HM

It is a simple Express.js server application for handling user, student, and article-related operations. This README provides an overview of the application's functionality and instructions on how to run it.

## Getting Started

Follow these steps to get the application up and running:

```bash
npm install
npm run start
````

# Routers

## Users

- `GET /users/` - Retrieve a list of all users.
- `GET /users/:email` - Retrieve a specific user by their email.
- `POST /users/` - Add a new user. Required parameters: 'firstName', 'lastName', 'email', 'password', 'age', 'address', 'tags'.
- `PATCH /users/:email` - Update a user's data.
- `DELETE /users/:email` - Delete a user by email.

## Students

- `GET /students/` - Retrieve students' statistics.
- `GET /students/worst_score` - Find the student with the worst homework score.

## Articles

- `GET /articles` - Retrieve articles.
- `POST /articles` - Add a new article. Required parameters: 'name', 'description', 'type', 'tags'.
- `PATCH /articles/:name` - Update an article.
