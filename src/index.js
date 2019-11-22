import List from './List.vue'
import Image from './Image.vue'

const install = Vue => {
  Vue.component('uncover-list', List)
  Vue.component('uncover-image', Image)
}

export default {
  install
}

export { List, Image }
