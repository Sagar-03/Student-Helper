// This file exports constants used throughout the application, such as error messages or status codes.

const ERROR_MESSAGES = {
    PRODUCT_NOT_FOUND: 'Product not found',
    USER_NOT_FOUND: 'User not found',
    INVALID_INPUT: 'Invalid input provided',
    UNAUTHORIZED_ACCESS: 'Unauthorized access',
    SERVER_ERROR: 'An unexpected error occurred',
};

const STATUS_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

module.exports = {
    ERROR_MESSAGES,
    STATUS_CODES,
};