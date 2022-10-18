import React from 'react'
import Layout from './src/components/layout'
import './src/styles/index.css'

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
        {element}
    </Layout>
)

export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "pl" })
}