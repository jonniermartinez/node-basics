const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === "/") {
        response.write("Welcome to the server")
        return response.end()
    }
   if (request.url === "/about") {
       response.write('acerca de');
       return response.end();
   }
    

    response.write(`
    <h1>Not found</h1>
    <p>Esta pagina no se encontró</p>
    <a href="/">Volver a la pagina de inicio</a>
    `);
    response.end();
})

server.listen(3000)

console.log('Server listen on the port 3000')