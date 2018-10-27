module.exports = {
  title: 'HVuepress',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true, // Default: false
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Page1', link: '/page1' },
      { text: 'foo', link: '/foo/' },
      { text: 'google', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      },
      {
        text: 'Groups',
        items: [
          { text: 'Group1', items: [
            { text: 'item1', link: '/item' },
            { text: 'item2', link: '/item' }
          ] },
          { text: 'Group2', items: [
            { text: 'item3', link: '/item' },
            { text: 'item4', link: '/item' }
          ] }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [
          '/page1',
          ['/foo/', 'Explicit link text']
        ]
      }
    ]
  }
}