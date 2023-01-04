import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import ExtendedForm from "../../moleculas/forms/extended"
import Success from "../../moleculas/success-send"
import { textParser } from "../../../helpers/wysiwyg-modification"
import { IconFast } from "../../../images/icon-fast-contact"
import { IconExtended } from "../../../images/icon-extended-contact"
import DefaultForm from "../../moleculas/forms/full"

export default function ExtendedContactForm({ typTematow, title }) {

    const [isSended, setIsSended] = useState(false)
    const [isExtended, setIsExtended] = useState(false)

    const changeTab = (state) => {
        document.getElementById('form').classList.add('active')
        setTimeout(() => {

            setIsExtended(state)
            setTimeout(() => {
                document.getElementById('form').classList.remove('active')
            }, 1)
        }, 300)
    }

    return (
        <Wrapper>
            <Container className="form-container">
                <Box>
                    <Content isExtended={isExtended}>
                        {title && <h2 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />}
                        <ButtonFlex>
                            <button onClick={() => { changeTab(false) }} className={isExtended ? '' : 'active'}>
                                <div>
                                    <IconFast />
                                    <span className="body1">
                                        Szybki kontakt doradcy
                                    </span>
                                </div>
                            </button>
                            <button onClick={() => { changeTab(true) }} className={isExtended ? 'active' : ''}>
                                <div>
                                    <IconExtended />
                                    <span className="body1">
                                        Wniosek o szczegółowy kredyt
                                    </span>
                                </div>
                            </button>
                        </ButtonFlex>
                        <div id='form' className="form">
                            <div className="default">
                                <DefaultForm extended={true} typTematow={typTematow} setIsSended={setIsSended} />
                            </div>
                            <div className="extended">
                                <ExtendedForm extended={true} typTematow={typTematow} setIsSended={setIsSended} />
                            </div>
                        </div>
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

const ButtonFlex = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 24px;

    @media (max-width: 480px) {
        gap: 0;
    }

    @media (max-width: 374px) {
        flex-direction: column;
        div{
            width: fit-content;
            margin: 0 auto;
        }
    }

    button{
        padding: 6px;
        border: none;
        background-color: unset;
        cursor: pointer;

        div{
            padding: 0 24px 8px 24px;
            position: relative;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 4px;
            align-items: center;

            &::after{
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 1px;
                background-color: #B2B2B8;
            }

            @media (max-width: 640px) {
                padding: 0 0 4px 0;
                span{
                    font-size: 14px;
                }
                svg{
                    display: block;
                    margin: 0 auto;
                }
            }

            @media (max-width: 480px) {
                grid-gap: 2px;
                grid-template-columns: auto;
                padding: 0 0 1px 0;
            }
        }

        span{
            color: #6F6F71;
        }

        &.active{
            cursor: unset;
            svg{
                filter: invert(55%) sepia(54%) saturate(425%) hue-rotate(3deg) brightness(113%) contrast(95%);
            }
            span{
                background: linear-gradient(315deg,#987003 0%,#EABE69 99.99%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                font-weight: 600;
            }
            div{
                &::after{
                    height: 2px;
                    background: linear-gradient(315deg, #987003 0%, #EABE69 99.99%);
                }
            }
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

    .form{
        opacity: 1;
        transition: opacity .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        &.active{
            opacity: 0;
        }

        .default{
            ${props => props.isExtended ? `
                display: none;
            ` : null}
        }

        .extended{
            ${props => props.isExtended ? null : `
                display: none;
            `}
        }
    }

    @media (max-width: 680px) {
        padding: 0;
        flex-direction: column;
        align-items: center;
    }

`