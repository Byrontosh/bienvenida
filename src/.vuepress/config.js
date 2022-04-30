module.exports = {
  dest:'docs',
  base:'/bienvenida/',
  title: 'Bienvenid@s querid@s coders',
  description: "Introducción a los cursos de la ESFOT-EPN",
  head: [
    ['link', { rel: "icon", type: "image/png", href: "/favicon.ico"}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Youtube',
        link: 'https://www.youtube.com/channel/UCV0DyCR78jQayaJfMmdkjLw'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Byrontosh'
      },
      {
        text: 'Epn',
        link: 'https://www.epn.edu.ec/'
      },
      {
        text: 'Aulas virtuales',
        link: 'https://aulasvirtuales.epn.edu.ec/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Cursos Disponibles',
          collapsable: false,
          children: [
            '',
            'curso2',
          ]
        }
      ]
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
