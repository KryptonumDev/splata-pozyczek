module.exports = {
  siteMetadata: {
    title: `Spłata Pożyczek`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": "http://splatapozyczek.local/graphql"
      }
    }, 
    "gatsby-plugin-styled-components"]
};