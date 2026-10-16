import { Link } from "gatsby";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import { graphql, useStaticQuery } from "gatsby";
import { FilledButton } from "../../atoms/buttons";
import { Label, Input } from "../../atoms/input";
import LabelCheckbox from "../label-checkbox";
import { checkboxControllerHero } from "../../../helpers/hero-checkbox-controller";
import { checkboxAllHero } from "../../../helpers/hero-checkbox-all";
import { datalayerArguments } from "../../../helpers/datalayer";
import { textParser } from "../../../helpers/wysiwyg-modification";
import { EmailInput, NameInput, PhoneInput } from "../form-inputs/specialized";
import UniversalInput from "../form-inputs/universal";

// 2-step screening form, ported from the kredito.com.pl "Kredyt LP" form.
// Field names match the CF7 form tags (see docs/cf7-lp-krokowy.md). Fields shared with the other
// site forms use their CF7 names (your-*), so the leads integration maps them the same way;
// CF7_NAMES maps those back to the local field names for CF7 validation errors.

const STEP_FIELDS = [
  ["name", "phone", "email", "moneyCount", "liczba_zobowiazan"],
  ["komornik", "bazy", "opoznienia", "windykacja", "dochod", "privacyOneHero", "privacyTwoHero"],
];

const CF7_NAMES = {
  "your-name": "name",
  "your-email": "email",
  "your-phone": "phone",
  "your-money-count": "moneyCount",
};

const SELECTS = {
  komornik: ["Nie", "Tak"],
  bazy: ["Nie", "Tak", "Nie wiem"],
  opoznienia: ["Nie", "Tak"],
  windykacja: ["Nie", "Tak"],
  dochod: ["Umowa o pracę", "Umowa zlecenie / o dzieło", "Działalność gospodarcza", "Emerytura / renta", "Inne"],
};

const leadSegment = (data) => {
  if (data.windykacja === "Tak") return "review";
  if (data.bazy === "Tak" || data.opoznienia === "Tak") return "standard";
  return "premium";
};

