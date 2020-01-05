const path = require('path');

module.exports = env => {
  if(env.NODE_ENV === 'dev'){
    return require('./config/webpack.config.dev');
  }else{
    return require('./config/webpack.config.prod');
  }
}