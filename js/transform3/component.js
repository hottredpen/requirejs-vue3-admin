define(['babel-standalone', 'vue3-sfc-loader'], function (Babel, vue3SfcLoader) {

    const options = {
        moduleCache: {
          vue: Vue,
          vuex: Vuex,
          'vue-router' : VueRouter
          
        },
        async getFile(url) {
          console.log('getFile',url)
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
    
    // httpVueLoader.scriptExportsHandler = function (script) {
    //     return new Promise(function (resolve) {
    //         require([ this.component.name ], function (component) {
    //             resolve(component.default);
    //         });
    //     }.bind(this));
    // };

    // httpVueLoader.langProcessor.babel = function (script) {
    //     return Babel.transform(script, {
    //         moduleId: this.name,
    //         presets: [
    //             'es2015',
    //             'stage-3',
    //         ],
    //         plugins: [
    //             'transform-es2015-modules-amd',
    //         ],
    //     }).code;
    // };

    return {
        load: function (name, req, onload, config) {

            console.log('vue3 load name', name)
            console.log('vue3 load req',req)
            console.log('vue3 load onload',onload)

            // httpVueLoader(req.toUrl(name) + '.vue', name)().then(onload);
            loadModule(req.toUrl(name) + '.vue', options).then(onload)

            console.log(req.toUrl(name) + '.vue',name)
        },
    };
});
