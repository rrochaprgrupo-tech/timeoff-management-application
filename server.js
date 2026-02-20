// server.js
const express = require('express');
const path = require('path');

const app = express();

// Serve página inicial mínima
app.use(express.static(path.join(__dirname, 'public')));

// Rota default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Mantém o backend antigo se houver
// Exemplo: app.use('/api', require('./src/routes/api'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
