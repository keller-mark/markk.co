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
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`
  ],
}
