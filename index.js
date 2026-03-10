const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let items = [
    // Example item: { id: 1, name: 'Item 1' }
    {
        id: 1,
        name: 'Example Item',

    },
    {
        id: 2,
        name: 'Example Item',

    },
    {
        id: 3,
        name: 'Example Item',

    },

];
let nextId = 1;

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

app.post('/items', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  const item = { id: nextId++, name };
  items.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  item.name = name;
  res.json(item);
});

app.delete('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  const removed = items.splice(index, 1)[0];
  res.json(removed);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
