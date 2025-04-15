import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Carpetas Vue-Apps",
  description: "Vue Apps",
  base: '/folder-structure-for-vue-apps/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',
    siteTitle: 'Vue Apps',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/folder-structures' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' },      
    ],
    sidebar: [     
      {
        items: [
          { text: 'Estructuras de Carpetas', link: '/folder-structures' },
          { text: 'Cuando la Aplicación Crece', link: '/when-the-app-grows' },
          { text: 'Estructura Modular', link: '/modular-structure' },
          { text: 'El Problema', link: '/the-problem' }
        ]
      }, {
        text: 'Alternativa',
        sidebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: false, 

        items: [
          { text: 'El Enfoque', link: '/the-approach' },
          { text: 'La Práctica', link: '/the-practice' }
        ]
      }, {
        items: [
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/folder-structure-for-vue-apps' }
    ]
  }
})
