
const fetch = require('node-fetch');

class ComHub {
  constructur() {console.log('init ComHub...')}
  sendOrder(order) {
    fetch('https://comhub-dev-apim.azure-api.net/order/receive', {
        method: 'post',
        body: JSON.stringify(order),
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '6c8d06357bb0403c8aa88e7d126bb863;product=comhub-user',
          'Ocp-Apim-Trace': true
        },
      })
      .then(res => res.text())
      .then(body => console.log(body))
      .catch(error => console.log('UÄÄÄHH: ' + error));
  }
}



export default ComHub
