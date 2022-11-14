export default function parseDataToLowerCase(data) {
    return Object.fromEntries(Object.entries(data).map(([key, value]) => {
        return [key, value.toLowerCase()]
    }))
}