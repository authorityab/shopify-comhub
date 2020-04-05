
const fetch = require('node-fetch');


class Order {
  constructur(baseUrl) {
    this.baseUrl = baseUrl;
    console.log('order ' + baseUrl);
  }

  create(order) {
    fetch(this.baseUrl + '/order/receive', {
        method: 'post',
        body: JSON.stringify(order),
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': process.env.Ocp_Apim_Subscription_Key,
          'Ocp-Apim-Trace': true
        },
      })
      .then(res => res.text())
      .then(body => console.log(body))
      .catch(error => console.log('UÄÄÄHH: ' + error));
  }
}

module.exports = Order;
