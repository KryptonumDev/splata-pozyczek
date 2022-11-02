import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Button } from "./buttons"

export default function ExpertCard({ el }) {
    return (
        <Item>
            <Link to={'/zespol/' + el.slug + '/'}>
                {el.ekspert.image
                    ? <GatsbyImage className="image" image={el.ekspert.image.localFile.childImageSharp.gatsbyImageData} alt={el.ekspert.image.altText} />
                    : null}
                <div className="text">
                    <p className="body1">{el.title}</p>
                    <p className="body3">
                        {el.ekspert.role}
                    </p>
                    <Button url={'tel:' + el.ekspert.numerTelefonu} text={el.ekspert.numerTelefonu} className='phone' />
                    <Button url={'mailto:' + el.ekspert.emailAdres} text={el.ekspert.emailAdres} className='mail' />
                </div>
            </Link>
        </Item>

    )
}

const Item = styled.div`
    border-radius: 4px;
    box-shadow: var(--shadow);
    max-width: 344px;
    width: 100%;
    
    a{
        text-decoration: none;
    }

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
        margin-top: 2px;
    }

    .phone{
        margin-bottom: 8px;
        color: #3B5BA9;
        text-decoration: none;
    }

    .mail{
        color: #6F6F71;
        text-decoration: none;
        svg{
            rect{
                fill: #6F6F71;
            }
        }
    }

    a{

    }
`