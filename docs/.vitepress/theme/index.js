import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof document === 'undefined') return

    const updateArchiveClass = (path) => {
      document.documentElement.classList.toggle(
        'v0-archive',
        path === '/v0' || path.startsWith('/v0/'),
      )
    }

    updateArchiveClass(router.route.path)
    router.onAfterRouteChanged = updateArchiveClass
  },
}
