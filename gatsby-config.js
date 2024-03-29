module.exports = {
  siteMetadata: {
    title: `Spłata Pożyczek`,
    siteUrl: `https://splatapozyczek.pl`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WMRZK4K",
        defaultDataLayer: { platform: "gatsby" },
        includeInDevelopment: true,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        schema: {
          timeout: 3000000,
          perPage: 20, // currently set to 100
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
        "url": "https://www-data.splatapozyczek.pl/graphql"
      }
    }, 
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 70,
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
      resolve: "kryptonum-gatsby-plugin-yoast-sitemap",
      options: {
        baseUrl: 'https://www-data.splatapozyczek.pl',
        gatsbyUrl: 'https://splatapozyczek.pl' 
      }
    },
  ]
};