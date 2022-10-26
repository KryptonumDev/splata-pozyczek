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
    if (id !== 'cG9zdDo0MzQ=' && id !== 'cG9zdDozNzU=' && id !== 'cG9zdDo2MzQ=') {
      createPage({
        path: uri,
        component: resolve('src/templates/page.jsx'),
        context: {
          id,
          slug: null,
          url: uri
        },
      });
    }
  });

  const { data: { allWpCategory: { nodes: categoryNodes } } } = await graphql(`
  query{
    allWpCategory {
      nodes {
        slug
        count
      }
    }
  }
  `)

  categoryNodes.forEach(({ slug, count }) => {
    if (count) {
      createPage({
        path: '/blog/tag/' + slug + '/',
        component: resolve('src/templates/page.jsx'),
        context: {
          id: 'cG9zdDoxMDEz',
          slug,
          url: '/blog/tag/' + slug + '/'
        },
      });
    }
  });
}