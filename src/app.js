const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res, next) => {
  res.json({ status: 'ok', service: 'sahayhub-api' });
    next();
});

module.exports = app;