module.exports = {
  siteMetadata: {
    title: `Spłata Pożyczek`,
    siteUrl: `https://www.yourdomain.tld`
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
        mode: "render-blocking",
        web: [{
            name: "Arsenal",
            file: "https://fonts.googleapis.com/css2?family=Arsenal:wght@400;700&display=swap",
          },
          {
            name: "Source Sans Pro",
            file: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap",
          }
        ],
      },
    }
  ]
};