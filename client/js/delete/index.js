import deletePiece from './deletePiece.js'
import { capitalizeEntry } from '../utils/capitalizeData.js'

const pieceId = new URLSearchParams(window.location.search).get('id')

fetch(`http://localhost:8010/proxy/pieces/piece?id=${pieceId}`)
    .then(piece => piece.json())
    .then(capitalizeEntry)
    .then(piece => {
        document.querySelector('[name="composer"]').innerText = piece.composer
        document.querySelector('[name="name"]').innerText = piece.name
        document.querySelector('[name="catalog"]').innerText = piece.catalog
        document.querySelector('[name="key"]').innerText = piece.key
    })
    .catch(console.log)

document.getElementById('deleteInput').addEventListener('submit', () => {
    deletePiece(pieceId)
})

document.querySelector('[cancel]').addEventListener('click', event => {
    event.preventDefault()
    window.location.href = `edit.html?id=${pieceId}`
})