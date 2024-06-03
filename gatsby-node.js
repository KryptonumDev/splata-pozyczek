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

// exports.onPostBuild = async ({ graphql }) => {

//   // Create redirects

//   const { data: { wpPage: { global: { csvRedirects } } } } = await graphql(`
//   query{
//     wpPage(id: {eq: "cG9zdDo2MzQ="}) {
//       global {
//         csvRedirects {
//           mediaItemUrl
//         }
//       }
//     }
//   }
//   `)

//   if (csvRedirects?.mediaItemUrl) {
//     const result = await fetch(csvRedirects.mediaItemUrl)
//     const resultData = await result.text()

//     const redirectConfig = csvParser(resultData)?.map(el => (
//       `[[redirects]]
//         from = "${el.from}"
//         to = "${el.to}"
//         status = ${el.code}
//         force = ${el.force || false}`
//     ))

//     redirectConfig.push(`[[redirects]]
//       from = "/blog/tag/*"
//       to = "/tag/*"
//       status = 301
//       force = false
//     `)

//     fs.writeFileSync('netlify.toml', redirectConfig.join('\n'));
//   }
// };

exports.createPages = async ({
  graphql,
  actions: { createPage },
}) => {


  // Create pages

  const { data: { allWpPage: { nodes } } } = await graphql(`
  {
    allWpPage(filter: {id: {ne: "cG9zdDoxMDEz"}}) {
      nodes {
        title
        id
        uri
        date
        modified
      }
    }
  }
  `);

  nodes.forEach(({ id, uri, title, date, modified }) => {
    if (id !== 'cG9zdDo0MzQ=' && id !== 'cG9zdDozNzU=' && id !== 'cG9zdDo2MzQ=') {
      createPage({
        path: uri,
        component: resolve('src/templates/page.jsx'),
        context: {
          id,
          slug: null,
          url: uri,
          title: title,
          date: date,
          dateModified: modified
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
      for (let i = 12; i < count; i += 12) {
        createPage({
          path: '/tag/' + slug + '/' + (i / 12 + 1) + '/',
          component: resolve('src/templates/page.jsx'),
          context: {
            id: 'cG9zdDoxMDEz',
            slug,
            urlBasis: '/tag/' + slug + '/',
            url: '/tag/' + slug + '/' + (i / 12 + 1) + '/',
            title: 'name',
            page: (i / 12 + 1)
          },
        });
      }

      createPage({
        path: '/tag/' + slug + '/',
        component: resolve('src/templates/page.jsx'),
        context: {
          id: 'cG9zdDoxMDEz',
          slug,
          urlBasis: '/tag/' + slug + '/',
          url: '/tag/' + slug + '/',
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

  for (let i = 12; i < postsCount; i += 12) {
    createPage({
      path: '/blog/' + (i / 12 + 1) + '/',
      component: resolve('src/templates/page.jsx'),
      context: {
        id: 'cG9zdDoxMDEz',
        slug: null,
        urlBasis: '/blog/',
        url: '/blog/' + (i / 12 + 1) + '/',
        title: 'Blog',
        page: (i / 12 + 1)
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
        date
        modified
      }
    }
  }
  `)

  expertsNodes.forEach(({ slug, id, title, ekspert, date, modified }) => {
    createPage({
      path: '/zespol/' + slug + '/',
      component: resolve('src/templates/expert.jsx'),
      context: {
        id: id,
        slug,
        url: '/zespol/' + slug + '/',
        title: title,
        role: ekspert.workWithProducts,
        date: date,
        dateModified: modified
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
        categories : tags {
          nodes {
            name
          }
        }
      }
    }
  }
  `)

  postNodes.forEach(({ slug, id, title, categories }) => {
    createPage({
      path: '/blog/' + slug + '/',
      component: resolve('src/templates/post.jsx'),
      context: {
        id: id,
        slug,
        url: '/blog/' + slug + '/',
        title: title,
        category: categories.nodes.map(el => el.name)
      },
    });
  });

}