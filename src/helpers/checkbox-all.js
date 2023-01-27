export const checkboxAll = (val, setValue) => {
    if (val.currentTarget.checked) {
        document.getElementById('all').classList.remove('half')
        setValue('privacyThree', true, { shouldValidate: true })
        setValue('privacyTwo', true, { shouldValidate: true })
        setValue('privacyOne', true, { shouldValidate: true })
    } else {
        document.getElementById('all').classList.remove('half')
        setValue('privacyThree', false, { shouldValidate: true })
        setValue('privacyTwo', false, { shouldValidate: true })
        setValue('privacyOne', false, { shouldValidate: true })
    }
}