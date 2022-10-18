export const checkboxAll = (val, setValue) => {
    if (val.currentTarget.checked) {
        document.getElementById('all').classList.remove('half')
        setValue('privacyThree', true)
        setValue('privacyTwo', true)
        setValue('privacyOne', true)
    } else {
        document.getElementById('all').classList.remove('half')
        setValue('privacyThree', false)
        setValue('privacyTwo', false)
        setValue('privacyOne', false)
    }
}