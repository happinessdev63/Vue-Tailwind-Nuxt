import axios from 'axios'

export default ({ app }, inject) => {
  if (process.server) {
    let config = require('fs').readFileSync('static/config.json', 'utf8');
    inject('config', config);
  }
  else {
    return axios.get('/config.json').then(response => {
      let config = response.data;
      inject('config', config);
    });
  }
}
