import React from "react"
import { Input, Label } from "../atoms/checkbox"

export default function LabelCheckbox({ wrapClass, children, name, params, className, id, onChange, register, errors }) {
    return (
        <Label className={wrapClass}>
            <div className="input-wrap">
                <Input {...register(name, params)} id={id} onChange={onChange} type='checkbox' />
            </div>
            <span className={className + " label body3"}>{children}</span>
            {errors[name] && <span className="error">Musisz wyrazić zgodę na powyższe zapisy.</span>}
        </Label>
    )
}