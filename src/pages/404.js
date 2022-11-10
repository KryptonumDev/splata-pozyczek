import * as React from "react"
import { Helmet } from "react-helmet"
import HeroImg from "../components/sections/hero-img"
import Error from './../images/404.png'

const data = {
  'pageTitle': 'Przepraszamy, ale wyszukiwana przez Ciebie strona <span style="color: #3b5ba9;">nie istnieje</span>.',
  'buttons': [{ link: { url: '/', title: 'Powrót na stronę główną', target: '' } }],
  'image': Error
}

const NotFoundPage = () => {
  return (
    <main >
      <Helmet>
        <title>Strona nie istnieje - Splatapozyczek.pl</title>
      </Helmet>
      <HeroImg data={data} uri={'404'} title={"404"} />
    </main>
  )
}

export default NotFoundPage
