module.exports = {
  siteMetadata: {
    title: 'Mark Keller',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: true,
              backgroundColor: 'transparent'
            },
          },
          `gatsby-remark-static-images`
        ],
      },
    }
  ],
}
