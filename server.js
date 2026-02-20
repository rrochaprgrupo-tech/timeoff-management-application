// server.js
const express = require('express');
const path = require('path');

const app = express();

// Serve ficheiros estáticos (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Usa a porta do Render ou 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
