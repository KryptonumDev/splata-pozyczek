import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function TwoColumnsTextAndIconsListAlt({ data: { title, text, repeater } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <div>
                        <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <p className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    </div>
                    <Grid>
                        {repeater.map((el, index) => (
                            <Item key={index} >
                                <svg className="light" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#DAE2FF" />
                                    <g clipPath="url(#clip0_1054_141553)">
                                        <path d="M24.5995 9.69251L13.0837 21.2075C13.0063 21.2852 12.9142 21.3469 12.8129 21.389C12.7116 21.4311 12.603 21.4527 12.4933 21.4527C12.3836 21.4527 12.2749 21.4311 12.1736 21.389C12.0723 21.3469 11.9803 21.2852 11.9028 21.2075L7.44951 16.75C7.37209 16.6723 7.28008 16.6106 7.17876 16.5685C7.07744 16.5264 6.96881 16.5048 6.8591 16.5048C6.74938 16.5048 6.64075 16.5264 6.53943 16.5685C6.43811 16.6106 6.3461 16.6723 6.26868 16.75C6.19095 16.8274 6.12927 16.9194 6.08719 17.0208C6.0451 17.1221 6.02344 17.2307 6.02344 17.3404C6.02344 17.4501 6.0451 17.5588 6.08719 17.6601C6.12927 17.7614 6.19095 17.8534 6.26868 17.9308L10.7237 22.385C11.1936 22.8541 11.8305 23.1175 12.4945 23.1175C13.1585 23.1175 13.7954 22.8541 14.2653 22.385L25.7803 10.8725C25.858 10.7951 25.9195 10.7031 25.9615 10.6019C26.0035 10.5007 26.0252 10.3921 26.0252 10.2825C26.0252 10.1729 26.0035 10.0644 25.9615 9.96312C25.9195 9.86188 25.858 9.76992 25.7803 9.69251C25.7029 9.61478 25.6109 9.5531 25.5096 9.51101C25.4083 9.46893 25.2996 9.44727 25.1899 9.44727C25.0802 9.44727 24.9716 9.46893 24.8703 9.51101C24.7689 9.5531 24.6769 9.61478 24.5995 9.69251Z" fill="#3B5BA9" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1054_141553">
                                            <rect width="20" height="20" fill="white" transform="translate(6 6)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg className="medium" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#3B5BA9" />
                                    <g clipPath="url(#clip0_1054_141543)">
                                        <path d="M24.5995 9.69251L13.0837 21.2075C13.0063 21.2852 12.9142 21.3469 12.8129 21.389C12.7116 21.4311 12.603 21.4527 12.4933 21.4527C12.3836 21.4527 12.2749 21.4311 12.1736 21.389C12.0723 21.3469 11.9803 21.2852 11.9028 21.2075L7.44951 16.75C7.37209 16.6723 7.28008 16.6106 7.17876 16.5685C7.07744 16.5264 6.96881 16.5048 6.8591 16.5048C6.74938 16.5048 6.64075 16.5264 6.53943 16.5685C6.43811 16.6106 6.3461 16.6723 6.26868 16.75C6.19095 16.8274 6.12927 16.9194 6.08719 17.0208C6.0451 17.1221 6.02344 17.2307 6.02344 17.3404C6.02344 17.4501 6.0451 17.5588 6.08719 17.6601C6.12927 17.7614 6.19095 17.8534 6.26868 17.9308L10.7237 22.385C11.1936 22.8541 11.8305 23.1175 12.4945 23.1175C13.1585 23.1175 13.7954 22.8541 14.2653 22.385L25.7803 10.8725C25.858 10.7951 25.9195 10.7031 25.9615 10.6019C26.0035 10.5007 26.0252 10.3921 26.0252 10.2825C26.0252 10.1729 26.0035 10.0644 25.9615 9.96312C25.9195 9.86188 25.858 9.76992 25.7803 9.69251C25.7029 9.61478 25.6109 9.5531 25.5096 9.51101C25.4083 9.46893 25.2996 9.44727 25.1899 9.44727C25.0802 9.44727 24.9716 9.46893 24.8703 9.51101C24.7689 9.5531 24.6769 9.61478 24.5995 9.69251Z" fill="#F2F4FF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1054_141543">
                                            <rect width="20" height="20" fill="white" transform="translate(6 6)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <div className="text">
                                    <h3 className="body1" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                    <div className="body2" dangerouslySetInnerHTML={{ __html: el.text }} />
                                </div>
                            </Item>
                        ))}
                    </Grid>
                </Flex>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnsTextAndIconsListAlt on WpPage_PageBuilder_Sections_TwoColumnsTextAndIconsListAlt {
    twoColumnsTextAndIconsListAlt {
        title
        text
        repeater{
            title
            text
        }
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .h4{
        font-size: clamp(25px, ${29 / 768 * 100}vw, 38px);
    }

    .h6{
        margin-top: clamp(8px, ${16 / 768 * 100}VW, 24px);
        margin-bottom: clamp(16px, ${24 / 768 * 100}vw, 40px);    
        color: #6F6F71;
    }
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 840px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }

    @media (max-width: 560px) {
        grid-gap: 16px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: 16px;
    

    @media (max-width: 840px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr ;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: 40px auto;

    svg{
        width: 40px;
        height: 40px;
    }

    .medium{
        display: none;
    }

    .text{
        padding: 10px;
    }

    .body1{
        margin-bottom: 4px;
        font-weight: 600;
    }

    .body2{
        display: grid;
        grid-gap: 8px;
        p{
            color: #6F6F71;
        }
    }

    &:first-child{
        .medium{
            display: block;
        }

        .light{
            display: none;
        }
    }

    img{
        width: clamp(28px, ${32 / 768 * 100}vw, 32px);
        height: clamp(28px, ${32 / 768 * 100}vw, 32px);
    }
`