
const productionConfig = {
  publicPath: '/vue-fold-slide/dist/',
  // css: { extract: false },
  configureWebpack: {
    externals: {
      debounce: 'debounce'
    }
  }
}

const devConfig = {
  publicPath: '/',
  configureWebpack: {
    externals: {
      // debounce: 'debounce'
    }
  }
}

module.exports = process.env.NODE_ENV === 'production'
  ? productionConfig
  : devConfig
