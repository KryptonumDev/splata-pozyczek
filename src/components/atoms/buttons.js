import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"

export const OutlinedButton = styled(Link)`
    display: block;
    width: fit-content;
    font-family: 'Source Sans Pro';
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.003em;
    color: #050505;
    background: transparent;
    border: 2px solid #050505;
    border-radius: 4px;
    padding: 12px 44px;
    text-decoration: unset;
    text-align: center;

    transition: background-color .3s cubic-bezier(0.39, 0.575, 0.565, 1), color .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover{
        color: #FEF5F5;
        background-color: #050505;
    }

    &:focus{
        color: #FEF5F5;
        background-color: #505052;
    }

    &:disabled{
        color: #B2B2B8;
        border: 2px solid #B2B2B8;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 12px;
    }
`

export const FilledButton = styled(Link)`
    display: block;
    width: fit-content;
    font-family: 'Source Sans Pro';
    border: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.003em;
    color: #050505 !important;
    background: linear-gradient(315deg, #FCCF4F 0%, #E7DCBF 99.99%);
    box-shadow: 0px 1px 3px 1px rgba(97, 152, 193, 0.15), 0px 1px 2px rgba(97, 152, 193, 0.25);
    border-radius: 4px;
    padding: 12px 44px;
    text-decoration: unset;
    text-align: center;

    transition: background-color .3s cubic-bezier(0.39, 0.575, 0.565, 1);   

    &:hover{
        background: linear-gradient(315deg, #EDBD35 0%, #E6D9AC 99.99%);
    }

    &:focus{
        background: linear-gradient(315deg, #B98901 0%, #E6BC7E 99.99%);
    }

    &:disabled{
        color: #B2B2B8 !important;
        background: #E1E1EB;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 12px;
    }
`

export const Button = ({ url, text, className, button }) => (
    <Style as={button ? 'div' : undefined} className={'button ' + className} href={url}>
        {text}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#3B5BA9" />
            <g clip-path="url(#clip0_828_8969)">
                <path d="M19.4133 10.6066L16.8333 7.99993C16.7714 7.93745 16.6976 7.88785 16.6164 7.85401C16.5351 7.82016 16.448 7.80273 16.36 7.80273C16.272 7.80273 16.1849 7.82016 16.1036 7.85401C16.0224 7.88785 15.9486 7.93745 15.8867 7.99993C15.7625 8.12484 15.6928 8.29381 15.6928 8.46993C15.6928 8.64606 15.7625 8.81502 15.8867 8.93993L18.26 11.3333H4.66667C4.48986 11.3333 4.32029 11.4035 4.19526 11.5285C4.07024 11.6536 4 11.8231 4 11.9999V11.9999C4 12.1767 4.07024 12.3463 4.19526 12.4713C4.32029 12.5964 4.48986 12.6666 4.66667 12.6666H18.3L15.8867 15.0733C15.8242 15.1352 15.7746 15.209 15.7407 15.2902C15.7069 15.3715 15.6895 15.4586 15.6895 15.5466C15.6895 15.6346 15.7069 15.7217 15.7407 15.803C15.7746 15.8842 15.8242 15.958 15.8867 16.0199C15.9486 16.0824 16.0224 16.132 16.1036 16.1659C16.1849 16.1997 16.272 16.2171 16.36 16.2171C16.448 16.2171 16.5351 16.1997 16.6164 16.1659C16.6976 16.132 16.7714 16.0824 16.8333 16.0199L19.4133 13.4333C19.7879 13.0583 19.9982 12.5499 19.9982 12.0199C19.9982 11.4899 19.7879 10.9816 19.4133 10.6066Z" fill="#FEF5F5" />
            </g>
            <defs>
                <clipPath id="clip0_828_8969">
                    <rect width="16" height="16" fill="white" transform="translate(4 4)" />
                </clipPath>
            </defs>
        </svg>
    </Style>
)

const Style = styled.a`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 4px;
    align-items: center;
    width: fit-content;

    
    svg{
        transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    &:hover{
        svg{
            transform: rotateZ(-45deg);
        }
    }
`