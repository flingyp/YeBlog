import Vue from 'vue'
import { 
  Button, 
  Icon 
} from 'ant-design-vue';
// import Antd from 'ant-design-vue/lib'
// Vue.use(Antd)

let componentsArr = [Button, Icon]

componentsArr.forEach((item, index) => {
  Vue.use(componentsArr[index])
})





