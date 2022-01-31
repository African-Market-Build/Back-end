# African Market Place

server URL where you will make API calls to : https://github.com/African-Market-Build/Back-end . You should receive a "welcome hahaha" if you run it in directly in the browser.

# USERS

Register a new user

- [POST] /api/auth/register
- {username: "cheese", password:"dog"}

Login an existing user

- [POST] /api/auth/login
- {username: "cheese", password: "dog"}
  returns { "message": "welcome, username", "token": "token"}
