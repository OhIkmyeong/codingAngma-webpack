const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry : './src/index.js', //시작파일
    entry : {
        main : "./src/index.js",
        subpage : "./src/pages/subpage.js",
        subpage2 : "./src/pages/subpage2.js"
    }, //서브페이지까지 하고싶은경우
    output : {
        // filename : "main.js", //메인페이지만 있는경우
        filename : "[name].js", //서브페이지까지 하고싶은경우
        path : path.resolve(__dirname, 'dist'),
        sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].[hash:8].js'
    }, //만들어진 최종파일을 내보내는 옵션
    plugins : [
        /* 메인페이지 */
        new HtmlWebpackPlugin({
            template : "./index.html",
            chunks : ["main"],
        }),
        new MiniCssExtractPlugin({
            // filename : "common.css",//메인페이지 하나만 있을땐..
            filename : "[name].css",//서브페이지
        }),
        new CleanWebpackPlugin(),

        /* 서브페이지(1) */
        new HtmlWebpackPlugin({
            filename : "subpage.html",
            chunks : ["subpage"],
        }),

        /* 서브페이지(2) */
        new HtmlWebpackPlugin({
            filename : "subpage2.html",
            chunks : ["subpage2"],
            template : "./subpage2.html",
        }),
    ], //src의 index.html이 dist의 index.html에도 반영되도록, //css extract 미니 플러그인 어쩌고
    devServer : {
        static : {
            directory : path.resolve(__dirname, 'dist')
        },
        port : 8080,
    }, //liveServer 기능같은거 쓰기 위해서
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ['style-loader', 'css-loader'], //MiniCssExtractPlugin 쓰지 않는 경우 //서브페이지 여러개일땐 이게 나을수도
                // use : [MiniCssExtractPlugin.loader, 'css-loader'], //<link>이런식으로 우아하게 처리할 경우 
            },
            {
                test : /\.png$/,
                use : ['file-loader']
            },
        ]
    }, //css-loader style-loader 관련
}