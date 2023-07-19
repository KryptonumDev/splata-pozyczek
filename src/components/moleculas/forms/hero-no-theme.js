import { Link } from "gatsby"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { FilledButton } from '../../atoms/buttons'
import axios from "axios"
import { graphql, useStaticQuery } from "gatsby"
import { textParser } from "../../../helpers/wysiwyg-modification"
import LabelInput from "../label-input"
import LabelCheckbox from "../label-checkbox"
import { checkboxAllHero } from "../../../helpers/hero-checkbox-all"
import { checkboxControllerHero } from "../../../helpers/hero-checkbox-controller"
import { datalayerArguments } from "../../../helpers/datalayer"

export default function Form({ setIsSended, formTitle }) {

    const { wpPage: { formyKontaktowe: { linkPrivacyPolicy } } } = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo2MzQ="}) {
            formyKontaktowe {
              additionalInform
              linkPrivacyPolicy {
                url
              }
            }
        }
    }
  `)

    const { getValues, setValue, reset, register, handleSubmit, formState: { errors } } = useForm()
    const [sendedCount, changeSendedCount] = useState(0)

    const onSubmit = data => {
        setIsSended(true)

        if (sendedCount < 3) {
            let url = 'https://www-data.splatapozyczek.pl/wp-json/contact-form-7/v1/contact-forms/945/feedback'
            let body = new FormData()
            body.append('your-email', data.email)
            body.append('your-name', data.name)
            body.append('your-phone', data.phone)
            body.append("your-message", data.message)
            body.append('post-url', window.location.href)
            axios.post(url, body)
                .then((res) => {
                    changeSendedCount(sendedCount + 1)
                    setIsSended(true)
                    reset()
                    datalayerArguments({
                        "event": 'Custom Form Submit',
                        "data": {
                            'email': data.email,
                            'name': data.name,
                            'phone': data.phone,
                            'message': data.message,
                            'url': window.location
                        }
                    });
                })
                .catch((err) => {
                    alert('wystąpił problem, sprobuj póżniej')
                })
        }
    }

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="content">
                {formTitle
                    ? <h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(formTitle) }} />
                    : null}
                <div className="flex">
                    <LabelInput
                        name='name'
                        label='Imię i nazwisko*'
                        params={{ required: true, pattern: /^[a-z ,.'-]+$/i }}
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className="flex">
                    <LabelInput
                        name='email'
                        label='Adres e-mail*'
                        params={{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
                        register={register}
                        errors={errors}
                    />
                    <LabelInput
                        name='phone'
                        label='Numer telefonu*'
                        params={{ required: true, pattern: /^(0|[1-9]\d*)(\.\d+)?$/, maxLength: 9, minLength: 9 }}
                        register={register}
                        errors={errors}
                    />
                </div>
                <LabelInput
                    name='message'
                    label='Wiadomość*'
                    params={{ required: true }}
                    register={register}
                    errors={errors}
                    type='textarea'
                    rows='4'
                />
                <div className="checkboxes">
                    <LabelCheckbox
                        name='checkAllHero'
                        onChange={(val) => { checkboxAllHero(val, setValue) }}
                        params={{}}
                        className='body2'
                        register={register}
                        id='all-hero'
                        errors={errors}>
                        Akceptuję wszystkie zgody
                    </LabelCheckbox>
                    <LabelCheckbox
                        wrapClass='sub'
                        name='privacyOneHero'
                        params={{ required: true }}
                        register={register}
                        onChange={(e) => { checkboxControllerHero(e, getValues, setValue) }}
                        id='one-hero'
                        errors={errors}>
                        Wyrażam zgodę, aby moje dane osobowe były przetwarzane <Link to={linkPrivacyPolicy.url}>czytaj więcej</Link><b>*</b>
                    </LabelCheckbox>
                    <LabelCheckbox
                        wrapClass='sub'
                        name='privacyTwoHero'
                        params={{ required: true }}
                        register={register}
                        onChange={(e) => { checkboxControllerHero(e, getValues, setValue) }}
                        id='two-hero'
                        errors={errors}>
                        Wyrażam zgodę na otrzymywanie od Habza Group Sp. z o.o. <Link to={linkPrivacyPolicy.url}>czytaj więcej</Link><b>*</b>
                    </LabelCheckbox>
                </div>

                <FilledButton as='button' type="submit">Wyślij</FilledButton>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    padding: clamp(16px, ${16 / 768 * 100}vw, 24px) clamp(10px, ${10 / 768 * 100}vw, 24px);
    background-color: var(--color-light);
    border-radius: 4px;
    box-shadow: var(--shadow);
    display: flex;
    justify-content: center;

    @media (max-width: 480px){
        padding: 16px;
    }

    .checkboxes{
        display: grid;
    }

    .content{
        max-width: 350px;
        min-width: 300px;
        display: grid;
        width: 100%;
        grid-gap: 20px;
    }

    .flex{
        display: grid;
        grid-gap: 20px;
    }

    @media (max-width: 840px) {
        display: block;

        .content{
            max-width: 100%;
            min-width: unset;
        }

        .flex{
            grid-template-columns: 1fr 1fr;
            grid-gap: 12px;
        }
    }

    @media (max-width: 480px){
        width: 100%;
        min-width: unset;

        .flex{
            grid-template-columns: 1fr;
            grid-gap: 12px;
        }
    }

    .h5{
        text-align: center;
        margin-bottom: 4px;

        @media (max-width: 400px) {
            text-align: left;
        }
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
            border: 2px solid #6F6F71;
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

            margin: 0 12px 0 0;

            &:first-child{
                margin-top: 6px;
            }

            .label{
                line-height: 14px;
            }
        }

        a{
            color: #3B5BA9;
            font-weight: 600;
        }

        .label{
            color: #6F6F71;
        }

        input{
            appearance: none;
            width: 18px;
            height: 18px;
            background: #FEF5F5;
            border: 2px solid #6F6F71;
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