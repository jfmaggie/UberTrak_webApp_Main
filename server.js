//List of required modules.
  //-Express is a webserver module.
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
//var url = require('url');
var https = require('https');

  //-The 'file system' && & 'path' module allows us to perform file operations.
var fs = require('fs');

//High level variables
var port = 8000;

var client_id='vT9Mf-2PxJ7OBpc6ku_V5wuZA-WtRS47';
var client_secret='EuCrNoKXM4A3n9YBaPWaZSVi8KlaHl2lpkr-S21r';
var base_uber_url='https://api.uber.com/v1/';

var log = fs.createWriteStream('res.json');
var bearerRequestOptions = {
  protocol: 'https:',
  host: 'api.uber.com',
  path: '/v1.2/history',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer rsQyQJoaGWfo6jtIFFlsuDvF7Pnwa1'
  }
};
var obj = JSON.stringify({"a":1,});
// ******************************************************************
// This is the general structure of a webserver.
// -- configure app
// -- use middleware
// -- define routes
// ******************************************************************

// *****************
// configure app
// *****************
app.use('/js',express.static(__dirname + '/js'));
app.use('/css',express.static(__dirname + '/css'));
app.use('/partial',express.static(__dirname + '/partial'));



// *****************
// use middleware
// *****************
//body parser can also parse JSON requests
app.use(bodyParser());


// *****************
// -- define routes
// *****************
app.get('/', function(req, res){
  fs.readFile('index.html', function(err, data){
    res.writeHead(200, {'Content-Type':'text/html', 'JSON':'{a:1}'});
    res.end(data);
  })
});
app.get('/partial/home.html', function(req, res){
  res.redirect('/');
});

app.get('/profile', function(req, res){
  bearerRequestOptions = {
    protocol: 'https:',
    host: 'api.uber.com',
    path: '/v1/me',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer rsQyQJoaGWfo6jtIFFlsuDvF7Pnwa1'
    }
  };
  obj = JSON.stringify(
    {"picture":"https:\/\/d1w2poirtb3as9.cloudfront.net\/default.jpeg","first_name":"D1v3","last_name":"In","promo_code":"wqqo4","email":"d1v3@outlook.com","uuid":"9422aa20-8d95-43a1-96f1-c02e342c3085"}
  );
  var req = https.request(bearerRequestOptions, function(res) {
    res.setEncoding('utf8');
    res.pipe(log);
  });
  req.end();
  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });
  res.redirect('/#/profile?json='+obj);
});

app.get('/stat', function(req, res){
  bearerRequestOptions = {
    protocol: 'https:',
    host: 'api.uber.com',
    path: '/v1.2/history',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer rsQyQJoaGWfo6jtIFFlsuDvF7Pnwa1'
    }
  };
  obj = JSON.stringify(
    {"count":1,"offset":0,"limit":5,"history":[{"status":"completed","distance":1.056608843,"request_time":1428719613,"start_time":1428719857,"end_time":1428720246,"request_id":"574e1ef4-bcb1-4f7d-a684-e412a9d5eb31","product_id":"4820702a-f954-4719-ac7a-6c501f820510"}]}
  );
  obj = JSON.stringify(
    {"count":1,"offset":0,"limit":5,"history":[{"status":"completed","distance":1.056608843,"request_time":1428719613,"start_time":1428719857,"end_time":1428720246,"request_id":"574e1ef4-bcb1-4f7d-a684-e412a9d5eb31","product_id":"4820702a-f954-4719-ac7a-6c501f820510"}]}
  );
  var req = https.request(bearerRequestOptions, function(res) {
    res.setEncoding('utf8');
    res.pipe(log);
  });
  req.end();
  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  res.redirect('/#/stat?json='+obj);
});

app.get('/signin.html', function(req, res){
  res.redirect('/#/home');
});


// ------------------------ OAUTH2.0 --------------------------------
// Step1: Authorize
//  Redirect user to https://login.uber.com/oauth/authorize and have them log in
//--------------------
// Step2: Receive Redirect
//  After login, Uber returns a HTTP 302 url
//  https://your-redirect-uri/?code=AUTHORIZATION_CODE
//--------------------
// Step3: Get an Access Token
//  Exchange this authorization code for an access_token,
//  which will allow you to make requests on behalf of a user.
//  The access_token expires in 30 days.
//  The grant_type may be authorization_code or refresh_token.

// curl -F 'client_secret=EuCrNoKXM4A3n9YBaPWaZSVi8KlaHl2lpkr-S21r' \
//     -F 'client_id=vT9Mf-2PxJ7OBpc6ku_V5wuZA-WtRS47' \
//     -F 'grant_type=authorization_code' \
//     -F 'redirect_uri=http://localhost:8000/signin.html' \
//     -F 'code=6oFe0yJeFNafHASmlVykVfNRiUXHeN' \
//     https://login.uber.com/oauth/token
//--------------------
// Step4: Use Bearer Token
//  Pass the access_token returned in the response in the Authorization header
//  specify the type 'Bearer' to make requests on behalf of a user.

//curl -H 'Authorization: Bearer rsQyQJoaGWfo6jtIFFlsuDvF7Pnwa1' 'https://api.uber.com/v1.2/history'
//--------------------

app.listen(port, function(){
  //-This is how we print in node
  console.log('ready on port: ', port);
});
