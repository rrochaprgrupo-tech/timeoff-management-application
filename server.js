const express = require('express');
const path = require('path');

const app = express();

// Serve a pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota default para '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
