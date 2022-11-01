import React from "react"
import styled from "styled-components"
import { textParser } from "../../../helpers/wysiwyg-modification"

export default function QuickLinks({ links }) {
    return (
        <Wrapper>
            <span className="sub1">Spis treści.</span>
            <ul>
                {links.map(el => (
                    <li>
                        <a dangerouslySetInnerHTML={{ __html: textParser(el) }} href={'#' + el} />
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: fit-content;
    min-width: 250px;
    ul{
        margin-top: 16px;
        display: grid;
        grid-gap: 12px;
        list-style: none;

        a{
            color: #6F6F71 !important;
            font-weight: 400;
            font-size: 14px;
            line-height: 129%;
            font-feature-settings: 'pnum' on, 'onum' on;
            text-decoration: none;
            *{
                color: #6F6F71 !important;            
                font-weight: 400;
                font-size: 14px;
                line-height: 129%;
                font-feature-settings: 'pnum' on, 'onum' on;
            }
        }
    }
`