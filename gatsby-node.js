const fs = require('fs')
const { resolve } = require('path')
const fetch = (...args) =>
  import(`node-fetch`).then(({ default: fetch }) => fetch(...args))

const csvParser = (data) => {
  let lines = data.split("\r\n");

  let result = [];

  let headers = lines[0].split(";");

  for (let i = 1; i < lines.length; i++) {
    let obj = {};
    let currentline = lines[i].split(";");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj)

  }

  return result; //JSON
};


exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {

  // Create redirects

  const { data: { wpPage: { global: { csvRedirects } } } } = await graphql(`
  query{
    wpPage(id: {eq: "cG9zdDo2MzQ="}) {
      global {
        csvRedirects {
          mediaItemUrl
        }
      }
    }
  }
  `)

  if (csvRedirects?.mediaItemUrl) {
    const result = await fetch(csvRedirects.mediaItemUrl)
    const resultData = await result.text()

    csvParser(resultData)?.forEach(el => {
      createRedirect({
        fromPath: el.from,
        toPath: el.to,
        statusCode: el.code
      });
    })
  }

  // Create pages

  const { data: { allWpPage: { nodes } } } = await graphql(`
  {
    allWpPage(filter: {id: {ne: "cG9zdDoxMDEz"}}) {
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

  // category pages

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
      for (let i = 10; i < count; i += 10) {
        createPage({
          path: '/blog/tag/' + slug + '/' + i / 10 + '/',
          component: resolve('src/templates/page.jsx'),
          context: {
            id: 'cG9zdDoxMDEz',
            slug,
            urlBasis: '/blog/tag/' + slug + '/',
            url: '/blog/tag/' + slug + '/' + i / 10 + '/',
            title: 'name',
            page: i / 10
          },
        });
      }

      createPage({
        path: '/blog/tag/' + slug + '/',
        component: resolve('src/templates/page.jsx'),
        context: {
          id: 'cG9zdDoxMDEz',
          slug,
          urlBasis: '/blog/tag/' + slug + '/',
          url: '/blog/tag/' + slug + '/',
          title: name,
          page: 1
        },
      });
    }
  });

  // blog archive

  const { data: { allWpPost: { totalCount: postsCount } } } = await graphql(`
  {
    allWpPost {
      totalCount
    }
  }
  `)

  for (let i = 10; i < postsCount; i += 10) {
    createPage({
      path: '/blog/' + i / 10 + '/',
      component: resolve('src/templates/page.jsx'),
      context: {
        id: 'cG9zdDoxMDEz',
        slug: null,
        urlBasis: '/blog/',
        url: '/blog/' + i / 10 + '/',
        title: 'Blog',
        page: i / 10
      },
    });
  }

  createPage({
    path: '/blog/',
    component: resolve('src/templates/page.jsx'),
    context: {
      id: 'cG9zdDoxMDEz',
      slug: null,
      urlBasis: '/blog/',
      url: '/blog/',
      title: 'Blog',
      page: 1
    },
  });



  // EXPERTS

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

}