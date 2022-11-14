import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import Five from "./five-column"
import Four from "./four-column"
import One from "./one.column"
import Three from "./three-column"
import Two from "./two-column"

export default function Footer() {

    const { wpPage: { footer: { columns, contact, copyright, informPart } } } = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDozNzU="}) {
            footer {
              informPart {
                text
                socialMedia {
                  link
                  icon {
                    altText
                    localFile {
                      publicURL
                    }
                  }
                }
              }
              copyright
              contact {
                title
                text
                buttons {
                  url
                  name
                }
              }
              columns {
                pierwszaGornaKolumna {
                  tytul
                  linki {
                    link{
                        url
                        title
                        target
                    }
                  }
                }
                trzeciaKolumna {
                  tytul
                  linki {
                    link{
                        url
                        title
                        target
                    }
                  }
                }
                pierwszaDolnaKolumna {
                  tytul
                  linki {
                    link{
                        url
                        title
                        target
                    }
                  }
                }
                drugaGornaKolumna {
                  tytul
                  linki {
                    link{
                        url
                        title
                        target
                    }
                  }
                }
                drugaDolnaKolumna {
                  tytul
                  linki {
                    link{
                        url
                        title
                        target
                    }
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
                <Content className="five">
                    <Five columns={columns} contact={contact} copyright={copyright} informPart={informPart} />
                </Content>
                <Content className="four">
                    <Four columns={columns} contact={contact} copyright={copyright} informPart={informPart} />
                </Content>
                <Content className="three">
                    <Three columns={columns} contact={contact} copyright={copyright} informPart={informPart} />
                </Content>
                <Content className="two">
                    <Two columns={columns} contact={contact} copyright={copyright} informPart={informPart} />
                </Content>
                <Content className="one">
                    <One columns={columns} contact={contact} copyright={copyright} informPart={informPart} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    margin-top: var(--section);
    background: #F2F4FF;
    padding: 48px 0;

    @media (max-width: 876px) {
        .body3{
            font-size: 14px;
            *{
                font-size: 14px;
            }
        }

        .sub{
            grid-gap: 12px !important;
        }

        .inform{
            height: fit-content !important;
        }
    }

    .inform{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 32px;
        height: 100%;
        .body2{
            margin-top: 16px;
            margin-bottom: 32px;
        }

        .sub{
            .body2{
                margin-top: 0;
                margin-bottom: 10px;
            }
        }

        img{
            height: 18px;
        }

        @media (max-width: 1024px){
            img{
                height: 28px;
            }
        }

        @media (max-width: 480px){
            img{
                height: 35px;
            }
        }
    }

    .copyright{
        display: flex;
        align-items: flex-end;

        p{
            
        }

        a{
            color: #6F6F71;
            font-weight: 600;
            text-decoration: none;
        }
    }

    .socials{
        display: flex;
        gap: 18px;
        align-items: center;

        @media (max-width: 1024px) {
            gap: 24px;
        }

        @media (max-width: 480px){
            gap: 32px;
        }
    }

    .contact{
        padding: 32px 26px;
        background: #3B5BA9;
        box-shadow: var(--shadow);
        border-radius: 8px;
        min-width: 250px;

        a{
            color: #ffd662;
        }

        p, span{
            color: #F2F4FF;
        }

        .body2{
            margin-top: 0;
            margin-bottom: 16px;
            display: block;
        }

        .body3{
            display: grid;
            grid-gap: 12px;
            margin-bottom: 16px;
            color: #F2F4FF;
        }

        .outlined{
            border-color: #FEF5F5;
            color: #FEF5F5;
            margin-top: 12px;

            &:hover{
                background-color: #FEF5F5;
                color: #000000;
            }
        }
    }

    .sub{
        display: grid;
        grid-gap: 6px;

        &.second{
            margin-top: 24px;
        }

        .title{
            margin-bottom: 10px;
            display: block;
            color: #050505;
            font-weight: 600;
        }

        a{
            text-decoration: none;
            font-weight: 400;
            line-height: 127%;
            font-feature-settings: 'pnum' on, 'onum' on;
            color: #6F6F71;
        }
    }

`

const Content = styled.div`
    grid-gap: 32px;

    *{
        height: fit-content;
    }

    display: none;

    &.five{
        display: grid;
        grid-template-columns: 28fr 17fr 17fr 17fr 28fr;

        @media (max-width: 1024px) {
            display: none;
        }
    }

    &.four{
        @media (max-width: 1024px) {
            display: grid;
            grid-template-columns: 28fr 17fr 17fr 28fr;
        }

        @media (max-width: 876px) {
            display: none;
        }
    }

    &.three{
        @media (max-width: 876px) {
            display: grid;
            grid-template-columns: 300px 1fr 1fr;
        }
        @media (max-width: 768px) {
            display: none;
        }
    }

    &.two{
        @media (max-width: 768px) {
            display: grid;
            grid-template-columns: 340px auto;
        }

        @media (max-width: 600px) {
            grid-template-columns: 1fr auto;
        }

        @media (max-width: 480px) {
            display: none;
        }
    }

    &.one{
        @media (max-width: 480px) {
            display: grid;
            grid-template-columns: 1fr;
            max-width: 340px;
        }
    }
`