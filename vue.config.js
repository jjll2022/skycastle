module.exports = {
    // publicPath: '/skycastle/',
    publicPath: '/skycastle/',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}

