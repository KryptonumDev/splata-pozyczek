

const letters = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
const replacement = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];

export const slugTransform = (string) => {
    if (!string) {
        return null
    }

    for (let i = 0; i < letters.length; ++i) {
        string = string.replaceAll(letters[i], replacement[i]);
    }

    return string.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
}