import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { graphql } from "gatsby"
import Breadcrumbs from "../moleculas/breadcrumbs"
import { textParser } from "../../helpers/wysiwyg-modification"
import { FilledButton, OutlinedButton } from "../atoms/buttons"
import { GatsbyImage } from "gatsby-plugin-image"

export default function HeroImg({ data: { image, pageTitle, text, buttons, list, imgOnRight }, title, uri }) {

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
                  <li key={index} >
                    <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                    <div className="content" dangerouslySetInnerHTML={{ __html: textParser(el.tekstObokIkony) }} />
                  </li>
                ))}
              </List>
              : null}
            <div className="buttons">
              {buttons?.map((el, index) => {
                if (index) {
                  return <OutlinedButton key={el.link.title} className="link" target={el.link.target} to={el.link.url}> {el.link.title}</OutlinedButton>
                }
                return <FilledButton key={el.link.title} className="link" target={el.link.target} to={el.link.url}>{el.link.title}</FilledButton>
              })}
            </div>
          </TextPart>
          <div className="box">
            {image
              ? <img className="image" src={image} alt='404' />
              : null}
            {imgOnRight?.localFile?.childImageSharp?.gatsbyImageData
              ? <GatsbyImage loading="eager" className="image" image={imgOnRight.localFile.childImageSharp.gatsbyImageData} alt={imgOnRight.altText} />
              : null}
          </div>
        </Content>
      </Container>
    </Wrapper>
  )
}


export const query = graphql`
  fragment heroImg on WpPage_PageBuilder_Sections_HeroImg {
    heroImg {
      pageTitle
      text
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
      buttons{
        link{
          title
          target
          url
        }
      }
    }
  }
`

const Wrapper = styled.section`
  .buttons{
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

`

const Content = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  align-items: center;
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
        width: 100%;
        aspect-ratio: 1/1;
        display: block;
      }
    }
  }

  .h4{
    margin-top: 8px;
    margin-bottom: 12px;
    font-size: clamp(28px, 4.296875vw, 38px);
  }

  .h6{
    color: #6F6F71;
    font-family: 'Sans', sans-serif;
  }

  .link{
    margin-top: 24px;
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