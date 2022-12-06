import React from "react"
import { Link } from "gatsby"

export default function Mobile({ setMobileMenuOpened, data }) {
    return (
        <ul id='mobile'>
            {data.map((el) => (
                <li key={el.url.url} className="top-level">
                    {el.megaMeni
                        ? (
                            <details className="first">
                                <summary className="first-item h5 arsenal">
                                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.0029 9.66663C17.8274 9.66764 17.6534 9.63401 17.491 9.56766C17.3285 9.5013 17.1808 9.40354 17.0562 9.27996L10.9495 3.15998C10.8256 3.035 10.6781 2.93581 10.5156 2.86812C10.3531 2.80043 10.1789 2.76558 10.0029 2.76558C9.82684 2.76558 9.65256 2.80043 9.49008 2.86812C9.3276 2.93581 9.18014 3.035 9.05618 3.15998L2.94952 9.27996C2.69845 9.53103 2.35792 9.67208 2.00285 9.67208C1.64778 9.67208 1.30726 9.53103 1.05618 9.27996C0.805113 9.02889 0.664063 8.68837 0.664062 8.3333C0.664062 8.15749 0.698692 7.9834 0.765972 7.82097C0.833253 7.65854 0.931867 7.51095 1.05618 7.38663L7.17619 1.27998C7.93611 0.549892 8.94904 0.142151 10.0029 0.142151C11.0567 0.142151 12.0696 0.549892 12.8295 1.27998L18.9495 7.38663C19.0745 7.51058 19.1737 7.65805 19.2414 7.82053C19.3091 7.98301 19.3439 8.15728 19.3439 8.3333C19.3439 8.50931 19.3091 8.68359 19.2414 8.84607C19.1737 9.00854 19.0745 9.15601 18.9495 9.27996C18.8249 9.40354 18.6772 9.5013 18.5147 9.56766C18.3523 9.63401 18.1783 9.66764 18.0029 9.66663Z" fill="#F2F4FF" />
                                    </svg>
                                    {el.url.title}
                                </summary>
                                <ul className="second-level">
                                    <li>
                                        <Link onClick={() => { setMobileMenuOpened(false) }} className="second-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
                                    </li>
                                    {el.megaMeni.map((el) => (
                                        <li key={el.url.url}>
                                            {el.megaMeni
                                                ? (
                                                    <details className="second">
                                                        <summary className="second-item h5 arsenal">
                                                            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M18.0029 9.66663C17.8274 9.66764 17.6534 9.63401 17.491 9.56766C17.3285 9.5013 17.1808 9.40354 17.0562 9.27996L10.9495 3.15998C10.8256 3.035 10.6781 2.93581 10.5156 2.86812C10.3531 2.80043 10.1789 2.76558 10.0029 2.76558C9.82684 2.76558 9.65256 2.80043 9.49008 2.86812C9.3276 2.93581 9.18014 3.035 9.05618 3.15998L2.94952 9.27996C2.69845 9.53103 2.35792 9.67208 2.00285 9.67208C1.64778 9.67208 1.30726 9.53103 1.05618 9.27996C0.805113 9.02889 0.664063 8.68837 0.664062 8.3333C0.664062 8.15749 0.698692 7.9834 0.765972 7.82097C0.833253 7.65854 0.931867 7.51095 1.05618 7.38663L7.17619 1.27998C7.93611 0.549892 8.94904 0.142151 10.0029 0.142151C11.0567 0.142151 12.0696 0.549892 12.8295 1.27998L18.9495 7.38663C19.0745 7.51058 19.1737 7.65805 19.2414 7.82053C19.3091 7.98301 19.3439 8.15728 19.3439 8.3333C19.3439 8.50931 19.3091 8.68359 19.2414 8.84607C19.1737 9.00854 19.0745 9.15601 18.9495 9.27996C18.8249 9.40354 18.6772 9.5013 18.5147 9.56766C18.3523 9.63401 18.1783 9.66764 18.0029 9.66663Z" fill="#F2F4FF" />
                                                            </svg>
                                                            {el.url.title}
                                                        </summary>
                                                        <ul className="third-level">
                                                            <li>
                                                                <Link onClick={() => { setMobileMenuOpened(false) }} className="third-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
                                                            </li>
                                                            {el.megaMeni.map(el => (
                                                                <li key={el.url.url}>
                                                                    <Link onClick={() => { setMobileMenuOpened(false) }} className="third-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </details>
                                                ) : (
                                                    <Link onClick={() => { setMobileMenuOpened(false) }} className="second-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
                                                )}
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ) : (
                            <Link onClick={() => { setMobileMenuOpened(false) }} className="first-item h5 arsenal" to={el.url.url} target={el.url.target}>{el.url.title}</Link>
                        )}
                </li>
            ))}
        </ul>
    )
}