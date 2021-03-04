const webpack = require("@nativescript/webpack");
const {dirname, join} = require('path')

module.exports = (env) => {
	webpack.init(env);

	webpack.useConfig('javascript')

	console.log('unitTesting:', env.unitTesting)
	console.log('karmaWebpack:', env.karmaWebpack)

	// when bundling just tests with karma-webpack
	env.karmaWebpack && webpack.chainWebpack(config => {
		config.entryPoints.clear();

		config.plugins.delete('WatchStatePlugin')
		config.plugins.delete('CleanWebpackPlugin')

		// config.output.delete('libraryTarget')
		config.output.delete('path')
		// config.output.path(
		// 	`${config.output.get('path')}/karma-webpack`
		// )

		config.output.set('iife', true)
		config.output.set('libraryTarget', 'global')

		config.optimization.clear();

		// config.module.rule('ts')
		// 	.use('babel-loader')
		// 	.loader('babel-loader')

		// config.output.delete('filename')
	})

	// when CLI runs tests
	env.unitTesting && webpack.chainWebpack(config => {
		config.plugins.delete('CleanWebpackPlugin')

		const runnerPath = dirname(
			require.resolve('@nativescript/unit-test-runner/package.json')
		)
		// console.log(runnerPath)
		config.module.rule('css').include.add(runnerPath)
		config.module.rule('xml').include.add(runnerPath)
		config.module.rule('js').include.add(runnerPath)

		// config.entryPoints.clear()
		config.entry('bundle')
			.clear()
			.add('@nativescript/core/globals/index.js')
			.add('@nativescript/unit-test-runner/app/bundle-app')

		// config.watchOptions({
		// 	ignored: /.*/
		// })

		// config.optimization.runtimeChunk('single')

		// config.module
		// 	.rule('unit-test')
		// 		.include
		// 		.add(webpack.Utils.platform.getEntryPath())
		// 		.end()
		// 	.use('unit-test-loader')
		// 	.loader(join(__dirname, 'loaders', 'unit-test-loader'))
	})

	// todo: comments for common usage

	return webpack.resolveConfig();
};


