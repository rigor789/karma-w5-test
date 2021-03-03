module.exports = function unitTestLoader(source, map) {

    source = `
    require('@nativescript/core/globals/index.js')
    require('@nativescript/unit-test-runner/app/bundle-app.js')

    const testsContext = require.context('~/tests', true, /.*\.(ts|js)/)
    global.registerWebpackModules(testsContext);
    `

    this.callback(null, source, map);
}