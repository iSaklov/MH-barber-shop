/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `M.H. - barber shop`,
    siteUrl: `https://isaklov.github.io/MH-barber-shop`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/src/assets/logo.svg`
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`
      },
      __key: 'assets'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      },
      __key: 'pages'
    },
    `gatsby-plugin-provide-react`
  ]
}
