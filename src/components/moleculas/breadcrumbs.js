import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Breadcrumbs({ title }) {
    return (
        <Wrapper>
            <Link className="body1" to='/'>Strona główna</Link>
            <span className="body1 divider">/</span>
            <span className="body1">{title}</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;

    .divider{
        display: block;
        margin: 0 4px;
        color: #A1A1A4;
    }
    a{
        color: #A1A1A4;
        text-decoration: none;
    }


    @media (max-width: 480px) {
        .body1{
            font-size: 14px;
        }
    }

    @media (max-width: 350px) {
        .body1{
            font-size: 12px;
        }
    }
    
`