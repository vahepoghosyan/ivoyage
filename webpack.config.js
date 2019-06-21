const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

const dirs = {
    src: './src',
    dist: './dist',
};

module.exports = {
    devtool: "source-map",
    entry: {
        fileName: `${dirs.src}/js/App.js`
    },
    output: {
        filename: "_build/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                use: {
                    presets:
                }

            }
        ]
    }
};