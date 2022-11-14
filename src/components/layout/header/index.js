import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { FilledButton } from "../../atoms/buttons"
import { Container } from "../../atoms/container"
import Logo from './../../../images/logo'
import MegaMenu from "./mega-menu"
import Menu from "./mobile-menu"

export default function Header({ data }) {

  const { wpPage: { header: { navigacja } } } = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo0MzQ="}) {
          header {
            navigacja {
              url {
                url
                title
                target
              }
              megaMeni {
                url {
                  url
                  title
                  target
                }
                megaMeni {
                  url {
                    title
                    target
                    url
                  }
                }
              }
            }
          }
        }
    }
  `)

  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (typeof document !== `undefined`) {
      document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
          setMobileMenuOpened(false)
        }
      })
    }
    if (typeof window !== `undefined`) {
      setOffset(window.pageYOffset)
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }
  }, [])

  return (
    <Wrapper>
      <a className="no-focus" href="#main" aria-label='skip link to main content' > </a>
      <Container className="container">
        <Content active={offset > 0 ? 'true' : null}>
          <Link className="logo" aria-label='link do strony głównej' to='/'>
            <Logo />
          </Link>
          <Navigation className="desctop">
            <ul className="nav">
              {navigacja.map((el, index) =>
                <MegaMenu key={index} data={el} level='first' />
              )}
            </ul>
          </Navigation>
          <FilledButton to='/wniosek-on-line/' className="button">
            Wniosek online
          </FilledButton>
          <MobileButton aria-label='open mobile menu' onClick={() => { setMobileMenuOpened(!isMobileMenuOpened) }}>
            <span />
          </MobileButton>
        </Content>
        <Menu data={navigacja} isOpened={isMobileMenuOpened} setMobileMenuOpened={setMobileMenuOpened} />
      </Container>
    </Wrapper>
  )
}

const MobileButton = styled.button`
  display: none;
  cursor: pointer;
  width: 32px;
  height: 22px;
  border: unset;
  margin-left: 110px;
  position: relative;
  background-color: transparent;

  span{
    display: block;
    width: 32px;
    height: 3px;
    border-radius: 4px;
    background: #6F6F71;

    &::after{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 3px;
      border-radius: 4px;
      background: #6F6F71;
    }

    &::before{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 3px;
      border-radius: 4px;
      background: #6F6F71;
    }
  }


  @media (max-width: 1024px) {
    display: flex;
  }
  @media (max-width: 640px){
    margin-left: 0;
  }
`

const Wrapper = styled.header`
    position: fixed;
    z-index: 10000;
    left: 0;
    right: 0;
    top: 0;

    .no-focus {
      position: absolute;
      opacity: 0;
      left: 0;
      top: 0;
    }

    .no-focus:focus-visible {
      outline: none;
    }

    .logo{
      height: 18px;
    }

    @media (max-width: 1240px) {
      .button{
        padding: 12px;
        min-width: 160px;
      }
    }

    @media (max-width: 1080px) {
      .button{
        min-width: unset;
      }
    } 

    @media (max-width: 1024px) {
      .desctop{
        display: none;
      }

      .button{
        padding: 12px 44px;
      }

      .container{
        padding: 0;
      }
    }

    @media (max-width: 480px) {
      .logo{
        width: 32px;
        height: auto;
        transform: scale(2) translateX(8px) translateY(2px);
      }
      svg{
        width: 16px;
      }
      .leters{
        display: none;
      }
      .button{
        width: fit-content;
        padding: 12px 44px;
      }
    }

    @media (max-width: 340px) {
      .button{
        padding: 12px 22px;
      }
    }
`

const Content = styled.div`
    margin: 25px 0 0 0;
    padding: 10px 13px;

    @media (max-width: 480px) {
      padding: 10px clamp(16px,3.125vw,80px);
    }
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1) .2s, 
      margin .3s cubic-bezier(0.68, -0.12, 0.265, 1.55);

    border-radius: 8px;
    box-shadow: 0px 4px 8px 3px rgba(97, 152, 193, 0.15);
    filter: drop-shadow(0px 1px 3px rgba(97, 152, 193, 0.25));
    background: #FEF5F5;
    position: relative;
    width: 100%;
    

    ${props => props.active === 'true' ? `
      margin-top: 0px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;

      &::before{
      }
    `: null}
`

const Navigation = styled.nav`

    .active{
      span{
        font-weight: 600;
        letter-spacing: -0.2px;
        color: var(--color-medium) !important;
      }

      svg{
        path{
          fill: var(--color-medium);
        }
      }
    }

    ul{
      &.nav{
        display: flex;
        justify-content: space-between;
        gap: 24px;
        height: 44px;

        @media (max-width: 1140px) {
          gap: 16px;
        }
      }
        li{
          *{
            color: #6F6F71;
          }
            list-style: none;
            height: 100%;

            a{
              height: 100%;

              span{
                transition: color .2s cubic-bezier(0.39, 0.575, 0.565, 1);
              }

              &:hover{
                span{
                  color: #1F428F;
                }
              }
            }
        }
    }

    a, button{
        color: #6F6F71;
        text-decoration: none;
        background: transparent;
        border: none;
    }
`