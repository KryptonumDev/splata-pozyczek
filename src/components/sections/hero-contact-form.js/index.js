import React from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import { graphql } from "gatsby"
import Breadcrumbs from "../../moleculas/breadcrumbs"
import { textParser } from "../../../helpers/wysiwyg-modification"

export default function HeroForm({ data: { pageTitle, text, formaKontaktowa }, title }) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <TextPart>
            <Breadcrumbs title={title} />
            <h1 className="h4" dangerouslySetInnerHTML={{ __html: textParser(pageTitle) }} />
            {text
              ? <p className="h6" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
              : null}
          </TextPart>
          <form>
            tu będzie forma :D
          </form>
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
      formaKontaktowa {
        title
        messageTheme {
          text
        }
        linkSecond {
          url
        }
        linkPrivacy {
          url
        }
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

  .h4{
    margin-top: 8px;
    margin-bottom: 12px;
  }

  .h6{
    color: #75757A;
    font-family: 'Arsenal';
  }
`

const TextPart = styled.div`

`