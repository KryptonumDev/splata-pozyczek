import React from "react"
import styled from "styled-components"
import { Container } from "./../atoms/container"
import { graphql } from "gatsby"
import Breadcrumbs from "./../moleculas/breadcrumbs"
import { textParser } from "./../../helpers/wysiwyg-modification"
import { FilledButton, OutlinedButton } from "./../atoms/buttons"
import { GatsbyImage } from "gatsby-plugin-image"

export default function HeroImgExtended({ data: { pageTitle, text, links, list, imgOnRight, title: titleSub, textSub }, title, uri }) {

  return (
    <Wrapper>
      <Container>
        <Content>
          <TextPart>
            <Breadcrumbs uri={uri} title={title} />
            <h1 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(pageTitle) }} />
            {text
              ? <p className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
              : null}
            {list
              ? <List>
                {list.map((el, index) => (
                  <li key={index}>
                    <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                    <div className="content" dangerouslySetInnerHTML={{ __html: textParser(el.tekstObokIkony) }} />
                  </li>
                ))}
              </List>
              : null}
            <div className="buttons">
              {links?.map((el, index) => {
                if (index) {
                  return <OutlinedButton className="link" key={el.link.title} target={el.link.target} to={el.link.url}> {el.link.title}</OutlinedButton>
                }
                return <FilledButton className="link" key={el.link.title} target={el.link.target} to={el.link.url}>{el.link.title}</FilledButton>
              })}
            </div>
          </TextPart>
          <div className="box">
            <GatsbyImage loading="eager"  image={imgOnRight.localFile.childImageSharp.gatsbyImageData} alt={imgOnRight.altText} />
          </div>
        </Content>
      </Container>
      <Box>
        <div className="content">
          <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(titleSub) }} />
          <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(textSub) }} />
        </div>
      </Box>
    </Wrapper>
  )
}


export const query = graphql`
  fragment heroImgExtended on WpPage_PageBuilder_Sections_HeroImgExtended {
    heroImgExtended {
      pageTitle
      text
      title
      textSub
      imgOnRight{
        altText
        localFile{
            childImageSharp{
                gatsbyImageData
            }
        }
      }
      list {
        tekstObokIkony
        icon {
          altText
          localFile {
            publicURL
          }
        }
      }
      links{
        link{
            title
            target
            url
        }
        }
    }
  }
`

const Box = styled.div`
    background-color: var(--color-light);
    max-width: 1366px;
    margin: 0 auto;
    padding: clamp(24px, ${32 / 768 * 100}vw, 32px) 0;
    box-shadow: var(--shadow);
    border-radius: 4px;

    .content{
        padding: 0 24px;
        max-width: calc(1366px - 686px);
        margin: 0 auto;
    }

    .h4{
        text-align: center;
    }

    .body1{ 
        text-align: center;
        margin-top: 18px;
    }
`

const Wrapper = styled.section`
.buttons{
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
    margin-top: 24px;
}
`

const Content = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr;
  max-width: var(--inner-container-width);
  align-items: center;
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
    color: #6F6F71;
    font-family: 'Arsenal', sans-serif;
  }

  .link{
  }
`

const List = styled.ul`
  display: grid;
  grid-gap: 8px;
  margin-top: 24px;

  img{
    width: 32px;
    height: 32px;
  }

  li{
    display: grid;
    grid-template-columns: 32px auto;
    grid-gap: 8px;

    .content{
      padding: 10px;
    }
  }
`

const TextPart = styled.div`

`