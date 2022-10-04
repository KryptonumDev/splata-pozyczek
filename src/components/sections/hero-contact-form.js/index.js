import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import { graphql } from "gatsby"
import Breadcrumbs from "../../moleculas/breadcrumbs"
import { textParser } from "../../../helpers/wysiwyg-modification"
import { FilledButton } from "../../atoms/buttons"
import Form from "../../moleculas/forms/hero"
import Success from "../../moleculas/success-send"

export default function HeroForm({ data: { pageTitle, text, link, list, formTitle }, title }) {
  const [isSended, setIsSended] = useState(false)

  return (
    <Wrapper>
      <Container>
        <Content>
          <TextPart>
            <Breadcrumbs title={title} />
            <h1 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(pageTitle) }} />
            {text
              ? <p className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
              : null}
            {list
              ? <List>
                {list.map(el => (
                  <li>
                    <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                    <div className="content" dangerouslySetInnerHTML={{ __html: textParser(el.tekstObokIkony) }} />
                  </li>
                ))}
              </List>
              : null}
            {link?.url
              ? <FilledButton className="link" target={link.target} to={link.url}>{link.title}</FilledButton>
              : null}
          </TextPart>
          <div className="box">
            <Form formTitle={formTitle} setIsSended={setIsSended} />
            <Success isSended={isSended} setIsSended={setIsSended} />
          </div>
        </Content>
      </Container>
    </Wrapper>
  )
}


export const query = graphql`
  fragment heroForm on WpPage_Blocks_pageBuilder {
    heroForm {
      pageTitle
      text
      formTitle : tytulFormyKontaktowej
      list {
        tekstObokIkony
        icon {
          altText
          localFile {
            publicURL
          }
        }
      }
      link{
        title
        target
        url
      }
    }
  }
`

const Wrapper = styled.section`
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
  }

  .h4{
    margin-top: 8px;
    margin-bottom: 12px;
    font-size: clamp(28px, 4.296875vw, 38px);
  }

  .h6{
    color: #75757A;
    font-family: 'Arsenal';
  }

  .link{
    margin-top: 24px;
  }
`

const List = styled.ul`
  display: grid;
  grid-gap: 8px;
  margin-top: 24px;
  
  li{
    display: grid;
    grid-template-columns: 32px auto;

    .content{
      padding: 10px;
    }
  }
`

const TextPart = styled.div`

`