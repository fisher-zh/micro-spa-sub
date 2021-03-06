// console.log(process.env.NODE_ENV)
const config = {
  dev: {
    host: 'localhost',
    port: 8082,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    },
    publicPath: '/'
  },
  build: {
    publicPath: '/sub-app/sub-app-template/'
  }
}

module.exports = config
