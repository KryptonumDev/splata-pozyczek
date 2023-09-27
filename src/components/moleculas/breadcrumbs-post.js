import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet";
import styled from "styled-components"

export default function BreadcrumbsPost({ title, uri }) {

    const items = [{
        "@type": "ListItem",
        "position": 1,
        "name": "Spłata Pożyczek",
        "item": 'https://splatapozyczek.pl/'
    }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Zespół",
        "item": 'https://splatapozyczek.pl/blog/'
    }, {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": 'https://splatapozyczek.pl' + uri
    }]

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items
    };

    return (
        <Wrapper>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Helmet>
            <Link className="body1" to='/'>Spłata Pożyczek</Link>
            <span className="body1 divider">/</span>
            <Link className="body1" to='/blog/'>Blog</Link>
            <span className="body1 divider">/</span>
            <span className="body1">{title.split(' ').slice(0, 3).join(' ') }</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;

    .divider{
        display: block;
        margin: 0 4px;
        color: #6F6F71;
    }
    a{
        color: #6F6F71;
        text-decoration: none;
    }


    @media (max-width: 480px) {
        .body1{
            font-size: 16px;
        }
    }

    @media (max-width: 350px) {
        .body1{
            font-size: 12px;
        }
    }
    
`