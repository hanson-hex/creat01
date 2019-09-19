
const { injectBabelPlugin } = require('react-app-rewired')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  config = injectBabelPlugin([
    'import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }
  ], config)

  config = injectBabelPlugin([
    '@babel/plugin-proposal-decorators', {
      "legacy": true
    }
    ], config)

  config.resolve.alias = {
    '@': resolve('src')
  }

  return config
};