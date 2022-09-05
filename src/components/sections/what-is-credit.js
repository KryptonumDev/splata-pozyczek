import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'


export default function WhatIsCredit({ data: { list, listTitle, text, title } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Plate>
                        <h2 className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    </Plate>
                    <h3 dangerouslySetInnerHTML={{ __html: textParser(listTitle) }} />
                    <Grid>
                        {list.map(el => (
                            <Item key={el.tekst}>
                                <img src={el.ikona.localFile.publicURL} alt={el.ikona.altText} />
                                <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.tekst) }} />
                            </Item>
                        ))}
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment whatIsCredit on WpPage_Blocks_pageBuilder {
    whatIsCredit {
        title
        text
        listTitle
        list {
          tekst
          ikona {
            altText
            localFile {
              publicURL
            }
          }
        }
      }
}
`

const Wrapper = styled.section`
    margin-top: 80px;

    .h4{
        font-family: 'Arsenal';
    }
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`

const Plate = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    justify-content: space-between;
    padding: 32px;
    box-shadow: var(--shadow);
    border-radius: 4px;
    background-color: var(--color-light);
    margin-bottom: 32px;
`

const Grid = styled.div`
    columns: 2;
    margin-top: 24px;

`

const Item = styled.div`
    break-inside: avoid;
    margin-top: 16px;
    display: grid;
    grid-template-columns: 48px auto;
    grid-gap: 16px;

    &:first-child{
     margin-top: 0;   
    }

    img{
        width: 48px;
        height: 48px;
    }
`