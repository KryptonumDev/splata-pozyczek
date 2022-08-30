const fs = require('fs')
const { resolve } = require('path')

exports.createPages = async ({
    graphql,
    actions: { createPage },
}) => {
    const { data: { allWpPage: { nodes } } } = await graphql(`
    query {
      allWpPage{
        nodes {
          id
          uri
        }
      }
    }
  `);

    nodes.forEach(({ id, uri }) => {
        createPage({
            path: uri,
            component: resolve('src/templates/page.jsx'),
            context: {
                id
            },
        });
    });
}