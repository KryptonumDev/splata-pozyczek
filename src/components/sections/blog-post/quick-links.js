import React from "react"
import styled from "styled-components"
import { htmlDelete, textParser } from "../../../helpers/wysiwyg-modification"
import { slugTransform } from '../../../helpers/slug-transform'

export default function QuickLinks({ setInView, inView, links }) {

    return (
        <Wrapper>
            <span className="sub1">Spis treści.</span>
            <ul>
                {links.map((el, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={inView === slugTransform(htmlDelete(el)) ? 'active' : 'no'}
                                dangerouslySetInnerHTML={{ __html: textParser(el) }}
                                onClick={() => { setInView(textParser(el)) }}
                                href={'#' + slugTransform(el)}
                            />
                        </li>
                    )
                })}
            </ul>
        </Wrapper>
    )
}

const Link = styled.a`
    color: #6F6F71 !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 129%;
    font-feature-settings: 'pnum' on, 'onum' on;
    text-decoration: none;
    transition: padding .2s cubic-bezier(0.39, 0.575, 0.565, 1);
    display: block;
    *{
        color: #6F6F71 !important;            
        font-weight: 400;
        font-size: 16px;
        line-height: 129%;
        font-feature-settings: 'pnum' on, 'onum' on;
    }

    @media (min-width: 765px) {
        &.active{
            color: #050505 !important;
            padding-left: 34px;
            *{
                color: #050505 !important;
            }
        }
    }
`

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
    }
`