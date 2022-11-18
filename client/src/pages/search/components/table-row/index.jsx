import React from 'react'

function TableRow({ id, composer, name, catalog, pieceKey }) {
    return (
        <tr>
            <td className='capital'>{composer}</td>
            <td className='capital'>{name}</td>
            <td className='capital'>{catalog}</td>
            <td className='capital-first'>{pieceKey}</td>
        </tr>
    )
}
 
export default TableRow