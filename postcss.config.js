module.exports = (ctx) => ({
  parser: ctx.webpack.resourcePath.endsWith('.css') ? 'sugarss' : false,
  plugins: {
    'cssnano': {}
  }
})
