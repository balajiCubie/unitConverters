# Unit Converter

This is a unit converter application built with a Next.js frontend and a Sanity.io backend.

## Project Structure

- `frontend/`: Contains the Next.js application.
- `backend/`: Contains the Sanity.io studio for content management.

## Frontend

The frontend is a Next.js application using Material-UI for the user interface. It fetches data from the Sanity.io backend to display the different unit conversion categories and units.

### Getting Started with the Frontend

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

## Backend

The backend is a Sanity.io studio. It is used to manage the units, categories, and other content for the application. The schema definitions for the different content types can be found in the `backend/schemas` directory.

### Getting Started with the Backend

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Run the Sanity studio:
    ```bash
    npm run dev
    ```
    The Sanity studio will be available at `http://localhost:3333`.
