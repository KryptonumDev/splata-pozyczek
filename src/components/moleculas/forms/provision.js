import { Link } from "gatsby"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { FilledButton } from '../../atoms/buttons'
import axios from "axios"
import { graphql, useStaticQuery } from "gatsby"
import LabelCheckbox from "../label-checkbox"
import { checkboxController } from "../../../helpers/checkbox-controller"
import { checkboxAll } from "../../../helpers/checkbox-all"
import LabelSelect from "../label-select"
import { datalayerArguments } from "../../../helpers/datalayer"
import { EmailInput, NameInput, PhoneInput } from "../form-inputs/specialized"

export default function Form({ ip, setIsSended }) {

    const { wpPage: { formyKontaktowe: { linkPrivacyPolicyFirst, linkPrivacyPolicySecond, linkPrivacyPolicyThird, provisionTypes } } } = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo2MzQ="}) {
            formyKontaktowe {
              additionalInform
              linkPrivacyPolicyFirst {
                url
              }
              linkPrivacyPolicySecond {
                url
              }
              linkPrivacyPolicyThird {
                url
              }
              provisionTypes{
                theme
              }
            }
        }
    }
  `)

    const { reset, register, setValue, handleSubmit, getValues, control, formState: { errors } } = useForm()
    const [sendedCount, changeSendedCount] = useState(0)

    const onSubmit = data => {
        setIsSended(true)

        if (sendedCount < 3) {
            let url = 'https://www-data.splatapozyczek.pl/wp-json/contact-form-7/v1/contact-forms/3704/feedback'
            let body = new FormData()
            body.append('your-email', data.email)
            body.append('your-name', data.name)
            body.append('your-phone', data.phone)
            body.append('your-provision', data.theme)
            body.append('post-url', window.location.href)
            body.append('your-ip', ip)
            const utm_campaign = sessionStorage.getItem('utm_campaign');
            const utm_source = sessionStorage.getItem('utm_source');
            const utm_medium = sessionStorage.getItem('utm_medium');
            const utm_term = sessionStorage.getItem('utm_term');
            if (utm_campaign) {
              body.append("utm_campaign", utm_campaign);
            }
            if (utm_source) {
              body.append("utm_source", utm_source);
            }
            if (utm_medium) {
              body.append("utm_medium", utm_medium);
            }
            if (utm_term) {
              body.append("utm_term", utm_term);
            }
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
                            'provision': data.theme,
                            'phone': data.phone,
                            'url': window.location,
                            'ip': ip
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
                <div className="flex">
                    <NameInput register={register} errors={errors}/>
                    <LabelSelect
                        control={control}
                        themes={provisionTypes}
                        name='theme'
                        label='Rodzaj prowizji*'
                    />
                </div>
                <div className="flex">
                    <EmailInput register={register} errors={errors}/>
                    <PhoneInput register={register} errors={errors}/>
                </div>
                <div className="flex">
                    <div>
                        <LabelCheckbox
                            name='checkAll'
                            onChange={(val) => { checkboxAll(val, setValue) }}
                            params={{}}
                            className='body2'
                            register={register}
                            id='all'
                            errors={errors}>
                            Akceptuję wszystkie zgody
                        </LabelCheckbox>
                        <LabelCheckbox
                            wrapClass='sub'
                            name='privacyOne'
                            onChange={(e) => { checkboxController(e, getValues, setValue) }}
                            params={{ required: true }}
                            register={register}
                            id='one'
                            errors={errors}>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych na zasadach określonych w <Link to={linkPrivacyPolicyFirst.url}>Polityce prywatności</Link><b>*</b>
                        </LabelCheckbox>
                        <LabelCheckbox
                            wrapClass='sub'
                            name='privacyTwo'
                            onChange={(e) => { checkboxController(e, getValues, setValue) }}
                            params={{ required: true }}
                            register={register}
                            id='two'
                            errors={errors}>
                            Wyrażam zgodę, aby moje dane osobowe były przetwarzane <Link to={linkPrivacyPolicySecond.url}>czytaj więcej</Link><b>*</b>
                        </LabelCheckbox>
                        <LabelCheckbox
                            wrapClass='sub'
                            name='privacyThree'
                            onChange={(e) => { checkboxController(e, getValues, setValue) }}
                            params={{ required: true }}
                            register={register}
                            id='three'
                            errors={errors}>
                            Wyrażam zgodę na otrzymywanie od Habza Group Sp. z o.o. <Link to={linkPrivacyPolicyThird.url}>czytaj więcej</Link><b>*</b>
                        </LabelCheckbox>
                        <FilledButton className="submit" as='button' type="submit">Wyślij</FilledButton>
                    </div>
                    <div>
                        <span className="required body3"><b>*</b>  – Pola obowiązkowe</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;

    .submit{
        margin-top: 24px;
    }

    .content {
        display: grid;
        grid-gap: 20px;
        width: 100%;
    }

    .flex{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;

        @media (max-width: 580px) {
            grid-gap: 20px;
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
            font-size: 16px;
            line-height: 129%;
            font-feature-settings: 'pnum' on, 'onum' on;
            color: #050505;

            &::placeholder{
                color: #B2B2B8;
                font-weight: 400;
                font-size: 16px;
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
                font-size: 16px;
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