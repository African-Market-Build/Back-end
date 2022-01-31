# African Market Place

server URL where you will make API calls to : https://github.com/African-Market-Build/Back-end . You should receive a "welcome hahaha" if you run it in directly in the browser.

# Owners

Register a new owner

- [POST] /api/auth/register
- {username: "cheese", password:"dog"}

Login an existing owner

- [POST] /api/auth/login
- {username: "cheese", password: "dog"}
- returns { "message": "welcome, username", "token": "token"}
