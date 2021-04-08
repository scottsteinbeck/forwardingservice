// var httpProxy = require('http-proxy');
// var port = process.env.PORT || 3000;

// //create our proxy to the new websocket connection
// httpProxy.createProxyServer({ target: 'http://agritrackingsystems.com:3000' })
//           .listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));