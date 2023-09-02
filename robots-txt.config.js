module.exports = {
  host: 'https://mh-barbershop.fr',
  sitemap: 'https://mh-barbershop.fr/sitemap-index.xml',
  policy: [
    {
      userAgent: '*',
      disallow: '/admin'
    },
    {
      userAgent: '*',
      allow: '/'
    }
  ]
}
