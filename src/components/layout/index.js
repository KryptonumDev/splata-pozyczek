import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import GlobalStyles from "../../styles/global"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {

    return (
        <Wrapper>
            <Helmet>
                <link rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin />

                <link rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Arsenal:wght@400;700&display=swap" />

                <link rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" />

                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Arsenal:wght@400;700&display=swap" />

                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" />
            </Helmet>
            <GlobalStyles />
            <Header />
            {children}
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: fit-content;
    min-height: 100vh;
`