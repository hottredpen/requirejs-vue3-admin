define(['babel-standalone', 'vue3-sfc-loader'], function (Babel, vue3SfcLoader) {
    const options = {
        moduleCache: {
          vue: Vue,
          vuex: Vuex,
          'vue-router' : VueRouter
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
