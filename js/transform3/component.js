define(['babel-standalone', 'vue3-sfc-loader','less!./view/pages/dashboard.less'], function (Babel, vue3SfcLoader,dashboard_less) {
    const options = {
        moduleCache: {
          vue: window.Vue,
          vuex: window.Vuex,
          'vue-router' : window.VueRouter,
          'element-plus': window.ElementPlus,
          'element-plus/icons-vue': window.ElementPlusIconsVue,
          'dashboard.less':dashboard_less,
          'echarts': window.echarts,
          'vue-echarts': window.VueECharts,
          'echarts/core': window.echarts,
        },
        async getFile(url) {
            // console.log('getFile',url)
            const res = await fetch(url);
            if ( !res.ok )
              throw Object.assign(new Error(res.statusText + ' ' + url), { res });
            return {
              getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
            }
        },
        addStyle(textContent) {
          const style = Object.assign(document.createElement('style'), { textContent });
          const ref = document.head.getElementsByTagName('style')[0] || null;
          document.head.insertBefore(style, ref);
        },
    }
    const { loadModule } = vue3SfcLoader;
    return {
        load: function (name, req, onload, config) {
            loadModule(req.toUrl(name) + '.vue', options).then(onload)
        },
    };
});
