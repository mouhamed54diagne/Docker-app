const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route to test the server
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Node.js Docker Container!',
    timestamp: new Date().toISOString(),
    hostname: require('os').hostname()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
