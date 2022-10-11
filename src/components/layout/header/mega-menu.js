import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function MegaMenu({ data, level }) {
    return (
        <Wrapper level={level}>
            <Link activeClassName="active" className="flex" target={data.url.target} to={data.url.url}>
                <span className="body2">{data.url.title}</span>
                {data.megaMeni
                    ? (
                        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4784 1.15752C10.4087 1.08722 10.3257 1.03143 10.2343 0.993349C10.1429 0.955272 10.0449 0.935669 9.94591 0.935669C9.8469 0.935669 9.74887 0.955272 9.65748 0.993349C9.56608 1.03143 9.48313 1.08722 9.41341 1.15752L5.97841 4.59251C5.90869 4.66281 5.82573 4.7186 5.73434 4.75668C5.64295 4.79475 5.54492 4.81436 5.44591 4.81436C5.3469 4.81436 5.24887 4.79475 5.15747 4.75668C5.06608 4.7186 4.98313 4.66281 4.91341 4.59251L1.47841 1.15752C1.40868 1.08722 1.32573 1.03143 1.23434 0.993349C1.14295 0.955272 1.04492 0.935669 0.945907 0.935669C0.846898 0.935669 0.748869 0.955272 0.657474 0.993349C0.56608 1.03143 0.483129 1.08722 0.413407 1.15752C0.273719 1.29804 0.195313 1.48813 0.195312 1.68627C0.195313 1.88441 0.273719 2.07449 0.413407 2.21502L3.85591 5.65751C4.27778 6.07886 4.84966 6.31553 5.44591 6.31553C6.04216 6.31553 6.61403 6.07886 7.03591 5.65751L10.4784 2.21502C10.6181 2.07449 10.6965 1.88441 10.6965 1.68627C10.6965 1.48813 10.6181 1.29804 10.4784 1.15752Z" fill="#75757A" />
                        </svg>
                    ) : null}
            </Link>
            {data.megaMeni
                ? (
                    <ul>
                        {data.megaMeni?.map(el => {
                            if (level === 'second') {
                                return <li><Link activeClassName="active" target={data.url.target} to={el.url.url}><span className="body2">{el.url.title}</span></Link></li>
                            }
                            return <MegaMenu data={el} level='second' />
                        })}
                    </ul>
                ) : null}
        </Wrapper>
    )
}

const Wrapper = styled.li`
    position: relative;

    &:hover, &:focus-within{
        ul{
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;

            ul{

            }
        }
    }

    ul{
        opacity: 0;
        transform: translateY(-6px);
        pointer-events: none;
        transition: .3s cubic-bezier(0.39, 0.575, 0.565, 1);

        position: absolute;
        top: 100%;
        padding: 10px 0 0 0;
        width: 260px;
        border-radius: 8px;
        background: #FEF5F5;

        ul{
            padding-top: 0;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            top: 0;
            left: -1px;
            opacity: 0 !important;
            transform: translateX(100%) translateY(-6px) !important;
            pointer-events: none !important;
        }

        li{
            padding: 5px 8px;
            svg{
                transform: rotateZ(-90deg);
            }
            span{
                padding: 4px 8px;
            }

            &:hover, &:focus-within{
                ul{
                    opacity: 1 !important;
                    transform: translateX(100%) translateY(0) !important;
                    pointer-events: all !important;
                }
            }
        }
    }

    button{
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 4px;
        align-items: center;
    }

    .flex{
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 4px;
        align-items: center;
    }

    ${props => props.level === 'second' ? `
        ul{
            transform: translateX(100%) translateY(-6px);
        }
    ` : `
    
    `}
`