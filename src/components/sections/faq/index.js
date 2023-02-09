import { graphql } from "gatsby"
import React, { useMemo } from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import { textParser } from '../../../helpers/wysiwyg-modification'
import FaqItem from "./item"
import { Helmet } from "react-helmet"

export default function Faq({ data: { title, repeater } }) {


    const arrays = useMemo(() => {
        const first = []
        const second = []
        const arr = []

        repeater.forEach((el, index) => {
            if (index === 0 || !(index % 2)) {
                first.push(el)
            } else {
                second.push(el)
            }

            arr.push({
                "@type": "Question",
                "name": el.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": el.answer
                }
            })
        })

        return { first, second, arr }
    }, [repeater])

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": arrays.arr
    };

    return (
        <Wrapper>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Helmet>
            <Container>
                <Content>
                    {title
                        ? <Title className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        : null}
                    <Grid className="small">
                        <div className="grid second">
                            {arrays.first.map((el, index) => (
                                <React.Fragment key={index}><FaqItem el={el} open={!index} /></React.Fragment>
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
                                    <React.Fragment key={index}><FaqItem el={el} open={open} /></React.Fragment>
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
  fragment faq on WpPage_PageBuilder_Sections_Faq {
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
    margin-top: var(--section);
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