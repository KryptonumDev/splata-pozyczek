import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { Container } from "../atoms/container"

export default function ThreeColumnsFiles({ data: { item } }) {
  return (
    <Wrapper>
      <Container>
        <Content>
          {item.map(el => (
            <Item className="body1" as={el.file ? 'a' : undefined} to={el.link?.url} download={!!el.file} href={el.file?.localFile?.publicURL}>
              {el.file
                ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1390_901)">
                      <path id='arrow' d="M9.8792 18.122C10.1578 18.4008 10.4886 18.6219 10.8527 18.7728C11.2168 18.9237 11.6071 19.0014 12.0012 19.0014C12.3953 19.0014 12.7856 18.9237 13.1497 18.7728C13.5138 18.6219 13.8446 18.4008 14.1232 18.122L17.3342 14.911C17.5064 14.7206 17.5987 14.4713 17.5921 14.2147C17.5855 13.958 17.4805 13.7138 17.2988 13.5325C17.1171 13.3511 16.8726 13.2466 16.616 13.2406C16.3594 13.2346 16.1102 13.3274 15.9202 13.5L12.9942 16.427L13.0012 0.999992C13.0012 0.734776 12.8958 0.480422 12.7083 0.292886C12.5208 0.105349 12.2664 -7.62939e-06 12.0012 -7.62939e-06V-7.62939e-06C11.736 -7.62939e-06 11.4816 0.105349 11.2941 0.292886C11.1066 0.480422 11.0012 0.734776 11.0012 0.999992L10.9922 16.408L8.0822 13.5C7.89456 13.3125 7.64012 13.2072 7.37485 13.2073C7.10958 13.2074 6.85521 13.3129 6.6677 13.5005C6.48019 13.6881 6.37491 13.9426 6.375 14.2078C6.37509 14.4731 6.48056 14.7275 6.6682 14.915L9.8792 18.122Z" fill="#3B5BA9" />
                      <path d="M23 15.9999C22.7348 15.9999 22.4804 16.1052 22.2929 16.2927C22.1054 16.4803 22 16.7346 22 16.9999V20.9998C22 21.2651 21.8946 21.5194 21.7071 21.707C21.5196 21.8945 21.2652 21.9998 21 21.9998H3C2.73478 21.9998 2.48043 21.8945 2.29289 21.707C2.10536 21.5194 2 21.2651 2 20.9998V16.9999C2 16.7346 1.89464 16.4803 1.70711 16.2927C1.51957 16.1052 1.26522 15.9999 1 15.9999C0.734784 15.9999 0.48043 16.1052 0.292893 16.2927C0.105357 16.4803 0 16.7346 0 16.9999L0 20.9998C0 21.7955 0.31607 22.5586 0.87868 23.1212C1.44129 23.6838 2.20435 23.9998 3 23.9998H21C21.7956 23.9998 22.5587 23.6838 23.1213 23.1212C23.6839 22.5586 24 21.7955 24 20.9998V16.9999C24 16.7346 23.8946 16.4803 23.7071 16.2927C23.5196 16.1052 23.2652 15.9999 23 15.9999Z" fill="#3B5BA9" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1390_901">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : null}
              {el.title}
            </Item>
          ))}
        </Content>
      </Container>
    </Wrapper>
  )
}

export const query = graphql`
  fragment threeColumnsFiles on WpPage_PageBuilder_Sections_ThreeColumnsFiles {
    threeColumnsFiles {
      item {
        title
        link {
          url
        }
        file {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: clamp(24px, ${32 / 768 * 100}vw, 32px);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`

const Item = styled(Link)`
  box-shadow: var(--shadow);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  font-weight: 600 !important;

  svg{
    margin-right: 8px;
    width: 24px;
    height: 24px;
    flex: 24px 0 0;
  }

  #arrow{
    transition: all .3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  &:hover{
    #arrow{
      transform: translateY(2px);
    }
  }
`