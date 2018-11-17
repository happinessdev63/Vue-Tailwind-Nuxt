const swaggerGen = require('swagger-vue');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const url = require('url');
const config = require('../static/config');

const swaggerUrl = url.resolve(config.apiRootUrl.replace('ci-', ''), 'swagger/docs/v1');

axios.get(swaggerUrl)
  .then(function (response) {
    const options = {
      swagger: response.data
    };

    const result = swaggerGen(options);
    fs.writeFileSync(path.join(__dirname, '../client/api.js'), result);
  });
