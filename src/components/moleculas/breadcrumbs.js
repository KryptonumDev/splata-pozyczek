import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Breadcrumbs({ title }) {
    return (
        <Wrapper>
            <li><Link className="body1" to='/'>Strona główna</Link></li>
            <span>/</span>
            <li className="body1">{title}</li>
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    display: flex;
    justify-content: flex-start;

    span{
        display: block;
        margin: 0 4px;
        color: #A1A1A4;
    }
    li{
        list-style: none;
        a{
            color: #A1A1A4;
            text-decoration: none;
        }

        &:last-child{
            color: #505052;
        }
    }

    
`