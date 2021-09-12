const http = require('http');
const fs = require('fs');
const allFiles = ['index.html','style.css','about.html','contact-me.html', 'favicon.ico','']

const server = http.createServer();
server.on('request', (req,res) => {

    if(req.method === 'GET'){
        const reqFile = req.url.slice(1);

        if(!allFiles.includes(reqFile)){
            fs.readFile(__dirname + '/404.html', (err, file) => {
                if(err) console.log(err);
                res.writeHead(200, {'Content-type':'text/html'});
                res.end(file);
            })
        }

        // load home page
        if(req.url === '/' | req.url === '/index.html'){
            fs.readFile(__dirname + '/index.html', (err, file) => {
                if(err) console.log(err);
                res.writeHead(200, {'Content-type':'text/html'});
                res.end(file)
            })
        }

        //load about page
        if(req.url === '/about.html'){
            fs.readFile(__dirname + '/about.html', (err, file) => {
                if(err) console.log(err);
                res.writeHead(200, {'Content-type':'text/html'});
                res.end(file)
            })
        }

        //load contact page
        if(req.url === '/contact-me.html'){
            fs.readFile(__dirname + '/contact-me.html', (err, file) => {
                if(err) console.log(err);
                res.writeHead(200, {'Content-type':'text/html'});
                res.end(file)
            })
        }

        // load css
        if(req.url === '/style.css'){
            fs.readFile(__dirname + '/style.css', (err,file) => {
                if(err) console.log(err);
                res.writeHead(200, {'Content-type':'text/css'})
                res.end(file);
            })
        }
    }


}).listen(3000);