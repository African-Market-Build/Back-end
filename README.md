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

## Get all existing owners

- [GET] /api/owners
- returns all owners array

## Get owner by id

- [GET] /api/owners/:id

* requires params id

- return an individual owner

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

## Get all items being sold by a specific owner

- [GET] /api/owners/:id/items
- requires owner_id as a param
- return example: {
  "owner_id": 1,
  "username": "javier",
  "items": [
  {
  "item_id": 1,
  "item_name": "MacBook Pro",
  "item_location": "Florida",
  "item_price": 1000
  }
  ]
  }
<<<<<<< HEAD
  If the owner is not selling any items, it will return:
  {
  "owner_id": 2,
  "username": "laysha",
  "items": []
  }
=======
  (note: still haven't created middleware)
>>>>>>> 6654ebffcb06011ecc0b4078c877f5d841d53418

## Update an item

- [PUT] /api/items/:id
- requires params id and request body
- returns the updated item

## Delete an item

- [DELETE] /api/items/:id

* requires params id
* returns all items except the one removed
