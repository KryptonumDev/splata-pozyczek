import { graphql } from "gatsby"
import React, { useEffect } from "react"
import { useMemo } from "react"
import styled from "styled-components"
import { Container } from "../components/atoms/container"
import Blockqoute from "../components/sections/blog-post/blockqoute"
import CircularChart from "../components/sections/blog-post/circular-chart"
import CallToAction from "../components/sections/blog-post/cta"
import Hero from "../components/sections/blog-post/hero"
import ImageSection from "../components/sections/blog-post/image"
import InformPanels from "../components/sections/blog-post/inform-panels"
import ListSection from "../components/sections/blog-post/list"
import QuickLinks from "../components/sections/blog-post/quick-links"
import Table from "../components/sections/blog-post/table"
import TextSection from "../components/sections/blog-post/text"
import PercentCompare from '../components/sections/blog-post/percent-compare'
// import CircularPercentCompare from "../components/sections/blog-post/circular-percent-compare"
import Faq from "../components/sections/blog-post/faq"
import HorizontalChart from "../components/sections/blog-post/horizontal-chart"
import VerticalChart from "../components/sections/blog-post/vertical-chart"
import { useState } from "react"
import { Helmet } from "react-helmet"
import { htmlDelete } from "../helpers/wysiwyg-modification"
import { slugTransform } from "../helpers/slug-transform"

import Logo from './../../static/logo.svg'
import OG from './../../static/og.jpg'

export function Head({ pageContext, data: { wpPost: { id, seo, author, title, slug, blogPost } } }) {
  const canonical = 'https://splatapozyczek.pl' + pageContext.url

return <>
    <meta charSet="utf-8" />
    {id === "cG9zdDoxMTM0"
      ? null
      : <meta name="robots" content="noindex" />}
    <meta property="og:site_name" content={seo.opengraphSiteName} />
    <meta name="google-site-verification" content="M2kghTKPmXOB2ezGLw7ShbO3sdW6rMn_uhsSVbHCt7I" />
    <meta property="og:type" content='article' />
    <meta property="article:modified_time" content={seo.opengraphModifiedTime} />
    <meta property="article:published_time" content={seo.opengraphPublishedTime} />
    <meta property="article:author" content={author.node.name} />
    <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap_index.xml"></link>

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
        "image": 'https://splatapozyczek.pl' + (seo.opengraphImage?.localFile?.publicURL ? seo.opengraphImage.localFile.publicURL : OG),
        "author": {
          "@type": "Person",
          "name": author.node.name,
          "url": 'https://splatapozyczek.pl/blog/' + slug + '/' // TODO
        },
        "publisher": {
          "@type": "Organization",
          "name": "Splata Pożyczek",
          "logo": {
            "@type": "ImageObject",
            "url": Logo
          }
        },
        "datePublished": seo.opengraphPublishedTime,
        "dateModified": seo.opengraphModifiedTime
      })}
    </script>

    <script type="application/ld+json">
      {JSON.stringify(
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://splatapozyczek.pl/#organization",
              "name": "Splatapozyczek.pl",
              "url": "https://splatapozyczek.pl/",
              "sameAs": [
                "https://www.facebook.com/splatapozyczek",
                "https://www.instagram.com/splatapozyczek.pl/",
                "https://www.youtube.com/channel/UCdpboPGWbJy_e8Je_Xw9i9Q"
              ],
              "logo": {
                "@type": "ImageObject",
                "@id": "https://splatapozyczek.pl/#logo",
                "inLanguage": "pl-PL",
                "url": Logo,
                "width": 181,
                "height": 43,
                "caption": "Splatapozyczek.pl"
              },
              "image": {
                "@id": "https://splatapozyczek.pl/#logo"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://splatapozyczek.pl/#website",
              "url": "https://splatapozyczek.pl/",
              "name": "Splatapozyczek.pl",
              "description": "SplataPozyczek.pl \u2013 \u2705 kredyty got\u00f3wkowe, kredyt dla firm, po\u017cyczka konsolidacyjna, odd\u0142u\u017canie.",
              "publisher": { "@id": "https://splatapozyczek.pl/#organization" },
              "potentialAction": [{ "@type": "SearchAction", "target": "https://splatapozyczek.pl/?s={search_term_string}", "query-input": "required name=search_term_string" }],
              "inLanguage": "pl-PL"
            },
            {
              "@type": "WebPage",
              "@id": "https://splatapozyczek.pl/#webpage",
              "url": "https://splatapozyczek.pl/",
              "name": "Z nami uzyskasz nawet najtrudniejszy kredyt - Splatapozyczek.pl",
              "isPartOf": { "@id": "https://splatapozyczek.pl/#website" },
              "about": { "@id": "https://splatapozyczek.pl/#organization" },
              "datePublished": "2015-11-18T08:37:53+00:00",
              "dateModified": "2022-07-20T09:58:31+00:00",
              "description": "Niestandardowa umowa pracownicza? Brak zdolno\u015bci kredytowej? Inne zobowi\u0105zania? Mo\u017cemy uzyska\u0107 kredyt dla Ciebie nawet w 24 H.",
              "inLanguage": "pl-PL",
              "potentialAction": [{ "@type": "ReadAction", "target": ["https://splatapozyczek.pl/"] }]
            }]
        }
      )}
    </script>

    {canonical
      ? (
        <>
          <meta property="og:url" content={canonical} />
        </>
      )
      : null}

    {seo?.title
      ? (
        <>
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
      : (
        <>
          <meta property="og:image" content={'https://splatapozyczek.pl' + OG} />
          <meta property="twitter:image" content={'https://splatapozyczek.pl' + OG} />
        </>
      )}

  </>
}

