const path = require('path');

module.exports = env => {
  if(env.NODE_ENV === 'dev'){
    module.exports = require('./config/webpack.config.dev');
  }else{
    module.exports = require('./config/webpack.config.prod');
  }
}