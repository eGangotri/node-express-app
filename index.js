const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('[server]: Server is running at https://localhost:${port}');
});

app.get('/hi', (req, res) => {
    res.send(`Hi. Mr. ${req.query.name}`);
  });

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});