function capitalize(string) {
    let stringToCapitalize = string.replace('(', '( ')
    stringToCapitalize = stringToCapitalize.replace(')', ' )')
    let words = stringToCapitalize.split(/[\s]/)
    
    words = words.map(word => { 
        word = word.toLowerCase()
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    
    stringToCapitalize = words.join(' ')

    stringToCapitalize = stringToCapitalize.replace('( ', '(')
    stringToCapitalize = stringToCapitalize.replace(' )', ')')

    return stringToCapitalize
}

export function capitalizeData(data) {    
    const newData = []

    for (const object of data) {
        const newObject = {}

        for (const [key, value] of Object.entries(object)) {        
            if (typeof value === 'string') {
                newObject[`${key}`] = capitalize(value)
            } else {
                newObject[`${key}`] = value
            }          
        }

        newData.push(newObject)
    }

    return newData
}

export function capitalizeEntry(entry) {    
    const newObject = {}

    for (const [key, value] of Object.entries(entry)) {        
        if (typeof value === 'string') {
            newObject[`${key}`] = capitalize(value)
        } else {
            newObject[`${key}`] = value
        }          
    }

    return newObject
}