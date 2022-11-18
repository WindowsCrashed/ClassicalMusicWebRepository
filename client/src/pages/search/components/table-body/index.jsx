import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TableRow from '../table-row'

function TableBody() {    
    const [data, setData] = useState([])
    const query = useLocation().search
        
    useEffect(() => {
        fetch(`http://localhost:8010/proxy/pieces/search${query}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(() => { return undefined })
    }, [query])  
    
    return (
        <tbody>
            {data.map(piece =>
                <TableRow
                    composer={piece.composer}
                    name={piece.name}
                    catalog={piece.catalog}
                    pieceKey={piece.key}
                />
            )}
        </tbody>
    )    
}
 
export default TableBody