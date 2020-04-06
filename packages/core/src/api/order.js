var ApiBase = require('./api-base.js');

class Order extends ApiBase {
  constructor(baseUrl) {
    super(baseUrl);
  }

  create(order) {
    this.send('/order/receive', 'post', order)
      .then(res => res.text())
      .then(body => console.log(body))
      .catch(error => console.log(error));
  }
}


module.exports = Order;
