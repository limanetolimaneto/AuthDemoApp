# AuthDemoApp

A concise example that demonstrates my coding style: clean, well-structured, and focused on clarity. This project shows how I typically organize the initial setup of a web application using **Laravel**, **React**, and **Tailwind**, including authentication and component structure.

---

![MIT License](https://img.shields.io/badge/license-MIT-green)
![Laravel](https://img.shields.io/badge/backend-Laravel-red)
![React](https://img.shields.io/badge/frontend-React-blue)
![MySQL](https://img.shields.io/badge/database-MySQL-yellow)

---

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

---

## Technologies

- **Frontend:** React.js, Tailwind CSS, React Router
- **Backend:** Laravel 10, Sanctum for API authentication
- **Others:** Axios / fetch for API calls, JSON for data handling

---

## Features

- User registration and login
- Authentication with API tokens (Laravel Sanctum)
- Responsive design with Tailwind CSS
- Error handling with user-friendly messages
- Layout components for consistent header, footer, and content
- Context API for managing auth state across React components

---

## Project Structure
```
AuthDemoApp/
│
├─ backend/ # Laravel backend
│ ├─ app/
│ │ └─ Http/Controllers/AuthController.php
│ ├─ routes/api.php
│ └─ ...
│
├─ frontend/ # React frontend
│ ├─ src/
│ │ ├─ components/
│ │ │ ├─ Layout.jsx
│ │ │ ├─ Header.jsx
│ │ │ ├─ Footer.jsx
│ │ │ ├─ Home.jsx
│ │ │ └─ ErrorMessage.jsx
│ │ ├─ pages/
│ │ │ ├─ Login.jsx
│ │ │ └─ Register.jsx
│ │ ├─ context/
│ │ │ └─ AuthContext.jsx
│ │ └─ App.jsx
│ └─ ...
│
└─ README.md
```

---

## Installation

### Backend (Laravel)

1. Clone the repository:  
```
git clone https://github.com/yourusername/AuthDemoApp.git
```
2. Navigate to backend folder:
```
cd AuthDemoApp/backend
```
3. Install dependencies:
```
composer install
```
4. Set up environment file:
```
cp .env.example .env
```
5. Generate application key:
```
php artisan key:generate
```
6. Run migrations:
```
php artisan migrate
```
7. Start the Laravel server:
```
php artisan serve
```
### Frontend (React)

1. Navigate to frontend folder:
```
cd AuthDemoApp/frontend
```
2. Install dependencies:
```
npm install
```
3. Start development server:
```
npm run dev
```
4. Open the application in your browser:
```
http://localhost:5173/
```
---

## Usage

- Go to Register page to create a new user.
- Use Login page to authenticate with your credentials.
- After login, the user token is stored in context and used for authenticated API requests.
- Logout will invalidate the current token and redirect to home.

---

## License

This project is licensed under the MIT License - see the LICENSE

---

## Contact

- Francisco Batista de Lima Neto
- GitHub: [github.com/limanetolimaneto]
- Email: limaneto.sist@gmail.com

