import { graphql } from "gatsby"
import React, { lazy, Suspense } from "react"


export default function Page({ data: { wpPage: { title, seo, blocks: { pageBuilder } } } }) {

  const Hero = lazy(() => import("../components/sections/hero-home"))
  const EffectiveSolutions = lazy(() => import("../components/sections/effective-solutions"))
  const WhatAreWeDoing = lazy(() => import("../components/sections/what-are-we-doing"))
  const CallToAction = lazy(() => import('../components/sections/cta'))
  const HelpTypes = lazy(() => import("../components/sections/typt-pomocy"))
  const WhatIsCredit = lazy(() => import("../components/sections/what-is-credit"))
  const Faq = lazy(() => import("../components/sections/faq"))
  const OurExperts = lazy(() => import("../components/sections/our-experts"))
  const ThreeColumnText = lazy(() => import("../components/sections/three-column-text"))
  const RepeaterFourColumnText = lazy(() => import("../components/sections/four-column-text-repeater"))
  const ShortContactForm = lazy(() => import("../components/sections/short-contact-form.js"))
  const HeroForm = lazy(() => import("../components/sections/hero-contact-form.js"))
  const FourTilesWithTitle = lazy(() => import("../components/sections/four-tiles-with-title"))
  const FourBigTextTiles = lazy(() => import("../components/sections/four-big-text-tiles"))
  const TwoColumnsCompare = lazy(() => import("../components/sections/two-columns-compare"))
  const ListWithImgOnRight = lazy(() => import("../components/sections/list-with-img-on-right"))
  const StepsToCredit = lazy(() => import("../components/sections/steps-to-credit"))
  const TwoColumnCompareColored = lazy(() => import("../components/sections/two-columns-compare-colored"))
  const LongPanelWithIcon = lazy(() => import("../components/sections/long-panel-with-icon"))
  const ThreeColumnTextWithTitles = lazy(() => import("../components/sections/three-column-text-with-titles"))
  const TwoColumnText = lazy(() => import("../components/sections/two-column-text"))
  const BlogSlider = lazy(() => import("../components/sections/blog-slider"))
  const TwoColumnRepeater = lazy(() => import("../components/sections/two-column-repeater"))
  const ThreeStepsWithLongPanel = lazy(() => import("../components/sections/three-steps-with-long-panel"))
  const TextWithImgOnLeft = lazy(() => import("../components/sections/text-with-img-on-left"))
  const Calculator = lazy(() => import("../components/sections/calculator"))
  const CreditTypes = lazy(() => import("../components/sections/credit-types"))
  const LongPanelWithTwoColumn = lazy(() => import("../components/sections/long-panel-with-two-column"))
  const FourTiles = lazy(() => import("../components/sections/four-tiles"))
  const ThreeCommentsWithTitle = lazy(() => import("../components/sections/three-comments-with-title"))
  const TextWithImgOnRight = lazy(() => import("../components/sections/text-with-img-on-right"))
  const FourColumnText = lazy(() => import('../components/sections/four-column-text'))
  const ExtendedListWithImgOnRight = lazy(() => import("../components/sections/extended-list-with-img-on-right"))
  const TwoColumnRepeaterAlt = lazy(() => import("../components/sections/two-column-repeater-alt"))
  const TwoColumnVideo = lazy(() => import("../components/sections/two-column-video"))
  const ListWithImgOnLeftRepeater = lazy(() => import("../components/sections/list-with-img-on-left-repeater"))
  const TextWithImgOnLeftAlt = lazy(() => import("../components/sections/text-with-img-on-left-alt"))
  const ThreeColumnsHighlighted = lazy(() => import("../components/sections/three-columns-highlighted"))

  return (
    <main id='main'>
      {pageBuilder?.map(el => {
        switch (el.switch) {
          case 'heroHomepage':
            return <Suspense><Hero data={el.hero} /></Suspense>
          case 'whatAreWeDoing':
            return <Suspense><WhatAreWeDoing data={el.whatAreWeDoing} /></Suspense>
          case 'effectiveSolutions':
            return <Suspense><EffectiveSolutions data={el.effectiveSolutions} /></Suspense>
          case 'types':
            return <Suspense><HelpTypes data={el.types} /></Suspense>
          case 'whatIsCredit':
            return <Suspense><WhatIsCredit data={el.whatIsCredit} /></Suspense>
          case 'cta':
            return <Suspense><CallToAction data={el.cta} /></Suspense>
          case 'faq':
            return <Suspense><Faq data={el.faq} /></Suspense>
          case 'ourExperts':
            return <Suspense><OurExperts data={el.ourExperts} /></Suspense>
          case 'threeColumnText':
            return <Suspense><ThreeColumnText data={el.threeColumnText} /></Suspense>
          case 'repeaterFourColumnText':
            return <Suspense><RepeaterFourColumnText data={el.repeaterFourColumnText} /></Suspense>
          case 'shortContactForm':
            return <Suspense><ShortContactForm data={el.shortContactForm} /></Suspense>
          case 'heroForm':
            return <Suspense><HeroForm data={el.heroForm} title={title} /></Suspense>
          case 'fourTilesWithTitle':
            return <Suspense><FourTilesWithTitle data={el.fourTilesWithTitle} /></Suspense>
          case 'fourBigTextTiles':
            return <Suspense><FourBigTextTiles data={el.fourBigTextTiles} /></Suspense>
          case 'twoColumnsCompare':
            return <Suspense><TwoColumnsCompare data={el.twoColumnsCompare} /></Suspense>
          case 'listWithImgOnRight':
            return <Suspense><ListWithImgOnRight data={el.listWithImgOnRight} /></Suspense>
          case 'stepsToCredit':
            return <Suspense><StepsToCredit data={el.stepsToCredit} /></Suspense>
          case 'twoColumnCompareColored':
            return <Suspense><TwoColumnCompareColored data={el.twoColumnCompareColored} /></Suspense>
          case 'longPanelWithIcon':
            return <Suspense><LongPanelWithIcon data={el.longPanelWithIcon} /></Suspense>
          case 'threeColumnTextWithTitles':
            return <Suspense><ThreeColumnTextWithTitles data={el.threeColumnTextWithTitles} /></Suspense>
          case 'twoColumnText':
            return <Suspense><TwoColumnText data={el.twoColumnText} /></Suspense>
          case 'blogSlider':
            return <Suspense><BlogSlider /></Suspense>
          case 'twoColumnFlex':
            return <Suspense><TwoColumnRepeater data={el.twoColumnFlex} /></Suspense>
          case 'threeStepsWithLongPanel':
            return <Suspense><ThreeStepsWithLongPanel data={el.threeStepsWithLongPanel} /></Suspense>
          case 'textWithImgOnLeft':
            return <Suspense><TextWithImgOnLeft data={el.textWithImgOnLeft} /></Suspense>
          case 'calculator':
            return <Suspense><Calculator data={el.calculator} /></Suspense>
          case 'creditTypes':
            return <Suspense><CreditTypes data={el.creditTypes} /></Suspense>
          case 'longPanelWithTwoColumn':
            return <Suspense><LongPanelWithTwoColumn data={el.longPanelWithTwoColumn} /></Suspense>
          case 'fourTiles':
            return <Suspense><FourTiles data={el.fourTiles} /></Suspense>
          case "threeCommentsWithTitle":
            return <Suspense><ThreeCommentsWithTitle data={el.threeCommentsWithTitle} /></Suspense>
          case 'textWithImgOnRight':
            return <Suspense><TextWithImgOnRight data={el.textWithImgOnRight} /></Suspense>
          case 'fourColumnText':
            return <Suspense><FourColumnText data={el.fourColumnText} /></Suspense>
          case 'extendedListWithImgOnRight':
            return <Suspense><ExtendedListWithImgOnRight data={el.extendedListWithImgOnRight} /></Suspense>
          case 'twoColumnFlexAlt':
            return <Suspense><TwoColumnRepeaterAlt data={el.twoColumnFlexAlt} /></Suspense>
          case 'twoColumnVideo':
            return <Suspense><TwoColumnVideo data={el.twoColumnVideo} /></Suspense>
          case 'listWithImgOnLeftRepeater':
            return <Suspense><ListWithImgOnLeftRepeater data={el.listWithImgOnLeftRepeater} /></Suspense>
          case 'textWithImgOnLeftAlt':
            return <Suspense><TextWithImgOnLeftAlt data={el.textWithImgOnLeftAlt} /></Suspense>
          case 'threeColumnsHighlighted':
            return <Suspense><ThreeColumnsHighlighted data={el.threeColumnsHighlighted} /></Suspense>
          default:
            return null
        }
      })}
    </main>
  ) // threeColumnsHighlightedAlt 
}

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
                ...twoColumnRepeaterAlt
                ...textWithImgOnLeft
                ...threeStepsWithLongPanel
                ...calculator
                ...creditTypes
                ...longPanelWithTwoColumn
                ...fourTiles
                ...threeCommentsWithTitle
                ...textWithImgOnRight
                ...fourColumnText
                ...extendedListWithImgOnRight
                ...twoColumnVideo
                ...listWithImgOnLeftRepeater
                ...textWithImgOnLeftAlt
                ...threeColumnsHighlighted
              }
            }
        }
    }
`