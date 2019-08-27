 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');



 module.exports = {
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
         test: /\.(vert)$/,
         use: [{
           loader: 'raw-loader'
         }]
       },
       {
         test: /\.less$/,
         use: [{
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
       {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
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