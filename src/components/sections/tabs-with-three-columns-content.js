import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { GatsbyImage } from "gatsby-plugin-image"
import { FilledButton, OutlinedButton } from "../atoms/buttons"
import { motion, useMotionValue } from "framer-motion"
import { transform } from "../../helpers/slider"

export default function TabsWithThreeColumnsContent({ data: { repeater } }) {

    const x = useMotionValue(0)

    const [active, setActive] = useState(0)
    const [maxButtonsTransform, setMaxButtonsTransform] = useState(0)

    useEffect(() => {
        const parrent = document.getElementById('control-wrap')
        const child = document.getElementById('control')
        const maxTransform = child.clientWidth - parrent.clientWidth

        setMaxButtonsTransform(maxTransform)
    }, [])

    const changeTab = (index) => {
        document.getElementById('wrap').classList.add('active')

        setTimeout(() => {
            setActive(index)

            setTimeout(() => {
                document.getElementById('wrap').classList.remove('active')
            }, 1)
        }, 300)
    }

    return (
        <Wrapper >
            <Container>
                <Content>
                    <ControlButtonsWrap>
                        {maxButtonsTransform > 0
                            ? (
                                <button onClick={() => { transform('left', x, maxButtonsTransform) }} className="control left">
                                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.586667 5.89334L3.16667 8.5C3.22864 8.56249 3.30238 8.61209 3.38362 8.64593C3.46486 8.67978 3.55199 8.6972 3.64 8.6972C3.72801 8.6972 3.81515 8.67978 3.89638 8.64593C3.97762 8.61209 4.05136 8.56249 4.11333 8.5C4.2375 8.3751 4.3072 8.20613 4.3072 8.03C4.3072 7.85388 4.2375 7.68491 4.11333 7.56L1.74 5.16667L15.3333 5.16667C15.5101 5.16667 15.6797 5.09643 15.8047 4.97141C15.9298 4.84639 16 4.67682 16 4.50001V4.50001C16 4.32319 15.9298 4.15363 15.8047 4.0286C15.6797 3.90358 15.5101 3.83334 15.3333 3.83334L1.7 3.83334L4.11333 1.42667C4.17582 1.3647 4.22542 1.29096 4.25926 1.20972C4.29311 1.12848 4.31053 1.04135 4.31053 0.953339C4.31053 0.865331 4.29311 0.778194 4.25926 0.696955C4.22542 0.615715 4.17582 0.54198 4.11333 0.480005C4.05136 0.417519 3.97762 0.367923 3.89638 0.334078C3.81515 0.300232 3.72801 0.282806 3.64 0.282806C3.55199 0.282806 3.46486 0.300232 3.38362 0.334078C3.30238 0.367923 3.22864 0.417519 3.16667 0.480005L0.586668 3.06667C0.212133 3.44167 0.0017609 3.95 0.00176085 4.48C0.00176081 5.01001 0.212133 5.51834 0.586667 5.89334Z" fill="#F2F4FF" />
                                    </svg>
                                </button>
                            )
                            : null}
                        <ControlWrap className={maxButtonsTransform > 0 ? 'button' : 'no-button'} id='control-wrap'>
                            <Control style={{ x }} drag='x' dragConstraints={{ left: maxButtonsTransform > 0 ? -maxButtonsTransform : 0, right: 0 }} maxButtonsTransform={maxButtonsTransform} id='control'>
                                {repeater.map((el, index) => (
                                    <button key={el.tabName} tabIndex='-1' className={index === active ? 'active' : ''} onClick={() => { changeTab(index) }}><span>{el.tabName}</span></button>
                                ))}
                            </Control>
                        </ControlWrap>
                        {maxButtonsTransform > 0
                            ? (
                                <button onClick={() => { transform('right', x, maxButtonsTransform) }} className="control right">
                                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.4151 3.10667L12.8351 0.500006C12.7731 0.437521 12.6994 0.387924 12.6181 0.354079C12.5369 0.320233 12.4498 0.302807 12.3618 0.302807C12.2738 0.302807 12.1866 0.320233 12.1054 0.354079C12.0241 0.387924 11.9504 0.437521 11.8884 0.500006C11.8259 0.561981 11.7763 0.635716 11.7425 0.716955C11.7087 0.798195 11.6912 0.885331 11.6912 0.973339C11.6912 1.06135 11.7087 1.14848 11.7425 1.22972C11.7763 1.31096 11.8259 1.3847 11.8884 1.44667L14.2618 3.83334L0.668428 3.83334C0.491617 3.83334 0.322047 3.90358 0.197023 4.0286C0.071999 4.15362 0.00176087 4.32319 0.00176085 4.5C0.00176083 4.67682 0.0719989 4.84638 0.197023 4.97141C0.322047 5.09643 0.491617 5.16667 0.668428 5.16667L14.3018 5.16667L11.8884 7.58001C11.7702 7.70399 11.7043 7.86871 11.7043 8.04001C11.7043 8.2113 11.7702 8.37602 11.8884 8.50001C11.9504 8.56249 12.0241 8.61209 12.1054 8.64593C12.1866 8.67978 12.2738 8.6972 12.3618 8.6972C12.4498 8.6972 12.5369 8.67978 12.6181 8.64593C12.6994 8.61209 12.7731 8.56249 12.8351 8.50001L15.4151 5.93334C15.7896 5.55834 16 5.05001 16 4.52001C16 3.99 15.7896 3.48167 15.4151 3.10667Z" fill="#F2F4FF" />
                                    </svg>
                                </button>
                            )
                            : null}
                    </ControlButtonsWrap>
                    <InnerContent>
                        <Grid id='wrap' count={repeater.length}>
                            {repeater.map((el, index) => (
                                <Item key={index} className={index === active ? 'active' : ''}>
                                    <GatsbyImage className="image" image={el.image.localFile.childImageSharp.gatsbyImageData} alt={el.image.altText} />
                                    <div className="grid">
                                        <div>
                                            <h3 className="h6" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                            <div className="body1 highlihted" dangerouslySetInnerHTML={{ __html: el.subTitle }} />
                                            <div className="body1" dangerouslySetInnerHTML={{ __html: el.textFirst }} />
                                        </div>
                                        <div>
                                            <div className="body1" dangerouslySetInnerHTML={{ __html: el.textSecond }} />
                                            <div className="buttons">
                                                {el.przyciski.map((el, index) => {
                                                    if (index) {
                                                        return <OutlinedButton key={el.link.title}  target={el.link.target} to={el.link.url}>{el.link.title}</OutlinedButton>
                                                    }
                                                    return <FilledButton key={el.link.title}  target={el.link.target} to={el.link.url}>{el.link.title}</FilledButton>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </Item>
                            ))}
                        </Grid>
                    </InnerContent>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment tabsWithThreeColumnsContent on WpPage_PageBuilder_Sections_TabsWithThreeColumnsContent {
    tabsWithThreeColumnsContent {
      repeater : zakladkaOProdukcie {
        tabName
        title
        subTitle
        textFirst
        textSecond
        przyciski {
          link {
            url
            title
            target
          }
        }
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const ControlButtonsWrap = styled.div`
    position: relative;

    .control{
        position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: #3B5BA9;
            box-shadow: var(--shadow);
            width: 36px;
            height: 36px;
            border-radius: 4px;
            color: #fff;
            border: none;
            cursor: pointer;

        &.left{
            left: 0;
        }

        &.right{
            right: 0;
        }
    }

    @media (max-width: 820px ) {

        .control{
            display: none;
        }
    }

`

const ControlWrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;

    @media (max-width: 1208px) {
        margin: 0 68px;
    }

    &.no-button {
        margin: 0;
        overflow: unset;
    }

    @media (max-width: 820px ) {
        margin: 0;
        overflow: unset;
    }
`

const Control = styled(motion.div)`
    display: flex;
    gap: 4px;
    width: max-content;
    transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    button{
        padding: 6px;
        border: none;
        background-color: transparent;
        cursor: pointer;

        span{
            display: block;
            padding: 0 clamp(8px, ${24 / 768 * 100}vw, 24px) 8px clamp(8px, ${24 / 768 * 100}vw, 24px);
            position: relative;
            color: #6F6F71;
            font-weight: 400;
            transition: color .3s cubic-bezier(0.39, 0.575, 0.565, 1);

            @media (max-width: 480px) {
                padding: 0 8px 4px 8px;
                font-size: 16px;
            }

            &::after{
                content: "";
                position: absolute;
                height: 1px;
                width: 100%;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: #B2B2B8;
                transition: background-color .3s cubic-bezier(0.39, 0.575, 0.565, 1);
            }

            &::before{
                content: "";
                position: absolute;
                left: -6px;
                right: -6px;
                top: -6px;
                bottom: -6px;
                background: linear-gradient(315deg, #FCCF4F 0%, #E7DCBF 99.99%);
                border-radius: 4px;
                opacity: 0;
                transition: all .3s cubic-bezier(0.39, 0.575, 0.565, 1);
                z-index: -1;
            }
        }

        &:hover{
            span{
                color: #050505;

                &::after{
                    background-color: #050505;
                }
            }
        }

        /* &:focus{
            span::before{
                opacity: 1;
            }
        } */

        &.active{
            span{
                background: linear-gradient(315deg, #987003 0%, #EABE69 99.99%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                font-weight: 600;

                &::after{
                    background: linear-gradient(315deg, #987003 0%, #EABE69 99.99%);
                    height: 2px;
                }
            }
        }
    }

    @media (max-width: 820px ){
        gap: 0;
        box-shadow: var(--shadow);
        padding: 4px 12px;

        button{
            padding: 6px 0;
        }
    }

    @media (max-width: 480px){
        gap: 4px;
    }

`

const Content = styled.div`
    max-width: 1136px;
    margin: 0 auto;

    .h4{
        text-align: center;
         font-size: clamp(28px, 4.296875vw, 38px);
    }

    .text{
        max-width: 540px;
        margin: 0 auto;
        text-align: center;
        color: #6F6F71;
        margin-top: clamp(12px, ${16 / 768 * 100}vw, 24px);
        margin-bottom: clamp(24px, ${32 / 768 * 100}vw, 48px);

        strong{
            color: #050505;
        }
    }
`

const InnerContent = styled.div`
    margin: 0 auto;
    overflow: hidden;
`

const Grid = styled.div`
    display: grid;
    padding-top: clamp(24px, ${24 / 768 * 100}vw, 32px);

    opacity: 1;
    transition: opacity .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    &#wrap.active{
        opacity: 0;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: clamp(300px, ${340 / 768 * 100}vw, 380px) 1fr;
    grid-gap: clamp(12px, ${24 / 768 * 100}vw, 32px);
    position: absolute;
    opacity: 0;
    pointer-events: none;

    .grid{
        display: grid;
        grid-gap: clamp(12px, ${24 / 768 * 100}vw, 32px);
        grid-template-columns: 1fr 1fr;
        height: fit-content;
    }

    @media (max-width: 1024px) {
        .grid{
            grid-template-columns: 1fr ;
        }
    }

 
    &.active{
        pointer-events: all;
        opacity: 1;
        position: relative;
    }

    .body1{
        display: grid;
        grid-gap: 16px;
        p{
            color: #6F6F71;
        }
    }

    .highlihted{
        padding: 16px 12px;
        border-radius: 4px;
        box-shadow: var(--shadow);
        background-color: var(--color-light);
        margin: 16px 0;
        p{
            color: #050505;
        }
    }

    .image{
        height: fit-content;
        border-radius: 4px;
        box-shadow: var(--shadow);
    }

    .body2{
        margin-top: clamp(8px, ${12 / 768 * 100}vw, 16px);
        display: grid;
        grid-gap: 16px;
        p{
            color: #6F6F71;
        }
    }

    .buttons{
        margin-top: 16px;
        display: grid;
        grid-gap: 8px;

        @media (max-width: 1120px) {
            a{
                padding: 12px;
                width: 100%;
            }
        }

        @media (max-width: 1024px) {
            a{
                padding: 12px 44px;
                width: fit-content;
            }
        }
    }

    @media (max-width: 660px) {
        grid-template-columns: 1fr;   

        .image{
            width: fit-content;
            margin: 0 auto;
        }


        .buttons{
            margin-top: 24px;
            display: flex;
            justify-content: center;
            gap: 16px;
        }
    }

    @media (max-width: 600px) {
        .buttons{
            justify-content: unset;
            margin-top: 8px;
            display: grid;
            grid-gap: 12px;
            a{
                width: 100%;
            }
        }
    }
`