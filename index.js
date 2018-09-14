const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.listen(1337, () => {
  console.log('running');
});
