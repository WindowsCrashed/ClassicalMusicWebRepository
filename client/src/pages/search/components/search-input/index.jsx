import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './search-bar'
import Filter from './filter'
import { parseDataToQuery } from '../../../../utils'
import { useForm } from 'react-hook-form'

function SearchInput() {        
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
        
    const search = data => {
        const query = parseDataToQuery(data)
        navigate(`/search?${query}`)
        }

    return (
        <div className='form-container'>
            <form id="searchInput" action="" onSubmit={handleSubmit(search)}>  
                <div className='input-group'>
                    <SearchBar register={register}/>
                    <Filter register={register}/>
                </div>    
            </form>
        </div>
    )    
}
 
export default SearchInput