export default async function postPiece(data) {
    const piece = JSON.stringify(data)

    // Use proxy for now (due to CORS issue)
    await fetch('http://localhost:8010/proxy/pieces/', { 
        method: 'POST',
        headers: { 
            "Content-Type": "application/json"
         },
        body: piece
     })
}