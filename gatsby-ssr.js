import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from './src/components/layout'
import './src/styles/normalize.css'

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
        <Helmet>
            <link rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin />

            <link rel="preload"
                as="style"
                href="https://fonts.googleapis.com/css2?family=Arsenal:wght@400;700&display=swap" />

            <link rel="preload"
                as="style"
                href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" />

            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Arsenal:wght@400;700&display=swap"
                media="print" onload="this.media='all'" />

            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
                media="print" onload="this.media='all'" />
        </Helmet>
        {element}
    </Layout>
)

export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "pl" })
}