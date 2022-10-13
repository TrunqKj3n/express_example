const fs = require('fs-extra');

class config {
  constructor(name, method, handler) {
    this.name = name;
    this.method = method;
    this.handler = handler;
  }
}
class routes extends config {
  constructor(name, method, handler) {
    super(name, method, handler);
  }

  getRoutes(app) {
    fs.readdirSync('./routes').forEach(file => {
      if (file.split('.')[1] != 'js') return;
      console.log('[ SYSTEM ]: '.brightGreen + `Loading route ${ file.split('.')[0] }`.brightWhite);
      const route = require(`../routes/${ file }`);
      const routeName = route.name;
      const routeMethod = route.method;
      app[routeMethod](`/${ routeName }`, (req, res) => {
        console.log(`Route ${ routeName } called`);
        route.handler(req, res);
      });
    });
  }
}
module.exports = routes;
