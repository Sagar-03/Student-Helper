# Night Market Service

This is the Night Market Service, part of the Student Helper Ecosystem. It is designed to provide a platform for users to buy and sell products in a night market setting.

## Features

- **Product Management**: Users can upload, view, and manage products available in the night market.
- **User Interaction**: Users can purchase products and view their purchase history.
- **Shared Database**: This service shares the same database with the Student Helper and Marketplace services, ensuring data consistency across the ecosystem.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (or your preferred database)
- Docker (for containerized deployment)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nightmarket-service
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Configuration

Update the database configuration in `shared/database/config/database.js` to connect to your MongoDB instance.

### Running the Service

To start the Night Market Service, run:
```
npm start
```

### API Endpoints

Refer to the `src/routes` directory for a list of available API endpoints and their usage.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.