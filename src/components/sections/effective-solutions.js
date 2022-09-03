import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function EffectiveSolutions({ data: { title, boldText, text, situations } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextContent>
                        <h2 className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <p className="h6" dangerouslySetInnerHTML={{ __html: textParser(boldText) }} />
                        <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    </TextContent>
                    <Grid>
                        {situations.map(el => (
                            <Item key={el.title}>
                                <img alt={el.icon.altText} src={el.icon.localFile.publicURL} />
                                <div className="text">
                                    <h3 className="body1">{el.title}</h3>
                                    <p className="body2" dangerouslySetInnerHTML={{ __html: el.text }} />
                                </div>
                            </Item>
                        ))}
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment effectiveSolutions on WpPage_Blocks_pageBuilder {
    effectiveSolutions {
      title
      boldText
      text
      situations {
        title
        text
        icon {
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
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 32px;
`

const TextContent = styled.div`
    max-width: 466px;

    .h6{
        margin-top: 12px;
    }

    .body1{
        margin-top: 24px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: 8px;
`

const Item = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: auto auto;
    box-shadow: var(--shadow);
    border-radius: 4px;
    background-color: var(--color-white);

    &:nth-child(2){
        background-color: var(--color-dark);

        h3{
            color: #FEF5F5;
        }
        p{
            color: #DAE2FF;

        }
    }

    .text{
        padding: 10px;

        h3{
            margin-bottom: 4px;
            font-weight: 600;
        }
    }
`