# African Market Place

server URL where you will make API calls to : https://africas-market-place.herokuapp.com/ . You should receive a "welcome hahaha" if you run it in directly in the browser.

# Owners

## Register a new owner

- [POST] /api/auth/register
- {username: "cheese", password:"dog"}

## Login an existing owner

- [POST] /api/auth/login
- body request: {username: "cheese", password: "dog"}
- returns { "message": "welcome, username", "token": "token"}

* [GET] /api/owners
* returns all owners array

# Items

## Add new item

- [POST] /api/items
- requires valid token for successful request

- {
  "item_name": "cup",
  "item_location": "philly",
  "item_description": "a beautiful cup",
  "item_price": "12",
  "available": false
  "owner_id": 1
  }

## Get all items

- [GET] /api/items
- return all items

## Get items by id

- [GET] /api/items/:id
- return item with that specific id
