export default function parseDataToQuery(data) {
    const { filter, text } = data

    const parsedText = text.replace(new RegExp(" ", "g"), "+").toLowerCase()

    return `${filter}=${parsedText}`
}