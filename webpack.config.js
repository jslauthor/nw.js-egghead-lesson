var webpack = require("webpack");

module.exports = {
    target: "node-webkit",
    //debug: true,
    //devtool: "source-map",
    entry: {
        main: "./javascript/index.js"
    },
    output: {
        path: "./javascript",
        filename: "bundle.js"
    },
    resolve: {
        modulesDirectories: ['bower_components', 'node_modules'],
        extensions: ['', '.js', '.json']
    },
    module: {
        loaders: [
            { test: /\.css/, loader: "style-loader!css-loader!autoprefixer-loader?browsers=last 2 version" },
            { test: /\.scss$/, loader: "style!css!autoprefixer-loader?browsers=last 2 version!sass" },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.otf$|\.eot$/, loader: "url-loader" }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/vertx/)
    ]
};