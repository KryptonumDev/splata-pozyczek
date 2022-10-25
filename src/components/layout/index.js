import axios from "axios";
import React from "react"
import styled from "styled-components"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {

    // axios.post('https://testy.kryptonum.co.uk/wp-json/wp/v2/comments', {
    //     post: 2767,
    //     author_name: 'Bodziasdo',
    //     author_email: "shevabogdan16@gmail.com",
    //     content: 'tesasdt',
    // })
    //     .then(res => {
    //         debugger
    //     })

    return (
        <Wrapper>
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