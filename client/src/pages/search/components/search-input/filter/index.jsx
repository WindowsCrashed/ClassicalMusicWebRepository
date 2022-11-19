import React from 'react'

function Filter({register}) {
    return (
        <div className='filter-container'>
            <span>Search by:</span>
            <select className='select-hover' name="filter" id="" {...register('filter')}>
                <option value="composer">Composer</option>
                <option value="name">Name</option>
                <option value="catalog">Catalog</option>
                <option value="key">Key</option>
            </select>
        </div>
    )
}
 
export default Filter;