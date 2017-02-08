var webpack = require('webpack');

module.exports = {
	entry :['./test.js'],
	output :{
		path:__dirname,
		filename:'bundle.js'
	},
	module :{
		loaders :[{
				test:/\.js$/,
				loader:'babel-loader'
			},
			{
				test: /\.css$/, 
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins :[
		new webpack.BannerPlugin("打包后文件的头部注释"),//打包后文件的头部注释.
		new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
        colors:true,
        historyApiFallback:true,
        inline:true,
        hot:true
    }
}