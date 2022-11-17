import React from 'react'
import Layout from './src/components/layout'
import './src/styles/normalize.css'
import './src/styles/fonts.css'

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
        {element}
    </Layout>
)
