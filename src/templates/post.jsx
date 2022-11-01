import { graphql } from "gatsby"
import React from "react"
import { useMemo } from "react"
import styled from "styled-components"
import { Container } from "../components/atoms/container"
import Hero from "../components/sections/blog-post/hero"
import ImageSection from "../components/sections/blog-post/image"
import QuickLinks from "../components/sections/blog-post/quick-links"
import TextSection from "../components/sections/blog-post/text"
import { textParser } from "../helpers/wysiwyg-modification"

export default function Post({ pageContext, data: { wpPost } }) {

    const quickLinks = useMemo(() => {
        const links = []

        wpPost.blogPost.sections?.forEach(el => {
            switch (el.__typename) {
                case 'WpPost_Blogpost_Sections_TextSection':
                    links.push(textParser(el.textSection.title))
                    break
                case 'WpPost_Blogpost_Sections_ImageSection':
                    links.push(textParser(el.imageSection.title))
                    break
                default:
                    return null
            }
        })

        return links
    }, [wpPost.blogPost.sections])

    return (
        <main id='main'>
            <Hero data={wpPost} pageContext={pageContext} />
            <Container>
                <Grid>
                    <QuickLinks links={quickLinks} />
                    <div>
                        {wpPost.blogPost.sections?.map(el => {
                            switch (el.__typename) {
                                case 'WpPost_Blogpost_Sections_TextSection':
                                    return <TextSection data={el.textSection} />
                                case 'WpPost_Blogpost_Sections_ImageSection':
                                    return <ImageSection data={el.imageSection} />
                                default:
                                    return <p className="h2">{el.__typename}</p>
                            }
                        })}
                    </div>
                </Grid>
            </Container>
        </main>
    )
}

export const query = graphql`
    query post($id: String!) {
        wpPost(id: {eq: $id}) {
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
            sections{
            __typename
            ...imageSection
            ...textSection
                }
            }
        }
    }
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