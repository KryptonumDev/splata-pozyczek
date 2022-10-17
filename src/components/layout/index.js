import axios from "axios";
import React from "react"
import styled from "styled-components"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {

    // const data = JSON.stringify({
    //     post: 1094,
    //     author_name: 'Bodzio',
    //     author_email: "shevabogdan16@gmail.com",
    //     content: 'test',
    // });

    // axios.post('https://testy.kryptonum.co.uk/wp-json/wp/v2/comments', data)
    // .then(res => {
    //     debugger
    // })

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