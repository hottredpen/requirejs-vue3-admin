// import {createStore} from 'vuex'

export default window.Vuex.createStore({
    state: {
        tagsList: [],
        collapse: false
    },
    mutations: {
        delTagsItem(state, data) {
            state
                .tagsList
                .splice(data.index, 1);
        },
        setTagsItem(state, data) {
            state
                .tagsList
                .push(data)
        },
        clearTags(state) {
            state.tagsList = []
        },
        closeTagsOther(state, data) {
            state.tagsList = data;
        },
        closeCurrentTag(state, data) {
            for (let i = 0, len = state.tagsList.length; i < len; i++) {
                const item = state.tagsList[i];
                if (item.path === data.$route.fullPath) {
                    if (i < len - 1) {
                        data
                            .$router
                            .push(state.tagsList[i + 1].path);
                    } else if (i > 0) {
                        data
                            .$router
                            .push(state.tagsList[i - 1].path);
                    } else {
                        data
                            .$router
                            .push("/");
                    }
                    state
                        .tagsList
                        .splice(i, 1);
                    break;
                }
            }
        },
        // 侧边栏折叠
        handleCollapse(state, data) {
            state.collapse = data;
        }
    },
    actions: {
        sss({ commit, state }, {'component_name':component_name,'cb':cb}) {
            console.log('component_name0',component_name)
            console.log('cb0',cb)
            return new Promise(function(resolve, reject) {
                console.log('component_name',component_name)
                console.log('cb',cb)

                // component_name = 'test3'
                var is_add_version = '?version='+Date.parse(new Date());
                is_add_version = "";
                require(['component!http://iview3.me/js/view/pages/'+component_name+is_add_version],function(component_js){
                    // console.log(component_js);
                    if(component_js){
                        // console.log('入口处载入的component_js');
                        // console.log(component_js);
                        cb(component_js);
                        resolve(true);
                    }else{
                        reject(false);
                    }
                });
            });


            // return new Promise((resolve) => {
            //   commit('DEL_VISITED_VIEWS', view)
            //   resolve([...state.visitedViews])
            // })
        }
    },
    modules: {}
})