const path = require('path')


module.exports = {
    experiments: {
        topLevelAwait: true
      },
    mode: 'development',
    entry: {
      records: './src/js/query.js',
      login: './src/js/authentication.js'
    },
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: '[name].bundle.js'
    },
    watch: true,
    externals: {
        jquery: 'jQuery'
      }
}