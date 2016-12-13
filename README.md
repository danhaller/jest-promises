## Jest Promises ##

Experiments in testing promise centric code with Jest.

### Example code under test ###

```
const service = require('./service');
const report = require('./report');

module.exports = (params) => {
  service(params)
    .then(() => report('happy face :)'))
    .catch(() => report('sad face :('))
};
```

### Assertions ###
- `service` is called with `params`
- When the promise returned by `service` is resolved, `report` is called with the string 'happy face :)'
- When the promise returned by `service` is rejected, `report` is called with the string 'sad face :)'