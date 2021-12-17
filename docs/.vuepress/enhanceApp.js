import ElementUI from 'element-ui'
import ElmUI from 'zh-elm-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'zh-elm-ui/lib/zh-elm-ui.css'

export default ({ Vue, options, router }) => {
  Vue.use(ElementUI)
  Vue.use(ElmUI)
}
