const http = require('http')

const port = 8080;

const server = http.createServer ((req,res) => {
 if(req.url == '/home'){
    res.writeHead(200, {"content-Type": "text/html"  }) // O tipo de resposta ou conteudo a ser envido (text)
    res.end("<h1>Pagina princial</h1>")
 } 
 if(req.url == '/users'){
    const users =[ {name: 'Beni Bolfo',email: 'beni@gmail.com'},
                   {name: 'shelton',email: 'shellyboy@gmail.com'},
                ];

    res.writeHead(200, {"content-Type": "application/json"  }) // O tipo de resposta ou conteudo a ser envido (rsponsta em json)
    
    res.end(JSON.string,ify(users)); // tranforma um objecto em json
    
 }

});

//colocar o servidor online:
server.listen(port, () => console.log('rodando na porta ${port}!')); 




















