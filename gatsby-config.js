module.exports = {
  siteMetadata: {
    title: `Spłata Pożyczek`,
    siteUrl: `https://splatapozyczekmaster.gatsbyjs.io`
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        schema: {
          timeout: 3000000,
          perPage: 10,
          requestConcurrency: 10,
        },
        "url": "https://wp-splatapozyczek.headlesshub.com/graphql"
      }
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 90,
        },
      },
    },
    'gatsby-transformer-sharp',
    "gatsby-plugin-styled-components",
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        sitemap: 'https://splatapozyczekmaster.gatsbyjs.io/sitemap_index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.png',
        name: `Splata pożyczek`,
        short_name: `Splata pożyczek`,
        start_url: `/`,
        background_color: `#3B5BA9`,
        theme_color: `#3B5BA9`,
        display: `standalone`
      }
    },
    {
      resolve: "gatsby-plugin-yoast-sitemap",
      options: {
        baseUrl: 'https://wp-splatapozyczek.headlesshub.com',
        gatsbyUrl: 'https://splatapozyczekmaster.gatsbyjs.io'
      }
    },
  ]
};