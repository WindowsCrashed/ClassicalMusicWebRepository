import { getFormData } from "../Utils/getFormData.js"
import postPiece from "./postPiece.js"

function addPiece(target) {
    const data = getFormData(target)
    postPiece(data)
}

document.getElementById("addInput").addEventListener("submit", (event) => {
    event.preventDefault()
    addPiece(event.target)
})