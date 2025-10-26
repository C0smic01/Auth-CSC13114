# User Registration App

Full-stack user registration system with NestJS backend and React frontend.

## Prerequisites

- Node.js 18+
- PostgreSQL

## Installation

### 1. Install PostgreSQL

**Windows:** Download from https://www.postgresql.org/download/windows/

**Linux:**
```bash
sudo apt install postgresql
sudo systemctl start postgresql
```

### 2. Create Database

```bash
psql postgres
CREATE DATABASE user_registration;
\q
```

### 3. Setup Backend

```bash
cd backend
npm install
```

Edit `backend/.env` if needed:
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=user_registration
PORT=3001
```

### 4. Setup Frontend

```bash
cd frontend
npm install
```

## Running the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```
Backend runs on http://localhost:3001

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:5173

## API Endpoints

`POST /user/register` - Register new user

Request:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```