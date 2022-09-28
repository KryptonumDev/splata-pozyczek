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