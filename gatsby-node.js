const fs = require('fs')
const { resolve } = require('path')

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {

  // Create pages

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

  const { data: { allWpTag: { nodes: categoryNodes } } } = await graphql(`
  query{
    allWpTag {
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

  const { data: { allWpEkspert: { nodes: expertsNodes } } } = await graphql(`
  query{
    allWpEkspert {
      nodes {
        id
        slug
      }
    }
  }
  `)

  expertsNodes.forEach(({ slug, id }) => {
    createPage({
      path: '/zespol/' + slug + '/',
      component: resolve('src/templates/expert.jsx'),
      context: {
        id: id,
        slug,
        url: '/zespol/' + slug + '/'
      },
    });
  });


  const { data: { allWpPost: { nodes: postNodes } } } = await graphql(`
  query{
    allWpPost {
      nodes {
        id
        slug
      }
    }
  }
  `)

  postNodes.forEach(({ slug, id }) => {
    createPage({
      path: '/blog/' + slug + '/',
      component: resolve('src/templates/post.jsx'),
      context: {
        id: id,
        slug,
        url: '/blog/' + slug + '/'
      },
    });
  });

  // Create redirects


  const { data: { wpPage: { global: { redirects } } } } = await graphql(`
  query{
    wpPage(id: {eq: "cG9zdDo2MzQ="}) {
      global {
        redirects {
          from
          to
        }
      }
    }
  }
  `)

  redirects?.forEach(el => {
    createRedirect({
      fromPath: el.from,
      toPath: el.to,
    });
  })

}