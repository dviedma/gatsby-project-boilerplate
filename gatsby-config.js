require("dotenv").config()

const path = require("path")
const TOKEN = process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
const HOST = process.env.GATSBY_CONTENTFUL_HOST

module.exports = {
  siteMetadata: {
    title: `Daniel Viedma Boilerplate Project`,
    description: `Kick off your next, great Daniel Viedma project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Daniel Viedma Tech`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i78lulzyh6fb`,
        accessToken: TOKEN,
        host: HOST,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@static": path.resolve(__dirname, "static"),
          "@layouts": path.resolve(__dirname, "src/layouts"),
          "@components": path.resolve(__dirname, "src/components"),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
