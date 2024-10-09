import React from 'react'
import Layout from './src/components/layout'
import './src/styles/normalize.css'
import './src/styles/fonts.css'
import { saveCampaignIntoSession } from './src/helpers/campaigns';

export const onRouteUpdate = ({ location }) => {
  saveCampaignIntoSession({ debug: true, reset: false });
};


export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
        {element}
    </Layout>
)
