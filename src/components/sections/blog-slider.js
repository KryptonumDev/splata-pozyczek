import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { Container } from "../atoms/container"
import { motion, useMotionValue } from "framer-motion"
import { textParser } from "../../helpers/wysiwyg-modification"
import { Button } from "../atoms/buttons"
import Card from "../atoms/blog-card"

export default function BlogSlider({ data, posts }) {

    const [allowLink, setAllowLink] = useState(true)

    const x = useMotionValue(0)
    const [maxButtonsTransform, setMaxButtonsTransform] = useState(0)

    useEffect(() => {
        const parrent = document.getElementById('control-wrap')
        const child = document.getElementById('control')
        const maxTransform = child.clientWidth - parrent.clientWidth

        setMaxButtonsTransform(maxTransform)
    }, [])

    const transform = (direction) => {
        const transformx = x.get()
        if (direction === 'left') {
            if (transformx + 300 > 0) {
                x.set(0)
            } else {
                x.set(transformx + 300)
            }
        } else if (direction === 'right') {
            if (transformx - 300 < - maxButtonsTransform) {
                x.set(-maxButtonsTransform)
            } else {
                x.set(transformx - 300)
            }
        }
    }

    const [choosenPosts] = useState(() => {
        const related = []

        if (data.relatedPosts) {
            data.relatedPosts.forEach(el => {
                if (el.post) {
                    related.push(el)
                }
            })

            if (related.length < 3) {
                posts.forEach(el => {
                    let isUsed = false
                    for (let i = 0; i < related.length; i++) {
                        if (el.id === data.relatedPosts[i].id) {
                            isUsed = true
                        }
                    }

                    if (!isUsed && related.length < 3) {
                        related.push(el)
                    }
                })
            }
        }
        else {
            return posts
        }

        return related
    })


    console.log(x.get())

    return (
        <Wrapper>
            <Container>
                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(data.title) }} />
                <ControlButtonsWrap>
                    <button onClick={() => { transform('left') }} className="control left">
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.586667 5.89334L3.16667 8.5C3.22864 8.56249 3.30238 8.61209 3.38362 8.64593C3.46486 8.67978 3.55199 8.6972 3.64 8.6972C3.72801 8.6972 3.81515 8.67978 3.89638 8.64593C3.97762 8.61209 4.05136 8.56249 4.11333 8.5C4.2375 8.3751 4.3072 8.20613 4.3072 8.03C4.3072 7.85388 4.2375 7.68491 4.11333 7.56L1.74 5.16667L15.3333 5.16667C15.5101 5.16667 15.6797 5.09643 15.8047 4.97141C15.9298 4.84639 16 4.67682 16 4.50001V4.50001C16 4.32319 15.9298 4.15363 15.8047 4.0286C15.6797 3.90358 15.5101 3.83334 15.3333 3.83334L1.7 3.83334L4.11333 1.42667C4.17582 1.3647 4.22542 1.29096 4.25926 1.20972C4.29311 1.12848 4.31053 1.04135 4.31053 0.953339C4.31053 0.865331 4.29311 0.778194 4.25926 0.696955C4.22542 0.615715 4.17582 0.54198 4.11333 0.480005C4.05136 0.417519 3.97762 0.367923 3.89638 0.334078C3.81515 0.300232 3.72801 0.282806 3.64 0.282806C3.55199 0.282806 3.46486 0.300232 3.38362 0.334078C3.30238 0.367923 3.22864 0.417519 3.16667 0.480005L0.586668 3.06667C0.212133 3.44167 0.0017609 3.95 0.00176085 4.48C0.00176081 5.01001 0.212133 5.51834 0.586667 5.89334Z" fill="#F2F4FF" />
                        </svg>
                    </button>
                    <ControlWrap id='control-wrap'>
                        <Control whileDrag={{ cursor: 'grabbing' }}  onDragStart={() => setAllowLink(false)} onDragEnd={() => { setTimeout(() => { setAllowLink(true) }, 1) }} style={{ x }} drag='x' dragConstraints={{ left: -maxButtonsTransform, right: 0 }} maxButtonsTransform={maxButtonsTransform} id='control'>
                            {choosenPosts.map(el => (
                                <Card el={el} allowLink={allowLink}/>
                            ))}
                            <Placeholder onClick={(e) => { if (!allowLink) { e.preventDefault() } }} to={'/blog/'}>
                                <p className="h6 arsenal">Chcesz dowiedzieć się więcej?</p>
                                <Button button={true} url={''} text={'Wszystkie artykuły'} className='more' />
                            </Placeholder>
                        </Control>
                    </ControlWrap>
                    <button onClick={() => { transform('right') }} className="control right">
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4151 3.10667L12.8351 0.500006C12.7731 0.437521 12.6994 0.387924 12.6181 0.354079C12.5369 0.320233 12.4498 0.302807 12.3618 0.302807C12.2738 0.302807 12.1866 0.320233 12.1054 0.354079C12.0241 0.387924 11.9504 0.437521 11.8884 0.500006C11.8259 0.561981 11.7763 0.635716 11.7425 0.716955C11.7087 0.798195 11.6912 0.885331 11.6912 0.973339C11.6912 1.06135 11.7087 1.14848 11.7425 1.22972C11.7763 1.31096 11.8259 1.3847 11.8884 1.44667L14.2618 3.83334L0.668428 3.83334C0.491617 3.83334 0.322047 3.90358 0.197023 4.0286C0.071999 4.15362 0.00176087 4.32319 0.00176085 4.5C0.00176083 4.67682 0.0719989 4.84638 0.197023 4.97141C0.322047 5.09643 0.491617 5.16667 0.668428 5.16667L14.3018 5.16667L11.8884 7.58001C11.7702 7.70399 11.7043 7.86871 11.7043 8.04001C11.7043 8.2113 11.7702 8.37602 11.8884 8.50001C11.9504 8.56249 12.0241 8.61209 12.1054 8.64593C12.1866 8.67978 12.2738 8.6972 12.3618 8.6972C12.4498 8.6972 12.5369 8.67978 12.6181 8.64593C12.6994 8.61209 12.7731 8.56249 12.8351 8.50001L15.4151 5.93334C15.7896 5.55834 16 5.05001 16 4.52001C16 3.99 15.7896 3.48167 15.4151 3.10667Z" fill="#F2F4FF" />
                        </svg>
                    </button>
                </ControlButtonsWrap>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment blogSlider on WpPage_Blocks_pageBuilder {
    blogSlider {
      title
      relatedPosts {
        post {
          ... on WpPost {
            id
            title
            slug
            author {
              node {
                name
              }
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              nodes {
                name
                slug
                category {
                  color
                }
              }
            }
            blogPost {
              previewText
              thumbnail {
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

const Placeholder = styled(Link)`
    width: 485px;
    height: 100%;
    background-color: var(--color-medium);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    -webkit-user-drag: none;

    &:hover{
        svg{
            transform: rotateZ(-45deg);
        }
    }

    .h6{
        color: #fff;
    }

    .more{
        margin-top: 18px;
        color: #fff;
        text-decoration: none;
        rect{
            fill: #fff;
        }
        path{
            fill: #050505;
        }
    }

    @media (max-width: 560px){
        width: 320px;
    }

    @media (max-width: 375px){
        width: 280px;
    }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .h4{
        margin-bottom: clamp(12px, ${24 / 768 * 100}vw, 24px);
    }
`

const ControlButtonsWrap = styled.div`
    position: relative;

    .control{
        position: absolute;
        top: 50%;
        background-color: #050505;
        box-shadow: var(--shadow);
        width: 44px;
        height: 44px;
        border-radius: 4px;
        color: #fff;
        border: none;
        cursor: pointer;

        &.left{
            left: 0;
            top: calc(50% - 24px);
        }

        &.right{
            right: 0;
            top: 12px;
        }
    }

    @media (max-width: 768px ) {

        .control{
            display: none;
        }
    }

`

const ControlWrap = styled.div`
    max-width: 1100px;
    margin: 0 0 0 auto;
    overflow: hidden;
    padding: 12px 0;

    @media (max-width: 1208px) {
        margin: 0 0 0 68px;
    }

    @media (max-width: 768px ) {
        margin: 0;
        overflow: unset;
    }
`

const Control = styled(motion.div)`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: max-content;
    transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    @media (max-width: 560px){
        grid-template-columns: 320px 320px 320px 320px;
    }

    @media (max-width: 375px) {
        grid-template-columns: 280px 280px 280px 280px;
    }
`