import parseDataToLowerCase from '../utils/parseDataToLowerCase.js'

export default async function postPiece(data) {
    const piece = JSON.stringify(parseDataToLowerCase(data))

    await fetch('http://localhost:8010/proxy/pieces/', { 
        method: 'POST',
        headers: { 
            "Content-Type": "application/json"
         },
        body: piece
     })
}