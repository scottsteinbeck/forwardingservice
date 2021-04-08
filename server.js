var httpProxy = require('http-proxy');
httpProxy.createProxyServer({target:'http://agritrackingsystems.com:3000'}).listen(8080); // See (†)