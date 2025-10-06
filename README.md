# 🗺️ Tiny-Trail

A full-stack web application for exploring and sharing travel experiences with interactive trail mapping and community features.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## 🌟 Overview

Tiny-Trail is a modern web application that allows users to discover, plan, and share their travel experiences. Whether you're a hiking enthusiast, city explorer, or adventure seeker, Tiny-Trail helps you document your journeys and connect with fellow travelers.

## ✨ Features

- 🗺️ **Interactive Trail Mapping** - Visualize and explore trails with detailed maps
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🔐 **User Authentication** - Secure user accounts and personalized experiences
- 📊 **Trail Analytics** - Track your progress and view statistics

## 🛠️ Tech Stack

### Frontend (65.7% JavaScript)
- **React** - Modern UI library for building interactive interfaces
- **Vite** - Fast build tool and development server
- **JavaScript/ES6+** - Core programming language

### Backend (33.4% Java)
- **Java** - Robust backend development
- **Spring Boot** - Enterprise-grade application framework
- **RESTful APIs** - Clean and scalable API architecture

### Additional Technologies
- **Git** - Version control
- **ESLint** - Code quality and consistency

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:
- **npm** or **yarn**
- **Java Development Kit (JDK)** (v11 or higher)
- **Maven** or **Gradle** (for Java backend)

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
   # Install Java dependencies (adjust based on your build tool)
   mvn install
   # or
   gradle build
   ```

## 📁 Project Structure

```
Tiny-Trail/
├── Tiny-Trail-Frotend/          # React frontend application
│   ├── src/                     # Source code
│   ├── public/                  # Static assets
│   ├── package.json             # Frontend dependencies
│   └── vite.config.js           # Vite configuration
├── backend/                     # Java backend application
│   ├── src/                     # Java source code
│   └── pom.xml                  # Maven configuration
├── README.md                    # Project documentation
└── .gitignore                   # Git ignore rules
```

## 💻 Usage

### Development Mode

1. **Start the backend server:**
   ```bash
   cd backend
   mvn spring-boot:run
   # or
   gradle bootRun
   ```

2. **Start the frontend development server:**
   ```bash
   cd Tiny-Trail-Frotend
   npm run dev
   ```

3. **Open your browser and navigate to:**
   - Frontend: `http://localhost:5173` (default Vite port)
   - Backend API: `http://localhost:8080` (default Spring Boot port)

### Production Build

```bash
# Build frontend for production
cd Tiny-Trail-Frotend
npm run build

# Build backend for production
cd ../backend
mvn clean package

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
