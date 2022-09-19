import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
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
                url
                text
                megaMeni {
                  url
                  text
                  megaMeni {
                    url
                    text
                  }
                }
              }
            }
        }
    }
  `)

    return (
        <Wrapper>
            <Container>
                <Content>
                    <Logo />
                    <Navigation>
                        {navigacja.map(el => {
                            if (el.url) {
                                return <Link className="body2" to={el.url}>{el.text}</Link>
                            }
                            return <MegaMenu data={el} level='first'/>
                        })}
                    </Navigation>
                    <FilledButton>
                        Wniosek online
                    </FilledButton>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    position: fixed;
    z-index: 10000;
    left: 0;
    right: 0;
    top: 0;
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
    gap: 32px;
`

const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;

    ul{
        li{
            list-style: none;
        }
    }

    a, button{
        color: #75757A;
        text-decoration: none;
        background: transparent;
        border: none;
    }
`