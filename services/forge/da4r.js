const axios = require('axios').default;
const { getInternalDAToken } = require('./auth.js');

async function getAppBundles(){
  // get defined app bundles

  const token = await getInternalDAToken();

  const options = {
    method: 'get',
    url: 'https://developer.api.autodesk.com/da/us-east/v3/appbundles',
    headers: {
      'Authorization': `Bearer ${token.access_token}`
    }
  };

  await axios.request(options).then(function (response) {
    console.log(response.data);
    return response.data;
  }).catch(function (error) {
    console.error(error);
    return error;
  });
}

module.exports = {
  getAppBundles
};