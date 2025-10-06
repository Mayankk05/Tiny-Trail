# 🔗 Tiny-Trail

A modern, full-stack URL shortener web application built with React and Java. Create short, memorable links and track their performance with detailed analytics.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## 🌟 Overview

Tiny-Trail is a powerful URL shortening service that transforms long, unwieldy URLs into short, manageable links. With advanced analytics, custom aliases, and a user-friendly interface, it's perfect for marketers, developers, and anyone who needs to share links efficiently.

## ✨ Features

- 🔗 **URL Shortening** - Convert long URLs into short, shareable links
- 📊 **Analytics Dashboard** - Track clicks, geographic data, and referrer information
- 🎯 **Custom Aliases** - Create branded, memorable short URLs
- 👥 **User Management** - Secure user accounts with personal link management
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Fast Redirects** - Lightning-fast link resolution and redirection
- 📈 **Real-time Statistics** - Live click tracking and performance metrics
- 🌐 **API Access** - RESTful API for programmatic URL shortening
- 🎨 **Modern UI** - Clean, intuitive interface built with React

## 🛠️ Tech Stack

### Frontend (65.7% JavaScript)
- **React** - Modern UI library for interactive user interfaces
- **Vite** - Fast build tool and development server
- **JavaScript/ES6+** - Core programming language
- **CSS3** - Responsive styling and animations
- **Chart.js** - Data visualization for analytics

### Backend (33.4% Java)
- **Java** - Robust backend development
- **Spring Boot** - Enterprise-grade application framework
- **Spring Security** - Authentication and authorization
- **JPA/Hibernate** - Database ORM
- **RESTful APIs** - Clean API architecture
- **MySQL/PostgreSQL** - Database storage

### Additional Technologies
- **Redis** - Caching for improved performance
- **Docker** - Containerization
- **Git** - Version control
- **ESLint** - Code quality and consistency

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Java Development Kit (JDK)** (v11 or higher)
- **Maven** or **Gradle**
- **MySQL** or **PostgreSQL**
- **Redis** (optional, for caching)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mayankk05/Tiny-Trail.git
   cd Tiny-Trail
   ```

2. **Setup Frontend**
   ```bash
   cd Tiny-Trail-Frotend
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   mvn install
   ```

4. **Configure Database**
   ```bash
   # Create database and update application.properties
   # Set your database credentials and connection details
   ```

## 📁 Project Structure

```
Tiny-Trail/
├── Tiny-Trail-Frotend/          # React frontend application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/              # Main application pages
│   │   ├── services/           # API service calls
│   │   ├── utils/              # Utility functions
│   │   └── styles/             # CSS and styling
│   ├── public/                 # Static assets
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js          # Vite configuration
├── backend/                    # Java backend application
│   ├── src/main/java/          # Java source code
│   │   ├── controller/         # REST API controllers
│   │   ├── service/            # Business logic
│   │   ├── repository/         # Data access layer
│   │   ├── model/              # Entity models
│   │   └── config/             # Configuration classes
│   ├── src/main/resources/     # Configuration files
│   └── pom.xml                 # Maven dependencies
├── README.md                   # Project documentation
└── .gitignore                  # Git ignore rules
```

## 💻 Usage

### Development Mode

1. **Start the backend server:**
   ```bash
   cd backend
   mvn spring-boot:run
   ```

2. **Start the frontend development server:**
   ```bash
   cd Tiny-Trail-Frotend
   npm run dev
   ```

3. **Access the application:**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8080`

### Basic Usage

1. **Shorten a URL:** Enter your long URL and get an instant short link
2. **Custom Alias:** Create branded short URLs with custom aliases
3. **Track Analytics:** View detailed statistics for your links
4. **Manage Links:** Organize and manage all your shortened URLs
5. **API Integration:** Use the REST API for programmatic access

## 📚 API Documentation

The backend provides comprehensive RESTful APIs:

### Core Endpoints
- `POST /api/shorten` - Create a short URL
- `GET /api/{shortCode}` - Redirect to original URL
- `GET /api/analytics/{shortCode}` - Get link analytics
- `GET /api/user/links` - Get user's links
- `DELETE /api/links/{id}` - Delete a link

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout


### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

*Making long URLs tiny, one link at a time! 🔗✨*
