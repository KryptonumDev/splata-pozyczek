import React from "react"
import { Input, Label } from "../atoms/input"

export default function LabelInput({ type = 'input', label, name, params, register, errors, rows }) {
    return (
        <Label>
            <span className="label body2">{label}</span>
            <Input as={type ? type : undefined} rows={rows} {...register(name, params)} />
            {errors[name] && <span className="error">Wymagane jest wypełnienie tego pola.</span>}
        </Label>
    )
}