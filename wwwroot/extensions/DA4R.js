export async function ensureEverythingReady(){
  console.log('Ensuring bundle...');
  await ensureBundleReady();
  console.log('Bundle ready!');
  console.log('Ensuring activity...');
  await ensureActivityReady();
  console.log('Activity ready!');
}

async function ensureBundleReady(){
  let bundles = await apiClientAsync('/api/da4r/bundles');
  // if(!bundles){
  //   try{
  //     await apiClientAsync('/bundles', '', 'post')
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }
}

// helper function for Request
function apiClientAsync( requestUrl, requestData=null, requestMethod='get' ) {

  // if( requestMethod == 'post'|| requestMethod == 'patch' ){
  //   requestData = JSON.stringify(requestData);
  // }

  fetch(requestUrl, {
    "method": requestMethod,
    "body": requestData
  })
  .then(response => {
    console.log(response);
    return response;
  })
  .catch(err => {
    console.error(err);
    return err;
  });

  // jQuery.ajax({
  //   url: requestUrl,
  //   contentType: 'application/json',
  //   type: requestMethod,
  //   dataType: 'json',
  //   data: requestData,
  //   success: function (res) {
  //     def.resolve(res);
  //   },
  //   error: function (err) {
  //     console.error('request failed:');
  //     def.reject(err)
  //   }
  // });
  // return def.promise();
}