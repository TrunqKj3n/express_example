class example {
  constructor() {
    this.name = 'example'; // This is the route name
    this.method = 'get'; // This is the method (GET, POST, PUT, DELETE)
    this.handler = this.get; // This is the handler
  }

  get(req, res) {
    res.send('This is an example route');
  }
}
module.exports = new example();
