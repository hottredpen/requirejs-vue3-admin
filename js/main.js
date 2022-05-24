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
        'babel': 'transform3/babel',
        'component': 'transform3/component',
    },
});
require(['babel!app'],function(app){
    console.log('app');
    console.log(app);

    // const emitter = window.mitt()
    // console.log('emitter.on')
    // emitter.on('sss', (ddd) => {
    //     console.log('ddsdssdsdsdsdsddsdsd')
    // } )

    // // 动态加载组件
    // app.default.$store.sss = function(component_name,cb){
    //     return new Promise(function(resolve, reject) {
    //         // component_name = 'test3'
    //         var is_add_version = '?version='+Date.parse(new Date());
    //         is_add_version = "";
    //         require(['component!http://iview.me/vuebuilder/'+component_name+is_add_version],function(component_js){
    //             // console.log(component_js);
    //             if(component_js){
    //                 // console.log('入口处载入的component_js');
    //                 // console.log(component_js);
    //                 cb(component_js);
    //                 resolve(true);
    //             }else{
    //                 reject(false);
    //             }
    //         });

    //         // require(['component!http://iview.me/js/view/'+component_name],function(component_js){
    //         //     if(component_js){
    //         //         console.log('入口处载入的component_js');
    //         //         console.log(component_js);
    //         //         cb(component_js);
    //         //         resolve(component_js);
    //         //     }else{
    //         //         reject(false);
    //         //     }
    //         // });
    //     });
    // }

});
