import React from "react"
import styled from "styled-components"
import { FilledButton } from "../../atoms/buttons"
import { Container } from "../../atoms/container"
import Logo from './../../../images/logo'

export default function Header({ data }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Logo/>
                    <nav>

                    </nav>
                    <FilledButton>
                        Wniosek online
                    </FilledButton>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
`

const Content = styled.div`
    margin: 25px 0 0 0;
    background: #FEF5F5;
    border-radius: 8px;
    box-shadow: 0px 4px 8px 3px rgba(97, 152, 193, 0.15);
    filter: drop-shadow(0px 1px 3px rgba(97, 152, 193, 0.25));
    padding: 10px 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`