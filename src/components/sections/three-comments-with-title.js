import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import LightQuotes from './../../images/blockquotes-light.svg'
import MediumQuotes from './../../images/blockquotes-medium.svg'

export default function ThreeCommentsWithTitle({ data: { title, text, comments } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <div className="text">
                    <p className="h6" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                </div>
                <Grid>
                    {comments.map((el, index) => (
                        <Item key={index} light={LightQuotes} medium={MediumQuotes}>
                            <div className="content">
                                <img src={index === 1 ? MediumQuotes : LightQuotes} alt={'decorative quotes'} />
                                <div>
                                    <p className="body1">{el.tytul}</p>
                                    <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(el.tekst) }} />
                                    <p className="body2">{el.imieINazwisko}</p>
                                </div>
                            </div>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment threeCommentsWithTitle  on WpPage_PageBuilder_Sections_ThreeCommentsWithTitle {
    threeCommentsWithTitle {
      title
      text
      comments {
        tytul
        tekst
        imieINazwisko
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .h4{
        margin-bottom: 16px;
        max-width: 1000px;
        text-align: center;
        margin: 0 auto;
        font-size: clamp(25px, 4.296875vw, 38px);
    }

    .text{
        margin: 0 auto;
        max-width: 1000px;
        background: var(--color-light);
        box-shadow: var(--shadow);
        border-radius: 4px;
        padding: 10px 24px;
        margin-top: 16px;
        margin-bottom: clamp(24px, ${24 / 768 * 100}vw, 32px);
    }

    .h6{
        text-align: center;
        max-width: 540px;
        margin: 0 auto;
        font-size: clamp(16px, 2.34375vw, 20px);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: clamp(24px, ${32 / 768 * 100}vw, 32px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    box-shadow: var(--shadow);
    border-radius: 4px;
    padding: 8px;

    @media (max-width: 1024px){
        &:last-child{
            grid-column-start: 1;
            grid-column-end: 3;
            width: calc(50% - 16px);
            margin: 0 auto;
        }
    }

    @media (max-width: 640px){
        &:last-child{
            width: 100%;
            margin: unset;
            grid-column-start: unset;
            grid-column-end: unset;
        }
    }

    .content{
        padding: clamp(8px, ${8 / 768 * 100}vw, 16px) clamp(4px, ${30 / 1920 * 100}vw, 30px) clamp(8px, ${8 / 768 * 100}vw, 16px) 8px;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px;
        img{
            width: clamp(24px, ${24 / 768 * 100}vw, 32px);
            height: clamp(24px, ${24 / 768 * 100}vw, 32px);
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-gap: 8px;
        }
    }

    .body1{
        font-weight: 600;
    }

    .body3{
        margin: 4px 0;
        color: #6F6F71;
    }

    .body2{
        font-weight: 600;
    }

    &:nth-child(2){
        background-color: var(--color-medium);

        *{
            color: #DAE2FF;
        }

        .body1, .body2{
            color: #F2F4FF;
        }
    }
`