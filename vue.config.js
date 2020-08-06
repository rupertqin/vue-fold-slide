module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-fold-slide/dist/'
    : '/',

  // css: { extract: false },
  configureWebpack: {
    externals: {
      debounce: 'debounce'
    }
  }
}
