var express = require('express')
var proxyServer = require('http-route-proxy');

var port = process.env.PORT || 3000;

var app = express();

app.use(proxyServer.connect({
  to: 'p.scdn.co',
  route: ['/']
}));
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("LISTNEIN!!!")
  //console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

/*
proxyServer.proxy([
    {
        from: 'uncovered-proxy.herokuapp.com',
        to: 'p.scdn.co',
    }
]);*/



//https://p.scdn.co/mp3-preview/f60c420261754542594ddb4a46ed42972d2b9fd0
