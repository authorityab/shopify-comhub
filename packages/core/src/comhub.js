
const fetch = require('node-fetch');

class ComHub {
  constructur() {console.log('init ComHub...')}
  sendOrder(order) {
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
