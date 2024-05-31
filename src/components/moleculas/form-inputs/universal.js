import React from "react";
import { Input, Label} from "../../atoms/input"; // Assuming you have these components

export default function UniversalInput({ 
    type = "input", 
    label, 
    name, 
    register, 
    errors, 
    validationRules, 
    options, 
    CustomComponent, 
    ...rest 
}) {

    return (
        <Label>
            <span className="label body2">{label}</span>
            <Input as={type} {...register(name, validationRules)} {...rest} />


            {/* {type === "select" ? (
                <Input {...register(name, validationRules)} {...rest}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Input>
            ) : (
                <Input as={type} {...register(name, validationRules)} {...rest} />
            )} */}
            {errors[name] && <span className="error">{errors[name].message}</span>}
        </Label>
    );
}