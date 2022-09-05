import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { GatsbyImage } from "gatsby-plugin-image"
import { Button } from "../atoms/buttons"

export default function OurExperts({ data: { tytulSekcji, experts } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4" dangerouslySetInnerHTML={{ __html: textParser(tytulSekcji) }} />
                <Grid>
                    {experts.map(el => (
                        <GridItem>
                            <GatsbyImage className="image" image={el.expert.ekspert.image.localFile.childImageSharp.gatsbyImageData} alt={el.expert.ekspert.image.altText} />
                            <div className="text">
                                <p className="body1">{el.expert.title}</p>
                                <p className="body3">
                                    {el.expert.ekspert.role}
                                </p>
                                <Button url={'tel:' + el.expert.ekspert.numerTelefonu} text={el.expert.ekspert.numerTelefonu} className='phone' />
                                <Button url={'mailto:' + el.expert.ekspert.emailAdres} text={el.expert.ekspert.emailAdres} className='mail' />
                            </div>
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment ourExperts on WpPage_Blocks_pageBuilder {
    ourExperts {
      tytulSekcji
      experts {
        expert {
          ... on WpEkspert {
            id
            title
            ekspert {
              role
              numerTelefonu
              emailAdres
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
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: 80px;

    .h4{
        font-family: 'Arsenal';
        text-align: center;
        margin-bottom: 32px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 32px;
`

const GridItem = styled.div`
    border-radius: 4px;
    box-shadow: var(--shadow);

    .text{
        padding: 12px;
    }

    .image{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .body1{
        color: #050505;
    }

    .body3{
        margin-bottom: 16px;
    }

    .phone{
        margin-bottom: 8px;
        color: #3B5BA9;
        text-decoration: none;
    }

    .mail{
        color: #75757A;
        text-decoration: none;
        svg{
            rect{
                fill: #75757A;
            }
        }
    }

    a{

        svg{
            transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        &:hover{
            svg{
                transform: rotateZ(-45deg);
            }
        }
    }
`