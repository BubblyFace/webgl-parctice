 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
   entry: path.join(__dirname, '../src/index.js'),
   output: {
     filename: 'bundle.[hash].js',
     path: path.join(__dirname, '../dist')
   },
   module: {
     rules: [{
         test: /\.(js|jsx)$/,
         loader: 'babel-loader',
       },
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       },
       {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              strictMath: true,
              noIeCompat: true,
            },
          },
        ],
      },
     ]
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: path.join(__dirname, '../public/index.html')
     })
   ]
 };


 //  {
 //   test: /\.css$/,
 //   use: ['style-loader', 'css-loader']
 // }