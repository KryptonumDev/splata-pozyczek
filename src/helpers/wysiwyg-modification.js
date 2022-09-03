export const textParser = (text) => {
    if (text) {
        let newText = text

        if (newText[0] === '<') {
            let close

            for (let i = 0; i < newText.length; i++) {
                if (newText[i] === '>') {
                    close = i + 1
                    break
                }
            }

            newText = newText.substring(close, newText.length)
        }

        if (newText[newText.length - 1] === '>' || newText[newText.length - 2] === '>') {
            let open

            for (let j = newText.length; j > 0; j--) {
                if (newText[j] === '<') {
                    open = j
                    break
                }
            }

            newText = newText.substring(0, open)
        }

        return newText
    }
    
    return text
}