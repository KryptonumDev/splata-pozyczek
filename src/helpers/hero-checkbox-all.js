export const checkboxAllHero = (val, setValue) => {
    if (val.currentTarget.checked) {
        document.getElementById('all-hero').classList.remove('half')
        setValue('privacyTwoHero', true)
        setValue('privacyOneHero', true)
    } else {
        document.getElementById('all-hero').classList.remove('half')
        setValue('privacyTwoHero', false)
        setValue('privacyOneHero', false)
    }
}