import { Link } from "gatsby"
import React, { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { FilledButton } from '../../atoms/buttons'
import axios from "axios"
import { graphql, useStaticQuery } from "gatsby"
// import LabelInput from "../label-input"
import LabelCheckbox from "../label-checkbox"
import { checkboxController } from "../../../helpers/checkbox-controller"
import { checkboxAll } from "../../../helpers/checkbox-all"
import LabelSelect from "../label-select"
import { datalayerArguments } from "../../../helpers/datalayer"
import { EmailInput, NameInput, PhoneInput, MessageInput } from "../form-inputs/specialized"
export default function Form({ ip, setIsSended, typTematow }) {

    const { wpPage: { formyKontaktowe: { linkPrivacyPolicyFirst, linkPrivacyPolicySecond, linkPrivacyPolicyThird, meesageThemesFirms, meesageThemesDetails } } } = useStaticQuery(graphql`
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
              meesageThemesFirms {
                theme
              }
              meesageThemesDetails{
                theme
              }
            }
        }
    }
  `)

    const meesageThemes = useMemo(() => {
        if (typTematow === 'Firmowego') {
            return meesageThemesFirms
        }
        if (typTematow !== 'Firmowego' && typTematow !== 'Detalicznego') {
            console.log('Typ tematów dla formularza nie wybrany!')
        }
        return meesageThemesDetails
    }, [typTematow, meesageThemesFirms, meesageThemesDetails])

    const { reset, register, setValue, handleSubmit, getValues, control, formState: { errors } } = useForm()
    const [sendedCount, changeSendedCount] = useState(0)

    const onSubmit = data => {
        console.log(data);
        
        setIsSended(true)

        if (sendedCount < 3) {
            let url = 'https://www-data.splatapozyczek.pl/wp-json/contact-form-7/v1/contact-forms/669/feedback'
            let body = new FormData()
            body.append('your-email', data.email)
            body.append("your-message", data.message)
            body.append('your-name', data.name)
            body.append('your-phone', data.phone)
            body.append('your-subject', data.theme)
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
                            'message': data.message,
                            'name': data.name,
                            'phone': data.phone,
                            'subject': data.theme,
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
            <NameInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <PhoneInput register={register} errors={errors} />
            <LabelSelect
                control={control}
                themes={meesageThemes}
                name='theme'
                label='Wybierz temat*'
            />
            <MessageInput register={register} errors={errors} />
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
                <span className="required body3"><b>*</b>  – Pola obowiązkowe</span>
            </div>

            <FilledButton as='button' type="submit">Wyślij</FilledButton>

        </Wrapper>
    )
}

const Wrapper = styled.form`
    max-width: 340px;
    width: 100%;
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
        color: #6F6F71;

        b{
            color: #6F6F71;
        }
    }

    button{
        border: none;
    }

    label{
        position: relative;
    }
`