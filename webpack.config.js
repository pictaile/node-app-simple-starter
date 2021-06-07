const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/index.ts",
    target: "node",
    mode: 'development',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },

    plugins: [
        new UglifyJsPlugin()
    ]
}

