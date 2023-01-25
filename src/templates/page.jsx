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
import { Helmet } from "react-helmet"
import WniosekOnline from "../components/sections/wniosek-on-line"

import Logo from './../../static/logo.svg'
import OG from './../../static/og.jpg'


export function Head({ pageContext, data: { wpPage: { seo, id } } }) {
  const canonical = 'https://splatapozyczek.pl' + pageContext.url

  return <>
    <meta charSet="utf-8" />
    {id === "cG9zdDoxMg=="
      ? null
      : <meta name="robots" content="noindex" />}
    <meta property="og:site_name" content={seo.opengraphSiteName} />
    <meta name="google-site-verification" content="M2kghTKPmXOB2ezGLw7ShbO3sdW6rMn_uhsSVbHCt7I" />
    <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap_index.xml"></link>

    <script type="application/ld+json">
      {JSON.stringify(
        { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": "https://splatapozyczek.pl/#organization", "name": "Splatapozyczek.pl", "url": "https://splatapozyczek.pl/", "sameAs": ["https://www.facebook.com/splatapozyczek", "https://www.instagram.com/splatapozyczek.pl/", "https://www.youtube.com/channel/UCdpboPGWbJy_e8Je_Xw9i9Q"], "logo": { "@type": "ImageObject", "@id": "https://splatapozyczek.pl/#logo", "inLanguage": "pl-PL", "url": Logo, "width": 181, "height": 43, "caption": "Splatapozyczek.pl" }, "image": { "@id": "https://splatapozyczek.pl/#logo" } }, { "@type": "WebSite", "@id": "https://splatapozyczek.pl/#website", "url": "https://splatapozyczek.pl/", "name": "Splatapozyczek.pl", "description": "SplataPozyczek.pl \u2013 \u2705 kredyty got\u00f3wkowe, kredyt dla firm, po\u017cyczka konsolidacyjna, odd\u0142u\u017canie.", "publisher": { "@id": "https://splatapozyczek.pl/#organization" }, "potentialAction": [{ "@type": "SearchAction", "target": "https://splatapozyczek.pl/?s={search_term_string}", "query-input": "required name=search_term_string" }], "inLanguage": "pl-PL" }, { "@type": "WebPage", "@id": "https://splatapozyczek.pl/#webpage", "url": "https://splatapozyczek.pl/", "name": "Z nami uzyskasz nawet najtrudniejszy kredyt - Splatapozyczek.pl", "isPartOf": { "@id": "https://splatapozyczek.pl/#website" }, "about": { "@id": "https://splatapozyczek.pl/#organization" }, "datePublished": "2015-11-18T08:37:53+00:00", "dateModified": "2022-07-20T09:58:31+00:00", "description": "Niestandardowa umowa pracownicza? Brak zdolno\u015bci kredytowej? Inne zobowi\u0105zania? Mo\u017cemy uzyska\u0107 kredyt dla Ciebie nawet w 24 H.", "inLanguage": "pl-PL", "potentialAction": [{ "@type": "ReadAction", "target": ["https://splatapozyczek.pl/"] }] }] }
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

export default function Page({ pageContext, location, data: { blogArchive, allWpCategory, allWpEkspert, slider, wpPage: { seo, title, page_builder: { sections } } } }) {

  return (
    <main id="main">
      <Helmet>
        <title id='title'>{seo.title}</title>
        <link rel="canonical" href={'https://splatapozyczek.pl' + pageContext.url} />
      </Helmet>

      {sections?.map((el, index) => {
        if (el.__typename === "WpPage_PageBuilder_Sections_HeroText" && sections[index + 1].__typename === "WpPage_PageBuilder_Sections_ContactForm") {
          return <React.Fragment key={el.__typename + index}> <WniosekOnline uri={pageContext.url} title={title} hero={el.heroText} form={sections[index + 1].contactForm} /> </React.Fragment>
        }

        if (el.__typename === "WpPage_PageBuilder_Sections_ContactForm" && sections[index - 1].__typename === "WpPage_PageBuilder_Sections_HeroText") {
          return null
        }

        switch (el.__typename) {
          case 'WpPage_PageBuilder_Sections_Hero':
            return <React.Fragment key={el.__typename + index}> <Hero data={el.hero} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_WhatAreWeDoing':
            return <React.Fragment key={el.__typename + index}> <WhatAreWeDoing data={el.whatAreWeDoing} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_EffectiveSolutions':
            return <React.Fragment key={el.__typename + index}> <EffectiveSolutions data={el.effectiveSolutions} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_Types':
            return <React.Fragment key={el.__typename + index}> <HelpTypes data={el.types} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_WhatIsCredit':
            return <React.Fragment key={el.__typename + index}> <WhatIsCredit data={el.whatIsCredit} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_Cta':
            return <React.Fragment key={el.__typename + index}> <CallToAction data={el.cta} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_Faq':
            return <React.Fragment key={el.__typename + index}> <Faq data={el.faq} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_OurExperts':
            return <React.Fragment key={el.__typename + index}> <OurExperts data={el.ourExperts} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ThreeColumnText':
            return <React.Fragment key={el.__typename + index}> <ThreeColumnText data={el.threeColumnText} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections__RepeaterFourColumnText':
            return <React.Fragment key={el.__typename + index}> <RepeaterFourColumnText data={el.repeaterFourColumnText} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_HeroForm':
            return <React.Fragment key={el.__typename + index}> <HeroForm data={el.heroForm} uri={pageContext.url} title={title} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_FourTilesWithTitle':
            return <React.Fragment key={el.__typename + index}> <FourTilesWithTitle data={el.fourTilesWithTitle} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_FourBigTextTiles':
            return <React.Fragment key={el.__typename + index}> <FourBigTextTiles data={el.fourBigTextTiles} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnsCompare':
            return <React.Fragment key={el.__typename + index}> <TwoColumnsCompare data={el.twoColumnsCompare} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ListWithImgOnRight':
            return <React.Fragment key={el.__typename + index}> <ListWithImgOnRight data={el.listWithImgOnRight} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_StepsToCredit':
            return <React.Fragment key={el.__typename + index}> <StepsToCredit data={el.stepsToCredit} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnCompareColored':
            return <React.Fragment key={el.__typename + index}> <TwoColumnCompareColored data={el.twoColumnCompareColored} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_LongPanelWithIcon':
            return <React.Fragment key={el.__typename + index}> <LongPanelWithIcon data={el.longPanelWithIcon} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ThreeColumnTextWithTitles':
            return <React.Fragment key={el.__typename + index}> <ThreeColumnTextWithTitles data={el.threeColumnTextWithTitles} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnText':
            return <React.Fragment key={el.__typename + index}> <TwoColumnText data={el.twoColumnText} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_BlogSlider':
            return <React.Fragment key={el.__typename + index}> <BlogSlider data={el.blogSlider} posts={slider.nodes} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnFlex':
            return <React.Fragment key={el.__typename + index}> <TwoColumnRepeater data={el.twoColumnFlex} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ThreeStepsWithLongPanel':
            return <React.Fragment key={el.__typename + index}> <ThreeStepsWithLongPanel data={el.threeStepsWithLongPanel} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TextWithImgOnLeft':
            return <React.Fragment key={el.__typename + index}> <TextWithImgOnLeft data={el.textWithImgOnLeft} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_Calculator':
            return <React.Fragment key={el.__typename + index}> <Calculator data={el.calculator} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_CreditTypes':
            return <React.Fragment key={el.__typename + index}> <CreditTypes data={el.creditTypes} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_FourTiles':
            return <React.Fragment key={el.__typename + index}> <FourTiles data={el.fourTiles} /> </React.Fragment>
          case "WpPage_PageBuilder_Sections_ThreeCommentsWithTitle":
            return <React.Fragment key={el.__typename + index}> <ThreeCommentsWithTitle data={el.threeCommentsWithTitle} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TextWithImgOnRight':
            return <React.Fragment key={el.__typename + index}> <TextWithImgOnRight data={el.textWithImgOnRight} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_FourColumnText':
            return <React.Fragment key={el.__typename + index}> <FourColumnText data={el.fourColumnText} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ExtendedListWithImgOnRight':
            return <React.Fragment key={el.__typename + index}> <ExtendedListWithImgOnRight data={el.extendedListWithImgOnRight} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnFlexAlt':
            return <React.Fragment key={el.__typename + index}> <TwoColumnRepeaterAlt data={el.twoColumnFlexAlt} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnVideo':
            return <React.Fragment key={el.__typename + index}> <TwoColumnVideo data={el.twoColumnVideo} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ListWithImgOnLeftRepeater':
            return <React.Fragment key={el.__typename + index}> <ListWithImgOnLeftRepeater data={el.listWithImgOnLeftRepeater} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TextWithImgOnLeftAlt':
            return <React.Fragment key={el.__typename + index}> <TextWithImgOnLeftAlt data={el.textWithImgOnLeftAlt} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ThreeColumnsHighlighted':
            return <React.Fragment key={el.__typename + index}> <ThreeColumnsHighlighted data={el.threeColumnsHighlighted} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_FourTilesExtended':
            return <React.Fragment key={el.__typename + index}> <FourTilesExtended data={el.fourTilesExtended} /> </React.Fragment>
          case "WpPage_PageBuilder_Sections_ThreePointsWithImgOnLeft":
            return <React.Fragment key={el.__typename + index}> <ThreePointsWithImgOnLeft data={el.threePointsWithImgOnLeft} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ListWithImgOnLeft':
            return <React.Fragment key={el.__typename + index}> <ListWithImgOnLeft data={el.listWithImgOnLeft} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ContactForm':
            return <React.Fragment key={el.__typename + index}> <ContactForm data={el.contactForm} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_BlogArchive':
            return <React.Fragment key={el.__typename + index}> <BlogArchive url={pageContext.url} slug={pageContext.slug} categories={allWpCategory.nodes} location={location} data={el.blogArchive} title={title} allPosts={blogArchive.nodes} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_HeroImg':
            return <React.Fragment key={el.__typename + index}> <HeroImg data={el.heroImg} uri={pageContext.url} title={title} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_HeroImgExtended':
            return <React.Fragment key={el.__typename + index}> <HeroImgExtended data={el.heroImgExtended} uri={pageContext.url} title={title} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ThreeColumnsFiles':
            return <React.Fragment key={el.__typename + index}> <ThreeColumnsFiles data={el.threeColumnsFiles} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_StepsToComplaints':
            return <React.Fragment key={el.__typename + index}> <StepsToComplaints data={el.stepsToComplaints} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnTextWithBoldText':
            return <React.Fragment key={el.__typename + index}> <TwoColumnTextWithBoldText data={el.twoColumnTextWithBoldText} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_BigTextTiles':
            return <React.Fragment key={el.__typename + index}> <BigTextTiles data={el.bigTextTiles} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoCards':
            return <React.Fragment key={el.__typename + index}> <TwoCards data={el.twoCards} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnsWithExtendedLinks':
            return <React.Fragment key={el.__typename + index}> <TwoColumnsWithExtendedLinks data={el.twoColumnsWithExtendedLinks} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_AllExperts':
            return <React.Fragment key={el.__typename + index}> <AllExperts experts={allWpEkspert.nodes} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ThreeColumnsHighlightedAlt':
            return <React.Fragment key={el.__typename + index}> <ThreeColumnsHighlightedAlt data={el.threeColumnsHighlightedAlt} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_InformAndVideo':
            return <React.Fragment key={el.__typename + index}> <InformAndVideo data={el.informAndVideo} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_Map':
            return <React.Fragment key={el.__typename + index}> <Map data={el.map} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnTextHighlighted':
            return <React.Fragment key={el.__typename + index}> <TwoColumnTextHighlighted data={el.twoColumnTextHighlighted} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ThreeTiles':
            return <React.Fragment key={el.__typename + index}> <ThreeTiles data={el.threeTiles} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ThreeColumnTextMiddleHighlighted':
            return <React.Fragment key={el.__typename + index}> <ThreeColumnTextMiddleHighlighted data={el.threeColumnTextMiddleHighlighted} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_MultiplyTilesWithTextBlock':
            return <React.Fragment key={el.__typename + index}> <MultiplyTilesWithTextBlock data={el.multiplyTilesWithTextBlock} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnsTextAndIconsList':
            return <React.Fragment key={el.__typename + index}> <TwoColumnsTextAndIconsList data={el.twoColumnsTextAndIconsList} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnTextRepeaterSepareted':
            return <React.Fragment key={el.__typename + index}> <TwoColumnTextRepeaterSepareted data={el.twoColumnTextRepeaterSepareted} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_PrivacyPolicy':
            return <React.Fragment key={el.__typename + index}> <PrivacyPolicy data={el.privacyPolicy} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnTextRepeater':
            return <React.Fragment key={el.__typename + index}> <TwoColumnTextRepeater data={el.twoColumnTextRepeater} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TwoColumnsTextAndIconsListAlt':
            return <React.Fragment key={el.__typename + index}> <TwoColumnsTextAndIconsListAlt data={el.twoColumnsTextAndIconsListAlt} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_TabsWithThreeColumnsContent':
            return <React.Fragment key={el.__typename + index}> <TabsWithThreeColumnsContent data={el.tabsWithThreeColumnsContent} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_HeroText':
            return <React.Fragment key={el.__typename + index}> <HeroText data={el.heroText} uri={pageContext.url} title={title} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_Reviews':
            return <React.Fragment key={el.__typename + index}> <Reviews data={el.reviews} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_HeighlihtedAdres':
            return <React.Fragment key={el.__typename + index}> <HeighlihtedAdres data={el.heighlihtedAdres} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_ExpertWithContactInform':
            return <React.Fragment key={el.__typename + index}> <ExpertWithContactInform data={el.expertWithContactInform} /> </React.Fragment>
          case 'WpPage_PageBuilder_Sections_Citate':
            return <React.Fragment key={el.__typename + index}> <Citate data={el.citate} /> </React.Fragment>
          default:
            return <React.Fragment key={el.__typename + index}> <p className="h2">{el.__typename}</p> </React.Fragment>
        }
      })}
    </main>
  )
}

export const query = graphql`
query page($id: String!) {
  wpPage(id: {eq: $id}) {
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
  blogArchive: allWpPost(sort: {date: DESC})  {
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
      categories: tags {
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
  slider: allWpPost(sort: {date: DESC})  {
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
      categories: tags {
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
  allWpCategory: allWpTag {
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
        workWithProducts
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