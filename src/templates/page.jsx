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
import RepeaterFourColumnText from "../components/sections/four-column-text"
import ShortContactForm from "../components/sections/short-contact-form.js"
import HeroForm from "../components/sections/hero-contact-form.js"
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
import LongPanelWithTwoColumn from "../components/sections/long-panel-with-two-column"
import FourTiles from "../components/sections/four-tiles"

export default function Page({ data: { wpPage: { title, seo, blocks: { pageBuilder } } } }) {
  return (
    <main>
      {/* test rerenderingu */}
      {pageBuilder[0].switch === "heroHomepage"
        ? <Hero data={pageBuilder[0].hero} />
        : null}

      {/* {pageBuilder?.map(el => {
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
            return <BlogSlider />
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
          case 'longPanelWithTwoColumn':
            return <LongPanelWithTwoColumn data={el.longPanelWithTwoColumn} />
          case 'fourTiles':
            return <FourTiles data={el.fourTiles} />
          default:
            return null
        }
      })} */}
    </main>
  )
} // creditTypes       

export const query = graphql`
    query page($id: String!) {
        wpPage(id: {eq: $id}){
            slug
            title
            id
            seo {
              fullHead
            }
            blocks {
              pageBuilder {
                switch
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
                ...textWithImgOnLeft
                ...threeStepsWithLongPanel
                ...calculator
                ...creditTypes
                ...longPanelWithTwoColumn
                ...fourTiles
              }
            }
        }
    }
`