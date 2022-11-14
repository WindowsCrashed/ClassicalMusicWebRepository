export default async function deletePiece(id) {
    await fetch(`http://localhost:8010/proxy/pieces/${id}`,
    {
        method: 'DELETE',
        headers: { 
            "Content-Type": "application/json"
         }
    })
}