import React from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import Mobile from "./mobile-menu/mobile"
import Tablet from "./mobile-menu/tablet"

export default function Menu({ data, isOpened, setMobileMenuOpened }) {
    return (
        <Wrapper isOpened={isOpened}>
            <Container className="container">
                <Button aria-label='close mobile menu' onClick={() => { setMobileMenuOpened(!isOpened) }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5113 0.488344C39.1988 0.175892 38.7749 0.000366211 38.333 0.000366211C37.891 0.000366211 37.4672 0.175892 37.1546 0.488344L19.9996 17.6433L2.84464 0.488344C2.5321 0.175892 2.10825 0.000366211 1.66631 0.000366211C1.22437 0.000366211 0.800524 0.175892 0.487977 0.488344V0.488344C0.175526 0.80089 0 1.22474 0 1.66668C0 2.10862 0.175526 2.53246 0.487977 2.84501L17.643 20L0.487977 37.155C0.175526 37.4676 0 37.8914 0 38.3333C0 38.7753 0.175526 39.1991 0.487977 39.5117V39.5117C0.800524 39.8241 1.22437 39.9997 1.66631 39.9997C2.10825 39.9997 2.5321 39.8241 2.84464 39.5117L19.9996 22.3567L37.1546 39.5117C37.4672 39.8241 37.891 39.9997 38.333 39.9997C38.7749 39.9997 39.1988 39.8241 39.5113 39.5117C39.8238 39.1991 39.9993 38.7753 39.9993 38.3333C39.9993 37.8914 39.8238 37.4676 39.5113 37.155L22.3563 20L39.5113 2.84501C39.8238 2.53246 39.9993 2.10862 39.9993 1.66668C39.9993 1.22474 39.8238 0.80089 39.5113 0.488344V0.488344Z" fill="#F2F4FF" />
                    </svg>
                </Button>
                <Content>
                    <Tablet setMobileMenuOpened={setMobileMenuOpened} data={data} />
                    <Mobile setMobileMenuOpened={setMobileMenuOpened} data={data} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Button = styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 30px;
    right: clamp(16px,3.125vw,80px);

    @media (max-width: 640px){
        width: 32px !important;
        height: 32px;

        svg{
            transform: scale(0.8);
            width:  40px !important;
            transform-origin: 0 0;
        }
    }
`

const Wrapper = styled.nav`
    position: fixed;
    z-index: 1111111;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-medium);
    transform: translateX(${props => props.isOpened ? '0px' : '30px'});
    opacity: ${props => props.isOpened ? '1' : '0'};
    pointer-events: ${props => props.isOpened ? 'all' : 'none'};
    transition: all .3s cubic-bezier(0.39, 0.575, 0.565, 1);

@media (max-width: 1024px) {
  padding: 0 clamp(16px,3.125vw,80px);
}

    .container{
        max-height: 100vh;
        overflow: auto;
        position: relative;
    }
`

const Content = styled.div`
    columns: 2;
    column-gap: 32px;
    margin-top: 96px;
    padding-bottom: 64px;

    summary{
        display: grid;
        grid-template-columns:  auto auto;
        width: fit-content;
        align-items: center;
        grid-gap: 10px;
        color: #F2F4FF !important;
        svg{
            transform: rotateX(180deg);
            transition: transform .25s cubic-bezier(0.39, 0.575, 0.565, 1);
        }
    }

    details.first[open]{
        .first-item{
            svg{
                transform: unset;
            }
        }
    }

    details.second[open]{
        .second-item{
            svg{
                transform: unset;
            }
        }
    }

    #mobile{
        display: none;
    }

    @media (max-width: 640px) {
        columns: 1;
        margin-top: 68px;

        #tablet{
            display: none;
        }

        #mobile{
            display: block;
        }

        .second-level{
            padding-left: 36px;
        }
    }

    @media (max-width: 440px) {
        .first-item{
            font-size: 25px !important;
        }

        .second-item{
            font-size: 20px !important;
        }

        .third-item{
            font-size: 18px !important;
        }
    }

    *{
        list-style: none;
        text-decoration: none;
    }

    .h5{
        font-size: 27px;
    }

    li{
        margin-top: 16px;
        break-inside: avoid;
    }

    .top-level{
        margin-top: 32px;
        break-inside: avoid;
        &:first-child{
            margin-top: 0;
        }
    }

    .first-item{
        color: #F2F4FF;
    }

    .second-item{
        color: #B2C5FF;
    }

    .third-level{
        padding-left: 36px;
    }

    .third-item{
        color: #B2C5FF;
    }
`