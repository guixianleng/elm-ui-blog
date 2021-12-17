### :tada: 安装
### 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```shell
 npm i zh-elm-ui -S
```

### 引入 zh-elm-ui

在 main.js 写入以下内容：

```js
import Vue from 'vue'
import ElmUI from 'zh-elm-ui'
import App from './App.vue'
import 'zh-elm-ui/lib/zh-elm-ui.css'

Vue.use(ElmUI)

new Vue({
  el: '#app',
  render: (h) => h(App),
})