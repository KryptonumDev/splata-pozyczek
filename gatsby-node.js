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
          title
          id
          uri
        }
      }
    }
  `);

  nodes.forEach(({ id, uri, title }) => {
    if (id !== 'cG9zdDo0MzQ=' && id !== 'cG9zdDozNzU=' && id !== 'cG9zdDo2MzQ=') {
      createPage({
        path: uri,
        component: resolve('src/templates/page.jsx'),
        context: {
          id,
          slug: null,
          url: uri,
          title: title
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
        name
      }
    }
  }
  `)

  categoryNodes.forEach(({ slug, count, name }) => {
    if (count) {
      createPage({
        path: '/blog/tag/' + slug + '/',
        component: resolve('src/templates/page.jsx'),
        context: {
          id: 'cG9zdDoxMDEz',
          slug,
          url: '/blog/tag/' + slug + '/',
          title: name
        },
      });
    }
  });

  const { data: { allWpEkspert: { nodes: expertsNodes } } } = await graphql(`
  query{
    allWpEkspert {
      nodes {
        ekspert {
          workWithProducts
        }
        id
        slug
        title
      }
    }
  }
  `)

  expertsNodes.forEach(({ slug, id, title, ekspert }) => {
    createPage({
      path: '/zespol/' + slug + '/',
      component: resolve('src/templates/expert.jsx'),
      context: {
        id: id,
        slug,
        url: '/zespol/' + slug + '/',
        title: title,
        role: ekspert.workWithProducts
      },
    });
  });


  const { data: { allWpPost: { nodes: postNodes } } } = await graphql(`
  query{
    allWpPost {
      nodes {
        id
        slug
        title
      }
    }
  }
  `)

  postNodes.forEach(({ slug, id, title }) => {
    createPage({
      path: '/blog/' + slug + '/',
      component: resolve('src/templates/post.jsx'),
      context: {
        id: id,
        slug,
        url: '/blog/' + slug + '/',
        title: title
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