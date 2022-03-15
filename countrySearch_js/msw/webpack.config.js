const TerserPlugin = require('terser-webpack-plugin');

module.expores = {

	// Omit License file
	optimization: {
		minimizer: [new TerserPlugin({
			extractComments: false,
		})]
	}
};