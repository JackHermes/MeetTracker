

module.exports = {
  entry: './src/client/components/App.jsx',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
}