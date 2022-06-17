module.exports = {
  siteMetadata: {
    title: `Burleson Nails Spa - Professional Nail Care | TX 76028`,
    description: `Burleson Nails & Spa offers services such as manicure, pedicure, waxing, and more.`,
    author: `Hy Nguyen`,
    url: "https://www.burlesonnails.com",
    image: "/gallery/img2.jpg"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
