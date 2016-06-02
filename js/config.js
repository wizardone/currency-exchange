const config = new Map();
config.set('serverUrl', 'http://localhost:3001/rates')
config.set('baseUrl', 'http://api.fixer.io/latest');
config.set('baseUrlError', 'Currency data cannot be retrieved at the moment. Please check the server.');
module.exports = config;
