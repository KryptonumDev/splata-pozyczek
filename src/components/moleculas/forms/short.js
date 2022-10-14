import { Link } from "gatsby"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { FilledButton } from '../../atoms/buttons'
import axios from "axios"
import { graphql, useStaticQuery } from "gatsby"
import LabelInput from "../label-input"
import LabelCheckbox from "../label-checkbox"

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
            document.getElementById('all').classList.remove('half')
            setValue('privacyThree', true)
            setValue('privacyTwo', true)
            setValue('privacyOne', true)
        } else {
            document.getElementById('all').classList.remove('half')
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
            document.getElementById('all').classList.remove('half')
            setValue('checkAll', true)
        } else if (one || two || three) {
            document.getElementById('all').classList.add('half')
            setValue('checkAll', false)
        } else {
            document.getElementById('all').classList.remove('half')
            setValue('checkAll', false)
        }
    }

    // console.log(watch("example"))  watch input value by passing the name of it

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <LabelInput
                name='name'
                label='Imię i nazwisko*'
                params={{ required: true }}
                register={register}
                errors={errors}
            />
            <LabelInput
                name='email'
                label='Adres e-mail*'
                params={{ required: true }}
                register={register}
                errors={errors}
            />
            <LabelInput
                name='phone'
                label='Numer telefonu*'
                params={{ required: true }}
                register={register}
                errors={errors}
            />
            <LabelInput
                name='theme'
                label='Wybierz temat*'
                type='select'
                register={register}
                errors={errors}
                meesageThemes={meesageThemes}
            />
            <LabelInput
                name='theme'
                label='Wiadomość*'
                params={{ required: true }}
                register={register}
                errors={errors}
                type='textarea'
                rows='4'
            />
            <div>
                <LabelCheckbox
                    name='checkAll'
                    onChange={(val) => { inputAll(val) }}
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
                    onChange={(e) => { testCkeckboxes(e) }}
                    params={{ required: true }}
                    register={register}
                    id='one'
                    errors={errors}>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych na zasadach określonych w <Link to={linkPrivacyPolicy.url}>Polityce prywatności</Link><b>*</b>
                </LabelCheckbox>
                <LabelCheckbox
                    wrapClass='sub'
                    name='privacyTwo'
                    onChange={(e) => { testCkeckboxes(e) }}
                    params={{ required: true }}
                    register={register}
                    id='two'
                    errors={errors}>
                    Wyrażam zgodę, aby moje dane osobowe były przetwarzane <Link to={linkPrivacyPolicy.url}>czytaj więcej</Link><b>*</b>
                </LabelCheckbox>
                <LabelCheckbox
                    wrapClass='sub'
                    name='privacyThree'
                    onChange={(e) => { testCkeckboxes(e) }}
                    params={{ required: true }}
                    register={register}
                    id='three'
                    errors={errors}>
                    Wyrażam zgodę na otrzymywanie od Habza Group Sp. z o.o. <Link to={linkPrivacyPolicy.url}>czytaj więcej</Link><b>*</b>
                </LabelCheckbox>
                <span className="required body3"><b>*</b>  – Pola obowiązkowe</span>
            </div>

            <FilledButton as='button' type="submit">Wyślij</FilledButton>

        </Wrapper>
    )
}

const Wrapper = styled.form`
    width: 340px;
    min-width: 300px;
    display: grid;
    grid-gap: 20px;

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

    label{
        position: relative;
    }
`