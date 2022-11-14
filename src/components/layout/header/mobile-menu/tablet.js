import React from "react"
import { Link } from "gatsby"

export default function Tablet({ data }) {
    return (
        <ul id='tablet'>
            {data.map((el) => (
                <li key={el.url.url} className="top-level">
                    <Link className="first-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
                    {el.megaMeni
                        ? (
                            <ul className="second-level">
                                {el.megaMeni.map(el => (
                                    <li key={el.url.url}>
                                        <Link className="second-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
                                        {el.megaMeni
                                            ? (
                                                <ul className="third-level">
                                                    {el.megaMeni.map(el => (
                                                        <li key={el.url.url}>
                                                            <Link className="third-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : null}
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                </li>
            ))}
        </ul>
    )
}