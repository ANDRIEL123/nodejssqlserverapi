const http = require('http')
const app = require('./api')

const port = process.env.port || 3000

const server = http.createServer(app)

server.listen(port)
console.log(`Server rodando na porta ${port}`)