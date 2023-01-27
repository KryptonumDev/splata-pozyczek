export const checkboxController = (e, getValues, setValue) => {
    let one = getValues("privacyOne")
    let two = getValues("privacyTwo")
    let three = getValues("privacyThree")

    if (e.currentTarget.id === 'one') {
        one = e.currentTarget.checked
    } else if (e.currentTarget.id === 'two') {
        two = e.currentTarget.checked
    } else if (e.currentTarget.id === 'three') {
        three = e.currentTarget.checked
    }

    if (one && two && three) {
        document.getElementById('all').classList.remove('half')
        setValue('checkAll', true, { shouldValidate: true })
    } else if (one || two || three) {
        document.getElementById('all').classList.add('half')
        setValue('checkAll', false, { shouldValidate: true })
    } else {
        document.getElementById('all').classList.remove('half')
        setValue('checkAll', false, { shouldValidate: true })
    }
}