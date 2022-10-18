import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Button } from "./buttons"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function Card({el, allowLink, alternate}) {
    return (
        <Item allowLink={allowLink} alternate={alternate} onClick={(e) => { if (!allowLink) { e.preventDefault() } }} to={'/blog/' + el.slug}>
            <div className="wrap">
                <GatsbyImage className="img" image={el.blogPost.thumbnail.localFile.childImageSharp.gatsbyImageData} alt={el.blogPost.thumbnail.altText} />
                <div className="text">
                    <div className="add-inform">
                        <span className="body3">{el.author.node.name}</span>
                        <span className="body3">{el.date}</span>
                    </div>
                    <div className="categories">
                        {el.categories.nodes.map(el => (
                            <Category className="body3" color={el.category.color}>{el.name}</Category>
                        ))}
                    </div>
                    <h3 className="sub2 arsenal">{el.title}</h3>
                    <p className="body3 description" dangerouslySetInnerHTML={{ __html: textParser(el.blogPost.previewText) }} />
                    <Button button={true} url={''} text={'Przeczytaj artykuł'} className='link desctop' />
                </div>
            </div>
            <Button button={true} url={''} text={'Przeczytaj artykuł'} className='link mobile' />
        </Item>
    )
}

const Category = styled.button`
    background-color: ${props => props.color};
    border-radius: 43px;
    padding: 2px 20px;
    border: unset;
`

const Item = styled(Link)`
    width: 485px;
    border-radius: 4px;
    box-shadow: 0px 4px 8px 3px rgba(97, 152, 193, 0.15);
    text-decoration: none;
    user-select: none;
    -webkit-user-drag: none;

    cursor: ${props => props.allowLink ? 'pointer' : 'grabbing'};
    

    ${props => props.alternate ? `
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
        
    ` : null}

    .img{
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
    }

    &:hover{
        svg{
            transform: rotateZ(-45deg);
        }
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

    @media (max-width: 560px) {
        .mobile{
            display: grid;
            margin: 0 auto;
        }
        .desctop{
            display: none;
        }
    }

    .categories{
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
        height: 100%;
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
