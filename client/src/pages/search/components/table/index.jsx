import React from 'react'
import TableBody from './table-body'

function Table() { 
    return (
        <div className='table-container'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Composer</th>
                    <th>Name</th>
                    <th>Catalog</th>
                    <th>Key</th>
                </tr> 
            </thead>
            <TableBody/>
        </table>
        </div>
    )
}
 
export default Table
