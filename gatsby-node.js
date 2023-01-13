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

  //return result; //JavaScript object
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
      console.log({
        fromPath: el['Adres URL do przekierowania'],
        toPath: el['Docelowy URL'],
      })
      createRedirect({
        fromPath: el['Adres URL do przekierowania'],
        toPath: el['Docelowy URL'],
      });
    })
  }

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

}