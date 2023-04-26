import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'


export default function WhatIsCredit({ data: { list, listTitle, text, title } }) {
    return (
        <Wrapper>
            <Container className="container"> 
                <Plate>
                    <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                </Plate>
            </Container>
            <Container>
                <Content>
                    <h3 className="arsenal h6" dangerouslySetInnerHTML={{ __html: textParser(listTitle) }} />
                    <Grid>
                        {list.map(el => (
                            <Item key={el.tekst}>
                                <img src={el.ikona.localFile.publicURL} alt={el.ikona.altText} />
                                <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.tekst) }} />
                            </Item>
                        ))}
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment whatIsCredit on WpPage_PageBuilder_Sections_WhatIsCredit {
    whatIsCredit {
        title
        text
        listTitle
        list {
          tekst
          ikona {
            altText
            localFile {
              publicURL
            }
          }
        }
      }
}
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .h4{
        font-family: 'Sans', sans-serif;
        font-size: clamp(30px, 4.296875vw, 38px);
    }

    @media (max-width: 480px) {
        .container{
            padding: 0;
        }
    }
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`

const Plate = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    justify-content: space-between;
    padding:  clamp(16px, ${24 / 768 * 100}vw, 32px);
    box-shadow: var(--shadow);
    border-radius: 4px;
    background-color: var(--color-light);
    margin-bottom:  clamp(24px, ${24 / 768 * 100}vw, 32px);

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-gap: 12px;
    }
`

const Grid = styled.div`
    columns: 2;
    column-gap: 32px;
    margin-top: clamp(12px, ${24 / 768 * 100}vw, 24px);

    @media (max-width: 580px) {
        columns: 1;
    }

`

const Item = styled.div`
    break-inside: avoid;
    margin-top: clamp(12px, ${12 / 768 * 100}vw, 16px);
    display: grid;
    grid-template-columns: 48px auto;
    grid-gap: clamp(8px, ${12 / 768 * 100}vw, 16px);

    &:first-child{
        margin-top: 0;   
    }

    img{
        width: clamp(44px,  ${48 / 768 * 100}vw,48px);
        height: clamp(44px,  ${48 / 768 * 100}vw,48px);
    }

    p{
        color: #6F6F71;
    }
    

    @media (max-width: 580px){
        p{
            margin-top: 0px;
        }
    }
`