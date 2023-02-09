import { graphql } from "gatsby"
import React from "react"
import HeroExpert from "../components/sections/hero-expert"
import Reviews from "../components/sections/reviews"
import { Helmet } from "react-helmet"

import Logo from './../../static/logo.svg'
import OG from './../../static/og.jpg'

export function Head({ pageContext, data: { wpEkspert: { seo } } }) {

  const canonical = 'https://splatapozyczek.pl' + pageContext.url

  return (
    <>
      <meta charSet='utf-8' />
      <meta
        name='robots'
        content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      />
      <meta property='og:site_name' content={seo.opengraphSiteName} />
      <meta
        name='google-site-verification'
        content='M2kghTKPmXOB2ezGLw7ShbO3sdW6rMn_uhsSVbHCt7I'
      />
      <link
        rel='sitemap'
        type='application/xml'
        title='Sitemap'
        href='/sitemap_index.xml'></link>

      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://splatapozyczek.pl/#organization',
              name: 'Splatapozyczek.pl',
              url: 'https://splatapozyczek.pl/',
              sameAs: [
                'https://www.facebook.com/splatapozyczek',
                'https://www.instagram.com/splatapozyczek.pl/',
                'https://www.youtube.com/channel/UCdpboPGWbJy_e8Je_Xw9i9Q'
              ],
              logo: {
                '@type': 'ImageObject',
                '@id': 'https://splatapozyczek.pl/#logo',
                inLanguage: 'pl-PL',
                url: Logo,
                width: 181,
                height: 43,
                caption: 'Splatapozyczek.pl'
              },
              image: { '@id': 'https://splatapozyczek.pl/#logo' }
            },
            {
              '@type': 'WebSite',
              '@id': 'https://splatapozyczek.pl/#website',
              url: 'https://splatapozyczek.pl/',
              name: 'Splatapozyczek.pl',
              description:
                'SplataPozyczek.pl \u2013 \u2705 kredyty got\u00f3wkowe, kredyt dla firm, po\u017cyczka konsolidacyjna, odd\u0142u\u017canie.',
              publisher: { '@id': 'https://splatapozyczek.pl/#organization' },
              inLanguage: 'pl-PL'
            },
            {
              '@type': 'WebPage',
              '@id': 'https://splatapozyczek.pl/#webpage',
              url: 'https://splatapozyczek.pl/',
              name: 'Z nami uzyskasz nawet najtrudniejszy kredyt - Splatapozyczek.pl',
              isPartOf: { '@id': 'https://splatapozyczek.pl/#website' },
              about: { '@id': 'https://splatapozyczek.pl/#organization' },
              datePublished: '2015-11-18T08:37:53+00:00',
              dateModified: '2022-07-20T09:58:31+00:00',
              description:
                'Niestandardowa umowa pracownicza? Brak zdolno\u015bci kredytowej? Inne zobowi\u0105zania? Mo\u017cemy uzyska\u0107 kredyt dla Ciebie nawet w 24 H.',
              inLanguage: 'pl-PL',
              potentialAction: [
                {
                  '@type': 'ReadAction',
                  target: ['https://splatapozyczek.pl/']
                }
              ]
            }
          ]
        })}
      </script>

      {canonical ? (
        <>
          <meta property='og:url' content={canonical} />
        </>
      ) : null}

      {seo?.title ? (
        <>
          <meta property='twitter:title' content={seo.title} />
          <meta property='og:title' content={seo.title} />
        </>
      ) : null}

      {seo?.metaDesc ? (
        <>
          <meta name='description' content={seo.metaDesc} />
          <meta property='twitter:description' content={seo.metaDesc} />
          <meta property='og:description' content={seo.metaDesc} />
        </>
      ) : null}

      {seo.opengraphImage?.localFile?.publicURL ? (
        <>
          <meta
            property='og:image'
            content={
              'https://splatapozyczek.pl' +
              seo.opengraphImage.localFile.publicURL
            }
          />
          <meta
            property='twitter:image'
            content={
              'https://splatapozyczek.pl' +
              seo.opengraphImage.localFile.publicURL
            }
          />
        </>
      ) : (
        <>
          <meta
            property='og:image'
            content={'https://splatapozyczek.pl' + OG}
          />
          <meta
            property='twitter:image'
            content={'https://splatapozyczek.pl' + OG}
          />
        </>
      )}
    </>
  )
}

export default function Expert({ data, pageContext }) {

  return (
    <main>
      <Helmet>
        <title id='title'>{data.wpEkspert.seo.title}</title>
        <link rel="canonical" href={'https://splatapozyczek.pl' + pageContext.url} />
      </Helmet>
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
              socialMedia{
                ikona{
                  altText
                  localFile{
                    publicURL
                  }
                }
                linkDoSocialMedia
                nazwaSocialMedia
              }
              workWithProducts
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