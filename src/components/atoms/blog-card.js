import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Button } from "./buttons"
import { textParser } from "../../helpers/wysiwyg-modification"
import { CATEGORY_COLORS } from "../../constants/category-colors"

export default function Card({ key, el, allowLink, alternate }) {
    return (
        <Item key={key} allowLink={allowLink} className={alternate ? 'alt' : ''} onClick={(e) => { if (!allowLink) { e.preventDefault() } }} >
            <Link aria-label={el.title} className="wrap-link" to={'/blog/' + el.slug} />
            <div className="wrap">
                <GatsbyImage className="img" image={el.blogPost.thumbnail.localFile.childImageSharp.gatsbyImageData} alt={el.blogPost.thumbnail.altText} />
                <div className="text">
                    <div className="add-inform">
                        <span className="body3">{el.author.node.name}</span>
                        <span className="body3">{el.date}</span>
                    </div>
                    <div className="categories">
                        {el.categories.nodes.map(el => (
                            <Category key={el.name} active={CATEGORY_COLORS[el.category.color].active} hover={CATEGORY_COLORS[el.category.color].hover} background={CATEGORY_COLORS[el.category.color].default}>
                                <Link activeClassName="active" to={'/blog/tag/' + el.slug + '/'} className="body3 category" >
                                    {el.name}
                                </Link>
                            </Category>
                        ))}
                    </div>
                    <h3 className="sub2 arsenal">{el.title}</h3>
                    <p className="body3 description" dangerouslySetInnerHTML={{ __html: textParser(el.blogPost.previewText) }} />
                    <Button button={true} url={''} text={'Przeczytaj artykuł'} className='link desctop' />
                </div>
            </div>
            <Button button={true} url={'/blog/' + el.slug + '/'} text={'Przeczytaj artykuł'} className='link mobile' />
        </Item>
    )
}

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

const Item = styled.div`
    width: 485px;
    border-radius: 4px;
    box-shadow: 0px 4px 8px 3px rgba(97, 152, 193, 0.15);
    position: relative;

    .wrap-link{
        cursor: ${props => props.allowLink ? 'pointer' : 'grabbing'};
        user-select: none;
        -webkit-user-drag: none;
        text-decoration: none;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 0;
    }

    .category{
        position: relative;
        z-index: 1;
    }
    
    &.alt{
        .wrap{
        grid-gap: 0 !important;
        }
        .text{
            background-color: var(--color-medium);
            color: #fff;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;

            *{
                color: #fff;
            }

            .categories button{
                color: #000 !important;
            }

            .body3{
                color: #DAE2FF;
            }

            .link {
                color: #fff!important;
            }

            svg rect{
                fill: #fff;
            }

            svg path{
                fill: #000;
            }
        }
    }

    &:hover{
        svg{
            transform: rotateZ(-45deg);
        }
    }

    .img{
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
    }

    .wrap{
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 8px;
    }

    .mobile{
        display: none;
    }

    .categories{
        max-height: 35px;
        overflow: hidden;
        display: flex;
        gap: 8px 16px;
        flex-wrap: wrap;
        padding: 8px 0;

        .body3{
            font-size: 12px;
        }
    }

    .link{
        text-decoration: none;
        color: #050505;
        margin-top: 18px;
        rect{
            fill: #050505;
        }
    }

    .sub2{
        margin-bottom: 8px;
    }

    .img{
        width: 184px;
        height: fit-content;
            pointer-events: none;
    }

    .text{
        padding: 16px;
    }

    .add-inform{
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 560px) {
        .mobile{
            display: grid;
            margin: 0 auto;
        }
        .desctop{
            display: none;
        }

        width: 320px;
        padding: 16px 8px;  
        .img{
            border-radius: 4px;
            box-shadow: var(--shadow);
            width: 93px;
            height: fit-content;
        }
        .text{
            padding: 12px 12px 12px 4px;
        }
        .description{
            display: none;
        }
    }

    @media (max-width: 375px) {
        width: 280px;
    }
`
