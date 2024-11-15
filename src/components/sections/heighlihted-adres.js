import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"

export default function HeighlihtedAdres({ data: { list } }) {
    return (
        <Wrapper>
            <Container>
                <Box>
                    {list.map(el => (
                        <Flex key={el.text}>
                            <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                            <div className="body1" dangerouslySetInnerHTML={{ __html: el.text }} />
                        </Flex>
                    ))}
                </Box>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment heighlihtedAdres on WpPage_PageBuilder_Sections_HeighlihtedAdres {
    heighlihtedAdres {
        list{
            icon{
                altText
                localFile{
                    publicURL
                }
            }
            text
        }
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);
`

const Box = styled.div`
    padding: 24px;
    box-shadow: var(--shadow);
    border-radius: 4px;
    background-color: var(--color-light);
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
    align-items: center;
    .body1{
        p{
            color: #6F6F71;
        }
    }
`