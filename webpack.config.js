module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    }
};
