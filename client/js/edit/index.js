import { getFormData } from "../utils/getFormData.js"
import updatePiece from "./updatePiece.js"
import { capitalizeEntry } from '../utils/capitalizeData.js'

function editPiece(target, id) {
    const data = getFormData(target)
    updatePiece(data, id)
}

const pieceId = new URLSearchParams(window.location.search).get('id')

fetch(`http://localhost:8010/proxy/pieces/piece?id=${pieceId}`)
    .then(piece => piece.json())
    .then(capitalizeEntry)
    .then(piece => {
        document.querySelector('[name="composer"]').value = piece.composer
        document.querySelector('[name="name"]').value = piece.name
        document.querySelector('[name="catalog"]').value = piece.catalog
        document.querySelector('[name="key"]').value = piece.key
    })
    .catch(console.log)

document.getElementById("editInput").addEventListener("submit", event => {
    editPiece(event.target, pieceId)
})

document.querySelector('[delete]').addEventListener('click', event => {
    event.preventDefault()
    window.location.href = `delete.html?id=${pieceId}`
})