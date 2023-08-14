// import modules/packages
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

// development configurations
module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        port: 8080,
        historyApiFallback: true
    }
});