function SelectField({ name, label, register, errors }) {
  return (
    <Label>
      <span className="label body2">{label}*</span>
      <Input as="select" defaultValue="" {...register(name, { required: "Wybierz odpowiedź" })}>
        <option value="" disabled>Wybierz…</option>
        {SELECTS[name].map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Input>
      {errors[name] && <span className="error">{errors[name].message}</span>}
    </Label>
  );
}

export default function StepForm({ setIsSended, formTitle, formId, pageTitle }) {
  const {
    wpPage: {
      formyKontaktowe: { linkPrivacyPolicySecond, linkPrivacyPolicyThird },
    },
  } = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDo2MzQ=" }) {
        formyKontaktowe {
          linkPrivacyPolicySecond {
            url
          }
          linkPrivacyPolicyThird {
            url
          }
        }
      }
    }
  `);

  const {
    reset,
    setValue,
    setError,
    register,
    getValues,
    watch,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldUnregister: false });
  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const wrapRef = useRef(null);

  const blocked = watch("komornik") === "Tak";

  const goTo = (index) => {
    setStep(index);
    wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // Step 1 only validates its own fields; the real submit (all fields) happens on step 2.
  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (step === 0) {
      if (await trigger(STEP_FIELDS[0])) goTo(1);
      return;
    }
    if (blocked || sending) return;
    handleSubmit(onSubmit)(e);
  };

  const onSubmit = async (data) => {

    setSending(true);
    const body = new FormData();
    body.append("your-name", data.name);
    body.append("your-phone", data.phone);
    body.append("your-email", data.email);
    body.append("your-money-count", data.moneyCount);
    body.append("liczba_zobowiazan", data.liczba_zobowiazan);
    Object.keys(SELECTS).forEach((key) => body.append(key, data[key]));
    body.append("lead_segment", leadSegment(data));
    body.append("your-subject", pageTitle);
    body.append("post-url", window.location.href);
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid"].forEach((key) => {
      const value = sessionStorage.getItem(key);
      if (value) body.append(key, value);
    });

    try {
      const { data: res } = await axios.post(
        `https://www-data.splatapozyczek.pl/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
        body
      );

      if (res.status === "mail_sent") {
        setIsSended(true);
        reset();
        setStep(0);
        datalayerArguments({
          event: "Custom Form Submit",
          data: {
            email: data.email,
            name: data.name,
            phone: data.phone,
            subject: pageTitle,
            segment: leadSegment(data),
            url: window.location,
          },
        });
      } else if (res.status === "validation_failed" && res.invalid_fields?.length) {
        // CF7 rejected a field: show it and jump to the step it lives on.
        let firstStep = null;
        res.invalid_fields.forEach(({ field, message }) => {
          const name = CF7_NAMES[field] || field;
          const fieldStep = STEP_FIELDS.findIndex((fields) => fields.includes(name));
          if (fieldStep === -1) return;
          setError(name, { message });
          if (firstStep === null) firstStep = fieldStep;
        });
        if (firstStep !== null && firstStep !== step) goTo(firstStep);
      } else {
        alert(res.message || "wystąpił problem, sprobuj póżniej");
      }
    } catch (err) {
      alert("wystąpił problem, sprobuj póżniej");
    } finally {
      setSending(false);
    }
  };

  return (
    <Wrapper ref={wrapRef} onSubmit={onFormSubmit} noValidate>
      <div className="content">
        {formTitle ? (
          <p className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(formTitle) }} />
        ) : null}

        <div className="progress" aria-hidden="true">
          <div className="track">
            <span style={{ width: `${((step + 1) / STEP_FIELDS.length) * 100}%` }} />
          </div>
          <p className="body3">Krok {step + 1}/{STEP_FIELDS.length} · zajmie 60–90 sekund</p>
        </div>

        <div className="step" hidden={step !== 0}>
          <NameInput register={register} errors={errors} autoComplete="name" />
          <div className="flex">
            <PhoneInput
              register={register}
              errors={errors}
              autoComplete="tel"
              inputMode="tel"
              // CF7 your-phone allows max 10 characters (the shared input allows 11)
              validationRules={{
                required: "Numer telefonu jest wymagany",
                pattern: { value: /^[0-9]{9,10}$/, message: "Nieprawidłowy numer telefonu" },
              }}
            />
            <EmailInput register={register} errors={errors} autoComplete="email" inputMode="email" />
          </div>
          <UniversalInput
            label="Kwota zadłużenia łącznie (zł)*"
            name="moneyCount"
            inputMode="numeric"
            placeholder="np. 20000"
            register={register}
            errors={errors}
            validationRules={{
              required: "Kwota jest wymagana",
              pattern: { value: /^[0-9]{3,9}$/, message: "Podaj kwotę w złotych, same cyfry" },
            }}
          />
          <UniversalInput
            label="Liczba chwilówek / pożyczek*"
            name="liczba_zobowiazan"
            inputMode="numeric"
            placeholder="np. 3"
            register={register}
            errors={errors}
            validationRules={{
              required: "Podaj liczbę",
              pattern: { value: /^[1-9][0-9]?$/, message: "Podaj liczbę od 1 do 99" },
            }}
          />
          <FilledButton as="button">Dalej →</FilledButton>
        </div>

        <div className="step" hidden={step !== 1}>
          <SelectField name="komornik" label="Czy masz komornika?" register={register} errors={errors} />

          {blocked ? (
            <div className="disqualify" role="alert">
              <strong>Niestety w tej sytuacji nie możemy pomóc.</strong>
              <p className="body2">
                Przy zajęciu komorniczym najskuteczniejszy jest kontakt z kancelarią oddłużeniową
                lub licencjonowanym doradcą restrukturyzacyjnym.
              </p>
            </div>
          ) : null}

          <div className="step" hidden={blocked}>
            <SelectField name="bazy" label="Czy jesteś w bazach dłużników (KRD, BIG, ERIF itp.)?" register={register} errors={errors} />
            <SelectField name="opoznienia" label="Czy masz opóźnienia w spłatach powyżej 30 dni?" register={register} errors={errors} />
            <SelectField name="windykacja" label="Czy masz aktywne postępowania windykacyjne / sądowe?" register={register} errors={errors} />
            <SelectField name="dochod" label="Źródło dochodu" register={register} errors={errors} />

            <div className="checkboxes">
              <LabelCheckbox
                name="checkAllHero"
                onChange={(val) => checkboxAllHero(val, setValue)}
                params={{}}
                className="body2"
                register={register}
                id="all-hero"
                errors={errors}
              >
                Akceptuję wszystkie zgody
              </LabelCheckbox>
              <LabelCheckbox
                wrapClass="sub"
                name="privacyOneHero"
                params={{ required: !blocked }}
                register={register}
                onChange={(e) => checkboxControllerHero(e, getValues, setValue)}
                id="one-hero"
                errors={errors}
              >
                Wyrażam zgodę, aby moje dane osobowe były przetwarzane{" "}
                <Link to={linkPrivacyPolicySecond.url}>czytaj więcej</Link>
                <b>*</b>
              </LabelCheckbox>
              <LabelCheckbox
                wrapClass="sub"
                name="privacyTwoHero"
                params={{ required: !blocked }}
                register={register}
                onChange={(e) => checkboxControllerHero(e, getValues, setValue)}
                id="two-hero"
                errors={errors}
              >
                Wyrażam zgodę na otrzymywanie od Habza Group Sp. z o.o.{" "}
                <Link to={linkPrivacyPolicyThird.url}>czytaj więcej</Link>
                <b>*</b>
              </LabelCheckbox>
            </div>
          </div>

          <div className="actions">
            <button type="button" className="back body2" onClick={() => goTo(0)}>
              ← Wstecz
            </button>
            {blocked ? null : (
              <FilledButton as="button">{sending ? "Wysyłanie…" : "Sprawdź moją sytuację"}</FilledButton>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  padding: clamp(16px, ${(16 / 768) * 100}vw, 24px)
    clamp(10px, ${(10 / 768) * 100}vw, 24px);
  background-color: var(--color-light);
  border-radius: 4px;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  scroll-margin: 24px;

  @media (max-width: 480px) {
    padding: 16px;
  }

  .content {
    max-width: 350px;
    min-width: 300px;
    display: grid;
    width: 100%;
    grid-gap: 20px;
  }

  .step,
  .flex {
    display: grid;
    grid-gap: 20px;
  }

  .step[hidden] {
    display: none;
  }

  @media (max-width: 840px) {
    display: block;

    .content {
      max-width: 100%;
      min-width: unset;
    }

    .flex {
      grid-template-columns: 1fr 1fr;
      grid-gap: 12px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: unset;

    .flex {
      grid-template-columns: 1fr;
      grid-gap: 12px;
    }
  }

  .h5 {
    text-align: center;
    margin-bottom: 4px;

    @media (max-width: 400px) {
      text-align: left;
    }
  }

  .progress {
    display: grid;
    grid-gap: 6px;

    .track {
      height: 6px;
      border-radius: 3px;
      background: #e5e5e8;
      overflow: hidden;

      span {
        display: block;
        height: 100%;
        background: #3b5ba9;
        transition: width 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
      }
    }

    p {
      color: #6f6f71;
    }
  }

  select {
    appearance: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%236F6F71' stroke-width='2'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 32px;
  }

  .disqualify {
    padding: 16px;
    border-radius: 4px;
    background: #fdeceb;
    border-left: 4px solid #d2261f;

    p {
      margin-top: 6px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .back {
    border: none;
    background: none;
    padding: 12px 0;
    cursor: pointer;
    color: #6f6f71;

    &:hover {
      color: #050505;
    }
  }

  button {
    border: none;
  }

  label {
    position: relative;
  }

  .error {
    position: absolute;
    font-size: 10px;
    color: red;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
  }

  .checkboxes {
    display: grid;
  }

  .checkbox {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 4px;
    width: fit-content;
    line-height: 18px;

    &.sub {
      margin: 0 12px 0 0;

      &:first-child {
        margin-top: 6px;
      }

      .label {
        line-height: 14px;
      }
    }

    a {
      color: #3b5ba9;
      font-weight: 600;
    }

    .label {
      color: #6f6f71;
    }

    input {
      appearance: none;
      width: 18px;
      height: 18px;
      background: #fef5f5;
      border: 2px solid #6f6f71;
      border-radius: 4px;
      position: relative;

      &::after {
        content: "✓";
        font-size: 16px;
        transition: 120ms transform ease-in-out;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) scale(0);
        border-radius: 3px;
        font-weight: 900;
        z-index: 3;
      }

      &:checked::after {
        transform: translateX(-50%) translateY(-50%) scale(0.8);
      }
    }
  }
`;
