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
            href="/fonts/sans.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="sans"
        />,
    ])
}