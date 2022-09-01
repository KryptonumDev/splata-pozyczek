module.exports = {
  siteMetadata: {
    title: `Spłata Pożyczek`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": "https://test.splatapozyczek.pl/graphql"
      }
    }, 
    "gatsby-plugin-styled-components"]
};