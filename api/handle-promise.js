exports.handlePromise = (promise) => {
  return new Promise((resolve, reject) => {
    promise.then(data => {
     resolve([null, data]);
	  }).catch(er => {
	    resolve([er]);
	  });
  })
};
