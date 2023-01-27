export const checkboxControllerHero = (e, getValues, setValue) => {
    let one = getValues("privacyOneHero")
    let two = getValues("privacyTwoHero")

    if (e.currentTarget.id === 'one-hero') {
        one = e.currentTarget.checked
    } else if (e.currentTarget.id === 'two-hero') {
        two = e.currentTarget.checked
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