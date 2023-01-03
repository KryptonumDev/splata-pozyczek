import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { FilledButton } from "../../atoms/buttons"
import { textParser } from "../../../helpers/wysiwyg-modification"

export default function Item({ calculatorData, title, text }) {

    const [money, setMoney] = useState(10)
    const [time, setTime] = useState(1)
    const [percent, setPercent] = useState(calculatorData.minProcent)
    const [provision, setProvision] = useState(calculatorData.minProvision ? calculatorData.minProvision : 0)

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
    }, [calculatedSum, time, money])
    return (
        <Wrapper>
            <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }}></h2>
            <Content>
                <Options>
                    <div>
                        <p className="h6 arsenal">{calculatorData.moneyTitle}</p>
                        <input className="input" placeholder="val" value={money * 100 + ' zł'} />
                        <input className="range" onChange={(e) => { setMoney(e.currentTarget.value) }} min='10' value={money} max={calculatorData.maxMoney / 100} type="range" />
                        <div className="flex">
                            <span className="min body3">1 000 zł</span>
                            <span className="max body3">{calculatorData.maxMoney} zł</span>
                        </div>
                    </div>
                    <div>
                        <p className="h6 arsenal">{calculatorData.monthTitle}</p>
                        <input className="input" placeholder="val" value={time + ' miesiąc'} />
                        <input className="range" onChange={(e) => { setTime(e.currentTarget.value) }} min='1' value={time} max={calculatorData.maxMonth} type="range" />
                        <div className="flex">
                            <span className="min body3">1 miesiąc</span>
                            <span className="max body3">{calculatorData.maxMonth} miesięcy</span>
                        </div>
                    </div>
                    <div>
                        <p className="h6 arsenal">{calculatorData.procentTitle}</p>
                        <input className="input" placeholder="val" value={percent / 100 + ' %'} />
                        <input className="range" onChange={(e) => { setPercent(e.currentTarget.value) }} min={calculatorData.minProcent} value={percent} max={calculatorData.maxProcent} type="range" />
                        <div className="flex">
                            <span className="min body3">{calculatorData.minProcent / 100}%</span>
                            <span className="max body3">{calculatorData.maxProcent / 100}%</span>
                        </div>
                    </div>
                    <div>
                        <p className="h6 arsenal">{calculatorData.provisionTitle}</p>
                        <input className="input" placeholder="val" value={provision + ' %'} />
                        <input className="range" onChange={(e) => { setProvision(e.currentTarget.value) }} min={calculatorData.minProvision ? calculatorData.minProvision : 0} value={provision} max={calculatorData.maxProvision} type="range" />
                        <div className="flex">
                            <span className="min body3">{calculatorData.minProvision ? calculatorData.minProvision : 0}%</span>
                            <span className="max body3">{calculatorData.maxProvision}%</span>
                        </div>
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
                        <FilledButton className="filled" to='/kontakt/'>Skontaktuj się z nami</FilledButton>
                    </div>
                    <p className="anotation body3" dangerouslySetInnerHTML={{ __html: textParser(text) }}></p>
                </Review>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: clamp(16px, ${24 / 768 * 100}vw, 24px);

    .h4{
        text-align: center;
        margin-bottom: 32px;
        font-size: clamp(28px, 4.296875vw, 38px);
    }
    
    .flex{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        span{
            color: #6F6F71;
            font-weight: 600;
            font-size: 11px;
        }
    }

    input[type=range] {
    height: 26px;
    -webkit-appearance: none;
    width: 100%;
    background: transparent;

    @supports (-moz-appearance:none) {
        height: 4px;
        background: linear-gradient(315deg,#EDBD35 0%,#E6D9AC 99.99%);
        border-radius: 4px;
        margin: 10px 0;
    }

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
        pointer-events: none;

        
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
        color: #6F6F71;
    }

    span{
        margin-bottom: 24px;
    }
`