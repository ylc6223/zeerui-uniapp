import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import zui from './common/httpRequest'
import propsConfig from "@/components/zeerui/zui-config";
//全局组件配置
uni.$zui = propsConfig
Vue.config.productionTip = false
Vue.prototype.zui = zui
// Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
