import { graphql } from "gatsby"
import React from "react"
import EffectiveSolutions from "../components/sections/effective-solutions"
import Hero from "../components/sections/hero-home"
import WhatAreWeDoing from "../components/sections/what-are-we-doing"
import CallToAction from '../components/sections/cta'
import HelpTypes from "../components/sections/typt-pomocy"
import WhatIsCredit from "../components/sections/what-is-credit"
import Faq from "../components/sections/faq"

export default function Page({ data: { wpPage: { seo, blocks: { pageBuilder } } } }) {
  debugger
  return (
    <main>
      {pageBuilder.map(el => {
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
          default:
            return null
        }
      })}
    </main>
  )
}


export const query = graphql`
    query page($id: String!) {
        wpPage(id: {eq: $id}){
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
              }
            }
        }
    }
`