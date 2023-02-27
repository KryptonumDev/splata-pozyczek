import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import Form from "../../moleculas/forms/short"
import { textParser } from "../../../helpers/wysiwyg-modification"
import Success from "../../moleculas/success-send"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ShortContactForm({ imageUnderTitle, textUnderImage, title, ip }) {
    const [isSended, setIsSended] = useState(false)
    return (
        <Wrapper>
            <Container className="form-container container">
                <Box>
                    <Content>
                        <div>
                            {title && <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />}
                            {imageUnderTitle?.localFile && <GatsbyImage className="image" image={imageUnderTitle.localFile.childImageSharp.gatsbyImageData} alt={imageUnderTitle.altText} />}
                            {textUnderImage && <p className="sub1">{textUnderImage}</p>}
                        </div>
                        <Form ip={ip} setIsSended={setIsSended} />
                    </Content>
                    <Success isSended={isSended} setIsSended={setIsSended} />
                </Box>
            </Container>
        </Wrapper >
    )
}

const Wrapper = styled.section`
    margin-top: var(--section);

    .image{
        border-radius: 4px;
        box-shadow: var(--shadow);
        margin: 12px 0 8px 0;
        max-width: 380px;
    }

    .sub1{
        max-width: 380px;
    }

    .h4{
        max-width: 464px;
        margin-right: 32px;
        font-size: clamp(27px, 4.296875vw, 38px);

        @media (max-width: 680px) {
            text-align: center;
            margin-bottom: 24px;
            margin-right: 0;
        }

        @media (max-width: 400px) {
            text-align: left;
        }
    }

    @media (max-width: 768px) {
        .container{
            padding: 0;
        }
    }
`

const Box = styled.div`
    border-radius: 8px;
    background-color: var(--color-light);
    box-shadow: var(--shadow);
    padding: 48px 0;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px){
        border-radius: 0;
    }

    @media (max-width: 680px){
        padding: clamp(24px,3.125vw,48px) clamp(16px,2.725vw,32px);
    }
`

const Content = styled.div`
    max-width: 960px;
    padding: 0 32px;
    box-sizing: content-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 680px) {
        padding: 0;
        flex-direction: column;
        align-items: center;
    }

`