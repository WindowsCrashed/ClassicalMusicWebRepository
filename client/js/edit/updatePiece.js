import parseDataToLowerCase from '../utils/parseDataToLowerCase.js'

export default async function updatePiece(data, id) {
    const piece = JSON.stringify(parseDataToLowerCase(data))

    await fetch(`http://localhost:8010/proxy/pieces/${id}`, { 
        method: 'PATCH',
        headers: { 
            "Content-Type": "application/json"
         },
        body: piece
     })
}