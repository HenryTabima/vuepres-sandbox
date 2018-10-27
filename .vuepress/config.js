module.exports = {
  title: 'HVuepress',
  description: 'Just playing around',
  base: '/vuepres-sandbox/',
  dest: 'docs',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'HenryTabima/vuepres-sandbox',
    repoLabel: 'Contribute!',
    docsRepo: 'HenryTabima/vuepres-sandbox',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    displayAllHeaders: true, // Default: false
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Foo Bar',
        items: [
          { text: 'foo', link: '/foo/' },
          { text: 'bar', link: '/bar/' }
        ]
      },
      { text: 'Contact', link: '/contact' },
      { text: 'About', link: '/about' }
    ],
    sidebar: {
      '/bar/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/foo/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}