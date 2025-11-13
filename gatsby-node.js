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

  // new: get available root query fields once
  const getRootFields = async () => {
    const res = await graphql(`
      {
        __schema {
          queryType {
            fields {
              name
            }
          }
        }
      }
    `);
    return (res && res.data && res.data.__schema && res.data.__schema.queryType)
      ? res.data.__schema.queryType.fields.map(f => f.name)
      : [];
  };

  const availableRootFields = await getRootFields();

  // helper to check availability
  const hasRootField = (name) => availableRootFields.includes(name);

  // Create pages

  let nodes = [];
  if (hasRootField('allWpPage')) {
    const result = await graphql(`
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
    nodes = result?.data?.allWpPage?.nodes || [];
  } else {
    console.log('Skipping allWpPage query: root field not present in schema.');
  }

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

  let categoryNodes = [];
  if (hasRootField('allWpTag')) {
    const res = await graphql(`
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
    categoryNodes = res?.data?.allWpTag?.nodes || [];
  } else {
    console.log('Skipping allWpTag query: root field not present in schema.');
  }

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

  let postsCount = 0;
  if (hasRootField('allWpPost')) {
    const res = await graphql(`
    {
      allWpPost {
        totalCount
      }
    }
    `)
    postsCount = res?.data?.allWpPost?.totalCount || 0;
  } else {
    console.log('Skipping allWpPost totalCount query: root field not present in schema.');
  }

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

  let expertsNodes = [];
  if (hasRootField('allWpEkspert')) {
    const res = await graphql(`
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
    expertsNodes = res?.data?.allWpEkspert?.nodes || [];
  } else {
    console.log('Skipping allWpEkspert query: root field not present in schema.');
  }

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


  let postNodes = [];
  if (hasRootField('allWpPost')) {
    const res = await graphql(`
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
    postNodes = res?.data?.allWpPost?.nodes || [];
  } else {
    console.log('Skipping allWpPost nodes query: root field not present in schema.');
  }

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