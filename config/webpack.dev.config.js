const path = require('path');
const merge = require ( "webpack-merge" );
const webpackBaseConfig = require ( "./webpack.common.config.js" );

module.exports = merge ( webpackBaseConfig, {
    devServer: {
        contentBase: path.join(__dirname, '..', 'public'),
        compress: true,
        port: 9000
    }
} );