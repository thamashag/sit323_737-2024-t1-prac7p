const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Health check route
app.get('/health', (req, res) => {
  // Check if your application dependencies are healthy
  // You can add custom logic here to check the status of your application's dependencies
  // For simplicity, we'll just respond with a success status code (200)
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});