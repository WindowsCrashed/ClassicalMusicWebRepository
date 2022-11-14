import loadIntoTable from "./loadTable.js"
import { parseDataToQuery } from "./parsers.js"
import { getFormData } from "../Utils/getFormData.js"

function listPieces(target) {
    const data = getFormData(target)
    const url = `${searchUrl}?${parseDataToQuery(data)}`
    loadIntoTable(url, table)
}

const searchUrl = 'http://localhost:8010/proxy/pieces/search'
const table = document.querySelector("table")

document.getElementById("searchInput").addEventListener("submit", (event) => {
    event.preventDefault()
    listPieces(event.target)
})

loadIntoTable(searchUrl, table)