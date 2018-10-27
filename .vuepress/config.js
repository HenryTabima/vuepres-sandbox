module.exports = {
  title: 'HVuepress',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Page1', link: '/page1.html' },
      { text: 'foo', link: '/foo/' },
      { text: 'google', link: 'https://google.com' }
    ]
  }
}