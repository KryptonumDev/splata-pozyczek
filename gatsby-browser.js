import React from 'react'
import Layout from './src/components/layout'
import './src/styles/index.css'
// import "@fontsource/arsenal" 
// import "@fontsource/source-sans-pro"

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
     {element}
    </Layout>
)