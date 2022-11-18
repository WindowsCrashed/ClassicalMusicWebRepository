import React, { Component } from 'react'
import '../style.css'
import TableBody from '../table-body'

class Search extends Component {
    state = { }

    render() { 
        return (
            <React.Fragment>
                <main className='content content-search'>
                    <div className='title-container'>
                        <h1>Search for a piece in our repository</h1>
                    </div>
                    <div className='form-container'>
                        <form id="searchInput" action="">  
                            <div className='input-group'>
                                <div className='search-container'>
                                    <input className='search-bar' name="text" type="text"/>
                                    <button className='btn-right btn-hover' name="search" type="submit">Search</button>  
                                </div>
                                <div className='filter-container'>
                                    <span>Search by:</span>
                                    <select className='select-hover' name="filter" id="">
                                        <option value="composer">Composer</option>
                                        <option value="name">Name</option>
                                        <option value="catalog">Catalog</option>
                                        <option value="key">Key</option>
                                    </select>
                                </div>
                            </div>    
                        </form>
                    </div>
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
                </main>
            </React.Fragment>
        )
    }
}
 
export default Search
