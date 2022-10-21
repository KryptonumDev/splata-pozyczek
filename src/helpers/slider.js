export const transform = (direction, x, maxButtonsTransform) => {
    const transformx = x.get()
    x.stop()
    if (direction === 'left') {
        if (transformx + 200 > 0) {
            x.set(0)
        } else {
            x.set(transformx + 200)
        }
    } else if (direction === 'right') {
        if (transformx - 200 < - maxButtonsTransform) {
            x.set(-maxButtonsTransform)
        } else {
            x.set(transformx - 200)
        }
    }
}