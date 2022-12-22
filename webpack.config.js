const path = require('path');

module.exports = {
  mode: 'development',  // or 'production'
  entry: './script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
  
};

