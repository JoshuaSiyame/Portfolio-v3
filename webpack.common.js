// import modules/packages
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// configurations
module.exports = {
    entry: {
        app: "./src/index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|JPG)/,
                exclude: /node_modules/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true,
        publicPath: "/"
    },
};