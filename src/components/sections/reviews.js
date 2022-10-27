import React, { useMemo, useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"
import { OutlinedButton } from "../atoms/buttons"

export default function Reviews({ data: { title, text}, expert, comments }) {

    const { allWpComment } = useStaticQuery(graphql`
    query {
        allWpComment {
          nodes {
            author {
              node {
                name
              }
            }
            content
          }
        }
    }
  `)

    const chosenComments = useMemo(() => {

        if(expert){
            return comments
        }
        return allWpComment.nodes

    }, [allWpComment, comments, expert])


    const [showCount, changeShowCount] = useState(6)

    return (
        <Wrapper>
            <Container>
                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                {text
                    ? <p className="body1 text" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    : null}

                <Grid>
                    {chosenComments?.map((el, index) => {
                        if (index > showCount - 1) {
                            return null
                        }

                        return (
                            <Item>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 27.744C2.676 25.824 4.468 23.552 5.876 20.928C7.284 18.304 8.02 15.776 8.084 13.344H7.412C5.62 13.344 4.084 12.768 2.804 11.616C1.524 10.336 0.884 8.704 0.884 6.72C0.884 4.672 1.524 3.008 2.804 1.728C4.084 0.576 5.62 0 7.412 0C9.14 0 10.676 0.576 12.02 1.728L12.308 2.112C13.844 3.84 14.612 6.272 14.612 9.408C14.612 13.12 13.556 17.088 11.444 21.312C9.396 25.472 6.868 28.8 3.86 31.296L0.5 27.744ZM18.452 27.744C20.628 25.824 22.42 23.552 23.828 20.928C25.236 18.304 25.972 15.776 26.036 13.344H25.364C23.508 13.344 21.972 12.768 20.756 11.616C19.476 10.336 18.836 8.704 18.836 6.72C18.836 4.672 19.476 3.008 20.756 1.728C21.972 0.576 23.508 0 25.364 0C27.092 0 28.628 0.576 29.972 1.728L30.26 2.112C31.796 3.84 32.564 6.272 32.564 9.408C32.564 13.12 31.508 17.088 29.396 21.312C27.348 25.472 24.82 28.8 21.812 31.296L18.452 27.744Z" fill="#DAE2FF" />
                                </svg>
                                <div>
                                    <div className="body1" dangerouslySetInnerHTML={{ __html: el.content.split(' ').slice(0, 6).join(' ') }} />
                                    <div className="body3" dangerouslySetInnerHTML={{ __html: el.content }} />
                                    <span className="body2">{el.author.node.name}</span>
                                </div>
                            </Item>
                        )
                    })}
                </Grid>
                {chosenComments.length < 6
                    ? null
                    : showCount > chosenComments.length
                        ? <OutlinedButton onClick={() => { changeShowCount(6) }} className="button">Ukryj</OutlinedButton>
                        : <OutlinedButton onClick={() => { changeShowCount(showCount + 6) }} className="button">Wczytaj więcej</OutlinedButton>
                }
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment reviews on WpPage_PageBuilder_Sections_Reviews {
    reviews {
        title
        text
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);
    text-align: center;

    .text{
        width: 1000px;
        background-color: var(--color-light);
        box-shadow: var(--shadow);
        padding: 10px 24px;
        margin:  16px auto 48px auto;
    }

    .button{
        margin: 32px auto 0 auto;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    margin-top: 32px;
`

const Item = styled.div`
    padding: 24px 18px;
    border-radius: 4px;
    box-shadow: var(--shadow);
    text-align: left;
    display: grid;
    grid-template-columns: 32px auto;
    grid-gap: 10px;

    .body3{
        margin: 4px 0;
    }

    .body2{
        font-weight: 600;
    }
`