import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "纳西妲❤星野梦代",
  description: "星野梦代与纳西妲的同人百合小说",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开始阅读', link: '/start' }
    ],

    sidebar: [
      {
        text: '前言',
        items: [
          { text: '写在最前面', link: '/start' }
        ]
      },
      {
        text: '人物简介',
        items: [
          {text: '星野梦代',link: '/character/yumeyo'},
          {text: '纳西妲',link: '/character/nahida'},
          {text: '图集',link: '/character/pictures'},
        ]
      },
      {
        text: '第一章',
        items: [
          { text: '额外说明', link: '/section/one/about'},
          { text: '第一节', link: '/section/one/1'},
          { text: '第二节', link: '/section/one/2'},
          { text: '第三节', link: '/section/one/3'},
          { text: '第四节', link: '/section/one/4'},
          { text: '第五节', link: '/section/one/5'},
          { text: '第六节', link: '/section/one/6'},
        ]
      },
      {
        text: '第二章',
        items: [
          { text: '额外说明', link: '/section/two/about'},
          { text: '第一节', link: '/section/two/1'},
          { text: '第二节', link: '/section/two/2'},
          { text: '第三节', link: '/section/two/3'},
          { text: '第四节', link: '/section/two/4'},
          { text: '第五节', link: '/section/two/5'},
          { text: '第六节', link: '/section/two/6'},
          { text: '第七节', link: '/section/two/7'},
          { text: '第八节', link: '/section/two/8'},
          { text: '第九节', link: '/section/two/9'},
          { text: '第十节', link: '/section/two/10'},
          { text: '第十一节', link: '/section/two/11'},
          { text: '第十二节', link: '/section/two/12'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YearnstudioYangyi/NaAndXing' }
    ]
  }
})
