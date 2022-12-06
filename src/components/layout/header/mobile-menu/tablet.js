import React from "react"
import { Link } from "gatsby"

export default function Tablet({ setMobileMenuOpened, data }) {
    return (
        <ul id='tablet'>
            {data.map((el) => (
                <li key={el.url.url} className="top-level">
                    <Link onClick={() => { setMobileMenuOpened(false) }} className="first-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
                    {el.megaMeni
                        ? (
                            <ul className="second-level">
                                {el.megaMeni.map(el => (
                                    <li key={el.url.url}>
                                        <Link onClick={() => { setMobileMenuOpened(false) }} className="second-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
                                        {el.megaMeni
                                            ? (
                                                <ul className="third-level">
                                                    {el.megaMeni.map(el => (
                                                        <li key={el.url.url}>
                                                            <Link onClick={() => { setMobileMenuOpened(false) }} className="third-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
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