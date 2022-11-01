import { graphql } from "gatsby"
import React from "react"
import HeroExpert from "../components/sections/hero-expert"
import Reviews from "../components/sections/reviews"

export function Head({ data: { wpEkspert: { seo } } }) {

  const canonical = 'https://splatapozyczek.pl' + seo.canonical

  return <>
    <meta charSet="utf-8" />
    <meta name="robots" content="noindex" />
    <meta property="og:site_name" content={seo.opengraphSiteName} />
    <meta name="google-site-verification" content="M2kghTKPmXOB2ezGLw7ShbO3sdW6rMn_uhsSVbHCt7I" />

    {canonical
      ? (
        <>
          <link rel="canonical" href={canonical} />
          <meta property="og:url" content={canonical} />
        </>
      )
      : null}

    {seo?.title
      ? (
        <>
          <title>{seo.title}</title>
          <meta property="twitter:title" content={seo.title} />
          <meta property="og:title" content={seo.title} />
        </>
      )
      : null}

    {seo?.metaDesc
      ? (
        <>
          <meta name="description" content={seo.metaDesc} />
          <meta property="twitter:description" content={seo.metaDesc} />
          <meta property="og:description" content={seo.metaDesc} />
        </>
      )
      : null}

    {seo.opengraphImage?.localFile?.publicURL
      ? (
        <>
          <meta property="og:image" content={'https://splatapozyczek.pl' + seo.opengraphImage.localFile.publicURL} />
          <meta property="twitter:image" content={'https://splatapozyczek.pl' + seo.opengraphImage.localFile.publicURL} />
        </>
      )
      : null}

  </>
}

export default function Expert({ data, pageContext }) {
    return (
        <main>
            <HeroExpert data={data} pageContext={pageContext} />
            {data.wpEkspert.comments.nodes.length > 0
                ? <Reviews expert={true} comments={data.wpEkspert.comments.nodes} data={{ title: 'Sprawdź opinię na temat <span style="color: #3b5ba9;">współpracy</span>.' }} />
                : null}
        </main>
    )
}

export const query = graphql`
    query expert($id: String!) {
        wpEkspert(id: {eq: $id}){
            id
            title
            seo {
              canonical
              metaDesc
              opengraphSiteName
              title
              opengraphImage {
                localFile {
                  publicURL
                }
              }
            }
            comments {
              nodes {
                id
                  author {
                    node {
                      name
                    }
                  }
                  content
              }
            }
            ekspert {
              facebook
              workWithProducts
              twitter
              pinterest
              role
              numerTelefonu
              emailAdres
              addInform {
                title
                text
                subTitle
                subText
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              imageSmall {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
        }
    }
`