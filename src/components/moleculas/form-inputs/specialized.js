import React from "react";
import UniversalInput from "./universal";

// EmailInput Component
export function EmailInput(props) {
    return (
        <UniversalInput
            // type="email"
            label="Adres e-mail*"
            name="email"
            validationRules={{
                required: "Adres e-mail jest wymagany",
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Nieprawidłowy adres e-mail"
                }
            }}
            {...props}
        />
    );
}

// NameInput Component
export function NameInput(props) {
    return (
        <UniversalInput
            // type="text"
            label="Imię i nazwisko*"
            name="name"
            validationRules={{
                required: "Imię i nazwisko są wymagane",
                pattern: {
                    value: /^[\p{L} ,.'-]+$/u,
                    message: "Wprowadź poprawne imię i nazwisko"
                },
                minLength: {
                    value: 3,
                    message: "Pole musi zawierać przynajmniej 3 znaki"
                }
            }}
            {...props}
        />
    );
}

// PhoneInput Component
export function PhoneInput(props) {
    return (
        <UniversalInput
            // type="tel"
            label="Numer telefonu*"
            name="phone"
            validationRules={{
                required: "Numer telefonu jest wymagany",
                pattern: {
                    value: /^[0-9]{9,11}$/,
                    message: "Nieprawidłowy numer telefonu"
                }
            }}
            {...props}
        />
    );
}

// MessageInput Component
export function MessageInput(props) {
    return (
        <UniversalInput
            type="textarea"
            label="Wiadomość*"
            name="message"
            validationRules={{
                required: "Wiadomość jest wymagana",
                minLength: {
                    value: 10,
                    message: "Wiadomość jest za krótka"
                }
            }}
            rows={4}
            {...props}
        />
    );
}


// NIPInput Component
export function NIPInput(props) {
    return (
        <UniversalInput
            label="NIP*"
            name="nip"
            validationRules={{
                required: "NIP jest wymagany",
                pattern: {
                    value: /^[0-9]{10,12}$/,
                    message: "Nieprawidłowy NIP"
                }
            }}
            {...props}
        />
    );
}

// CountInput Component
export function CountInput(props) {
    return (
        <UniversalInput
            label="Count*"
            name="Count"
            validationRules={{
                required: "Kwota jest wymagana",
                pattern: {
                    value: /^[0-9]{2,24}$/,
                    message: "Nieprawidłowa kwota"
                }
            }}
            {...props}
        />
    );
}

// CityInput Component
export function CityInput(props) {
    return (
        <UniversalInput
            label="Miejscowość*"
            name="place"
            validationRules={{
                required: "Miejscowość jest wymagana",
                minLength: {
                    value: 3,
                    message: "Za mało znaków"
                }
            }}
            {...props}
        />
    );
}