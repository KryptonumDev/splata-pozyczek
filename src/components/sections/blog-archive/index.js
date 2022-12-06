import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import PostGrid from "./post-grid"
import Filter from "./filter"
import Pagination from "./pagination"
import Hero from "./hero"
import { Helmet } from "react-helmet"

export default function BlogArchive({ data: { pageTitle, text, list, link, relatedPost }, title, allPosts, location, categories, slug, url }) {

  const [currentPage, setCurrentPage] = useState(() => {
    if (!location.search) {
      return 1
    }

    if (location.search === '') {
      return 1
    }

    const urlParams = new URLSearchParams(location.search)

    return parseInt(urlParams.get('page'))
  })
  const [currentFilter] = useState(slug)

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

  const categoryName = () => {
    let category = categories.filter(el => el.slug === currentFilter)
    return category[0].name
  }

  return (
    <Wrapper>
      <Helmet>
        {currentFilter
          ? currentPage !== 1
            ? <title>{`${categoryName()} - Artykuły - Strona ${currentPage} - SplataPozyczek.pl`}</title>
            : <title>{`${categoryName()} - Artykuły - SplataPozyczek.pl`}</title>
          : currentPage !== 1
            ? <title>{`Blog o kredytach i finansach - Strona ${currentPage} - SplataPozyczek.pl`}</title>
            : <title>{`Blog o kredytach i finansach - SplataPozyczek.pl`}</title>}

        <link rel="canonical" href={'https://splatapozyczek.pl' + url + (currentPage !== 1 ? '?page=' + currentPage : '')} />
      </Helmet>
      {currentFilter
        ? null
        : <Hero
          list={list}
          text={text}
          title={title}
          link={link}
          relatedPost={relatedPost}
          pageTitle={pageTitle} />}
      <Filter
        isAltLayout={currentFilter}
        categories={categories}
        allCount={allPosts.length} />
      <PostGrid
        activeFilter={currentFilter}
        categories={categories}
        page={currentPage}
        allPosts={filtredPosts} />
      <Pagination
        page={currentPage}
        setCurrentPage={setCurrentPage}
        posts={filtredPosts}
        url={url} />
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
          categories : tags{
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