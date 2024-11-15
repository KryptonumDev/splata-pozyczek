import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"
import VideoEmbed from "../atoms/video-embed"

export default function InformAndVideo({ data: { video, videoTitle, videoDate, title, text, icon } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Panel className="desctop">
                        <img src={icon.localFile.publicURL} alt={icon.altText} />
                        <div className="text">
                            <h2 className="body1 title" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                            <div className="body1 sub" dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    </Panel>
                    <Panel className="mobile">
                        <div className="text">
                            <img src={icon.localFile.publicURL} alt={icon.altText} />
                            <h2 className="body1 title" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        </div>
                        <div className="body1 sub" dangerouslySetInnerHTML={{ __html: text }} />
                    </Panel>
                    <VideoEmbed url={video} title={videoTitle ?? title} date={videoDate} />
                </Flex>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment informAndVideo on WpPage_PageBuilder_Sections_InformAndVideo {
    informAndVideo {
        video
        videoTitle
        videoDate
        title
        text
        icon{
            altText
            localFile{
                publicURL
            }
        }
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);

    iframe{
        height: fit-content;
        display: block;
        box-shadow: var(--shadow);
        border-radius: 4px;
        min-width: 400px;
        width: 100%;
        aspect-ratio: 1.77735849057/1;

        @media (max-width: 840px){
            min-width: unset;
        }
    }
`

const Panel = styled.div`
    display: none;
    grid-template-columns: auto auto;
    padding: 10px;
    border-radius: 4px;
    box-shadow: var(--shadow);

    &.desctop{
        display: grid;
    }

    @media (max-width: 768px) {
        &.desctop{
            display: none;
        }

        &.mobile{
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 4px;
            padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(16px, ${28 / 768 * 100}vw, 28px);
            
            .text{
                display: flex;
                align-items: center;
                padding: 0;

                img{
                    margin-right: 4px;
                }
            }
        }
    }

    img{
        width: clamp(48px, ${48 / 768 * 100}vw, 76px);
        height: clamp(48px, ${48 / 768 * 100}vw, 76px);
    }

    .sub{
        display: grid;
        grid-gap: 8px;
        color: #6F6F71;

        p{
        color: #6F6F71;

        }

        strong{
            color: #050505;
        }

        span{
            font-weight: 600;
        }
    }

    .text{
        padding: 10px;

        .title{
            font-weight: 600;
        }

        .body1{
            margin-bottom: 4px;
        }
    }
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    align-items: center;

    @media (max-width: 840px) {
        display: flex;
    }
`