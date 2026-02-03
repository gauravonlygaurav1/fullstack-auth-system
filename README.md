# 🔐 Full-Stack Authentication System

A **secure, production-style full-stack authentication system** built using **React, TypeScript, Tailwind CSS, Shadcn UI, Spring Boot, Spring Security, JWT, OAuth2, and MySQL**.

This project demonstrates how modern applications implement **secure authentication, token-based authorization, and third-party OAuth login flows** using a real-world architecture.

---

## 🚀 Key Features

- Email & password-based user registration and login  
- Google OAuth2 authentication  
- GitHub OAuth2 authentication  
- JWT-based security with:
  - Short-lived access tokens  
  - Secure refresh token flow  
- Role-based API protection using Spring Security  
- Protected frontend routes with token validation  
- Centralized error handling and standardized API responses  
- Environment-based configuration support  

---

## 🧠 System Architecture Overview

[React Frontend]-> [JWT Access Token]-> [Spring Boot API]-> [MySQL Database]

### Flow Explanation
- The frontend communicates with the backend using secure REST APIs  
- Access tokens are attached to every protected request  
- Refresh tokens are used to automatically generate new access tokens when expired  
- OAuth providers (Google & GitHub) integrate into the same JWT-based authentication flow  

---

## 🛠️ Tech Stack

### Frontend
- React (TypeScript)  
- Tailwind CSS  
- Shadcn UI  
- Axios  

### Backend
- Spring Boot  
- Spring Security  
- JWT Authentication  
- OAuth2 (Google & GitHub)  
- MySQL  
- JPA / Hibernate  

---
