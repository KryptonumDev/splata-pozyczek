import styled from "styled-components";

export const Label = styled.label`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 4px;
    width: fit-content;
    line-height: 18px;

    .error{
        position: absolute;
        font-size: 10px;
        color: #D2261F;
        bottom: 0;
        left: 0;
        transform: translateY(100%);
    }

    &.sub{
        margin: 20px 12px 0;

        .label{
            line-height: 14px;
        }
    }

    a{
        color: #3B5BA9;
        font-weight: 600;
    }

    .label{
        color: #6F6F71;

        b{
            color: #6F6F71;
        }
    }

    .input-wrap{
        width: 18px;
        height: 18px;
        position: relative;

        @media (max-width: 480px) {
            width: 24px;
            height: 24px;
        }

        &::before {
            content: '';
            position: absolute;
            left: -3px;
            right: -3px;
            top: -3px;
            bottom: -3px;
            border-radius: 50%;
            z-index: 0;
            opacity: 0;
            transition: 120ms opacity ease-in-out;
            background: linear-gradient(315deg, #FCCF4F 0%, #E7DCBF 99.99%);
        }

        &:hover{
            &::before{
                opacity: 1;
            }
        }

        &:focus-within{
            &::before{
                opacity: 1;
            }
        }
    }

    .body2{
        font-size: 14px !important;
        line-height: 129% !important;
        @media (max-width: 480px){
            height: fit-content;
            line-height: 24px !important;
        }
    }
`

export const Input = styled.input`
    appearance: none;
    width: 18px;
    height: 18px;
    background: #FEF5F5;
    border: 2px solid #6F6F71;
    border-radius: 4px;
    position: relative;
    z-index: 1;

    @media (max-width: 480px) {
        width: 24px;
        height: 24px;
    }

    &:focus{
        outline: none;
    }

    &:focus-visible{
        outline: none;
    }

    &::after {
        content: '✓';
        color: #fff;
        font-size: 14px;
        font-weight: 300;
        transition: 120ms opacity ease-in-out;
        position: absolute;
        background: linear-gradient(315deg, #987003 0%, #EABE69 99.99%);
        left: -2px;
        top: -2px;
        right: -2px;
        bottom: -2px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        border-radius: 4px;
        font-weight: 900;
        z-index: 3;
    }

    &.half{
        &::after {
            content: '-';
            opacity: 1;
        }
    }

    &:checked {
        &::after {
            content: '✓';
            opacity: 1;
        }
    }
`