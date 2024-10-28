const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'rival-news-ui',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

