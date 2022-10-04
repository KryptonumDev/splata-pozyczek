import { Link } from "gatsby"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { FilledButton } from '../../atoms/buttons'
import axios from "axios"
import { graphql, useStaticQuery } from "gatsby"

export default function Form({ setIsSended }) {

    const { wpPage: { formyKontaktowe: { linkPrivacyPolicy, additionalInform, meesageThemes } } } = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo2MzQ="}) {
            formyKontaktowe {
              additionalInform
              linkPrivacyPolicy {
                url
              }
              meesageThemes {
                theme
              }
            }
        }
    }
  `)

    const { reset, register, setValue, handleSubmit, getValues, watch, formState: { errors } } = useForm()
    const [sendedCount, changeSendedCount] = useState(0)

    const onSubmit = data => {
        setIsSended(true)


        if (sendedCount < 3) {
            let url = 'https://testy.kryptonum.co.uk/wp-json/contact-form-7/v1/contact-forms/669/feedback'
            let body = new FormData()
            body.append('your-email', data.email)
            body.append("your-subject", data.message)
            body.append('your-name', data.name)
            body.append('your-phone', data.phone)
            body.append('your-theme', data.theme)
            axios.post(url, body)
                .then((res) => {
                    if (res.status === 200) {
                        changeSendedCount(sendedCount + 1)
                        setIsSended(true)
                        reset()
                    } else {
                        alert('wystąpił problem, sprobuj póżniej')
                    }
                })
        }
    }

    const inputAll = (val) => {
        if (val.currentTarget.checked) {
            setValue('privacyThree', true)
            setValue('privacyTwo', true)
            setValue('privacyOne', true)
        } else {
            setValue('privacyThree', false)
            setValue('privacyTwo', false)
            setValue('privacyOne', false)
        }
    }

    const testCkeckboxes = (e) => {
        let one = getValues("privacyOne")
        let two = getValues("privacyTwo")
        let three = getValues("privacyThree")

        if (e.currentTarget.id === 'one') {
            one = e.currentTarget.checked
        } else if (e.currentTarget.id === 'two') {
            two = e.currentTarget.checked
        } else if (e.currentTarget.id === 'three') {
            three = e.currentTarget.checked
        }

        if (one && two && three) {
            setValue('checkAll', true)
        } else {
            setValue('checkAll', false)
        }
    }

    // console.log(watch("example"))  watch input value by passing the name of it

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="content">
                <div className="flex">
                    <label className="input">
                        <span className="label body2">Imię i nazwisko*</span>
                        <input placeholder="" {...register("name", { required: true })} />
                        {errors.name && <span className="error">Wymagane jest wypełnienie tego pola.</span>}
                    </label>
                    <label className="input">
                        <span className="label body2">Wybierz temat*</span>
                        <select {...register("theme")} >
                            {meesageThemes.map(el => (
                                <option key={el.theme} value={el.theme}>{el.theme}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="flex">
                    <label className="input">
                        <span className="label body2">Adres e-mail*</span>
                        <input placeholder="" {...register("email", { required: true })} />
                        {errors.email && <span className="error">Wymagane jest wypełnienie tego pola.</span>}
                    </label>
                    <label className="input">
                        <span className="label body2">Numer telefonu*</span>
                        <input placeholder="___-___-___" {...register("phone", { required: true })} />
                        {errors.phone && <span className="error">Wymagane jest wypełnienie tego pola.</span>}
                    </label>
                </div>
                <label className="input">
                    <span className="label body2">Wiadomość*</span>
                    <textarea rows='4' placeholder="Twoja wiadomość…" {...register("message", { required: true })} />
                    {errors.message && <span className="error">Wymagane jest wypełnienie tego pola.</span>}
                </label>
                <div className="flex">
                    <div>
                        <label className="checkbox">
                            <input {...register("checkAll")} onChange={(val) => { inputAll(val) }} type='checkbox' />
                            <span className="label body2">Akceptuję wszystkie zgody</span>
                        </label>
                        <label className="checkbox sub">
                            <input {...register("privacyOne", { required: true })} id='one' onChange={(e) => { testCkeckboxes(e) }} type='checkbox' />
                            <span className="label body3">Wyrażam zgodę na przetwarzanie moich danych osobowych na zasadach określonych w <Link to={linkPrivacyPolicy.url}>Polityce prywatności</Link><b>*</b></span>
                            {errors.privacyOne && <span className="error">Musisz wyrazić zgodę na powyższe zapisy.</span>}
                        </label>
                        <label className="checkbox sub">
                            <input {...register("privacyTwo", { required: true })} id='two' onChange={(e) => { testCkeckboxes(e) }} type='checkbox' />
                            <span className="label body3">Wyrażam zgodę, aby moje dane osobowe były przetwarzane <Link to={linkPrivacyPolicy.url}>czytaj więcej</Link><b>*</b></span>
                            {errors.privacyTwo && <span className="error">Musisz wyrazić zgodę na powyższe zapisy.</span>}
                        </label>
                        <label className="checkbox sub">
                            <input  {...register("privacyThree", { required: true })} id='three' onChange={(e) => { testCkeckboxes(e) }} type='checkbox' />
                            <span className="label body3">Wyrażam zgodę na otrzymywanie od Habza Group Sp. z o.o. <Link to={linkPrivacyPolicy.url}>czytaj więcej</Link><b>*</b></span>
                            {errors.privacyThree && <span className="error">Musisz wyrazić zgodę na powyższe zapisy.</span>}
                        </label>
                    </div>
                    <div>
                        <span className="required body3"><b>*</b>  – Pola obowiązkowe</span>
                        <div className="body3 text" dangerouslySetInnerHTML={{ __html: additionalInform }} />
                    </div>
                </div>
                <FilledButton as='button' type="submit">Wyślij</FilledButton>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    padding: clamp(24px, ${24 / 768 * 100}vw, 48px) clamp(16px, ${24 / 768 * 100}vw, 48px);
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .content {
        display: grid;
        grid-gap: 20px;
    }

    .flex{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        @media (max-width: 580px) {
            grid-template-columns: 1fr;
        }
    }

    .text{
        display: grid;
        grid-gap: 8px;
        margin-top: 24px;
    }

    .text p{
        color: #6F6F71;
    }

    @media (max-width: 480px){
        width: 100%;
        min-width: unset;
    }

    .required{
        display: block;
        margin-top: 12px;
    }

    button{
        border: none;
    }

    .error{
        position: absolute;
        font-size: 10px;
        color: red;
        bottom: 0;
        left: 0;
        transform: translateY(100%);
    }

    label{
        position: relative;
    }

    .input{
        display: block;

        .label{
            display: block;
            margin-bottom: 4px;
        }

        input, select, textarea{
            padding: 8px 10px;
            background: #FEF5F5;
            border: 2px solid #75757A;
            border-radius: 4px;
            width: 100%;

            font-weight: 400;
            font-size: 14px;
            line-height: 129%;
            font-feature-settings: 'pnum' on, 'onum' on;
            color: #050505;

            &::placeholder{
                color: #B2B2B8;
                font-weight: 400;
                font-size: 14px;
                line-height: 129%;
                font-feature-settings: 'pnum' on, 'onum' on;
            }
        }
    }

    .checkbox{
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 4px;
        width: fit-content;
        line-height: 18px;

        &.sub{
            margin: 20px 12px 0;

            .label{
                line-height: 14px;
            }
        }

        a{
            color: #3B5BA9;
            font-weight: 600;
        }

        .label{
            color: #75757A;
        }

        input{
            appearance: none;
            width: 18px;
            height: 18px;
            background: #FEF5F5;
            border: 2px solid #75757A;
            border-radius: 4px;
            position: relative;

            &::after {
                content: '✓';
                font-size: 14px;
                font-weight: 300;
                transition: 120ms transform ease-in-out;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%) scale(0);
                border-radius: 3px;
                font-weight: 900;
                z-index: 3;
            }

            &:checked {
                &::after {
                    transform: translateX(-50%) translateY(-50%) scale(0.8);
                }
            }
        }
    }
`