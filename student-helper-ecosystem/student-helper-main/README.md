# Student Helper Ecosystem

## Overview
The Student Helper Ecosystem is a comprehensive platform designed to assist students in various aspects of their academic and social lives. This ecosystem includes multiple services, each serving a specific purpose while sharing a common database.

## Services
1. **Student Helper Main**
   - The core application that provides essential functionalities for students.
   - Contains controllers, routes, and middleware for handling requests and business logic.

2. **Marketplace Service**
   - A dedicated service for facilitating the buying and selling of products among students.
   - Includes its own set of controllers, routes, and middleware.

3. **Night Market Service**
   - A service that operates similarly to the Marketplace but focuses on unique offerings available during specific hours.
   - Also contains its own controllers, routes, and middleware.

## Shared Components
- **Database Models**
  - `Product.js`: Defines the schema and methods for product-related operations.
  - `User.js`: Defines the schema and methods for user-related operations.
  - `index.js`: Exports the models for easy access.

- **Database Configuration**
  - `database.js`: Contains the configuration settings for connecting to the database.

- **Utilities**
  - `constants.js`: Exports constants used throughout the application, such as error messages and status codes.

## Getting Started
To get started with the Student Helper Ecosystem, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd student-helper-ecosystem
   ```

2. **Install Dependencies**
   For each service (student-helper-main, marketplace-service, nightmarket-service), navigate to the respective directory and run:
   ```bash
   npm install
   ```

3. **Set Up the Database**
   Ensure that your database is set up and configured correctly in the `shared/database/config/database.js` file.

4. **Run the Services**
   You can use Docker Compose to run all services together:
   ```bash
   docker-compose up
   ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.