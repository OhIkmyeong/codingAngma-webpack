const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : './src/index.js', //시작파일
    output : {
        filename : "main.js",
        path : path.resolve(__dirname, 'dist')
    }, //만들어진 최종파일을 내보내는 옵션
    plugins : [
        new HtmlWebpackPlugin({
            template : "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename : "common.css"
        }),
        new CleanWebpackPlugin()
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
                // use : ['style-loader', 'css-loader'], //micssextract 쓰지 않는 경우
                use : [MiniCssExtractPlugin.loader, 'css-loader'], 
            },
            {
                test : /\.png$/,
                use : ['file-loader']
            },
        ]
    }, //css-loader style-loader 관련
}