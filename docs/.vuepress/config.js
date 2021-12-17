const path = require('path')

module.exports = {
  base: '/zh-elm-ui/',
  title: '组件库文档说明',
  description: '基于elementUI进行表单、表格等二次封装',
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
        title: '安装',
        collapsable: false,
        children: ['/views/'],
      },
      {
        title: 'form表单',
        collapsable: true,
        children: ['views/form.md'],
      },
      {
        title: 'table表格',
        collapsable: true,
        children: ['views/table.md'],
      },
      {
        title: 'add-minus自增减',
        collapsable: true,
        children: ['views/add-minus.md'],
      },
      {
        title: 'pagination分页',
        collapsable: true,
        children: ['views/pagination.md'],
      },
      {
        title: 'upload上传',
        collapsable: true,
        children: ['views/upload.md'],
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
