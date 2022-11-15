import React, { Component } from 'react'
// import '../style.css'

class Search extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>Search for a piece in our repository</h1>

                <div>
                    <form id="searchInput" action="">
                        <div>
                            <span>Search by </span>
                            <select name="filter" id="">
                                <option value="composer">Composer</option>
                                <option value="name">Name</option>
                                <option value="catalog">Catalog</option>
                                <option value="key">Key</option>
                            </select>
                            <input name="text" type="text"/>
                            <button name="search" type="submit">Search</button>
                        </div>    
                    </form>
                </div>

                <table>
                    <thead></thead>
                    <tbody></tbody>
                </table>
            </React.Fragment>
        )
    }
}
 
export default Search
