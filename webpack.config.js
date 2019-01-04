const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        port: 6464,
        historyApiFallback: true,
        inline: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};