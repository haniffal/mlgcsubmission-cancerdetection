const { postPredictHandler, predictHistories } = require('./handler');
 
const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
        return { status: 'success', message: 'Welcome to the API' };
    },
  },
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        maxBytes: 1000 * 1000,
        allow: 'multipart/form-data',
        multipart: true
      }
    }
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: predictHistories
  }
]
 
module.exports = routes;