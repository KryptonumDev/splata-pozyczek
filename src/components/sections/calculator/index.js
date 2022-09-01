import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { FilledButton } from "../../atoms/buttons"

export default function Calculator({ data }) {

    const [money, setMoney] = useState(10)
    const [time, setTime] = useState(1)
    const [percent, setPercent] = useState(599)
    const [provision, setProvision] = useState(3)

    const [calculatedSum, setCalculatedSum] = useState(0)

    useEffect(() => {
        let sum = (money * 100) * (percent / 100 / 12) * provision // change alghorytm
        setCalculatedSum(sum.toFixed(2))
    }, [money, time, percent, provision])


    return (
        <Wrapper>
            <Container className="small">
                <Content>
                    <Options>
                        <div>
                            <p className="h6">Ile pieniędzy potrzebujesz?</p>
                            <input className="input" placeholder="val" value={money * 100 + ' zł'} />
                            <input className="range" onChange={(e) => { setMoney(e.currentTarget.value) }} min='10' value={money} max='2550' type="range" />
                        </div>
                        <div>
                            <p className="h6">W jakim czasie chcesz spłacić kredyt?</p>
                            <input className="input" placeholder="val" value={time + ' miesiąc'} />
                            <input className="range" onChange={(e) => { setTime(e.currentTarget.value) }} min='1' value={time} max='144' type="range" />
                        </div>
                        <div>
                            <p className="h6">Oprocentowanie nominalne w skali roku: 5,99–20.0%</p>
                            <input className="input" placeholder="val" value={percent / 100 + ' %'} />
                            <input className="range" onChange={(e) => { setPercent(e.currentTarget.value) }} min='599' value={percent} max='2000' type="range" />
                        </div>
                        <div>
                            <p className="h6">Prowizja: 3–11%</p>
                            <input className="input" placeholder="val" value={provision + ' %'} />
                            <input className="range" onChange={(e) => { setProvision(e.currentTarget.value) }} min='3' value={provision} max='11' type="range" />
                        </div>
                    </Options>
                    <Review>
                        <div>
                            <p className="body1">Całkowita kwota do zapłaty</p>
                            <span className="h5">{(calculatedSum * 1).toFixed(2)} zł</span>
                        </div>
                        <div>
                            <p className="body1">Całkowity koszt kredytu</p>
                            <span className="h5">{(calculatedSum - (money * 100)).toFixed(2)} zł</span>
                        </div>
                        <div>
                            <p className="body1">Rata miesięczna</p>
                            <span className="h5">{(calculatedSum / time).toFixed(2)} zł</span>
                        </div>
                        <FilledButton>Skontaktuj się z nami</FilledButton>
                        <p>Powyższe wyliczenia oraz parametry mogą się różnić od ostatecznej decyzji banku,
                            tym samym nie stanowią oferty w rozumieniu ustawy z dnia 23 kwietnia 1964 r. –
                            Kodeks cywilny (Dz. U. z 1964 r., Nr 16, poz. 93, z późniejszymi zmianami).</p>
                    </Review>
                </Content>
            </Container>
        </Wrapper>
    )
}

// export const query = graphql`
//   fragment blok on WpPage {
//     homepage{
//         id
//     }
//   }
// `

const Wrapper = styled.section`
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
`

const Options = styled.div`
    div{
        display: grid;
        text-align: center;
    }

    .input{
        max-width: 154px;
        padding: 10px;
        text-align: center;
        border: 1px solid #B2B2B8;
        margin: 8px auto;
    }
`

const Review = styled.div`
    border-radius: 8px;
    background: #F2F4FF;
    box-shadow: var(--shadow);
    padding: 41px 64px;
    box-sizing: border-box;
    height: fit-content;

    .body1{
        font-weight: 600;
        color: #75757A;
    }

    span{
        margin-bottom: 24px;
    }
`