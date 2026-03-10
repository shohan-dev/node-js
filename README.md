# Simple REST API

This is a minimal Node.js REST API using Express.

Setup

```bash
cd /Users/bluebayit/Documents/GitHub/node-js
npm install
npm start
```

Endpoints

- `GET /items` - list items
- `GET /items/:id` - get item
- `POST /items` - create item (JSON: { "name": "..." })
- `PUT /items/:id` - update item (JSON: { "name": "..." })
- `DELETE /items/:id` - delete item

Examples

Create an item:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"foo"}' http://localhost:3000/items
```

List items:

```bash
curl http://localhost:3000/items
```
# node-js