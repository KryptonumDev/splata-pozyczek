import { graphql } from "gatsby"
import React from "react"
import EffectiveSolutions from "../components/sections/effective-solutions"
import Hero from "../components/sections/hero-home"
import WhatAreWeDoing from "../components/sections/what-are-we-doing"
import CallToAction from '../components/sections/cta'
import HelpTypes from "../components/sections/typt-pomocy"
import WhatIsCredit from "../components/sections/what-is-credit"
import Faq from "../components/sections/faq"
import OurExperts from "../components/sections/our-experts"
import ThreeColumnText from "../components/sections/three-column-text"
import RepeaterFourColumnText from "../components/sections/four-column-text-repeater"
import HeroForm from "../components/sections/hero-contact-form"
import FourTilesWithTitle from "../components/sections/four-tiles-with-title"
import FourBigTextTiles from "../components/sections/four-big-text-tiles"
import TwoColumnsCompare from "../components/sections/two-columns-compare"
import ListWithImgOnRight from "../components/sections/list-with-img-on-right"
import StepsToCredit from "../components/sections/steps-to-credit"
import TwoColumnCompareColored from "../components/sections/two-columns-compare-colored"
import LongPanelWithIcon from "../components/sections/long-panel-with-icon"
import ThreeColumnTextWithTitles from "../components/sections/three-column-text-with-titles"
import TwoColumnText from "../components/sections/two-column-text"
import BlogSlider from "../components/sections/blog-slider"
import TwoColumnRepeater from "../components/sections/two-column-repeater"
import ThreeStepsWithLongPanel from "../components/sections/three-steps-with-long-panel"
import TextWithImgOnLeft from "../components/sections/text-with-img-on-left"
import CreditTypes from "../components/sections/credit-types"
import FourTiles from "../components/sections/four-tiles"
import ThreeCommentsWithTitle from "../components/sections/three-comments-with-title"
import TextWithImgOnRight from "../components/sections/text-with-img-on-right"
import FourColumnText from '../components/sections/four-column-text'
import ExtendedListWithImgOnRight from "../components/sections/extended-list-with-img-on-right"
import TwoColumnRepeaterAlt from "../components/sections/two-column-repeater-alt"
import TwoColumnVideo from "../components/sections/two-column-video"
import ListWithImgOnLeftRepeater from "../components/sections/list-with-img-on-left-repeater"
import TextWithImgOnLeftAlt from "../components/sections/text-with-img-on-left-alt"
import ThreeColumnsHighlighted from "../components/sections/three-columns-highlighted"
import FourTilesExtended from "../components/sections/four-tiles-extended"
import ThreePointsWithImgOnLeft from "../components/sections/three-points-with-img-on-left"
import ListWithImgOnLeft from "../components/sections/list-with-img-on-left"
import BlogArchive from "../components/sections/blog-archive"
import HeroImg from "../components/sections/hero-img"
import ThreeColumnsFiles from "../components/sections/three-columns-files"
import StepsToComplaints from "../components/sections/steps-to-complaints"
import TwoColumnTextWithBoldText from "../components/sections/two-columnt-text-alt"
import BigTextTiles from "../components/sections/big-text-tiles"
import HeroImgExtended from "../components/sections/hero-img-extended"
import TwoCards from "../components/sections/two-cards"
import TwoColumnsWithExtendedLinks from "../components/sections/two-columns-with-extended-links"
import AllExperts from "../components/sections/All-experts"
import ContactForm from "../components/sections/contact-form"
import ThreeColumnsHighlightedAlt from "../components/sections/three-columns-highlighted-alt"
import InformAndVideo from "../components/sections/inform-and-video"
import Map from "../components/sections/map"
import TwoColumnTextHighlighted from "../components/sections/two-column-text-highlighted"
import ThreeTiles from "../components/sections/three-tiles"
import ThreeColumnTextMiddleHighlighted from "../components/sections/three-column-text-middle-highlighted"
import MultiplyTilesWithTextBlock from "../components/sections/multiply-tiles-with-text-block"
import TwoColumnsTextAndIconsList from "../components/sections/two-columns-text-and-icons-list"
import TwoColumnTextRepeaterSepareted from "../components/sections/two-column-text-repeater-separeted"
import PrivacyPolicy from "../components/sections/privacy-policy"
import TwoColumnTextRepeater from "../components/sections/two-column-text-repeater"
import TwoColumnsTextAndIconsListAlt from "../components/sections/two-columns-text-and-icons-list-alt"
import TabsWithThreeColumnsContent from "../components/sections/tabs-with-three-columns-content"
import HeroText from "../components/sections/hero-text"
import Calculator from "../components/sections/calculator"
import Reviews from "../components/sections/reviews"
import HeighlihtedAdres from "../components/sections/heighlihted-adres"
import ExpertWithContactInform from "../components/sections/expert-with-contact-inform"
import Citate from "../components/sections/citate"
import { useEffect } from "react"
import { Helmet } from "react-helmet"

