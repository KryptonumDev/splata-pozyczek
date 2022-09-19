import { graphql } from "gatsby"
import React, { useMemo } from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import { textParser } from '../../../helpers/wysiwyg-modification'
import FaqItem from "./item"

export default function Faq({ data: { title, repeater } }) {

    const arrays = useMemo(() => {
        let first = []
        let second = []

        repeater.forEach((el, index) => {
            if (index === 0 || !(index % 2)) {
                first.push(el)
            } else {
                second.push(el)
            }
        })

        return { first, second }
    }, [repeater])

    return (
        <Wrapper>
            <Container>
                <Content>
                    <Title className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    <Grid className="small">
                        <div className="grid second">
                            {arrays.first.map((el, index) => (
                                <FaqItem el={el} open={!index} />
                            ))}
                        </div>
                        <div className="grid second">
                            {arrays.second.map((el, index) => {
                                let open = false
                                if (typeof window !== 'undefined') {
                                    if (window.innerWidth > 640 && !index) {
                                        open = true
                                    }
                                }
                                return (
                                    <FaqItem el={el} open={open} />
                                )
                            }
                            )}
                        </div>
                    </Grid>
                </Content>
            </Container>
        </Wrapper >
    )
}

export const query = graphql`
  fragment faq on WpPage_Blocks_pageBuilder {
    faq {
      title
      repeater {
        answer
        question
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: 80px;
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`

const Title = styled.h2`
    margin-bottom: clamp(24px, ${24 / 768 * 100}vw, 32px);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(16px, ${16 / 768 * 100}vw, 24px) 32px;

    .grid{
        display: grid;
        grid-gap: clamp(16px, ${16 / 768 * 100}vw, 24px);
        height: fit-content;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
    
    details > summary {
        list-style: none;
    }
    
    details > summary::-webkit-details-marker {
        display: none;
    }
`