const path = require('path')

module.exports = {
  base: '/zh-elm-ui/',
  title: '组件库文档说明',
  description: '基于elementUI进行二次封装',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
  ],
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      {
        text: '主页',
        link: '/',
      },
      { text: 'Elm-UI', link: '/Elm-ui/' },
      { text: '开发规范', link: '/standard/' },
    ],
    sidebar: [
      {
        title: 'elm-ui',
        collapsable: false,
        children: ['/views/'],
      },
      {
        title: 'ElmForm表单',
        collapsable: true,
        children: ['views/form.md'],
      },
      {
        title: 'ElmTable表格',
        collapsable: true,
        children: ['views/table.md'],
      },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('../../docs'),
        static: path.resolve('@/.vuepress/public/static'),
      },
    },
  },
  plugins: ['vuepress-plugin-cat', 'demo-block', '@vuepress/back-to-top'],
}