export default function Post({ pageContext, data: { wpPost } }) {
  useEffect(() => {
    document.documentElement.classList.add('overflow')
    document.body.classList.add('overflow')

    return () => {
      document.documentElement.classList.remove('overflow')
      document.body.classList.remove('overflow')
    }
  }, [])

  const quickLinks = useMemo(() => {
    const links = []

    wpPost.blogPost.sections?.forEach(el => {
      switch (el.__typename) {
        case 'WpPost_Blogpost_Sections_TextSection':
          if (el.textSection.title) {
            links.push(htmlDelete(el.textSection.title))
          }
          break
        case 'WpPost_Blogpost_Sections_ImageSection':
          if (el.imageSection.title) {
            links.push(htmlDelete(el.imageSection.title))
          }
          break
        case 'WpPost_Blogpost_Sections_List':
          if (el.list.title) {
            links.push(htmlDelete(el.list.title))
          }
          break
        case 'WpPost_Blogpost_Sections_InformPanels':
          if (el.informPanels.title) {
            links.push(htmlDelete(el.informPanels.title))
          }
          break
        case 'WpPost_Blogpost_Sections_Table':
          if (el.table.title) {
            links.push(htmlDelete(el.table.title))
          }
          break
        case 'WpPost_Blogpost_Sections_CircularChart':
          if (el.circularChart.title) {
            links.push(htmlDelete(el.circularChart.title))
          }
          break
        case 'WpPost_Blogpost_Sections_PercentCompare':
          if (el.percentCompare.title) {
            links.push(htmlDelete(el.percentCompare.title))
          }
          break
        case 'WpPost_Blogpost_Sections_CircularPercentCompare':
          if (el.circularPercentCompare.title) {
            links.push(htmlDelete(el.circularPercentCompare.title))
          }
          break
        case 'WpPost_Blogpost_Sections_Faq':
          if (el.faq.title) {
            links.push(htmlDelete(el.faq.title))
          }
          break
        case 'WpPost_Blogpost_Sections_HorizontalChart':
          if (el.horizontalChart.title) {
            links.push(htmlDelete(el.horizontalChart.title))
          }
          break
        case 'WpPost_Blogpost_Sections_VerticalChart':
          if (el.verticalChart.title) {
            links.push(htmlDelete(el.verticalChart.title))
          }
          break
        default:
          return null
      }
    })

    return links
  }, [wpPost.blogPost.sections])

  const [inView, setInView] = useState()

  const changeInView = (isInView, id) => {
    if (isInView) {
      setInView(slugTransform(htmlDelete(id)))
    }
  }

  return (
    <Wrapper id='main'>
      <Helmet>
        <title id='title'>{wpPost.seo.title}</title>
        <link rel="canonical" href={'https://splatapozyczek.pl' + pageContext.url} />
      </Helmet>
      <Hero data={wpPost} pageContext={pageContext} />
      <Container className="container">
        <Grid>
          <QuickLinks setInView={setInView} inView={inView} links={quickLinks} />
          <div>
            <Description className="body1" dangerouslySetInnerHTML={{ __html: wpPost.blogPost.description }} />
            {wpPost.blogPost.sections?.map(el => {
              switch (el.__typename) {
                case 'WpPost_Blogpost_Sections_TextSection':
                  return <TextSection changeInView={changeInView} data={el.textSection} />
                case 'WpPost_Blogpost_Sections_ImageSection':
                  return <ImageSection changeInView={changeInView} data={el.imageSection} />
                case 'WpPost_Blogpost_Sections_Blockqoute':
                  return <Blockqoute changeInView={changeInView} data={el.blockqoute} />
                case 'WpPost_Blogpost_Sections_Cta':
                  return <CallToAction changeInView={changeInView} data={el.cta} />
                case 'WpPost_Blogpost_Sections_List':
                  return <ListSection changeInView={changeInView} data={el.list} />
                case 'WpPost_Blogpost_Sections_InformPanels':
                  return <InformPanels changeInView={changeInView} data={el.informPanels} />
                case 'WpPost_Blogpost_Sections_Table':
                  return <Table changeInView={changeInView} data={el.table} />
                case 'WpPost_Blogpost_Sections_CircularChart':
                  return <CircularChart changeInView={changeInView} data={el.circularChart} />
                case 'WpPost_Blogpost_Sections_PercentCompare':
                  return <PercentCompare changeInView={changeInView} data={el.percentCompare} />
                case 'WpPost_Blogpost_Sections_CircularPercentCompare':
                  return null //<CircularPercentCompare data={el.circularPercentCompare} />
                case 'WpPost_Blogpost_Sections_Faq':
                  return <Faq changeInView={changeInView} data={el.faq} />
                case 'WpPost_Blogpost_Sections_HorizontalChart':
                  return <HorizontalChart changeInView={changeInView} data={el.horizontalChart} />
                case 'WpPost_Blogpost_Sections_VerticalChart':
                  return <VerticalChart changeInView={changeInView} data={el.verticalChart} />
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
            categories : tags {
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
                  ...faqPost
                  ...verticalChart
                  ...horizontalChart
                  ...circularPercentCompare
                  ...percentCompare
                  ...circularChart
                  ...table
                  ...informPanels
                  ...list
                  ...blockqoute
                  ...calltoaaction
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