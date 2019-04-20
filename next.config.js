/*const withCss = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss()*/
const withCss = require('@zeit/next-less');
// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
require.extensions['.less'] = file => {}
}
const conf = {
lessLoaderOptions: {
javascriptEnabled: true,
modifyVars: {//定制主题颜色
	'primary-color': '#1DA57A',
    'link-color': '#1DA57A',
    'border-radius-base': '2px',
} // make your antd custom effective
},
/*exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/index': { page: '/index' }
    }
  },*/
distDir: 'build',
generateEtags: false,
generateBuildId: async () => {
return 'build-' + Date.now();
}
};
 module.exports =  withCss(conf)
