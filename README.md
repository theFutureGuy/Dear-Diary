# Dear Diary - A Digital Journaling Web Application

Dear Diary is a digitalized version of a diary where users can log in to their profiles, create daily journal entries, and view them on their profiles. Each journal entry is private by default but can be shared using a unique link. The application also provides an API for interaction, allowing users to perform various operations programmatically.

## Getting Started

To get started with Dear Diary, follow these steps:

1. Clone the project's source code to your local development machine.
2. Run `npm install` to install dependencies.
3. Start the application by running `nodemon app.js`.

## Technologies Used

Dear Diary is built using the following technologies and frameworks:

- Node.js
- Express.js
- EJS (Embedded JavaScript) for templating
- Mongoose for MongoDB object modeling

## Features

### Authentication and User Handling

- Users can sign up for an account or log in if they already have one.
- Password reset functionality is implemented with email notification and confirmation.

### Journal Entries

- Users can create, read, update, and delete journal entries.
- Journal entries are private by default but can be shared via a unique link.
- Each user has their own profile page where they can view their journal entries.

### API Endpoints

- `/auth`: Handles authentication, including login and registration.
- `/profile`: Allows users to create and update their profile information.
- `/articles`: Provides CRUD operations for journal entries.

## API Endpoints

- `/login`: Handles user login.
- `/signup`: Handles user registration.
- `/journals`: Manages journal entries, including creation, deletion, and editing.
- `/profile`: Handles user profile information.
- `/password-reset`: Allows users to reset their passwords.
- `/shareable-link`: Generates a shareable link for a specific journal entry.

## Usage

### Web Interface

Users can interact with the application through the web interface by logging in, creating journal entries, and managing their profiles.

### API

Developers can interact with Dear Diary programmatically using its API endpoints. This allows for integration with other applications or automation of tasks.

## Contributing

Contributions to Dear Diary are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

## License

Dear Diary is licensed under the MIT License. See the LICENSE file for more information.


