import React from "react"
import { Input, Label } from "../atoms/input"

export default function LabelInput({ label, name, params, meesageThemes, register, errors, type, rows }) {
    return (
        <Label>
            <span className="label body2">{label}</span>
            <Input as={type ? type : undefined} rows={rows} {...register(name, params)} >
                {meesageThemes?.map(el => (
                    <option key={el.theme} value={el.theme}>{el.theme}</option>
                ))}
            </Input>
            {errors[name] && <span className="error">Wymagane jest wypełnienie tego pola.</span>}
        </Label>
    )
}