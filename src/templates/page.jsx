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
import ShortContactForm from "../components/sections/short-contact-form"
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
import Calculator from "../components/sections/calculator"
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
import parse from 'html-react-parser'
import ListWithImgOnLeft from "../components/sections/list-with-img-on-left"
import ContactForm from "../components/sections/standart-contact-form"
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

export function Head({ data: { wpPage: { seo } } }) {
  const fullHead = parse(seo.fullHead, {
    replace: el => {
      if (el.data === "\n") {
        return <br />
      }
    }
  })
  return <>
    <title>{seo.title}</title>
    <meta name='description' content={seo.metaDesc} />
    {fullHead}
  </>
}

export default function Page({ data: { allWpEkspert, slider, wpPage: { title, blocks: { pageBuilder } } } }) {
  return (
    <main>
      {pageBuilder?.map(el => {
        switch (el.switch) {
          case 'heroHomepage':
            return <Hero data={el.hero} />
          case 'whatAreWeDoing':
            return <WhatAreWeDoing data={el.whatAreWeDoing} />
          case 'effectiveSolutions':
            return <EffectiveSolutions data={el.effectiveSolutions} />
          case 'types':
            return <HelpTypes data={el.types} />
          case 'whatIsCredit':
            return <WhatIsCredit data={el.whatIsCredit} />
          case 'cta':
            return <CallToAction data={el.cta} />
          case 'faq':
            return <Faq data={el.faq} />
          case 'ourExperts':
            return <OurExperts data={el.ourExperts} />
          case 'threeColumnText':
            return <ThreeColumnText data={el.threeColumnText} />
          case 'repeaterFourColumnText':
            return <RepeaterFourColumnText data={el.repeaterFourColumnText} />
          case 'shortContactForm':
            return <ShortContactForm data={el.shortContactForm} />
          case 'heroForm':
            return <HeroForm data={el.heroForm} title={title} />
          case 'fourTilesWithTitle':
            return <FourTilesWithTitle data={el.fourTilesWithTitle} />
          case 'fourBigTextTiles':
            return <FourBigTextTiles data={el.fourBigTextTiles} />
          case 'twoColumnsCompare':
            return <TwoColumnsCompare data={el.twoColumnsCompare} />
          case 'listWithImgOnRight':
            return <ListWithImgOnRight data={el.listWithImgOnRight} />
          case 'stepsToCredit':
            return <StepsToCredit data={el.stepsToCredit} />
          case 'twoColumnCompareColored':
            return <TwoColumnCompareColored data={el.twoColumnCompareColored} />
          case 'longPanelWithIcon':
            return <LongPanelWithIcon data={el.longPanelWithIcon} />
          case 'threeColumnTextWithTitles':
            return <ThreeColumnTextWithTitles data={el.threeColumnTextWithTitles} />
          case 'twoColumnText':
            return <TwoColumnText data={el.twoColumnText} />
          case 'blogSlider':
            return <BlogSlider data={el.blogSlider} posts={slider.nodes} />
          case 'twoColumnFlex':
            return <TwoColumnRepeater data={el.twoColumnFlex} />
          case 'threeStepsWithLongPanel':
            return <ThreeStepsWithLongPanel data={el.threeStepsWithLongPanel} />
          case 'textWithImgOnLeft':
            return <TextWithImgOnLeft data={el.textWithImgOnLeft} />
          case 'calculator':
            return <Calculator data={el.calculator} />
          case 'creditTypes':
            return <CreditTypes data={el.creditTypes} />
          case 'fourTiles':
            return <FourTiles data={el.fourTiles} />
          case "threeCommentsWithTitle":
            return <ThreeCommentsWithTitle data={el.threeCommentsWithTitle} />
          case 'textWithImgOnRight':
            return <TextWithImgOnRight data={el.textWithImgOnRight} />
          case 'fourColumnText':
            return <FourColumnText data={el.fourColumnText} />
          case 'extendedListWithImgOnRight':
            return <ExtendedListWithImgOnRight data={el.extendedListWithImgOnRight} />
          case 'twoColumnFlexAlt':
            return <TwoColumnRepeaterAlt data={el.twoColumnFlexAlt} />
          case 'twoColumnVideo':
            return <TwoColumnVideo data={el.twoColumnVideo} />
          case 'listWithImgOnLeftRepeater':
            return <ListWithImgOnLeftRepeater data={el.listWithImgOnLeftRepeater} />
          case 'textWithImgOnLeftAlt':
            return <TextWithImgOnLeftAlt data={el.textWithImgOnLeftAlt} />
          case 'threeColumnsHighlighted':
            return <ThreeColumnsHighlighted data={el.threeColumnsHighlighted} />
          case 'fourTilesExtended':
            return <FourTilesExtended data={el.fourTilesExtended} />
          case "threePointsWithImgOnLeft":
            return <ThreePointsWithImgOnLeft data={el.threePointsWithImgOnLeft} />
          case 'listWithImgOnLeft':
            return <ListWithImgOnLeft data={el.listWithImgOnLeft} />
          case 'contactForm':
            return <ContactForm data={el.contactForm} />
          case 'blogArchive':
            return <BlogArchive data={el.blogArchive} title={title} />
          case 'heroImg':
            return <HeroImg data={el.heroImg} title={title} />
          case 'heroImgExtended':
            return <HeroImgExtended data={el.heroImgExtended} title={title} />
          case 'threeColumnsFiles':
            return <ThreeColumnsFiles data={el.threeColumnsFiles} />
          case 'stepsToComplaints':
            return <StepsToComplaints data={el.stepsToComplaints} />
          case 'twoColumnTextWithBoldText':
            return <TwoColumnTextWithBoldText data={el.twoColumnTextWithBoldText} />
          case 'bigTextTiles':
            return <BigTextTiles data={el.bigTextTiles} />
          case 'twoCards':
            return <TwoCards data={el.twoCards} />
          case 'twoColumnsWithExtendedLinks':
            return <TwoColumnsWithExtendedLinks data={el.twoColumnsWithExtendedLinks} />
          case 'allExperts':
            return <AllExperts experts={allWpEkspert.nodes}/>
          default:
            return null
        }
      })}
    </main>
  )
} // two_columns_with_extended_links 

export const query = graphql`
    query page($id: String!) {
        wpPage(id: {eq: $id}){
            slug
            title
            id
            seo {
              fullHead
              title
              metaDesc
            }
            blocks {
              pageBuilder {
                switch
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
                ...shortContactForm
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
        slider : allWpPost(limit: 3) {
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
        allWpEkspert {
          nodes {
            id
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