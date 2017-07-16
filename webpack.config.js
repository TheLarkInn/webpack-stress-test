const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MultipageWebpackPlugin = require("multipage-webpack-plugin");

module.exports = {
    entry: {
        "main": "./src/index.js",
        "a": "./src/async-a",
        "b": "./src/async-b",
        "shared": "./src/shouldBeShared",
        "main1": ["lodash-es", "./src/index.js"],
        "a1": ["lodash-es", "./src/async-a"],
        "b1": ["lodash-es", "./src/async-b"],
        "shared1": ["lodash-es", "./src/shouldBeShared"],
        "main2": ["./src/index.js", "lodash-es", "wordwrap"],
        "a2": ["./src/async-a", "lodash-es", "wordwrap"],
        "b2": ["./src/async-b", "lodash-es", "wordwrap"],
        "shared2": ["./src/shouldBeShared", "lodash-es", "wordwrap"],
        "main3": ["./src/index.js", "lodash-es", "wordwrap"],
        "a3": ["./src/async-a", "lodash-es", "wordwrap"],
        "b3": ["./src/async-b", "lodash-es", "wordwrap"],
        "shared3": ["./src/shouldBeShared", "lodash-es", "wordwrap"]
    },
    output: {
        filename: "[name].[id].bundle.js",
        path: path.join(__dirname, "dist")
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: "main",
            async: true,
            minChunks: 2
        }),
        new webpack.optimize.AggressiveSplittingPlugin({
            minSize: 10000,
            maxSize: 30000
        }),
        new MultipageWebpackPlugin()
    ]
};
