import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"

export default function FourTilesWithTitle({ data }) {
    return (
        <Wrapper>
            <Container>
                
            </Container>
        </Wrapper>
    )
}

// export const query = graphql`
//   fragment data on WpPage_Blocks_pageBuilder {
//     fourTilesWithTitle {
//       title
//       tekstWyrozniony
//       plaszki {
//         text
//         icon {
//           altTexta
//           localFile {
//             publicURL
//           }
//         }
//       }
//     }
//   }
// `

const Wrapper = styled.section`
`