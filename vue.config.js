module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.scss$/,
        use: ['sass-loader', {
          loader: 'style-resources-loader',
          options: {
            patterns: [
              './src/sass/_tokens.scss',
              'node_modules/@lkmx/flare-legacy/src/components/**/*.scss',
              'node_modules/@lkmx/flare-legacy/src/functions/**/*.scss',
              'node_modules/@lkmx/flare-legacy/src/guides/**/*.scss',
              'node_modules/@lkmx/flare-legacy/src/structures/**/*.scss'
            ]
          }
        }]
      }]
    }
  }
}
