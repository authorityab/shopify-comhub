

const Order = require('./api/order.js');

class ComHub {
  constructur() {
    console.log('comhub');
    this.baseUrl = 'https://comhub-dev-apim.azure-api.net';
  }

  createOrder(order) {
    console.log('baseUrl: ' + this.baseUrl);
    fetch('https://comhub-dev-apim.azure-api.net/order/receive', {
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



module.exports = ComHub
