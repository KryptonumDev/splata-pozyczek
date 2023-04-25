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
            href="/fonts/arsenal-bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="Arsenal-Bold"
        />,
        <link
            rel="preload"
            href="/fonts/arsenal-bold-polish.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="Arsenal-Bold-Polish"
        />,
        <link
            rel="preload"
            href="/fonts/source-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="Source-Regular"
        />,
        <link
            rel="preload"
            href="/fonts/source-regular-polish.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="Source-Regular-Polish"
        />,
    ])
}