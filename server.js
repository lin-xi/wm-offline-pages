/* eslint-disable no-var, strict */
'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var proxy = {
     // qa: 'http://cq01-lanfang.epc.baidu.com:8086',
    // qa: 'http://cq01-lanfang.epc.baidu.com:8086',
    // lh: 'http://cp01-rdqa04-dev170.cp01.baidu.com:8186',
     //qa: 'http://cp01-ym.epc.baidu.com:8086',
    // qa: 'http://cp01-lijinzhu01.epc.baidu.com:8086',
    qa: 'http://waimai.baidu.com'
    //qa: 'http://cq01-lanfang.epc.baidu.com:8086',
    //qa: 'http://waimai.baidu.com'
}

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: {
        '/pinzhi/main/*': proxy.qa,
        '/waimaiui/mobile/waimai/*': proxy.qa,
        '/mobile/waimai': proxy.qa,
        '/waimai': proxy.qa,
        '/waimai/trade/v1/book': proxy.qa,
        '/fly/h5/rest/getwxtoken': proxy.qa,

    }
});

server.listen(config.port, config.host, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at http://' + config.host + ':' + config.port);
});


