const service = require('./service');
const report = require('./report');

module.exports = (params) => {
  service(params)
    .then(() => report('happy face :)'))
    .catch(() => report('sad face :('))
};