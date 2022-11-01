import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "../../atoms/container"
import { textParser } from "../../../helpers/wysiwyg-modification"
import BreadcrumbsPost from "../../moleculas/breadcrumbs-post"
import { GatsbyImage } from "gatsby-plugin-image"
import { CATEGORY_COLORS } from "../../../constants/category-colors"

export default function Hero({ data: { title, author, date, categories, blogPost }, pageContext }) {
    return (
        <Wrapper>
            <Container className="container">
                <Box>
                    <BreadcrumbsPost title={title} uri={pageContext.url} />
                    <Flex>
                        <TextPart>
                            <div>
                                <h1 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                                <div className="categories">
                                    {categories.nodes.map(el => (
                                        <Category active={CATEGORY_COLORS[el.category.color].active} hover={CATEGORY_COLORS[el.category.color].hover} background={CATEGORY_COLORS[el.category.color].default}>
                                            <Link activeClassName="active" to={'/blog/tag/' + el.slug + '/'} className="body2" >
                                                {el.name}
                                            </Link>
                                        </Category>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="share">
                                    <span className="body3"><span style={{ color: '#3b5ba9' }}>Udostępnij</span> artykuł:</span>
                                    <div className="social">
                                        <Social>
                                            <a href={''}>
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.0722 22.5V12.9365H17.1825L17.6448 9.19207H14.0722V6.80703C14.0722 5.72653 14.3625 4.98675 15.8574 4.98675H17.7517V1.64839C16.83 1.54593 15.9036 1.49646 14.9766 1.5002C12.2275 1.5002 10.34 3.24114 10.34 6.43714V9.18507H7.25V12.9295H10.3467V22.5H14.0722Z" fill="#7C7B7B" />
                                                </svg>
                                                <span className="body2">Facebook</span>
                                            </a>
                                        </Social>
                                        <Social>
                                            <a href={''}>
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23 5.70323C22.2136 6.04004 21.3795 6.26112 20.5254 6.35912C21.4151 5.84361 22.0981 5.02728 22.4198 4.05463C21.5741 4.53983 20.6488 4.88169 19.684 5.06543C18.898 4.25591 17.7784 3.75 16.5391 3.75C14.1597 3.75 12.2306 5.61504 12.2306 7.91533C12.2306 8.24185 12.2688 8.55972 12.3422 8.86466C8.76151 8.6909 5.5869 7.03262 3.46188 4.51248C3.0911 5.12768 2.87864 5.84329 2.87864 6.60657C2.87864 8.05174 3.63931 9.32664 4.7953 10.0737C4.11111 10.0529 3.44199 9.87428 2.84377 9.55259C2.84353 9.57004 2.84353 9.58749 2.84353 9.60502C2.84353 11.6232 4.32862 13.3068 6.2995 13.6894C5.66506 13.8563 4.99958 13.8807 4.35389 13.7608C4.9021 15.4157 6.49326 16.6199 8.3785 16.6536C6.90399 17.7708 5.04623 18.4368 3.02777 18.4368C2.67996 18.4368 2.33707 18.417 2 18.3785C3.90665 19.5604 6.17129 20.25 8.60434 20.25C16.5291 20.25 20.8626 13.9028 20.8626 8.3984C20.8626 8.21774 20.8585 8.0381 20.8501 7.8595C21.6936 7.26998 22.4216 6.5398 23 5.70323Z" fill="#7C7B7B" />
                                                </svg>
                                                <span className="body2">Twitter</span>
                                            </a>
                                        </Social>
                                        <Social>
                                            <a href={''}>
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_1281_208692)">
                                                        <path d="M13.2508 0.000671387C7.03732 0.000671387 2 5.03729 2 11.2492C2 15.8568 4.76966 19.8139 8.73442 21.5537C8.70086 20.7675 8.72707 19.8255 8.92845 18.9711C9.14593 18.0573 10.3775 12.8402 10.3775 12.8402C10.3775 12.8402 10.0186 12.1219 10.0186 11.061C10.0186 9.39344 10.9846 8.14866 12.1869 8.14866C13.2114 8.14866 13.7046 8.91771 13.7046 9.83738C13.7046 10.8654 13.0494 12.4049 12.7123 13.8295C12.4307 15.0231 13.3106 15.9968 14.4867 15.9968C16.6187 15.9968 18.0546 13.2582 18.0546 10.0154C18.0546 7.55038 16.3939 5.7048 13.3733 5.7048C9.96014 5.7048 7.83548 8.24935 7.83548 11.0916C7.83548 12.0722 8.12299 12.7628 8.57681 13.2976C8.78409 13.5442 8.81325 13.6434 8.73737 13.9251C8.68335 14.1323 8.56076 14.6306 8.50824 14.8276C8.43371 15.1129 8.20322 15.2143 7.94497 15.11C6.37342 14.4671 5.64229 12.7474 5.64229 10.8122C5.64229 7.61601 8.33752 3.7848 13.6813 3.7848C17.9772 3.7848 20.8052 6.89191 20.8052 10.2284C20.8052 14.6415 18.3508 17.9391 14.7334 17.9391C13.5193 17.9391 12.3767 17.2816 11.9856 16.5359C11.9856 16.5359 11.3319 19.1287 11.1948 19.6285C10.9554 20.4952 10.4884 21.3631 10.0623 22.0388C11.0736 22.3372 12.1432 22.4998 13.2508 22.4998C19.4642 22.4998 24.5 17.4633 24.5 11.2491C24.5 5.03729 19.4642 0.000671387 13.2508 0.000671387Z" fill="#6F6F71" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1281_208692">
                                                            <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="body2">Pinterest</span>
                                            </a>
                                        </Social>
                                    </div>
                                </div>
                                <div className="add-inform">
                                    <span className="body1 autor">{author.node.name}</span>
                                    <span className="body1 date">{date}</span>
                                </div>
                            </div>
                        </TextPart>
                        <GatsbyImage image={blogPost.thumbnail.localFile.childImageSharp.gatsbyImageData} alt={blogPost.thumbnail.altText} />
                    </Flex>
                </Box>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
`

const Social = styled.div`
    a{
        display: grid;
        grid-gap: 2px;
        grid-template-columns: auto auto;
        align-items: center;
        text-decoration: none;

        span{
            font-weight: 600;
            color: #6F6F71;
            transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        path{
            transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        &:hover{
            span{
                color: var(--color-medium);
            }

            path{
                fill: var(--color-medium);
            }
        }
    }
`

const Box = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const Flex = styled.div`
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 485fr 287fr;
    margin-top: 8px;

    .categories{
        margin-top: 12px;
        display: flex;
        flex-wrap: wrap;
        grid-gap: 12px;
    }
`

const TextPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;

    .add-inform{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        .autor{
            font-weight: 600;
        }

        .date{
            color: #6F6F71;
        }
    }

    .share{
        display: grid;
        align-items: center;
        width: fit-content;
        grid-template-columns: auto auto;
        grid-gap: 8px;
        .social{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
        }
    }
`

const Category = styled.div`
    a{
        border-radius: 43px;
        padding: 2px 20px;
        border: unset;
        background-color: ${props => props.background} !important;
        transition: background-color .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        text-decoration: none;
        color: #050505 !important;

        .active{
            background-color: ${props => props.active} !important;
            cursor: unset;
            pointer-events: none;

                
            &:hover{
                background-color: ${props => props.hover} !important;
            }
        }
    }
`