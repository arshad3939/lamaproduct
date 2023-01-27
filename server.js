const jasonServer = require('json-server');
const server = jasonServer.create();
const router = jasonServer.router('db.json');
const middlewares = jasonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);