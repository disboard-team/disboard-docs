import { defineConfig } from 'vitepress'

const siteUrl = 'https://docs.disboard.team'

function getRoutePath(relativePath) {
  const path = relativePath.replace(/\\/g, '/').replace(/\.md$/, '')
  if (path === 'index') return '/'
  if (path.endsWith('/index')) return `/${path.slice(0, -'index'.length)}`
  return `/${path}`
}

function applySeoMetadata(pageData) {
  const relativePath = pageData.relativePath.replace(/\\/g, '/').replace(/\.md$/, '')
  const isSpanish = relativePath.startsWith('es/')
  const isArchive = relativePath.startsWith('v0/')
  const language = isSpanish ? 'es' : 'en'
  const languageTag = isSpanish ? 'es-ES' : 'en-US'
  const localizedPath = relativePath.replace(/^(es|v0)\//, '')
  const routePath = getRoutePath(relativePath)
  const canonicalPath = isArchive ? getRoutePath(localizedPath) : routePath
  const canonicalUrl = `${siteUrl}${canonicalPath}`
  const englishUrl = `${siteUrl}${getRoutePath(localizedPath)}`
  const spanishPath = localizedPath === 'index'
    ? '/es/'
    : `/es/${localizedPath}`
  const spanishUrl = `${siteUrl}${spanishPath}`
  const pageTitle = pageData.title
  const pageDescription = pageData.description
  const socialImage = `${siteUrl}/images/og-disboard-docs${language === 'es' ? '-es' : ''}.png`
  const socialImageAlt = language === 'es'
    ? 'Documentación de Disboard.team'
    : 'Disboard.team Documentation'
  const socialTitle = language === 'es'
    ? `${pageTitle} | Documentación de Disboard.team`
    : `Disboard.team ${pageTitle}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'Disboard.team Documentation',
        inLanguage: ['en-US', 'es-ES'],
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: socialTitle,
        description: pageDescription,
        inLanguage: languageTag,
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
    ],
  }
  const existingHead = pageData.frontmatter.head ?? []
  const alternateLinks = isArchive
    ? []
    : [
        ['link', { rel: 'alternate', hreflang: 'en-US', href: englishUrl }],
        ['link', { rel: 'alternate', hreflang: 'es-ES', href: spanishUrl }],
        ['link', { rel: 'alternate', hreflang: 'x-default', href: englishUrl }],
      ]

  pageData.frontmatter.head = [
    ...existingHead,
    ['link', { rel: 'canonical', href: canonicalUrl }],
    ...alternateLinks,
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Disboard.team Documentation' }],
    ['meta', { property: 'og:title', content: socialTitle }],
    ['meta', { property: 'og:description', content: pageDescription }],
    ['meta', { property: 'og:url', content: canonicalUrl }],
    ['meta', { property: 'og:image', content: socialImage }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: socialImageAlt }],
    ['meta', { property: 'og:locale', content: language === 'es' ? 'es_ES' : 'en_US' }],
    ...(!isArchive
      ? [['meta', { property: 'og:locale:alternate', content: language === 'es' ? 'en_US' : 'es_ES' }]]
      : []),
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: socialTitle }],
    ['meta', { name: 'twitter:description', content: pageDescription }],
    ['meta', { name: 'twitter:image', content: socialImage }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(schema).replace(/</g, '\\u003c')],
  ]
}

export default defineConfig({
  title: 'Disboard.team Docs',
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
      title: 'Documentación de Disboard.team',
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
  sitemap: {
    hostname: siteUrl,
    transformItems(items) {
      return items.filter((item) => !item.url.startsWith('v0/'))
    },
  },
  transformPageData: applySeoMetadata,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#171020' }],
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
