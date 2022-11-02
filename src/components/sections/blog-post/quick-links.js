import React from "react"
import styled from "styled-components"
import { textParser } from "../../../helpers/wysiwyg-modification"
import { Link } from 'react-scroll'

export default function QuickLinks({ links }) {
    return (
        <Wrapper>
            <span className="sub1">Spis treści.</span>
            <ul>
                {links.map(el => (
                    <li>
                        <Link
                            smooth={'easeOutCubic'}
                            dangerouslySetInnerHTML={{ __html: textParser(el) }}
                            to={el}
                            href='#'
                            tabIndex='0'
                            spy={true}
                            activeClass='active'
                        />
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
    position: sticky;
    top: 100px;
    height: fit-content;
    min-width: 250px;

    @media (max-width: 764px) {
        position: static;
    }

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
            transition: padding .2s cubic-bezier(0.39, 0.575, 0.565, 1);
            display: block;
            *{
                color: #6F6F71 !important;            
                font-weight: 400;
                font-size: 14px;
                line-height: 129%;
                font-feature-settings: 'pnum' on, 'onum' on;
            }

            &.active{
                color: #050505 !important;
                padding-left: 34px;
                *{
                    color: #050505 !important;
                }
            }
        }
    }
`