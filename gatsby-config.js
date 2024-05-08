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
        verbose: true,
        debug: {
          preview: true,
          timeBuildSteps: true,
          graphql: {
            showQueryVarsOnError: true,
            writeQueriesToDisk: false,
          },
        },
        schema: {
          timeout: 3000000,
          perPage: 20, // currently set to 100
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
        url: "https://www-data.splatapozyczek.pl/graphql",
        develop: {
          nodeUpdateInterval: 3600000,
          hardCacheMediaFiles: true,
          hardCacheData: true,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 60,
            },
          },
          Post: {
            limit: process.env.NODE_ENV === `development` ? 50 : null,
          },
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['webp','avif'],
          placeholder: `none`,
          breakpoints: [768],
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
