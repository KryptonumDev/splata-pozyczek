import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { graphql, navigate } from "gatsby"
import PostGrid from "./post-grid"
import Filter from "./filter"
import Pagination from "./pagination"
import Hero from "./hero"

export default function BlogArchive({ data: { pageTitle, text, list, link, relatedPost }, title, allPosts, location, categories, slug }) {

  const [currentPage, setCurrentPage] = useState(() => {
    if (location.search === '') {
      return 1
    }
    const urlParams = new URLSearchParams(location.search)

    return parseInt(urlParams.get('page'))
  })
  const [currentFilter, setCurrentFilter] = useState(slug)

  const filtredPosts = useMemo(() => {
    let posts = allPosts
    if (currentFilter) {
      posts = posts.filter(el => {
        let isFiltred = false
        el.categories.nodes?.forEach(inEl => {
          if (inEl.slug === currentFilter) {
            isFiltred = true
          }
        })
        return isFiltred
      })
    }
    return posts
  }, [currentFilter, allPosts])

  useEffect(() => {
    setCurrentPage(() => {
      if (location.search === '') {
        return 1
      }
      const urlParams = new URLSearchParams(location.search)

      return parseInt(urlParams.get('page'))
    })
  }, [location])

  useEffect(() => {
    if (typeof window !== `undefined` && location.search !== '') {
      let url = '/blog/'

      if (currentPage !== 1) {
        url = url + '?page=' + currentPage
      }
      if (location.search !== '?page=' + currentPage) {
        window.history.pushState({}, '', url);
      }
    }
  }, [currentPage])

  if (location.search !== '') {
    const urlParams = new URLSearchParams(location.search)
    const page = urlParams.get('page')

    if (page > Math.ceil(filtredPosts.length / 12)) {
      navigate(location.pathname)
    }
  }

  return (
    <Wrapper>
      <Hero
        list={list}
        text={text}
        title={title}
        link={link}
        pageTitle={pageTitle} />
      <Filter
        setCurrentFilter={setCurrentFilter}
        categories={categories} />
      <PostGrid
        page={currentPage}
        allPosts={filtredPosts} />
      <Pagination
        page={currentPage}
        setCurrentPage={setCurrentPage}
        posts={filtredPosts}
      />
    </Wrapper>
  )
}

export const query = graphql`
  fragment blogArchive on WpPage_PageBuilder_Sections_BlogArchive {
    blogArchive {
      pageTitle
      text
      list {
        tekstObokIkony
        icon {
          altText
          localFile {
            publicURL
          }
        }
      }
      link {
        target
        title
        url
      }
      relatedPost {
        ... on WpPost {
          id
          title
          slug
          author {
            node {
              name
            }
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            nodes {
              name
              slug
              category {
                color
              }
            }
          }
          blogPost {
            previewText
            thumbnail {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`
  .title{
    color: #050505 !important;
    margin-bottom: 16px;
  }

`