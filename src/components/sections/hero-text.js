import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { graphql } from "gatsby"
import Breadcrumbs from "../moleculas/breadcrumbs"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function HeroText({ data: { title, plainText, text, subTitle, list }, title: breadcrumb, uri }) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <TextPart>
            <Breadcrumbs uri={uri} title={breadcrumb} />
            <h1 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
            <div className="h6 text arsenal" dangerouslySetInnerHTML={{ __html: text }} />
            <div className="body1 text" dangerouslySetInnerHTML={{ __html: plainText }} />
          </TextPart>
          <ListPart>
            <p className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(subTitle) }} />
            <div className="grid">
              {list.map((el, index) => (
                <Item key={el.text} >
                  <span className="body1">{index + 1}</span>
                  <div className="body1" dangerouslySetInnerHTML={{ __html: el.text }} />
                </Item>
              ))}
            </div>
          </ListPart>
        </Content>
      </Container>
    </Wrapper>
  )
}


export const query = graphql`
  fragment heroText on WpPage_PageBuilder_Sections_HeroText {
    heroText {
      title
      text
      plainText
      subTitle
      list {
        text
      }
    }
  }
`

const Wrapper = styled.section`
`

const Item = styled.div`
    display: grid;
    grid-template-columns: 32px auto;
    grid-gap: 16px;
    div{
        padding-top: 5px;
        p{
            color: #6F6F71;
        }
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #00225A;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #DAE2FF;
    }
`

const ListPart = styled.div`
    .grid{
        margin-top: 12px;
        display: grid;
        grid-gap: 16px;
    }
`

const Content = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }

  .box{
    position: relative;

    .image{
      max-width: 209px;

      @media (max-width: 840px) {
        max-width: 380px;
        margin: 0 auto;
        display: block;
      }
    }
  }

  .h4{
    margin-top: 8px;
    margin-bottom: 12px;
    font-size: clamp(28px, 4.296875vw, 38px);
  }

  .text{
    p{
      color: #6F6F71;
    }
  }

  .body1{
    display: grid;
    grid-gap: 8px;
  }

  .link{
    margin-top: 24px;
  }
`

const TextPart = styled.div`
  
`