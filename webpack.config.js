module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }]
        },
        {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery'
          },
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      },
    ]
  }
};
