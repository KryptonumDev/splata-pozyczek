import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import Breadcrumbs from "../../moleculas/breadcrumbs"
import { textParser } from "./../../../helpers/wysiwyg-modification"
import { FilledButton } from "../../atoms/buttons"

export default function BlogArchive({ data: { pageTitle, text, list, link, relatedPost }, title }) {
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
                    <div>

                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment blogArchive on WpPage_Blocks_pageBuilder {
    blogArchive {
      pageTitle
      text
      list {
        tekstObokIkony
        icon {
          altText
          localFile {
            publicURL
          }
        }
      }
      link {
        target
        title
        url
      }
      relatedPost {
        ... on WpPost {
          id
        }
      }
    }
  }
`

const Wrapper = styled.section`
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

const TextPart = styled.div`

`