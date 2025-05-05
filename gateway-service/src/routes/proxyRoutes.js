const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  AUTH_SERVICE_URL,
  USER_SERVICE_URL,
  JOB_SERVICE_URL,
  APPLICATION_SERVICE_URL
} = require('../config');

const router = express.Router();

// Proxy Rules
router.use('/api/auth', createProxyMiddleware({ target: AUTH_SERVICE_URL, changeOrigin: true }));
router.use('/api/users', createProxyMiddleware({ target: USER_SERVICE_URL, changeOrigin: true }));
router.use('/api/jobs', createProxyMiddleware({ target: JOB_SERVICE_URL, changeOrigin: true }));
router.use('/api/applications', createProxyMiddleware({ target: APPLICATION_SERVICE_URL, changeOrigin: true }));

router.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found in Gateway' });
});

module.exports = router;
