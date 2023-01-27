export const checkboxAllHero = (val, setValue) => {
    if (val.currentTarget.checked) {
        document.getElementById('all-hero').classList.remove('half')
        setValue('privacyTwoHero', true, { shouldValidate: true })
        setValue('privacyOneHero', true, { shouldValidate: true })
    } else {
        document.getElementById('all-hero').classList.remove('half')
        setValue('privacyTwoHero', false, { shouldValidate: true })
        setValue('privacyOneHero', false, { shouldValidate: true })
    }
}