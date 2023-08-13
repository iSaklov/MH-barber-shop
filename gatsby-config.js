require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `M.H. - barber shop`,
    description: `M.H. - salon de coiffure pour hommes à Épernon. Spécialistes des coupes de cheveux et de la barbe. Service sans rendez-vous. Nos coiffeurs experts vous offrent des prestations de qualité, en créant des coiffures tendance qui reflètent votre personnalité. Rendez-nous visite pour obtenir le look parfait !`,
    keywords: `barbershop Épernon, coupe homme, rasage, entretien de la barbe, sans rendez-vous, coiffures élégantes, coupes tendance, coupe enfant`,
    siteUrl: `https://mhbarbershop.gatsbyjs.io`
  },
  // flags: {
  //   DEV_SSR: true
  // },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/src/assets/logo.svg`
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true
      }
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        type: `upload`,
        maxResults: 24,
        tags: true,
        context: true,
        prefix: `mh-barbershop`
      }
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        // Add the `gatsbyImageData` resolver to `CloudinaryMedia`
        transformTypes: [`CloudinaryMedia`],
        // Optional transformation option
        defaultTransformations: ['c_fill', 'g_auto', 'q_auto']
      }
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`
          // quality: 50,
          // breakpoints: [750, 1080, 1366, 1920],
          // backgroundColor: `transparent`,
          // blurredOptions: {},
          // jpgOptions: {},
          // pngOptions: {},
          // webpOptions: {},
          // avifOptions: {}
        }
      }
    },
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
