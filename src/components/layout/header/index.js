import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { FilledButton } from "../../atoms/buttons"
import { Container } from "../../atoms/container"
import Logo from './../../../images/logo'
import MegaMenu from "./mega-menu"

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

  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo />
          <Navigation className="desctop">
            <ul className="nav">
              {navigacja.map(el =>
                <MegaMenu data={el} level='first' />
              )}
            </ul>
          </Navigation>
          <FilledButton className="button">
            Wniosek online
          </FilledButton>
          <MobileButton onClick={() => { setMobileMenuOpened(!isMobileMenuOpened) }}>
            <span />
          </MobileButton>
        </Content>
      </Container>
    </Wrapper>
  )
}

const MobileButton = styled.button`
  display: none;
  cursor: pointer;
  width: 32px;
  height: 3px;
  border-radius: 4px;
  background: #6F6F71;
  border: unset;
  margin-left: 110px;


  @media (max-width: 1024px) {
    display: block;
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
    }

    @media (max-width: 480px) {
      svg{
        width: 32px;
        transform: scale(2) translateX(8px) translateY(2px);
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
    background: #FEF5F5;
    border-radius: 8px;
    box-shadow: 0px 4px 8px 3px rgba(97, 152, 193, 0.15);
    filter: drop-shadow(0px 1px 3px rgba(97, 152, 193, 0.25));
    padding: 10px 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Navigation = styled.div`

    .active{
      span{
        font-weight: 600;
        letter-spacing: -0.2px;
        color: var(--color-medium) !important;
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
            }
        }
    }

    a, button{
        color: #75757A;
        text-decoration: none;
        background: transparent;
        border: none;
    }
`