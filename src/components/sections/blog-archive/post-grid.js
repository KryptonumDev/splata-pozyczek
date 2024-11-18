import React from "react";
import styled from "styled-components";
import Card from "../../atoms/blog-card";
import { Container } from "../../atoms/container";

export default function PostGrid({ activeFilter, allPosts, page, categories }) {
  return (
    <Wrapper>
      <Container>
        {activeFilter ? (
          <h1 className="h6 arsenal title">
            Wybrana kategoria:{" "}
            <span className="blue">
              {categories.filter((el) => el.slug === activeFilter)[0].name}
            </span>
          </h1>
        ) : (
          <p className="h6 arsenal title">
            Najnowsze <span className="blue">artykuły</span>
          </p>
        )}
        <Grid>
          {allPosts.map((el, index) => {
            if (el.blogPost.previewText) {
              //   true
              if (
                index >= 11 * (page - 1) + (page - 1) &&
                index <= 11 * page + (page - 1)
              ) {
                return <Card key={index} el={el} allowLink={true} />; //  <div>{index} - {el.slug}</div>
              }
            }
            return null;
          })}
        </Grid>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: var(--section-spacing);

  .title {
    margin-bottom: 32px;
  }

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  width: fit-content;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
