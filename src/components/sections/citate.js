import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function Citate({ data: { title, text, cta } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Cite>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 27.744C2.176 25.824 3.968 23.552 5.376 20.928C6.784 18.304 7.52 15.776 7.584 13.344H6.912C5.12 13.344 3.584 12.768 2.304 11.616C1.024 10.336 0.384 8.704 0.384 6.72C0.384 4.672 1.024 3.008 2.304 1.728C3.584 0.576 5.12 0 6.912 0C8.64 0 10.176 0.576 11.52 1.728L11.808 2.112C13.344 3.84 14.112 6.272 14.112 9.408C14.112 13.12 13.056 17.088 10.944 21.312C8.896 25.472 6.368 28.8 3.36 31.296L0 27.744ZM17.952 27.744C20.128 25.824 21.92 23.552 23.328 20.928C24.736 18.304 25.472 15.776 25.536 13.344H24.864C23.008 13.344 21.472 12.768 20.256 11.616C18.976 10.336 18.336 8.704 18.336 6.72C18.336 4.672 18.976 3.008 20.256 1.728C21.472 0.576 23.008 0 24.864 0C26.592 0 28.128 0.576 29.472 1.728L29.76 2.112C31.296 3.84 32.064 6.272 32.064 9.408C32.064 13.12 31.008 17.088 28.896 21.312C26.848 25.472 24.32 28.8 21.312 31.296L17.952 27.744Z" fill="#DAE2FF" />
                        </svg>
                        <div>
                            <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                            <div className="body2" dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    </Cite>
                    <h2 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(cta) }} />
                </Flex>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment citate on WpPage_PageBuilder_Sections_Citate {
    citate {
        title
        text
        cta
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const Cite = styled.div`
    display: grid;
    grid-template-columns: 32px auto;
    grid-gap: 10px;
    padding: clamp(16px , ${16 / 768 * 100}vw,24px) clamp(22px , ${22 / 768 * 100}vw,42px) ;
    box-shadow: var(--shadow);
    border-radius: 4px; 

    .body2{
        p{
            color: #6F6F71;
            margin-top: 4px;
        }
    }

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`


const Flex = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: 587fr 381fr;
    grid-gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`
