module.exports = {
    // publicPath: '/skycastle/',
    publicPath: './',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}

