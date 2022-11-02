import { graphql } from "gatsby"
import React from "react"
import { useMemo } from "react"
import styled from "styled-components"
import { Container } from "../components/atoms/container"
import Blockqoute from "../components/sections/blog-post/blockqoute"
import Hero from "../components/sections/blog-post/hero"
import ImageSection from "../components/sections/blog-post/image"
import QuickLinks from "../components/sections/blog-post/quick-links"
import TextSection from "../components/sections/blog-post/text"
import { textParser } from "../helpers/wysiwyg-modification"

export function Head({ data: { wpPost: { seo, author, title, slug, blogPost } } }) {

  const canonical = 'https://splatapozyczek.pl' + seo.canonical

  return <>
    <meta charSet="utf-8" />
    <meta name="robots" content="noindex" />
    <meta property="og:site_name" content={seo.opengraphSiteName} />
    <meta name="google-site-verification" content="M2kghTKPmXOB2ezGLw7ShbO3sdW6rMn_uhsSVbHCt7I" />
    <meta property="og:type" content='article' />
    <meta property="article:modified_time" content={seo.opengraphModifiedTime} />
    <meta property="article:published_time" content={seo.opengraphPublishedTime} />
    <meta property="article:author" content={author.node.name} />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonical
        },
        "headline": title,
        "description": blogPost.previewText,
        "image": seo.opengraphImage?.localFile?.publicURL,
        "author": {
          "@type": "Person",
          "name": author.node.name,
          "url": '/blog/' + slug + '/'
        },
        "publisher": {
          "@type": "Organization",
          "name": "Splata Pożyczek",
          "logo": {
            "@type": "ImageObject",
            "url": 'https://testy.kryptonum.co.uk/wp-content/uploads/2022/10/Logo.svg'
          }
        },
        "datePublished": seo.opengraphPublishedTime,
        "dateModified": seo.opengraphModifiedTime
      })}
    </script>

    <script type="application/ld+json">
      {JSON.stringify(
        { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": "https://splatapozyczek.pl/#organization", "name": "Splatapozyczek.pl", "url": "https://splatapozyczek.pl/", "sameAs": ["https://www.facebook.com/splatapozyczek", "https://www.instagram.com/splatapozyczek.pl/", "https://www.youtube.com/channel/UCdpboPGWbJy_e8Je_Xw9i9Q"], "logo": { "@type": "ImageObject", "@id": "https://splatapozyczek.pl/#logo", "inLanguage": "pl-PL", "url": "https://splatapozyczek.pl/wp-content/uploads/2019/01/splatapozyczek-logo-x2.png", "width": 262, "height": 120, "caption": "Splatapozyczek.pl" }, "image": { "@id": "https://splatapozyczek.pl/#logo" } }, { "@type": "WebSite", "@id": "https://splatapozyczek.pl/#website", "url": "https://splatapozyczek.pl/", "name": "Splatapozyczek.pl", "description": "SplataPozyczek.pl \u2013 \u2705 kredyty got\u00f3wkowe, kredyt dla firm, po\u017cyczka konsolidacyjna, odd\u0142u\u017canie.", "publisher": { "@id": "https://splatapozyczek.pl/#organization" }, "potentialAction": [{ "@type": "SearchAction", "target": "https://splatapozyczek.pl/?s={search_term_string}", "query-input": "required name=search_term_string" }], "inLanguage": "pl-PL" }, { "@type": "WebPage", "@id": "https://splatapozyczek.pl/#webpage", "url": "https://splatapozyczek.pl/", "name": "Z nami uzyskasz nawet najtrudniejszy kredyt - Splatapozyczek.pl", "isPartOf": { "@id": "https://splatapozyczek.pl/#website" }, "about": { "@id": "https://splatapozyczek.pl/#organization" }, "datePublished": "2015-11-18T08:37:53+00:00", "dateModified": "2022-07-20T09:58:31+00:00", "description": "Niestandardowa umowa pracownicza? Brak zdolno\u015bci kredytowej? Inne zobowi\u0105zania? Mo\u017cemy uzyska\u0107 kredyt dla Ciebie nawet w 24 H.", "inLanguage": "pl-PL", "potentialAction": [{ "@type": "ReadAction", "target": ["https://splatapozyczek.pl/"] }] }] }
      )}
    </script>

    {canonical
      ? (
        <>
          <link rel="canonical" href={canonical} />
          <meta property="og:url" content={canonical} />
        </>
      )
      : null}

    {seo?.title
      ? (
        <>
          <title>{seo.title}</title>
          <meta property="twitter:title" content={seo.title} />
          <meta property="og:title" content={seo.title} />
        </>
      )
      : null}

    {seo?.metaDesc
      ? (
        <>
          <meta name="description" content={seo.metaDesc} />
          <meta property="twitter:description" content={seo.metaDesc} />
          <meta property="og:description" content={seo.metaDesc} />
        </>
      )
      : null}

    {seo.opengraphImage?.localFile?.publicURL
      ? (
        <>
          <meta property="og:image" content={'https://splatapozyczek.pl' + seo.opengraphImage.localFile.publicURL} />
          <meta property="twitter:image" content={'https://splatapozyczek.pl' + seo.opengraphImage.localFile.publicURL} />
        </>
      )
      : null}

  </>
}

