const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './config/typography.js',
      },
    },
    // `gatsby-plugin-catch-links`,
    // `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: website.googleAnalyticsId,
    //     anonymize: true,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    // Define Account (app)
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/account/*`] },
    },
    // Netlify Identity Widget
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: 'https://jamstack-bastien.netlify.com',
      },
    },
    // Define the manifest before the offline plugin
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: 'src/images/image-abstract.jpg',
      },
    },
    // Adds drop-in support for offline
    `gatsby-plugin-offline`,
  ],
};
