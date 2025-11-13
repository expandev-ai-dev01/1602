# Agenda de Contatos - Backend API

## Description
Backend API for secure contact management system with centralized database storage.

## Features
- Complete contact management (CRUD operations)
- Secure database storage
- RESTful API architecture
- Multi-tenancy support
- TypeScript implementation

## Technology Stack
- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: Microsoft SQL Server
- **Validation**: Zod

## Project Structure
```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
├── instances/        # Service instances
├── config/           # Configuration
└── server.ts         # Application entry point
```

## Getting Started

### Prerequisites
- Node.js 18+
- SQL Server instance
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```
4. Update database credentials in `.env`

### Development
Run the development server:
```bash
npm run dev
```

### Build
Build for production:
```bash
npm run build
```

### Production
Start production server:
```bash
npm start
```

## API Documentation

### Base URL
- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Endpoints
Endpoints will be documented here as features are implemented.

### Health Check
```
GET /health
```
Returns API health status.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| DB_SERVER | Database server | localhost |
| DB_PORT | Database port | 1433 |
| DB_USER | Database user | sa |
| DB_PASSWORD | Database password | - |
| DB_NAME | Database name | agenda_contatos |

## Development Guidelines

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Use 2-space indentation
- Maximum line length: 120 characters

### Naming Conventions
- Files: camelCase
- Classes: PascalCase
- Functions: camelCase
- Constants: UPPER_SNAKE_CASE

### API Routes
- External (public): `/api/v1/external/`
- Internal (authenticated): `/api/v1/internal/`

## License
ISC