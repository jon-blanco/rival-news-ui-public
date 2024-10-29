const { getDataConnect, queryRef, executeQuery, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'rival-news-prd',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

function listStoriesRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'ListStories');
}
exports.listStoriesRef = listStoriesRef;
exports.listStories = function listStories(dc) {
  return executeQuery(listStoriesRef(dc));
};

