/* eslint-disable no-undef */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
/**
 * @type {import(`gatsby`).GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `M.H. - barber shop`,
    description: `M.H. - salon de coiffure pour hommes à Épernon. Spécialistes des coupes de cheveux et de la barbe. Service sans rendez-vous. Nos coiffeurs experts vous offrent des prestations de qualité, en créant des coiffures tendance qui reflètent votre personnalité. Rendez-nous visite pour obtenir le look parfait !`,
    keywords: `barbershop Épernon, coupe homme, rasage, entretien de la barbe, sans rendez-vous, coiffures élégantes, coupes tendance, coupe enfant`,
    siteUrl: `https://mhbarbershop.gatsbyjs.io`
  },
  // flags: {
  // https://www.gatsbyjs.com/docs/debugging-html-builds/#ssr-during-gatsby-develop
  //   DEV_SSR: true
  // },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M.H. - barber shop Épernon`,
        short_name: `M.H. - barber`,
        lang: `fr`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#f1f1f1`,
        display: `standalone`,
        icon: `${__dirname}/src/assets/icon.svg`,
        cache_busting_mode: `none`,
        crossOrigin: `use-credentials`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/icon-path*`]
        }
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
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
        defaultTransformations: [`c_fill`, `g_auto`, `q_auto`]
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [576, 768, 1080, 1400, 1920],
          backgroundColor: `transparent`
        },
        // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
        failOn: `warning`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      },
      __key: `assets`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      },
      __key: `pages`
    },
    `gatsby-plugin-provide-react`
  ]
}
