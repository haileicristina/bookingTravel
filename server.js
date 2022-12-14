const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('server.json')
const middlewares = jsonServer.defaults({
    static:'./dist'
});
const port = process.env.PORT || 3333;

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/*' : '/$1',
}))
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})