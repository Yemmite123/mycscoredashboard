const webpack = require('webpack');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.common.js',
                'jquery': 'jquery/src/jquery.js'
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
            }),
        ]
    }
}