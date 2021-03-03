const webpack = require("@nativescript/webpack");
const {dirname, join} = require('path')

module.exports = (env) => {
	webpack.init(env);

	webpack.useConfig('javascript')

	// env.unitTesting && 
	webpack.chainWebpack(config => {
		const runnerPath = dirname(
			require.resolve('@nativescript/unit-test-runner/package.json')
		)
		// console.log(runnerPath)
		config.module.rule('css').include.add(runnerPath)
		config.module.rule('xml').include.add(runnerPath)
		config.module.rule('js').include.add(runnerPath)

		// config.output.delete('libraryTarget')

		// config.entryPoints.clear()
		config.entry('bundle')
			.clear()
			.add('@nativescript/core/globals/index.js')
			.add('@nativescript/unit-test-runner/app/bundle-app')

		config.plugins.delete('CleanWebpackPlugin')

		// config.module
		// 	.rule('unit-test')
		// 		.include
		// 		.add(webpack.Utils.platform.getEntryPath())
		// 		.end()
		// 	.use('unit-test-loader')
		// 	.loader(join(__dirname, 'loaders', 'unit-test-loader'))

		if(env.unitTesting) {
			// config.output.delete('path')
		}
	})

	// todo: comments for common usage

	return webpack.resolveConfig();
};


