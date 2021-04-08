var httpProxy = require('http-proxy');

//create our proxy to the new websocket connection
httpProxy.createProxyServer({target:'http://agritrackingsystems.com:3000'}).listen(80); // See (†)