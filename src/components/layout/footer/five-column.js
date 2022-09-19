

import React from "react"
import { textParser } from "../../../helpers/wysiwyg-modification"
import { FilledButton, OutlinedButton } from "../../atoms/buttons"
import Logo from './../../../images/logo'
import { Link } from "gatsby"

export default function Five({ columns, contact, copyright, informPart }) {
    return (
        <>
            <div className="inform">
                <div>
                    <Logo />
                    <div className="body2" dangerouslySetInnerHTML={{ __html: textParser(informPart.text) }} />
                    <div className="socials">
                        {informPart.socialMedia.map(el => (
                            <a><img src={el.icon.localFile.publicURL} alt={el.icon.altText} /></a>
                        ))}
                    </div>
                </div>
                <div className="copyright body3" dangerouslySetInnerHTML={{ __html: copyright }} />
            </div>
            <div>
                <div className="sub">
                    <span className="title body2">{columns.pierwszaGornaKolumna.tytul}</span>
                    {columns.pierwszaGornaKolumna.linki.map(el => (
                        <Link to={el.url} className="body3">{el.text}</Link>
                    ))}
                </div>
                <div className="sub second">
                    <span className="title body2">{columns.pierwszaDolnaKolumna.tytul}</span>
                    {columns.pierwszaDolnaKolumna.linki.map(el => (
                        <Link to={el.url} className="body3">{el.text}</Link>
                    ))}
                </div>
            </div>
            <div>
                <div className="sub">
                    <span className="title body2">{columns.drugaGornaKolumna.tytul}</span>
                    {columns.drugaGornaKolumna.linki.map(el => (
                        <Link to={el.url} className="body3">{el.text}</Link>
                    ))}
                </div>
                <div className="sub second">
                    <span className="title body2">{columns.drugaDolnaKolumna.tytul}</span>
                    {columns.drugaDolnaKolumna.linki.map(el => (
                        <Link to={el.url} className="body3">{el.text}</Link>
                    ))}
                </div>
            </div>
            <div className="sub">
                <span className="title body2">{columns.trzeciaKolumna.tytul}</span>
                {columns.trzeciaKolumna.linki.map(el => (
                    <Link to={el.url} className="body3">{el.text}</Link>
                ))}
            </div>
            <div className="contact">
                <span className="body2">{contact.title}</span>
                <div className="body3" dangerouslySetInnerHTML={{ __html: textParser(contact.text) }} />
                {contact.buttons.map((el, index) => {
                    if (index === 0) {
                        return <FilledButton key={el.name} to={el.url}>{el.name}</FilledButton>
                    }
                    return <OutlinedButton className="outlined" key={el.name} to={el.url}>{el.name}</OutlinedButton>
                })}
            </div>
        </>
    )
}