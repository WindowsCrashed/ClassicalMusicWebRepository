import loadIntoTable from "./loadTable.js"
import { parseDataToQuery } from "./parsers.js"
import { getFormData } from "../Utils/getFormData.js"

function listPieces(target) {
    const data = getFormData(target)
    const url = `http://localhost:8010/proxy/pieces/search?${parseDataToQuery(data)}`
    loadIntoTable(url, document.querySelector("table"))
}

document.getElementById("searchInput").addEventListener("submit", (event) => {
    event.preventDefault()
    listPieces(event.target)
})

loadIntoTable('http://localhost:8010/proxy/pieces/search', document.querySelector("table"))