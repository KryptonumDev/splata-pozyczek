import { graphql } from "gatsby"
import React from "react"

export default function Page({ data }) {
    return (
        <main>
            {data.allWpPage.nodes[0].blocks.block.map(el => (
                <div>
                    {el.switch}
                </div>
            ))}
        </main>
    )
}

export const query = graphql`
    query page($id: String!) {
        allWpPage(filter: {id: {eq: $id}}){
            nodes{
                id
                blocks {
                    blocks {
                    switch
                    text {
                        text
                    }
                    cta {
                        text
                        button {
                        text
                        url
                        }
                    }
                    }
                }
            }
        }
    }
`