# Student Management System (ASP.NET Core API + Angular)

A full-stack **Student Management System** built using **ASP.NET Core Web API** for the backend and **Angular** for the frontend.  
The application supports **JWT-based authentication**, **user registration/login**, and **CRUD operations on students** with data stored in a database.

---

## Features

### Backend – ASP.NET Core Web API
- Student CRUD operations
  - Create Student
  - View Students
  - Update Student
  - Delete Student
- Student entity fields
  - `Id`
  - `Name`
  - `Class`
  - `Section`
- User authentication using **JWT (JSON Web Token)**
- Secure API endpoints with `[Authorize]`
- Data persistence using a relational database
- Entity Framework Core for ORM

### Frontend – Angular Application
- User Registration
- User Login
- JWT token-based authentication
- View list of students after login
- Add, edit, and delete students
- Protected routes using Auth Guard
- Responsive UI

---

## Tech Stack

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server / Any Relational Database
- JWT Authentication

### Frontend
- Angular (Standalone Components)
- Angular Router
- HttpClient
- FormsModule

---

## 📂 Project Structure

### Backend (StudentApi)
```
StudentApi
│── Controllers
│ ├── AuthController.cs
│ ├── StudentsController.cs
│── Models
│ ├── User.cs
│ ├── Student.cs
│── Data
│ ├── AppDbContext.cs
│── DTOs
│ ├── LoginDto.cs
│ ├── RegisterDto.cs
│── Program.cs
│── appsettings.json
```


### Frontend (Angular)
```
src
│── app
│ ├── components
│ │ ├── login
│ │ ├── register
│ │ ├── students
│ │ ├── home
│ ├── services
│ │ ├── auth.service.ts
│ │ ├── student.service.ts
```
### Authentication Flow
--User registers using the Angular application
--User logs in with email and password
--Backend returns a JWT token
--Token is stored in browser (localStorage)
--Token is sent in Authorization header for secured API calls
--Only authenticated users can access student CRUD operations

## API Endpoints

### Authentication

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login and get JWT |

### Students

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/api/students`      | Get all students  |
| GET    | `/api/students/{id}` | Get student by ID |
| POST   | `/api/students`      | Add student       |
| PUT    | `/api/students/{id}` | Update student    |
| DELETE | `/api/students/{id}` | Delete student    |
