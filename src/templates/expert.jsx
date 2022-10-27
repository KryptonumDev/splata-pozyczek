import { graphql } from "gatsby"
import React from "react"
import HeroExpert from "../components/sections/hero-expert"
import Reviews from "../components/sections/reviews"

export default function Expert({ data, pageContext }) {
    return (
        <main>
            <HeroExpert data={data} pageContext={pageContext} />
            {data.wpEkspert.comments.nodes.length > 0
                ? <Reviews expert={true} comments={data.wpEkspert.comments.nodes} data={{ title: 'Sprawdź opinię na temat <span style="color: #3b5ba9;">współpracy</span>.' }} />
                : null}
        </main>
    )
}

export const query = graphql`
    query expert($id: String!) {
        wpEkspert(id: {eq: $id}){
            id
            title
            comments {
              nodes {
                id
                  author {
                    node {
                      name
                    }
                  }
                  content
              }
            }
            ekspert {
              facebook
              twitter
              pinterest
              role
              numerTelefonu
              emailAdres
              addInform {
                title
                text
                subTitle
                subText
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              imageSmall {
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
`