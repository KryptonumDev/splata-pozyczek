import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from '../../helpers/wysiwyg-modification'
import Form from "../moleculas/forms/short"
import Success from "../moleculas/success-send"

export default function ShortContactForm({ data }) {
    const [isSended, setIsSended] = useState(false)

    return (
        <Wrapper>
            <Container>
                <Box>
                    <Content>
                        <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(data.title) }} />
                        <Form setIsSended={setIsSended} />
                    </Content>
                    <Success isSended={isSended} setIsSended={setIsSended} />
                </Box>
            </Container>
        </Wrapper >
    )
}

export const query = graphql`
fragment shortContactForm on WpPage_Blocks_pageBuilder {
    shortContactForm {
      title
    }
}
`

const Wrapper = styled.section`
    margin-top: var(--section);

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
    padding: 48px 0;
    overflow: hidden;
    position: relative;

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