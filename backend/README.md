# React Native Wallet Backend API

## Overview
This is the backend API for the React Native Wallet application, providing secure transaction management and user authentication services.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB or PostgreSQL

### Installation
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory:
```
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### Running the Server
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Wallet
- `GET /api/wallet/balance` - Get wallet balance
- `POST /api/wallet/transaction` - Create transaction
- `GET /api/wallet/transactions` - Get transaction history

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Error Handling
All errors return appropriate HTTP status codes with descriptive messages.

## Security
- JWT authentication required for protected routes
- Password hashing with bcrypt
- CORS enabled for authorized origins

## Testing
```bash
npm test
```

## Contributing
Please follow the existing code style and add tests for new features.

## License
MIT