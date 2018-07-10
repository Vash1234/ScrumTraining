var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
var url = req.url;
var method = req.method;
 if(url ==='/register'){
    if(method === 'POST'){
	// place code here for hashing, checking for uniqueness
	resp.write('hey');
        resp.end();
    }
    else {
    fs.readFile("html/register.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
            
            resp.end();
        });
     }
 }else if(url === '/profile'){
    fs.readFile("html/profile.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
            
            resp.end();
        });
 }else{
    if(method === 'POST'){
	// place code here for authenticating
	resp.write('hey');
        resp.end();
    }
    else {
    fs.readFile("html/login.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
            
            resp.end();
        });
    }
 }
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});
