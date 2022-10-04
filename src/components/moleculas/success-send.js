import React from "react"
import styled from "styled-components"
import { FilledButton } from "./../atoms/buttons"

export default function Success({ setIsSended, isSended }) {
    return (
        <Wrapper isSended={isSended}>
            <span className="h5 first">Dziękujemy</span>
            <span className="h5">Twoja wiadomość <br />została wysłana.</span>
            <span className="body1">Skontaktujemy się najszybciej <br />jak to będzie możliwe.</span>
            <FilledButton onClick={() => { setIsSended(false) }} as='button'>Napisz nową wiadomość</FilledButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #3F8643;
    border-radius: 8px;
    transition: .6s cubic-bezier(0.39, 0.575, 0.565, 1);
    transform: ${props => props.isSended ? 'translateX(0)' : 'translateX(50px)'};
    opacity: ${props => props.isSended ? '1' : '0'};
    pointer-events: ${props => props.isSended ? 'all' : 'none'};
    user-select:  ${props => props.isSended ? undefined : 'none'};

    display: flex;
    justify-content: center;
    flex-direction: column;

    span{
        display: block;
        margin-left: 100px;
        color: #E1FFDE;

        &.first{
            margin-bottom: 32px;
        }

        &.body1{
            margin-top: 18px;
            margin-bottom: 32px;
        }
    }

    button{
        margin-left: 100px;
    }
`