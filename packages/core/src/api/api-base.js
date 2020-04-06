const fetch = require('node-fetch');

class ApiBase {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  send(route, method, body) {
    return fetch(this.baseUrl + route, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.Ocp_Apim_Subscription_Key,
        'Ocp-Apim-Trace': true
      }
    });
  }
}

module.exports = ApiBase;
