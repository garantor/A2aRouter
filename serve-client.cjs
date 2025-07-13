#!/usr/bin/env node

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = 5173;

// Serve static files from Client directory
app.use(express.static(path.join(__dirname, 'Client')));

// Proxy API requests to port 3000
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
  onError: (err, req, res) => {
    console.error('Proxy error:', err.message);
    res.status(500).json({ error: 'A2A Agent server not available' });
  }
}));

// Serve the simple chat client as default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Client', 'simple-chat.html'));
});

app.listen(PORT, () => {
  console.log(`🌐 A2A Chat Client running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${path.join(__dirname, 'Client')}`);
  console.log(`🔄 Proxying /api/* to http://localhost:3000`);
  console.log('Press Ctrl+C to stop');
});
