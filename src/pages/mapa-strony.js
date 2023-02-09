import { graphql, Link } from "gatsby"
import React, { useMemo } from "react"
import styled from "styled-components"
import { Container } from "../components/atoms/container"

export default function MapaStrony({ data: { allSitePage } }) {

    const pages = useMemo(() => {
        let arr = {
            pages: [],
            posts: [],
            blog: [],
            zespol: [],
        }

        allSitePage.nodes.forEach(el => {

            if (el.path.includes('404') || el?.pageContext?.page > 1) {
                return null
            } else if (el.path === '/') {
                arr.pages.unshift(el)
            } else if (el.path === '/blog/') {
                arr.blog.unshift(el)
            } else if (el.path === '/zespol/') {
                arr.zespol.unshift(el)
            } else if (el.path.includes('/tag/')) {
                arr.blog.push(el)
            } else if (el.path.includes('/blog/')) {
                arr.posts.push(el)
            } else if (el.path.includes('/zespol/')) {
                arr.zespol.push(el)
            } else {
                arr.pages.push(el)
            }
        })

        return arr
    }, [allSitePage])

    return (
        <Wrapper>
            <Container>
                <p className="arsenal h4">Strony</p>
                <ul>
                    {pages.pages.map(el => {
                        return (
                            <li>
                                <Link to={el.path}>{el.pageContext.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <p className="arsenal h4">Blog</p>
                <ul>
                    {pages.blog.map(el => {
                        return (
                            <li>
                                <Link to={el.path}>{el.pageContext.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <p className="arsenal h4">Artykuły</p>
                <ul>
                    {pages.posts.map(el => {
                        return (
                            <li>
                                <Link to={el.path}>{el.pageContext.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <p className="arsenal h4">Zespół</p>
                <ul>
                    {pages.zespol.map(el => {
                        return (
                            <li>
                                <Link to={el.path}>{el.pageContext.title}{el.pageContext.role ? ' - ' + el.pageContext.role : ''}</Link>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    ul{
        list-style: none;
    }

    li{
        margin-top: 12px;
    }

    p{
        margin-top: 24px;
        margin-bottom: 24px;
    }
`

export const query = graphql`
    query mapaQuery {
        allSitePage {
          nodes {
            path
            pageContext
          }
        }
    }
`