import router from 'babel!./router/index';
import store from 'babel!./store/store';
import App from 'component!./App';

let app = window.Vue.createApp(App)
app.use(window.ElementPlus);
app.use(window.ElementPlusIconsVue);
app.use(store)
app.use(router)
app.mount("#app")

// 挂载事务总线为全局属性
let mitter = new window.mitt()
app.config.globalProperties.$mybus = mitter

mitter.on('dynamic-page',(obj)=>{

    let component_name = obj.component_name
    let cb = obj.cb
    console.log('component_name',component_name)
    console.log('component_name0',component_name)
    console.log('cb0',app)
    return new Promise(function(resolve, reject) {
        console.log('component_name',component_name)
        console.log('cb',cb)

        // component_name = 'test3'
        var is_add_version = '?version='+Date.parse(new Date());
        is_add_version = "";
        require(['component!http://iview3.me/js/view/pages/'+component_name+is_add_version],function(component_js){
            // console.log(component_js);
            if(component_js){
                console.log('入口处载入的component_js');
                console.log(component_js);
                app.component(component_js)
                cb(component_js);
                resolve(true);
            }else{
                reject(false);
            }
        });
    });

})

// mitter.on('dynamic-page',(component_name,cb)=>{
//     console.log('component_name0',component_name)
//     console.log('cb0',cb)
//     return new Promise(function(resolve, reject) {
//         console.log('component_name',component_name)
//         console.log('cb',cb)

//         // component_name = 'test3'
//         var is_add_version = '?version='+Date.parse(new Date());
//         is_add_version = "";
//         require(['component!http://iview3.me/js/view/pages/'+component_name+is_add_version],function(component_js){
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
//     });

// })

export default app