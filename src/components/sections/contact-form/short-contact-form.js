import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import Form from "../../moleculas/forms/short"
import { textParser } from "../../../helpers/wysiwyg-modification"
import Success from "../../moleculas/success-send"

export default function ShortContactForm({ typTematow, title }) {
    const [isSended, setIsSended] = useState(false)
    return (
        <Wrapper>
            <Container className="form-container container">
                <Box>
                    <Content>
                        {title && <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />}
                        <Form setIsSended={setIsSended} />
                    </Content>
                    <Success isSended={isSended} setIsSended={setIsSended} />
                </Box>
            </Container>
        </Wrapper >
    )
}

const Wrapper = styled.section`
    margin-top: var(--section);

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