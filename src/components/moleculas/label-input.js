import React from "react"
import { Input, Label } from "../atoms/input"

export default function LabelInput({ label, name, params, register, errors, rows }) {
    return (
        <Label>
            <span className="label body2">{label}</span>
            <Input rows={rows} {...register(name, params)} />
            {errors[name] && <span className="error">Wymagane jest wypełnienie tego pola.</span>}
        </Label>
    )
}