export default function Post({ pageContext, data: { wpPost } }) {

  const quickLinks = useMemo(() => {
    const links = []

    wpPost.blogPost.sections?.forEach(el => {
      switch (el.__typename) {
        case 'WpPost_Blogpost_Sections_TextSection':
          links.push(textParser(el.textSection.title))
          break
        case 'WpPost_Blogpost_Sections_ImageSection':
          if (el.imageSection.title) {
            links.push(textParser(el.imageSection.title))
          }
          break
        default:
          return null
      }
    })

    return links
  }, [wpPost.blogPost.sections])


  return (
    <Wrapper id='main'>
      <Hero data={wpPost} pageContext={pageContext} />
      <Container className="container">
        <Grid>
          <QuickLinks links={quickLinks} />
          <div>
            <Description className="body1" dangerouslySetInnerHTML={{ __html: wpPost.blogPost.description }} />
            {wpPost.blogPost.sections?.map(el => {
              switch (el.__typename) {
                case 'WpPost_Blogpost_Sections_TextSection':
                  return <TextSection data={el.textSection} />
                case 'WpPost_Blogpost_Sections_ImageSection':
                  return <ImageSection data={el.imageSection} />
                case 'WpPost_Blogpost_Sections_Blockqoute':
                  return <Blockqoute data={el.blockqoute}/>
                default:
                  return <p className="h2">{el.__typename}</p>
              }
            })}
          </div>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export const query = graphql`
    query post($id: String!) {
        wpPost(id: {eq: $id}) {
            id
            title
            seo {
              canonical
              metaDesc
              opengraphSiteName
              opengraphModifiedTime
              opengraphPublishedTime
              title
              opengraphImage {
                localFile {
                  publicURL
                }
              }
            }
            slug
            author {
              node {
                avatar {
                  url
                }
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
                description
                thumbnail {
                altText
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            sections{
            __typename
            ...blockqoute
            ...imageSection
            ...textSection
                }
            }
        }
    }
`

const Wrapper = styled.main`
  .container{
    overflow: unset;
  }
`

const Description = styled.div`
  margin-bottom: -28px;
  padding: clamp(16px, ${16 / 768 * 100}vw, 24px) clamp(16px, ${16 / 768 * 100}vw, 44px);
  background-color: var(--color-light);
  border-radius: 4px;
  box-shadow: var(--shadow);
`

const Grid = styled.div`
    max-width: 1100px;
    margin: var(--section) auto 0 auto;
    display: grid;
    grid-template-columns: 277fr 796fr;
    grid-gap: 32px;

    @media (max-width: 764px) {
        grid-template-columns: 1fr;
    }

    .container{
        padding: 0;
    }
`