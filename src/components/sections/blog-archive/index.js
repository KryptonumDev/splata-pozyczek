import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import PostGrid from "./post-grid"
import Filter from "./filter"
import Pagination from "./pagination"
import Hero from "./hero"
import { Helmet } from "react-helmet"

export default function BlogArchive({ data: { pageTitle, text, list, link, relatedPost }, page, title, allPosts, categories, slug, url }) {
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

  const categoryName = () => {
    let category = categories.filter(el => el.slug === currentFilter)
    return category[0].name
  }

  return (
    <Wrapper>
      <Helmet>
        {currentFilter
          ? page !== 1
            ? <title>{`${categoryName()} - Artykuły - Strona ${page} - SplataPozyczek.pl`}</title>
            : <title>{`${categoryName()} - Artykuły - SplataPozyczek.pl`}</title>
          : page !== 1
            ? <title>{`Blog o kredytach i finansach - Strona ${page} - SplataPozyczek.pl`}</title>
            : <title>{`Blog o kredytach i finansach - SplataPozyczek.pl`}</title>}

        <link rel="canonical" href={'https://splatapozyczek.pl' + url + (page !== 1 ? '/' + page + '/' : '')} />
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
        page={+page}
        allPosts={filtredPosts} />
      <Pagination
        page={+page}
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