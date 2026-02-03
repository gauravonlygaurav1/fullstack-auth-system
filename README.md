Overview:-
A secure, production-style full-stack authentication system built using React, TypeScript, Tailwind CSS, Shadcn UI, Spring Boot, Spring Security, JWT, OAuth2, and MySQL.

This project demonstrates how modern applications handle secure authentication, token-based authorization, and third-party OAuth login flows in a real-world architecture.

Key Features:-
1. Email & password-based user registration and login
2. Google OAuth2 authentication
3. GitHub OAuth2 authentication
4. JWT-based security with:
    Short-lived access tokens
    Secure refresh token flow
5. Role-based API protection using Spring Security
6. Protected frontend routes with token validation
7. Centralized error handling and API response standardization
8. Environment-based configuration support

System Architecture Overview:-

    [ React Frontend ]
       |
       |  JWT Access Token
       v
    [ Spring Boot API ]
       |
       v
    [ MySQL Database ]

-> The frontend communicates with the backend using secure REST APIs.
-> Access tokens are attached to every protected request.
-> Refresh tokens are used to generate new access tokens automatically when expired.
-> OAuth providers (Google & GitHub) integrate into the same JWT-based flow.

Tech Stack:-

Frontend:
1.React (TypeScript)
2.Tailwind CSS
3.Shadcn UI
4.Axios

Backend:
1.Spring Boot
2.Spring Security
3.JWT Authentication
4.OAuth2 (Google & GitHub)
5.MySQL
6.JPA / Hibernate

