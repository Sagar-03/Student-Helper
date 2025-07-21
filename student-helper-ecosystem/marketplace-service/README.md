# Marketplace Service

This is the Marketplace Service of the Student Helper Ecosystem. It is designed to facilitate the buying and selling of products among users.

## Features

- **Product Upload**: Users can upload products for sale, including images.
- **Product Browsing**: Users can view available products that are not yet sold.
- **Purchase Products**: Users can purchase products, marking them as sold.
- **User Dashboard**: Users can view their purchased products and products they have listed for sale.

## Architecture

The Marketplace Service is built using Node.js and Express, and it connects to a shared database that also serves the main Student Helper application and the Night Market service.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB (or any other database specified in the shared configuration)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd marketplace-service
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the database connection in `shared/database/config/database.js`.

### Running the Service

To start the Marketplace Service, run:
```
npm start
```

The service will be available at `http://localhost:PORT`, where `PORT` is defined in your environment variables or defaults to 3000.

### API Endpoints

- `POST /upload`: Upload a new product.
- `GET /available`: Retrieve all available products.
- `PATCH /purchase/:id`: Purchase a product by ID.
- `GET /purchased`: Retrieve all purchased products.
- `GET /mysells`: Retrieve products listed by the user.
- `PATCH /:id`: Update a product by ID.
- `DELETE /:id`: Delete a product by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.