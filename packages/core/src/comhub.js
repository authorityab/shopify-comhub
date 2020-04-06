const Order = require('./api/order.js');

class ComHub {
  constructor() {
    this.baseUrl = 'https://comhub-dev-apim.azure-api.net';
    this.order = new Order(this.baseUrl);
  }
}

module.exports = ComHub;
