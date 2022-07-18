

const path = require('path');


module.exports = {
    entry : './src/playground/redux-102.js',
    output :{
        path : path.join(__dirname,'public'),
        filename : 'bundle.js'
    },
    mode: 'development',
    module :{
        rules :[
            {
                loader : 'babel-loader',
                test : /\.js$/,
                exclude : /node_modules/
                
            },{
               test : /\.s?css$/i,
               use : [
                'style-loader',
                'css-loader',
                'sass-loader'
               ]
            }
        ]
    },
    devtool : 'eval-cheap-module-source-map',
    devServer : {
        static: {
            directory: path.join(__dirname, 'public'),
        },
    compress: true,
    port: 9000,
    historyApiFallback : true
  }
        
}