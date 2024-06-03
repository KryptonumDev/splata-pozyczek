import React from "react"
import Select from 'react-select'
import { Input, Label } from "../atoms/select"

export default function LabelSelect({ control, themes, label, name, }) {

    let options = []

    themes.forEach(el => {
        options.push({ value: el.value ? el.value : el.theme, label: el.theme })
    });

    return (
        <Label>
            <span className="label body2">{label}</span>
            <Input
                control={control}
                name={name}
                defaultValue={options[0].value}
                render={({ field: { onChange, value, ref } }) => (
                    <Select
                        className="react-select"
                        classNamePrefix="react-select"
                        instanceId={`select-${name}`}
                        options={options}
                        inputRef={ref}
                        value={options.filter(c => value.includes(c.value))}
                        onChange={(val) => onChange(val.value)}
                    />
                )} />
        </Label>
    )
}