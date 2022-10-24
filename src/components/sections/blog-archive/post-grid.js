import React from "react"
import styled from "styled-components"
import Card from "../../atoms/blog-card"

export default function PostGrid({ allPosts, page }) {
    return (
        <Wrapper>
            <p className="h6 arsenal title">Najnowsze <span className="blue">artykuły</span></p>
            <Grid>
                {allPosts.map((el, index) => {
                    if (el.blogPost.previewText) { // dont show bugged post
                        if ((index >= (11 * (page - 1) + (page - 1))) && index <= (11 * page) + (page - 1)) {
                            return <Card el={el} allowLink={true} />
                        }
                    }
                    return null
                })}
            </Grid>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: var(--section);

    .title{
        margin-bottom: 32px;
    }

    @media (max-width: 1024px){
        max-width: 485px;
        padding: 0 clamp(16px,3.125vw,80px);
        box-sizing: content-box;
    }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  width: fit-content;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`