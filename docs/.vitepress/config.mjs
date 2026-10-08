import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Jibril',
  description: 'Disboard documentation. Covers everything related to the disboard project, from the web and API reference to the coding and commands from the bot.',
  base: '/',
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Docs', link: '/' },
          { text: 'API', link: '/api' },
          { text: 'Website', link: '/web' },
          { text: 'Bot', link: '/bot' },
          {
            text: 'Versions',
            items: [
              { text: 'v1 (current)', link: '/' },
              { text: 'v0 (archive)', link: '/v0/' },
            ],
          },
        ],
        sidebar: {
          '/': [
            {
              text: 'v1 (current)',
              items: [
                { text: 'Docs', link: '/' },
                { text: 'API', link: '/api' },
                { text: 'Website', link: '/web' },
                { text: 'Bot', link: '/bot' },
              ],
            },
          ],
          '/v0/': [
            {
              text: 'v0 (archive)',
              items: [
                { text: 'Docs', link: '/v0/' },
                { text: 'API', link: '/v0/api' },
                { text: 'Website', link: '/v0/web' },
                { text: 'Bot', link: '/v0/bot' },
              ],
            },
          ],
        },
        outline: {
          level: [2, 3],
          label: 'On this page',
        },
        lastUpdated: {
          text: 'Last updated',
        },
      },
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      title: 'Jibril',
      description: 'Documentación de Disboard: referencia de la web y la API, y guía del bot.',
      themeConfig: {
        nav: [
          { text: 'Documentación', link: '/es/' },
          { text: 'API', link: '/es/api' },
          { text: 'Web', link: '/es/web' },
          { text: 'Bot', link: '/es/bot' },
          {
            text: 'Versiones',
            items: [
              { text: 'v1 (actual)', link: '/es/' },
              { text: 'v0 (archivo)', link: '/v0/' },
            ],
          },
        ],
        sidebar: {
          '/es/': [
            {
              text: 'v1 (actual)',
              items: [
                { text: 'Documentación', link: '/es/' },
                { text: 'API', link: '/es/api' },
                { text: 'Web', link: '/es/web' },
                { text: 'Bot', link: '/es/bot' },
              ],
            },
          ],
        },
        outline: {
          level: [2, 3],
          label: 'En esta página',
        },
        lastUpdated: {
          text: 'Última actualización',
        },
      },
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    logo: '/images/jibril_square.jpg',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/disboard-team/disboard-docs' },
    ],
  },
})
