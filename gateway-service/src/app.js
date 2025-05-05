const express = require('express');
const { PORT } = require('./config');
const proxyRoutes = require('./routes/proxyRoutes');

const app = express();

app.use('/', proxyRoutes);

app.listen(PORT, () => {
  console.log(`🚪 Gateway Service running on port ${PORT}`);
});
