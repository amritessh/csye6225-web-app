# CSYE6225 Health Check API

Cloud-native Node.js web application implementing a health check API endpoint using Express, Sequelize, and PostgreSQL following enterprise-standard architecture patterns.

## Technology Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js 5+
- **Database**: PostgreSQL 14+
- **ORM**: Sequelize 6+
- **Module System**: ES Modules

## Project Structure

```
src/
├── server.js              # Simple server startup
├── app.js                 # Express app configuration 
├── config/
│   └── database.js        # Database connection
├── models/
│   ├── index.js           # Model initialization
│   └── HealthCheck.js     # Health check data model
├── controllers/
│   └── healthController.js # HTTP request handling
├── services/
│   └── healthService.js   # Business logic
└── routes/
    └── health.js          # Health route definitions
```

## Setup Instructions

### 1. Prerequisites
- Node.js 18+ installed
- PostgreSQL 14+ installed and running

### 2. Database Setup (Ubuntu 24.04 LTS)
```bash
# Install PostgreSQL
sudo apt update && sudo apt install postgresql postgresql-contrib

# Start PostgreSQL
sudo systemctl start postgresql && sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql
```

In PostgreSQL shell:
```sql
CREATE DATABASE healthcheck_app;
CREATE USER your_username WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE healthcheck_app TO your_username;
\q
```

### 3. Application Setup
```bash
# Install dependencies
npm install

# Copy environment template and configure
cp .env.example .env
# Edit .env with your database credentials

# Run application
npm run dev  # Development mode
npm start    # Production mode
```

### 4. Environment Configuration
Edit `.env` file:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=healthcheck_app
DB_USER=your_username
DB_PASSWORD=your_password
PORT=8080
```

## API Documentation

### Health Check Endpoint

**Endpoint**: `GET /healthz`

**Requirements**:
- ✅ GET method only (405 for other methods)
- ✅ No request body (400 if body present)  
- ✅ No response body
- ✅ Inserts record into health_checks table
- ✅ Proper HTTP status codes and headers

**Response Codes**:
- `200 OK` - Health check successful
- `400 Bad Request` - Request contains body  
- `405 Method Not Allowed` - Non-GET method
- `503 Service Unavailable` - Database failure

**Response Headers**:
- `Cache-Control: no-cache, no-store, must-revalidate`
- `Pragma: no-cache`
- `X-Content-Type-Options: nosniff`

### Example Usage

```bash
# Success
curl -vvvv http://localhost:8080/healthz
# Expected: HTTP/1.1 200 OK

# Method not allowed  
curl -vvvv -X POST http://localhost:8080/healthz
# Expected: HTTP/1.1 405 Method Not Allowed

# Bad request (with body)
curl -vvvv -d '{"test":"data"}' -H "Content-Type: application/json" http://localhost:8080/healthz
# Expected: HTTP/1.1 400 Bad Request
```

## Database Schema

### health_checks Table
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| check_id | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique identifier |
| check_datetime | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | UTC timestamp |

**Features**:
- ✅ Automatic schema creation on startup
- ✅ UTC timezone handling
- ✅ Performance index on check_datetime
- ✅ Zero manual setup required

## Architecture Features

### ✅ **Enterprise Route Organization**:
- **Route aggregation pattern** - Centralized route mounting via `routes/index.js`
- **Scalable structure** - Easy to add future endpoints
- **Clean separation** - Route definitions vs. route mounting
- **Industry standard** - Matches enterprise patterns

### ✅ **Clean & Simple Architecture**:
- **Performance monitoring** - Times database operations  
- **Structured error handling** - Comprehensive error logging
- **Single responsibility** - Each file has clear purpose
- **Direct API usage** - Uses Sequelize methods efficiently
- **Configurable** - Database settings via environment variables

### ✅ **Modern ES Module Architecture**:
- Import/export syntax throughout
- Industry-standard project structure
- Separation of concerns (routes → controllers → services → models)
- Clean dependency management

### ✅ **Assignment-Focused Features**:
- Automatic schema bootstrap
- Simple configuration
- Always-on performance monitoring
- Production-ready error handling

## Testing

```bash
# Start application
npm run dev

# Test health endpoint
curl -v http://localhost:8080/healthz

# Test database resilience (stop/start PostgreSQL)
sudo systemctl stop postgresql
curl -v http://localhost:8080/healthz  # Should return 503
sudo systemctl start postgresql
curl -v http://localhost:8080/healthz  # Should return 200

# Test method validation
curl -X POST http://localhost:8080/healthz  # Should return 405

# Test body validation
curl -d '{"test":"data"}' -H "Content-Type: application/json" http://localhost:8080/healthz  # Should return 400
```

## Assignment Compliance

✅ **All Requirements Met**:
- Cloud-native architecture on Ubuntu 24.04 LTS
- Node.js + Express + PostgreSQL + Sequelize
- GET /healthz endpoint with proper behavior
- Automatic database schema bootstrap
- Environment-based configuration
- Industry-standard code structure

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# Edit .env with your PostgreSQL credentials

# 3. Run application  
npm run dev

# 4. Test endpoint
curl -v http://localhost:8080/healthz
```

## What Makes This Implementation Professional

### **Enterprise Patterns**
1. **Route Aggregation**: Centralized route management via `routes/index.js`
2. **Separation of Concerns**: Clear layers (routes → controllers → services → models)
3. **Performance Monitoring**: Database operation timing and logging
4. **Error Handling**: Structured error logging with stack traces


### **Assignment-Ready Features**
1. **No Over-Engineering**: Focused on health check requirements
2. **Always Works**: No conditional behavior based on environments
3. **Easy to Demo**: Clear logging and error messages
4. **Simple Configuration**: Minimal environment variables
5. **Clean Code**: Readable, maintainable, professional structure

### **Production-Ready Qualities**
1. **Security**: No credentials in code, proper .gitignore
2. **Scalability**: Easy to add new endpoints via route aggregation
3. **Maintainability**: Single responsibility per file
4. **Monitoring**: Performance metrics and comprehensive logging
5. **Reliability**: Database connection pooling and error recovery