export function Head({ data: { wpPage: { seo } } }) {

  const canonical = 'https://splatapozyczek.pl' + seo.canonical

  return <>
    <meta charSet="utf-8" />
    <meta name="robots" content="noindex" />
    <meta property="og:site_name" content={seo.opengraphSiteName} />
    <meta name="google-site-verification" content="M2kghTKPmXOB2ezGLw7ShbO3sdW6rMn_uhsSVbHCt7I" />

    <script type="application/ld+json">
      {JSON.stringify(
        { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": "https://splatapozyczek.pl/#organization", "name": "Splatapozyczek.pl", "url": "https://splatapozyczek.pl/", "sameAs": ["https://www.facebook.com/splatapozyczek", "https://www.instagram.com/splatapozyczek.pl/", "https://www.youtube.com/channel/UCdpboPGWbJy_e8Je_Xw9i9Q"], "logo": { "@type": "ImageObject", "@id": "https://splatapozyczek.pl/#logo", "inLanguage": "pl-PL", "url": "https://splatapozyczek.pl/wp-content/uploads/2019/01/splatapozyczek-logo-x2.png", "width": 262, "height": 120, "caption": "Splatapozyczek.pl" }, "image": { "@id": "https://splatapozyczek.pl/#logo" } }, { "@type": "WebSite", "@id": "https://splatapozyczek.pl/#website", "url": "https://splatapozyczek.pl/", "name": "Splatapozyczek.pl", "description": "SplataPozyczek.pl \u2013 \u2705 kredyty got\u00f3wkowe, kredyt dla firm, po\u017cyczka konsolidacyjna, odd\u0142u\u017canie.", "publisher": { "@id": "https://splatapozyczek.pl/#organization" }, "potentialAction": [{ "@type": "SearchAction", "target": "https://splatapozyczek.pl/?s={search_term_string}", "query-input": "required name=search_term_string" }], "inLanguage": "pl-PL" }, { "@type": "WebPage", "@id": "https://splatapozyczek.pl/#webpage", "url": "https://splatapozyczek.pl/", "name": "Z nami uzyskasz nawet najtrudniejszy kredyt - Splatapozyczek.pl", "isPartOf": { "@id": "https://splatapozyczek.pl/#website" }, "about": { "@id": "https://splatapozyczek.pl/#organization" }, "datePublished": "2015-11-18T08:37:53+00:00", "dateModified": "2022-07-20T09:58:31+00:00", "description": "Niestandardowa umowa pracownicza? Brak zdolno\u015bci kredytowej? Inne zobowi\u0105zania? Mo\u017cemy uzyska\u0107 kredyt dla Ciebie nawet w 24 H.", "inLanguage": "pl-PL", "potentialAction": [{ "@type": "ReadAction", "target": ["https://splatapozyczek.pl/"] }] }] }
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

export default function Page({ pageContext, location, data: { blogArchive, allWpCategory, allWpEkspert, slider, wpPage: { title, page_builder: { sections } } } }) {

  useEffect(() => {
    document.documentElement.classList.add('overflow')
    document.body.classList.add('overflow')

    return () => {
      document.documentElement.classList.remove('overflow')
      document.body.classList.remove('overflow')
    }
  }, [])

  return (
    <main id="main">
      <Helmet>
        <link rel="canonical" href={'https://splatapozyczek.pl' + pageContext.url} />
      </Helmet>
      {sections?.map(el => {
        switch (el.__typename) {
          case 'WpPage_PageBuilder_Sections_Hero':
            return <Hero data={el.hero} />
          case 'WpPage_PageBuilder_Sections_WhatAreWeDoing':
            return <WhatAreWeDoing data={el.whatAreWeDoing} />
          case 'WpPage_PageBuilder_Sections_EffectiveSolutions':
            return <EffectiveSolutions data={el.effectiveSolutions} />
          case 'WpPage_PageBuilder_Sections_Types':
            return <HelpTypes data={el.types} />
          case 'WpPage_PageBuilder_Sections_WhatIsCredit':
            return <WhatIsCredit data={el.whatIsCredit} />
          case 'WpPage_PageBuilder_Sections_Cta':
            return <CallToAction data={el.cta} />
          case 'WpPage_PageBuilder_Sections_Faq':
            return <Faq data={el.faq} />
          case 'WpPage_PageBuilder_Sections_OurExperts':
            return <OurExperts data={el.ourExperts} />
          case 'WpPage_PageBuilder_Sections_ThreeColumnText':
            return <ThreeColumnText data={el.threeColumnText} />
          case 'WpPage_PageBuilder_Sections__RepeaterFourColumnText':
            return <RepeaterFourColumnText data={el.repeaterFourColumnText} />
          case 'WpPage_PageBuilder_Sections_HeroForm':
            return <HeroForm data={el.heroForm} uri={pageContext.url} title={title} />
          case 'WpPage_PageBuilder_Sections_FourTilesWithTitle':
            return <FourTilesWithTitle data={el.fourTilesWithTitle} />
          case 'WpPage_PageBuilder_Sections_FourBigTextTiles':
            return <FourBigTextTiles data={el.fourBigTextTiles} />
          case 'WpPage_PageBuilder_Sections_TwoColumnsCompare':
            return <TwoColumnsCompare data={el.twoColumnsCompare} />
          case 'WpPage_PageBuilder_Sections_ListWithImgOnRight':
            return <ListWithImgOnRight data={el.listWithImgOnRight} />
          case 'WpPage_PageBuilder_Sections_StepsToCredit':
            return <StepsToCredit data={el.stepsToCredit} />
          case 'WpPage_PageBuilder_Sections_TwoColumnCompareColored':
            return <TwoColumnCompareColored data={el.twoColumnCompareColored} />
          case 'WpPage_PageBuilder_Sections_LongPanelWithIcon':
            return <LongPanelWithIcon data={el.longPanelWithIcon} />
          case 'WpPage_PageBuilder_Sections_ThreeColumnTextWithTitles':
            return <ThreeColumnTextWithTitles data={el.threeColumnTextWithTitles} />
          case 'WpPage_PageBuilder_Sections_TwoColumnText':
            return <TwoColumnText data={el.twoColumnText} />
          case 'WpPage_PageBuilder_Sections_BlogSlider':
            return <BlogSlider data={el.blogSlider} posts={slider.nodes} />
          case 'WpPage_PageBuilder_Sections_TwoColumnFlex':
            return <TwoColumnRepeater data={el.twoColumnFlex} />
          case 'WpPage_PageBuilder_Sections_ThreeStepsWithLongPanel':
            return <ThreeStepsWithLongPanel data={el.threeStepsWithLongPanel} />
          case 'WpPage_PageBuilder_Sections_TextWithImgOnLeft':
            return <TextWithImgOnLeft data={el.textWithImgOnLeft} />
          case 'WpPage_PageBuilder_Sections_Calculator':
            return <Calculator data={el.calculator} />
          case 'WpPage_PageBuilder_Sections_CreditTypes':
            return <CreditTypes data={el.creditTypes} />
          case 'WpPage_PageBuilder_Sections_FourTiles':
            return <FourTiles data={el.fourTiles} />
          case "WpPage_PageBuilder_Sections_ThreeCommentsWithTitle":
            return <ThreeCommentsWithTitle data={el.threeCommentsWithTitle} />
          case 'WpPage_PageBuilder_Sections_TextWithImgOnRight':
            return <TextWithImgOnRight data={el.textWithImgOnRight} />
          case 'WpPage_PageBuilder_Sections_FourColumnText':
            return <FourColumnText data={el.fourColumnText} />
          case 'WpPage_PageBuilder_Sections_ExtendedListWithImgOnRight':
            return <ExtendedListWithImgOnRight data={el.extendedListWithImgOnRight} />
          case 'WpPage_PageBuilder_Sections_TwoColumnFlexAlt':
            return <TwoColumnRepeaterAlt data={el.twoColumnFlexAlt} />
          case 'WpPage_PageBuilder_Sections_TwoColumnVideo':
            return <TwoColumnVideo data={el.twoColumnVideo} />
          case 'WpPage_PageBuilder_Sections_ListWithImgOnLeftRepeater':
            return <ListWithImgOnLeftRepeater data={el.listWithImgOnLeftRepeater} />
          case 'WpPage_PageBuilder_Sections_TextWithImgOnLeftAlt':
            return <TextWithImgOnLeftAlt data={el.textWithImgOnLeftAlt} />
          case 'WpPage_PageBuilder_Sections_ThreeColumnsHighlighted':
            return <ThreeColumnsHighlighted data={el.threeColumnsHighlighted} />
          case 'WpPage_PageBuilder_Sections_FourTilesExtended':
            return <FourTilesExtended data={el.fourTilesExtended} />
          case "WpPage_PageBuilder_Sections_ThreePointsWithImgOnLeft":
            return <ThreePointsWithImgOnLeft data={el.threePointsWithImgOnLeft} />
          case 'WpPage_PageBuilder_Sections_ListWithImgOnLeft':
            return <ListWithImgOnLeft data={el.listWithImgOnLeft} />
          case 'WpPage_PageBuilder_Sections_ContactForm':
            return <ContactForm data={el.contactForm} />
          case 'WpPage_PageBuilder_Sections_BlogArchive':
            return <BlogArchive url={pageContext.url} slug={pageContext.slug} categories={allWpCategory.nodes} location={location} data={el.blogArchive} title={title} allPosts={blogArchive.nodes} />
          case 'WpPage_PageBuilder_Sections_HeroImg':
            return <HeroImg data={el.heroImg} uri={pageContext.url} title={title} />
          case 'WpPage_PageBuilder_Sections_HeroImgExtended':
            return <HeroImgExtended data={el.heroImgExtended} uri={pageContext.url} title={title} />
          case 'WpPage_PageBuilder_Sections_ThreeColumnsFiles':
            return <ThreeColumnsFiles data={el.threeColumnsFiles} />
          case 'WpPage_PageBuilder_Sections_StepsToComplaints':
            return <StepsToComplaints data={el.stepsToComplaints} />
          case 'WpPage_PageBuilder_Sections_TwoColumnTextWithBoldText':
            return <TwoColumnTextWithBoldText data={el.twoColumnTextWithBoldText} />
          case 'WpPage_PageBuilder_Sections_BigTextTiles':
            return <BigTextTiles data={el.bigTextTiles} />
          case 'WpPage_PageBuilder_Sections_TwoCards':
            return <TwoCards data={el.twoCards} />
          case 'WpPage_PageBuilder_Sections_TwoColumnsWithExtendedLinks':
            return <TwoColumnsWithExtendedLinks data={el.twoColumnsWithExtendedLinks} />
          case 'WpPage_PageBuilder_Sections_AllExperts':
            return <AllExperts experts={allWpEkspert.nodes} />
          case 'WpPage_PageBuilder_Sections_ThreeColumnsHighlightedAlt':
            return <ThreeColumnsHighlightedAlt data={el.threeColumnsHighlightedAlt} />
          case 'WpPage_PageBuilder_Sections_InformAndVideo':
            return <InformAndVideo data={el.informAndVideo} />
          case 'WpPage_PageBuilder_Sections_Map':
            return <Map data={el.map} />
          case 'WpPage_PageBuilder_Sections_TwoColumnTextHighlighted':
            return <TwoColumnTextHighlighted data={el.twoColumnTextHighlighted} />
          case 'WpPage_PageBuilder_Sections_ThreeTiles':
            return <ThreeTiles data={el.threeTiles} />
          case 'WpPage_PageBuilder_Sections_ThreeColumnTextMiddleHighlighted':
            return <ThreeColumnTextMiddleHighlighted data={el.threeColumnTextMiddleHighlighted} />
          case 'WpPage_PageBuilder_Sections_MultiplyTilesWithTextBlock':
            return <MultiplyTilesWithTextBlock data={el.multiplyTilesWithTextBlock} />
          case 'WpPage_PageBuilder_Sections_TwoColumnsTextAndIconsList':
            return <TwoColumnsTextAndIconsList data={el.twoColumnsTextAndIconsList} />
          case 'WpPage_PageBuilder_Sections_TwoColumnTextRepeaterSepareted':
            return <TwoColumnTextRepeaterSepareted data={el.twoColumnTextRepeaterSepareted} />
          case 'WpPage_PageBuilder_Sections_PrivacyPolicy':
            return <PrivacyPolicy data={el.privacyPolicy} />
          case 'WpPage_PageBuilder_Sections_TwoColumnTextRepeater':
            return <TwoColumnTextRepeater data={el.twoColumnTextRepeater} />
          case 'WpPage_PageBuilder_Sections_TwoColumnsTextAndIconsListAlt':
            return <TwoColumnsTextAndIconsListAlt data={el.twoColumnsTextAndIconsListAlt} />
          case 'WpPage_PageBuilder_Sections_TabsWithThreeColumnsContent':
            return <TabsWithThreeColumnsContent data={el.tabsWithThreeColumnsContent} />
          case 'WpPage_PageBuilder_Sections_HeroText':
            return <HeroText data={el.heroText} uri={pageContext.url} title={title} />
          case 'WpPage_PageBuilder_Sections_Reviews':
            return <Reviews data={el.reviews} />
          case 'WpPage_PageBuilder_Sections_HeighlihtedAdres':
            return <HeighlihtedAdres data={el.heighlihtedAdres} />
          case 'WpPage_PageBuilder_Sections_ExpertWithContactInform':
            return <ExpertWithContactInform data={el.expertWithContactInform} />
          case 'WpPage_PageBuilder_Sections_Citate':
            return <Citate data={el.citate} />
          default:
            return <p className="h2">{el.__typename}</p>
        }
      })}
    </main>
  )
}

export const query = graphql`
    query page($id: String!) {
        wpPage(id: {eq: $id}){
            slug
            title
            id
            seo {
              canonical
              metaDesc
              opengraphSiteName
              title
              opengraphImage {
                localFile {
                  publicURL
                }
              }
            }
            page_builder {
              sections {
                __typename
                ...citate
                ...expertWithContactInform
                ...heighlihtedAdres
                ...reviews
                ...heroText
                ...tabsWithThreeColumnsContent
                ...twoColumnsTextAndIconsListAlt
                ...twoColumnTextRepeater
                ...privacyPolicy
                ...twoColumnTextRepeaterSepareted
                ...twoColumnsTextAndIconsList
                ...multiplyTilesWithTextBlock
                ...threeColumnTextMiddleHighlighted
                ...threeTiles
                ...twoColumnTextHighlighted
                ...map
                ...informAndVideo
                ...threeColumnsHighlightedAlt
                ...twoColumnsWithExtendedLinks
                ...twoCards
                ...heroImgExtended
                ...bigTextTiles
                ...twoColumnTextWithBoldText
                ...blogSlider
                ...stepsToComplaints
                ...threeColumnsFiles
                ...heroImg
                ...faq
                ...cta
                ...hero
                ...whatAreWeDoing
                ...effectiveSolutions
                ...types
                ...whatIsCredit
                ...ourExperts
                ...threeColumnText
                ...repeaterFourColumnText
                ...heroForm
                ...fourTilesWithTitle
                ...fourBigTextTiles
                ...twoColumnsCompare
                ...listWithImgOnRight
                ...stepsToCredit
                ...twoColumnCompareColored
                ...longPanelWithIcon
                ...threeColumnTextWithTitles
                ...twoColumnText
                ...twoColumnRepeater
                ...twoColumnRepeaterAlt
                ...textWithImgOnLeft
                ...threeStepsWithLongPanel
                ...calculator
                ...creditTypes
                ...fourTiles
                ...threeCommentsWithTitle
                ...textWithImgOnRight
                ...fourColumnText
                ...extendedListWithImgOnRight
                ...twoColumnVideo
                ...listWithImgOnLeftRepeater
                ...textWithImgOnLeftAlt
                ...fourTilesExtended
                ...threeColumnsHighlighted
                ...threePointsWithImgOnLeft
                ...listWithImgOnLeft
                ...contactForm
                ...blogArchive
              }
            }
        }
        blogArchive : allWpPost {
          nodes {
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
        slider : allWpPost {
          nodes {
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
        allWpCategory {
          nodes {
            category {
              color
            }
            count
            name
            slug
          }
        }
        allWpEkspert {
          nodes {
            id
            slug
            title
            ekspert {
              role
              numerTelefonu
              emailAdres
              image {
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
`