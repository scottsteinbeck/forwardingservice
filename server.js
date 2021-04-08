var httpProxy = require('http-proxy');
var port = process.env.PORT || 3000;

//create our proxy to the new websocket connection
httpProxy.createProxyServer({ target: 'http://agritrackingsystems.com:3000' }).listen(port);