import React from 'react'
import Layout from './src/components/layout'
import './src/styles/index.css'
// import "@fontsource/arsenal" 
// import "@fontsource/source-sans-pro"

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Arsenal:wght@400;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet"/>
        {element}
    </Layout>
)