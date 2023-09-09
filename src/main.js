import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import propsConfig from "@/components/zeerui/zui-config";
//全局组件配置
uni.$zui = propsConfig
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
