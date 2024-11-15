import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import Form from "../../moleculas/forms/full"
import Success from "../../moleculas/success-send"
import { textParser } from "../../../helpers/wysiwyg-modification"

export default function StandartContactForm({ ip, title, type }) {
    const [isSended, setIsSended] = useState(false)

    return (
        <Wrapper>
            <Container className="form-container">
                <Box>
                    <Content>
                        {title && <h2 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />}
                        <Form ip={ip} title={title} setIsSended={setIsSended} type={type} />
                    </Content>
                    <Success isSended={isSended} setIsSended={setIsSended} />
                </Box>
            </Container>
        </Wrapper >
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-spacing);

    

    .h4{
        max-width: 500px;
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
`

const Box = styled.div`
    border-radius: 8px;
    background-color: var(--color-light);
    box-shadow: var(--shadow);
    overflow: hidden;
    position: relative;

    @media (max-width: 680px){
        padding: clamp(24px,3.125vw,48px) clamp(16px,2.725vw,32px);
    }

    @media (max-width: 480px) {
        width: calc(100% + clamp(32px,6.25vw, 160px));
        transform: translateX(calc(clamp(16px,3.125vw,80px) * -1));
    }
`

const Content = styled.div`
    box-sizing: content-box;
    margin: 0 auto;
    
    padding: clamp(24px, ${24 / 768 * 100}vw, 48px) clamp(16px, ${24 / 768 * 100}vw, 48px);
    max-width: 720px;
    margin: 0 auto;

    .h6{
        margin-bottom: 16px;
        max-width: 400px;
    }

    @media (max-width: 680px) {
        padding: 0;
        flex-direction: column;
        align-items: center;
    }

`