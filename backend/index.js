// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Teste de rota
app.get('/', (req, res) => {
  res.send('API do NeuroFlux está viva! 🧠');
});

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Servidor rodando na porta ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error('Erro ao conectar ao banco:', err));
