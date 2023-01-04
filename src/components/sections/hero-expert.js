import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import Success from "../moleculas/success-send"
import BreadcrumbsExpert from "../moleculas/breadcrumbs-expert"
import { GatsbyImage } from "gatsby-plugin-image"
import { Button } from "../atoms/buttons"
import Form from "../moleculas/forms/hero-no-theme"

export default function HeroExpert({ pageContext, data: { wpEkspert:
    { title, ekspert: { socialMedia, role,
        numerTelefonu, emailAdres, addInform, workWithProducts, imageSmall } } } }) {

    const phone = numerTelefonu.toString().replace(/^(.{3})(.{3})(.{3})(.*)$/, "$1 $2 $3")

    const [isSended, setIsSended] = useState(false)
    const formTitle = 'Wypełnij wniosek <span style="color: #3b5ba9;">online</span>'

    return (
        <Wrapper>
            <Content>
                <Container className="wrap">
                    <div>
                        <BreadcrumbsExpert uri={pageContext.uri} title={title} />
                        <Flex>
                            <PersonData>
                                {imageSmall
                                    ? <GatsbyImage className="avatar" image={imageSmall.localFile.childImageSharp.gatsbyImageData} alt={imageSmall.altText} />
                                    : null}
                                <div>
                                    <h1>
                                        <span className="h6 arsenal">{title}</span>
                                        <span className="body2">{workWithProducts}</span>
                                    </h1>
                                </div>
                            </PersonData>
                            <div className="social-media">
                                {socialMedia?.map(el => (
                                    <Social>
                                        <a href={el.linkDoSocialMedia}>
                                            <img src={el.ikona.localFile.publicURL} alt={el.ikona.altText} />
                                            <span className="body2">{el.nazwaSocialMedia}</span>
                                        </a>
                                    </Social>
                                ))}
                            </div>
                        </Flex>
                        <TextPart>
                            {addInform.title
                                ? <p className="body1 title">{addInform.title}</p>
                                : null}
                            {addInform.text
                                ? <div className="body1 text" dangerouslySetInnerHTML={{ __html: addInform.text }} />
                                : null}
                            {addInform.subTitle
                                ? <p className="h6 subtitle">{addInform.subTitle}</p>
                                : null}
                            {addInform.subText
                                ? <div className="body1 subtext" dangerouslySetInnerHTML={{ __html: addInform.subText }} />
                                : null}
                        </TextPart>
                        <Buttons>
                            <Button className='link' url={'tel:' + numerTelefonu} text={phone} />
                            <Button className='link' url={'mailto:' + emailAdres} text={emailAdres} />
                        </Buttons>
                    </div>
                </Container>
                <Container className="wrap container">
                    <div className="box">
                        <Form formTitle={formTitle} setIsSended={setIsSended} />
                        <Success isSended={isSended} setIsSended={setIsSended} />
                    </div>
                </Container>
            </Content>
        </Wrapper>
    )
}

const Social = styled.div`
    a{
        display: grid;
        grid-gap: 2px;
        grid-template-columns: auto auto;
        align-items: center;
        text-decoration: none;
        transition: filter .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        filter: grayscale(1);

        span{
            font-weight: 600;
            color: var(--color-medium);
        }

        &:hover{
            filter: unset;
        }
    }
`

const Wrapper = styled.section`
  padding: 0 clamp(16px,3.125vw,80px);

  .wrap{
    padding: 0;
    width: 100%;
  }

  @media (max-width: 840px) {
    
    padding: 0;

    .wrap{
      padding: 0 clamp(16px,3.125vw,80px);
      width: 100%;
      box-sizing: border-box;
    }
  }

  @media (max-width: 480px) {
    .container{
      padding: 0;
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
    color: #6F6F71;
    font-family: 'Arsenal';
  }
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 32px;
    margin-bottom: 16px;

    .social-media{
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }
`

const Buttons = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;

    .link{
        color: #6F6F71 !important;
        text-decoration: none;
        transition: color .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        
        rect{ 
            fill: #6F6F71 !important;
            transition: fill .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        &:hover{
            color: var(--color-medium) !important;

            rect{
                fill: var(--color-medium) !important;
            }
        }
    }

    @media (max-width: 840px){
        margin:  0 auto;
        margin-top: 16px;
        width: fit-content;
    }

    @media (max-width: 480px){
        margin: 16px 0 0 0;
    }
`

const PersonData = styled.div`
    display: grid;
    grid-template-columns: 128px auto;
    grid-gap: 8px;
    align-items: center;

    .avatar{
        width: 128px;
        height: 128px;
        border-radius: 50%;
    }

    span{
        display: block;

        &.h6{
            font-weight: 600;
            color: #000 !important;
        }

        &.body3{
            color: #6F6F71;
        }
    }
`

const TextPart = styled.div`
    .title{
        color: #050505;
        font-weight: 600;
    }

    .text{
        margin-top: 12px;
        display: grid;
        grid-gap: 12px;

        @media (max-width: 840px){
            display: block;
            columns: 2;
            column-gap: 12px;
        }

        @media (max-width: 580px) {
            display: grid;
        }

        p{
            color: #6F6F71;
            break-inside: avoid;
        }
    }

    .subtitle{
        margin-top: 32px;
        color: #050505;

        @media (max-width: 840px) {
            text-align: center;
            max-width: 462px;
            margin: 0 auto;
            margin-top: 32px;
        }

        @media (max-width: 480px) {
            text-align: left;
            margin-top: 12px;
        }
    }

    .subtext{
        margin-top: 8px;
        display: grid;
        grid-gap: 12px;

        @media (max-width: 840px) {
            text-align: center;
            max-width: 462px;
            margin: 0 auto;
            margin-top: 8px;
        }

        @media (max-width: 480px) {
            text-align: left;
        }

        p{
            color: #6F6F71;
        }
    }
`