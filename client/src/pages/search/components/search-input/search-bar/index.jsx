import React from 'react'

function SearchBar({register}) {
    return (
        <div className='search-container'>
            <input className='search-bar' name="text" type="text" {...register('text')}/>
            <button className='btn-right btn-hover' type="submit">Search</button>  
        </div>
    )
}
 
export default SearchBar
