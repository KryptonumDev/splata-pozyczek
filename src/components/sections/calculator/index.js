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
    const [creditPrice, setCreditPrice] = useState(0)
    const [monthRate, setMonthRate] = useState(0)

    useEffect(() => {
        var j = (percent / 100) / 12 / 100; // interest rate
        var n = time // months
        var p = money * 100 // loan amount
        var rr = provision / 100;
        var prow = p * rr;

        let pricePerMonth = (p + prow) * j * (Math.pow(1 + j, n) / (Math.pow(1 + j, n) - 1))

        setCalculatedSum(pricePerMonth * n)
    }, [money, time, percent, provision])

    useEffect(() => {
        setMonthRate((calculatedSum / time).toFixed(2))
        setCreditPrice((calculatedSum - (money * 100)).toFixed(2))
    }, [calculatedSum])


    return (
        <Wrapper>
            <Container className="small">
                <h2 className="h4">Skorzystaj z naszego kalkulatora.</h2>
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
                        <div className="text">
                            <div>
                                <p className="body1">Całkowita kwota do zapłaty</p>
                                <span className="h5">{(calculatedSum * 1).toFixed(2)} zł</span>
                            </div>
                            <div>
                                <p className="body1">Całkowity koszt kredytu</p>
                                <span className="h5">{creditPrice} zł</span>
                            </div>
                            <div>
                                <p className="body1">Rata miesięczna</p>
                                <span className="h5">{monthRate} zł</span>
                            </div>
                            <FilledButton className="filled">Skontaktuj się z nami</FilledButton>
                        </div>
                        <p className="anotation body3">Powyższe wyliczenia oraz parametry mogą się różnić od ostatecznej decyzji banku,
                            tym samym nie stanowią oferty w rozumieniu ustawy z dnia 23 kwietnia 1964 r. –
                            Kodeks cywilny (Dz. U. z 1964 r., Nr 16, poz. 93, z późniejszymi zmianami).</p>
                    </Review>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment calculator on WpPage_Blocks_pageBuilder {
    calculator {
        fieldGroupName
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .h4{
        text-align: center;
        margin-bottom: 32px;
        font-size: clamp(28px, 4.296875vw, 38px);
    }

    .small{
        max-width: 1000px;
    }

    input[type=range] {
    height: 26px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    background: transparent;
    }
    input[type=range]:focus {
    outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: linear-gradient(315deg, #FFECB6 0%, #F2E7DA 99.99%, #F2EEDA 100%);
    border-radius: 4px;
    border: 0px solid #000000;
    }
    input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: linear-gradient(315deg, #B98901 0%, #E6BC7E 99.99%);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
    background: linear-gradient(315deg, #FFECB6 0%, #F2E7DA 99.99%, #F2EEDA 100%);
    }
    input[type=range]::-moz-range-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: transparent;
    border-radius: 4px;
    border: 0px solid #000000;
    }
    input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: linear-gradient(315deg, #B98901 0%, #E6BC7E 99.99%);
    cursor: pointer;
    }
    input[type=range]::-ms-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
    }
    input[type=range]::-ms-fill-lower {
    background: linear-gradient(315deg, #FFECB6 0%, #F2E7DA 99.99%, #F2EEDA 100%);
    border: 0px solid #000000;
    border-radius: 8px;
    box-shadow: 0px 0px 0px #000000;
    }
    input[type=range]::-ms-fill-upper {
    background: linear-gradient(315deg, #FFECB6 0%, #F2E7DA 99.99%, #F2EEDA 100%);
    border: 0px solid #000000;
    border-radius: 8px;
    box-shadow: 0px 0px 0px #000000;
    }
    input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: linear-gradient(315deg, #B98901 0%, #E6BC7E 99.99%);
    cursor: pointer;
    }
    input[type=range]:focus::-ms-fill-lower {
    background: linear-gradient(315deg, #FFECB6 0%, #F2E7DA 99.99%, #F2EEDA 100%);
    }
    input[type=range]:focus::-ms-fill-upper {
    background: linear-gradient(315deg, #FFECB6 0%, #F2E7DA 99.99%, #F2EEDA 100%);
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

@media (max-width: 768px) {
    grid-template-columns: 1fr 250px;
}

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
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
        background-color: transparent;

        
        font-family: 'Arsenal';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 136%;
        letter-spacing: 0.02em;
        color: #050505;
    }
`

const Review = styled.div`
    border-radius: 8px;
    background: #F2F4FF;
    box-shadow: var(--shadow);
    padding: 41px 64px;
    box-sizing: border-box;
    height: fit-content;

    @media (max-width: 1024px) {
        padding: clamp(12px, ${16 / 768 * 100}vw, 41px) clamp(12px, ${16 / 768 * 100}vw, 64px);
    }

    .text{
        max-width: 260px;
        text-align: right;

        div{
            margin-top: clamp(8px, ${16 / 768 * 100}vw, 24px);

            &:first-child{
                margin-top: 0;
            }
        }

        .filled{
            width: 100%;
            padding: 12px;
            text-align: center;
        }

        @media (max-width: 640px){
            margin-left: auto;
            max-width: unset;
            .filled{
                padding: 12px 44px;
                width: fit-content;
                margin-left: auto;
            }
        }

        @media (max-width: 480px) {
            .filled{
                width: 100%;
                padding: 12px;
                text-align: center;
            }
        }
    }

    .filled{
        margin-bottom: clamp(16px, ${32 / 768 * 100}vw, 48px);
        margin-top: 16px;
    }

    .body1{
        font-weight: 600;
        color: #75757A;
    }

    span{
        margin-bottom: 24px;
    }
`