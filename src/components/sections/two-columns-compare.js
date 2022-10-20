import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { FilledButton } from "../atoms/buttons"
import Light from './../../images/check-light.svg'
import Medium from './../../images/check-medium.svg'
import Dark from './../../images/check-dark.svg'
import LightGray from './../../images/check-gray-light.svg'
import DarkGray from './../../images/check-gray-dark.svg'

export default function TwoColumnsCompare({ data: { columns, link } }) {
    return (
        <Wrapper>
            <Container>
                <Grid lightGray={LightGray} darkGray={DarkGray} light={Light} medium={Medium} dark={Dark}>
                    {columns.map((el, index) => (
                        <>
                            <p className={'h6 arsenal item item' + index} dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                            <div className={"body2 item item" + index} dangerouslySetInnerHTML={{ __html: el.lista }} />
                        </>
                    ))}
                    <Item />
                </Grid>
                <FilledButton className="link" target={link.target} to={link.url}>{link.title}</FilledButton>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnsCompare on WpPage_PageBuilder_Sections_TwoColumnsCompare {
    twoColumnsCompare {
      columns {
        title
        lista
      }
      link {
        title
        url
        target
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .link{
        display: block;
        margin: 32px auto 0 auto;
    }

    @media (max-width: 480px) {
        .link{
            width: 100%;
            padding: 10px;
            text-align: center;
        }
    }
`

const Grid = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    'a b'
    'c d';
    grid-gap: clamp(16px, ${20 / 768 * 100}vw, 24px) clamp(24px, ${28 / 768 * 100}vw, 32px);
    position: relative;

    @media (max-width: 520px){
        grid-gap: 16px;
    }



    .item{
        &.h6{   
            font-size: clamp(13px, 2.34375vw, 20px);
        }

        ul{
            display: grid;
            grid-gap: 8px;
            li{
                list-style: none;

            }
        }

        li{
            min-height: 32px;
            padding-top: 7px;
            padding-left: 40px;
            font-size: clamp(13px, ${13 / 380 * 100}vw, 14px);
            position: relative;

            @media (max-width: 768px){
                min-height: 24px;
                padding-top: 4px;
                padding-left: 32px;
            }

            @media (max-width: 520px){
                padding-left: 24px;
            }

            &::before{
                content: url(${props => props.light});
                width: 32px;
                height: 32px;
                position: absolute;
                left: 0;
                top: 0;

                @media (max-width: 768px) {
                    transform: scale(.75);
                    left: -4px;
                    top: -2px;
                }

                @media (max-width: 520px) {
                    transform: scale(0.625);
                    left: -6px;
                    top: -4px;
                }
            }
        }

        &.item0{
            &.h6{
                grid-area: a;
                padding: 24px 24px 0 24px;

                @media (max-width: 520px){
                    padding: 0;
                }
            }

            &.body2{
                grid-area: c;
                padding: 0 24px 24px 24px;

                @media (max-width: 520px){
                    padding: 0;
                }
            }

            li{
                color: #6F6F71;
                &:first-child{
                    &::before{
                        content: url(${props => props.medium});

                        @media (max-width: 520px) {
                            content: url(${props => props.darkGray});
                        }
                    }
                }

                @media (max-width: 520px) {
                    &::before{
                        content: url(${props => props.lightGray});
                    }
                }
            }
        }

        &.item1{
            a{
                color: #fccf4f;
            }

            &.h6{
                color: #F2F4FF;
                grid-area: b;
                padding: 24px 24px 0 24px;

                @media (max-width: 520px){
                    padding: 0;
                    color: #050505;
                }
            }

            strong{
                color: #F2F4FF;
            }

            &.body2{
                grid-area: d;
                padding: 0 24px 24px 24px;

                @media (max-width: 520px){
                    padding: 0;
                }
            }

            li{
                color: #DAE2FF;

                @media (max-width: 520px){
                    color: #75757A;

                    strong{
                        color: #050505;
                    }
                }
                &:first-child{
                    &::before{
                        content: url(${props => props.dark});

                        @media (max-width: 520px){
                            content: url(${props => props.medium});
                        }
                    }
                }
                
            }
        }
    }
`

const Item = styled.div`
    background: var(--color-medium);
    box-shadow: var(--shadow);
    border-radius: 4px;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: calc(50% + clamp(12px, ${14 / 768 * 100}vw, 16px));
    z-index: -1;

    @media (max-width: 520px){
        display: none;
    }
`