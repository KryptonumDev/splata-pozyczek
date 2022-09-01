import { graphql } from "gatsby"
import React from "react"
import Calculator from "../components/sections/calculator"
import CallToAction from "../components/sections/cta"
import TwoColumn from "../components/sections/two-column"

export default function Page({ data: { wpPage: { homepage } } }) {
    return (
        <main>
            <CallToAction data={homepage.callToAction} />
            <TwoColumn data={homepage.blokTekstowy} />
            <Calculator/>
        </main>
    )
}

export const query = graphql`
    query page($id: String!) {
        wpPage(id: {eq: $id}){
                id
                ...callToAction
                ...blokTekstowy
        }
    }
`