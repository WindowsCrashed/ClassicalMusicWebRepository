export default async function loadTable(url, table){
    const tableHead = table.querySelector("thead")
    const tableBody = table.querySelector("tbody")
    
    tableHead.innerHTML = "<tr></tr>"
    tableBody.innerHTML = ""
    
    const response = await fetch(url)
    const data = await response.json()

    if (data.length == 0) return

    const headers = Object.keys(data[0]).filter(k => k != "_id" && k != "__v")
    const rows = []

    for (let i = 0; i < data.length; i++) {
        const { composer, name, catalog, key } = data[i]
        rows.push(Object.values({ composer, name, catalog, key }))
    }

    for (const headerText of headers) {
        const headerElement = document.createElement("th")

        headerElement.textContent = headerText
        tableHead.querySelector("tr").appendChild(headerElement)
    }

    for (const row of rows) {
        const rowElement = document.createElement("tr")

        for (const cellText of row) {
            const cellElement = document.createElement("td")

            cellElement.textContent = cellText
            rowElement.appendChild(cellElement)
        }

        tableBody.appendChild(rowElement)
    }
}