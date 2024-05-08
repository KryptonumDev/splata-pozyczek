import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../../atoms/container";
import All from "./all-columns";
// import Five from "./five-column"
// import Four from "./four-column"
// import One from "./one.column"
// import Three from "./three-column"
// import Two from "./two-column"

export default function Footer() {
  const {
    wpPage: {
      footer: { columns, contact, copyright, informPart },
    },
  } = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDozNzU=" }) {
        footer {
          informPart {
            text
            socialMedia {
              link
              icon {
                altText
                localFile {
                  publicURL
                }
              }
            }
          }
          copyright
          contact {
            title
            text
            buttons {
              url
              name
            }
          }
          columns {
            pierwszaGornaKolumna {
              tytul
              linki {
                link {
                  url
                  title
                  target
                }
              }
            }
            trzeciaKolumna {
              tytul
              linki {
                link {
                  url
                  title
                  target
                }
              }
            }
            pierwszaDolnaKolumna {
              tytul
              linki {
                link {
                  url
                  title
                  target
                }
              }
            }
            drugaGornaKolumna {
              tytul
              linki {
                link {
                  url
                  title
                  target
                }
              }
            }
            drugaDolnaKolumna {
              tytul
              linki {
                link {
                  url
                  title
                  target
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Container>
        <div className="all">
          <All
            columns={columns}
            contact={contact}
            copyright={copyright}
            informPart={informPart}
          />
        </div>
        <div
          className="copyright body3"
          dangerouslySetInnerHTML={{ __html: copyright }}
        />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-top: var(--section);
  background: #f2f4ff;
  padding: 48px 0;

  .all {
    grid-gap: 32px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "desc"
      "contact"
      "links";

    @media (min-width: 480px) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "desc contact"
        "links links";
    }
    @media (min-width: 768px) {
      grid-template-columns: min-content 1fr;
      grid-template-areas:
        "desc links"
        "contact links";
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-areas: "desc links contact";
    }
  }

  .inform {
    grid-area: desc;
    display: grid;
    gap: 32px;
    height: min-content;
  }

  .socials {
    display: inline-grid;
    gap: 18px;
    align-items: center;
    justify-content: flex-start;
    grid-auto-flow: column;
    a {
      height: auto;
      width: 24px;
      aspect-ratio: 1/1;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .links {
    display: grid;
    gap: 1rem;
    grid-area: links;
    height: min-content;
    @media (min-width: 400px) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }

    .links-column {
      display: grid;
      gap: inherit;
    }
  }

  .sub {
    display: grid;
    grid-gap: 6px;

    .title {
      margin-bottom: 10px;
      display: block;
      color: #050505;
      font-weight: 600;
    }

    a {
      text-decoration: none;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.25;
      font-feature-settings: "pnum" on, "onum" on;
      color: #6f6f71;
    }
  }

  .contact {
    grid-area: contact;
    display: grid;
    align-content: space-between;
    gap: 12px;
    padding: 16px 10%;
    background: #3b5ba9;
    box-shadow: var(--shadow);
    border-radius: 8px;
    min-width: 250px;
    max-width: fit-content;

    p,
    span {
      color: #f2f4ff;
    }

    a {
      color: #ffd662;
    }

    .body2 {
      display: block;
    }

    .body3 {
      display: grid;
      grid-gap: 12px;
      color: #f2f4ff;
    }

    .buttons {
      display: grid;
      gap: 12px;
      & > a {
        width: 100%;
        padding-inline: 1rem;
        height: min-content;
      }
    }
    .outlined {
      border-color: #fef5f5;
      color: #fef5f5;
      &:hover {
        background-color: #fef5f5;
        color: #000000;
      }
    }
  }

  .copyright {
    margin-top: 16px;
    a {
      color: #6f6f71;
      font-weight: 600;
      text-decoration: none;
    }
  }
`;
