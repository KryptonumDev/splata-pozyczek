import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import LightGreen from './../../images/check-green-light.svg'
import DarkGreen from './../../images/check-green-dark.svg'
import LightRed from './../../images/check-red-light.svg'
import DarkRed from './../../images/check-red-dark.svg'

export default function TwoColumnCompareColored({ data: { redColumn, greenColumn } }) {
    return (
        <Wrapper>
            <Container>
                <Grid lightRed={LightRed} darkRed={DarkRed} darkGreen={DarkGreen} lightGreen={LightGreen}>
                    <div className="green h6" dangerouslySetInnerHTML={{ __html: greenColumn }} />
                    <div className="red h6" dangerouslySetInnerHTML={{ __html: redColumn }} />
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnCompareColored on WpPage_Blocks_pageBuilder {
    twoColumnCompareColored {
      redColumn
      greenColumn
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    a{
        display: block;
        margin: 32px auto 0 auto;
    }
`

const Grid = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    position: relative;

    @media (max-width: 640px) {
        grid-gap: 16px;
    }

    .h6{
        p{
            font-size: clamp(13px, ${18 / 768 * 100}vw, 18px);
            line-height: 130%;
        }
        li{
            font-size: clamp(13px, ${14 / 768 * 100}vw, 14px);
        }
    }

        ul{
            display: grid;
            grid-gap: 8px;
            margin-top: 24px; 

            @media (max-width: 768px){
                margin-top: 16px;
            }

            @media (max-width: 520px){
                margin-top: 12px;
            }

            li{
                list-style: none;
                font-weight: 400;
                font-size: 14px;
                line-height: 129%;
                font-feature-settings: 'pnum' on, 'onum' on;
                color: #050505;
            }
        }

        li{
            min-height: 32px;
            padding-top: 7px;
            padding-left: 40px;
            position: relative;

            @media (max-width: 768px){
                min-height: 24px;
                padding-left: 32px;
                padding-top: 6px;
            }

            @media (max-width: 520px){
                padding-top: 4px;
                padding-left: 24px;
            }

            &::before{
                width: 32px;
                height: 32px;
                position: absolute;
                left: 0;
                top: 0;

                @media (max-width: 768px) {
                    transform: scale(.75);
                    left: -3px;
                }

                @media (max-width: 520px) {
                    transform: scale(.625);
                    left: -5px;
                    top: -5px;
                }
            }
        }

        .green{
            padding: clamp(10px, ${16 / 768 * 100}vw, 24px);
            background: #E1FFDE;
            box-shadow: var(--shadow);
            border-radius: 4px;

            @media (max-width: 520px) {
                padding: 0;
                background-color: unset;
                box-shadow: unset;
            }
            
            li{
                &::before{
                    content: url(${props => props.lightGreen});
                }

                &:first-child{
                    &::before{
                        content: url(${props => props.darkGreen});
                    }
                }
            }
        }

        .red{
            padding: clamp(10px, ${16 / 768 * 100}vw, 24px);
            background: #FFEDEA;
            box-shadow: var(--shadow);
            border-radius: 4px;

            @media (max-width: 520px) {
                padding: 0;
                background-color: unset;
                box-shadow: unset;
            }

            li{
                &::before{
                    content: url(${props => props.lightRed});
                }

                &:first-child{
                    &::before{
                        content: url(${props => props.darkRed});
                    }
                }
            }
        }
`