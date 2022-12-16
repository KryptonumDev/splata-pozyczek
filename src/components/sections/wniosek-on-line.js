import React from "react"
import styled from "styled-components"
import { textParser } from "../../helpers/wysiwyg-modification"
import { Container } from "../atoms/container"
import Breadcrumbs from "../moleculas/breadcrumbs"
import ContactForm from "./contact-form"

export default function WniosekOnline({ uri, title: breadcrumb, form, hero: { title, text, plainText, subTitle, list } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="title-grid">
                        <Breadcrumbs uri={uri} title={breadcrumb} />
                        <h1 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    </div>
                    <div className="text-grid">
                        <div className="h6 text arsenal" dangerouslySetInnerHTML={{ __html: text }} />
                        <div className="body1 text" dangerouslySetInnerHTML={{ __html: plainText }} />
                    </div>
                    <div className="list-grid">
                        <p className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(subTitle) }} />
                        <div className="grid">
                            {list.map((el, index) => (
                                <Item key={el.text} >
                                    <span className="body1">{index + 1}</span>
                                    <div className="body1" dangerouslySetInnerHTML={{ __html: el.text }} />
                                </Item>
                            ))}
                        </div>
                    </div>
                    <div className="form-grid" >
                        <ContactForm data={form} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .grid{
        margin-top: 12px;
        display: grid;
        grid-gap: 16px;
    }


    .h4{
        margin-top: 8px;
        margin-bottom: 12px;
        font-size: clamp(28px, 4.296875vw, 38px);
    }

    .text{
        p{
            color: #6F6F71;
        }
    }

    .body1{
        display: grid;
        grid-gap: 8px;
    }

    .link{
        margin-top: 24px;
    }

`

const Item = styled.div`
    display: grid;
    grid-template-columns: 32px auto;
    grid-gap: 16px;
    div{
        padding-top: 5px;
        p{
            color: #6F6F71;
        }
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #00225A;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #DAE2FF;
    }
`

const Content = styled.div`
  display: grid;
  grid-gap: 0 32px;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  margin: 0 auto;
  grid-template-areas: 
  'title list'
  'text list'
  'form form';

  .form-grid{
    grid-area: form;
  }
  .list-grid{
    grid-area: list;
  }
  .text-grid{
    grid-area: text;
  }
  .title-grid{
    grid-area: title;
  }

  @media (max-width: 1024px) {
    grid-template-areas:
    'title title'
    'text list'
    'form form';

    .h4{
        font-size: clamp(28px, 7.03vw, 54px);
    }

    .form-grid{
        margin-top: -16px;
        .form-container{
            padding: 0;
        }
    }
  }

  @media (max-width: 740px) {
    grid-template-areas:
    'title title'
    'text text'
    'form form'
    'list list';

    .list-grid{
        margin-top: 24px;
    }
  }


`
