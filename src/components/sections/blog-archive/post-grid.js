import React from "react"
import styled from "styled-components"
import Card from "../../atoms/blog-card"

export default function PostGrid({ activeFilter, allPosts, page }) {
    return (
        <Wrapper>
            {activeFilter
                ? <p className="h6 arsenal title">Wybrana kategoria: <span className="blue">{activeFilter}</span></p>
                : <p className="h6 arsenal title">Najnowsze <span className="blue">artykuły</span></p>}
            <Grid>
                {allPosts.map((el, index) => {
                    if (el.blogPost.previewText) {  //   true
                        if ((index >= (11 * (page - 1) + (page - 1))) && index <= (11 * page) + (page - 1)) {
                            return <Card key={index} el={el} allowLink={true} /> //  <div>{index} - {el.slug}</div>
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
    margin-top: clamp(24px, ${32 / 768 * 100}vw, 48px);

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