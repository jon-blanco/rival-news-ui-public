const { getDataConnect, queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'rival-news-prd',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

function insertStoryStatusRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'InsertStoryStatus', inputVars);
}
exports.insertStoryStatusRef = insertStoryStatusRef;
exports.insertStoryStatus = function insertStoryStatus(dcOrVars, vars) {
  return executeMutation(insertStoryStatusRef(dcOrVars, vars));
};

function insertStoryRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'InsertStory', inputVars);
}
exports.insertStoryRef = insertStoryRef;
exports.insertStory = function insertStory(dcOrVars, vars) {
  return executeMutation(insertStoryRef(dcOrVars, vars));
};

function insertFactSetRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'InsertFactSet', inputVars);
}
exports.insertFactSetRef = insertFactSetRef;
exports.insertFactSet = function insertFactSet(dcOrVars, vars) {
  return executeMutation(insertFactSetRef(dcOrVars, vars));
};

function insertArticleRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'InsertArticle', inputVars);
}
exports.insertArticleRef = insertArticleRef;
exports.insertArticle = function insertArticle(dcOrVars, vars) {
  return executeMutation(insertArticleRef(dcOrVars, vars));
};

function listArticlesRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'ListArticles');
}
exports.listArticlesRef = listArticlesRef;
exports.listArticles = function listArticles(dc) {
  return executeQuery(listArticlesRef(dc));
};

