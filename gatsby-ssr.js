import React from 'react'
import Layout from './src/components/layout'
import './src/styles/normalize.css'
import './src/styles/fonts.css'

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
        {element}
    </Layout>
)

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "pl" })
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/Arsenal-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Arsenal-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/SourceSansPro-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/SourceSansPro-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="interFont"
        />,
    ])
}