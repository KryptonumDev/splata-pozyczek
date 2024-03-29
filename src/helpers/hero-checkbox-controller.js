export const checkboxControllerHero = (e, getValues, setValue) => {
    let one = getValues("privacyOneHero")
    let two = getValues("privacyTwoHero")

    if (e.currentTarget.id === 'one-hero') {
        one = e.currentTarget.checked
        setValue("privacyOneHero", e.currentTarget.checked, { shouldValidate: true })
    } else if (e.currentTarget.id === 'two-hero') {
        two = e.currentTarget.checked
        setValue("privacyTwoHero", e.currentTarget.checked, { shouldValidate: true })
    }

    if (one && two) {
        document.getElementById('all-hero').classList.remove('half')
        setValue('checkAllHero', true, { shouldValidate: true })
    } else if (one || two) {
        document.getElementById('all-hero').classList.add('half')
        setValue('checkAllHero', false, { shouldValidate: true })
    } else {
        document.getElementById('all-hero').classList.remove('half')
        setValue('checkAllHero', false, { shouldValidate: true })
    }
}