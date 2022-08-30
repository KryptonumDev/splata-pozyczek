import { Link } from "gatsby"
import styled from "styled-components"

export const OutlinedButton = styled(Link)`
    font-family: 'Source Sans Pro';
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.003em;
    color: #050505;
    background: transparent;
    border: 2px solid #050505;
    border-radius: 4px;
    padding: 10px 44px;

    transition: background .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover{
        color: #FEF5F5;
        background: #050505;
    }

    &:focus{
        color: #FEF5F5;
        background: #505052;
    }

    &:disabled{
        color: #B2B2B8;
        border: 2px solid #B2B2B8;
    }

`

export const FilledButton = styled(Link)`
    font-family: 'Source Sans Pro';
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.003em;
    color: #050505;
    background: linear-gradient(315deg, #FCCF4F 0%, #E7DCBF 99.99%);
    box-shadow: 0px 1px 3px 1px rgba(97, 152, 193, 0.15), 0px 1px 2px rgba(97, 152, 193, 0.25);
    border-radius: 4px;
    padding: 10px 44px;

    transition: background .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover{
        background: linear-gradient(315deg, #EDBD35 0%, #E6D9AC 99.99%);
    }

    &:focus{
        background: linear-gradient(315deg, #B98901 0%, #E6BC7E 99.99%);
    }

    &:disabled{
        color: #B2B2B8;
        background: #E1E1EB;
    }
` 