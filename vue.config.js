const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    // devServer: {
    //     open: process.platform === 'darwin',
    //     host: '0.0.0.0',
    //     port: 8080, // CHANGE YOUR PORT HERE!
    //     https: true,
    //     hotOnly: false,
    // },
    devServer: {
        proxy: 'https://www.palenca.com/uber/get-user',
    }
}
