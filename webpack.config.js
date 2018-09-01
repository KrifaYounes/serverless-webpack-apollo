const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: slsw.lib.entries,
    target: "node",
    node: {
        __dirname: true,
        __filename: true
    },
    performance: {
        // Turn off size warnings for entry points
        hints: false
    },
    externals: [nodeExternals()],
    // Run babel on all .js files and skip those in node_modules
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: __dirname,
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react-app", "stage-2"],
                    plugins: ["css-modules-transform"]
                }
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8000,
                            name: "images/[hash]-[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                loader: 'file-loader',

            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: "build", to: "build" }], {
            debug: "info"
        })
    ]



};
