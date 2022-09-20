import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"

export default function BlogSlider({ data }) {
    return (
        <Wrapper>
            <Container>
                tu będzie blog slider
            </Container>
        </Wrapper>
    )
}

// export const query = graphql`
//   fragment BlogSlider on WpPage_Blocks_pageBuilder {
//     BlogSlider {
//       title
//       tekstWyrozniony
//       plaszki {
//         text
//         icon {
//           altText
//           localFile {
//             publicURL
//           }
//         }
//       }
//     }
//   }
// `

const Wrapper = styled.section`
    margin-top: var(--section);
`