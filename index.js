var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
var url = req.url;
var method = req.method;

 if(url === '/register'){
    if(method === 'POST'){
 // place code here for hashing, checking for uniqueness
        res.end();
    }
    else {
    fs.readFile("html/registration.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
            
            res.end();
        });
     }
 }else if(url === '/profile'){
    fs.readFile("html/profile.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
            
            res.end();
        });
 }else{
    if(method === 'POST'){
 // place code here for authenticating
 console.log('hey');
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.write('hey');
        res.end();
    }
    else {
    fs.readFile("html/login.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
            
            res.end();
        });
    }
 }
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});
