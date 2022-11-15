module.exports = {
  siteMetadata: {
    title: `Spłata Pożyczek`,
    siteUrl: `https://splatapozyczekmaster.gatsbyjs.io`
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": "https://testy.kryptonum.co.uk/graphql"
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        preconnect: ["https://fonts.gstatic.com", "https://fonts.googleapis.com"],
        web: [{
          name: "Arsenal",
          file: `https://fonts.googleapis.com/css2?family=Arsenal:wght@400;700&display=swap`,
        },
        {
          name: "Source Sans Pro",
          file: `https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap`,
        }
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        sitemap: 'https://splatapozyczekmaster.gatsbyjs.io/sitemap/sitemap-0.xml',
        policy:  [{ userAgent: '*', allow: '/' }]
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
  ]
};