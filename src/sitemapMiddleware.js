import VueRouterSitemap from 'vue-router-sitemap'
import path from 'path'
import { router } from 'router'
import App from './App'

export const sitemapMiddleware = () => {
  return (req, res) => {
    res.set('Content-Type', 'application/xml')

    const staticSitemap = path.resolve('dist/static', 'sitemap.xml')
    const filterConfig = {
      isValid: false,
      rules: [
        /\/example-page/,
        /\*/
      ]
    }

    new VueRouterSitemap(router).filterPaths(filterConfig).build('https://nevcan.com').save(staticSitemap)

    return res.sendFile(staticSitemap)
  }
}

App.get('/sitemap.xml', sitemapMiddleware())

// TODO: çalışmıyor
