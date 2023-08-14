// import modules/packages
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

// development configurations
module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
});