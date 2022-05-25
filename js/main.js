require.config({
    paths: {
        // es6等转义包
        'babel-standalone': 'http://requirejs-vue3-admin.jk-kj.com/js/lib/babel_standalone_6.26.0_babel.min',
        'babel-polyfill': 'http://requirejs-vue3-admin.jk-kj.com/js/lib/babel_polyfill_6.26.0_polyfill.min',
        'vue': 'http://requirejs-vue3-admin.jk-kj.com/js/lib/vue_3.2.31_vue',
        'vuex': 'http://requirejs-vue3-admin.jk-kj.com/js/lib/vuex_4.0.0_vuex.min',
        // 'vue-router': 'http://requirejs-vue3-admin.jk-kj.com/js/lib/vue-router_4.0.5_vue-router.min',// 需要替换成vue3
        'vue3-sfc-loader': 'http://requirejs-vue3-admin.jk-kj.com/js/lib/vue3-sfc-loader.0.8.4.min',
        'http-vue-loader': 'http://requirejs-vue3-admin.jk-kj.com/js/lib/1.4.0_src_httpVueLoader',
        'axios':'http://requirejs-vue3-admin.jk-kj.com/js/lib/axios.min',
        'qs':'http://requirejs-vue3-admin.jk-kj.com/js/lib/qs',
        //
        'babel': 'http://requirejs-vue3-admin.jk-kj.com/js/transform3/babel',
        'component': 'http://requirejs-vue3-admin.jk-kj.com/js/transform3/component',
        'less-builder':'http://requirejs-vue3-admin.jk-kj.com/js/transform3/less/less-builder',
        'normalize':'http://requirejs-vue3-admin.jk-kj.com/js/transform3/less/normalize',
        'lessc':'http://requirejs-vue3-admin.jk-kj.com/js/transform3/less/lessc',
        'less': 'http://requirejs-vue3-admin.jk-kj.com/js/transform3/less',
        //
        'echarts' : "http://requirejs-vue3-admin.jk-kj.com/js/lib/echarts5.3.2",
        'vue-echarts': "http://requirejs-vue3-admin.jk-kj.com/js/lib/vue-echarts@6.0.3"
    },
});
require(['babel!app'],function(app){
    console.log('app');
    console.log(app);
});
