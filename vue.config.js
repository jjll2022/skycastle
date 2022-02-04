module.exports = {
    publicPath: '/skycastle/',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}
 
