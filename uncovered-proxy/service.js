
var proxyServer = require('http-route-proxy');

var port = process.env.PORT || 3000;
proxyServer.proxy([
    {
        from: 'localhost:'+port,
        to: 'p.scdn.co',
    }
]);



//https://p.scdn.co/mp3-preview/f60c420261754542594ddb4a46ed42972d2b9fd0
