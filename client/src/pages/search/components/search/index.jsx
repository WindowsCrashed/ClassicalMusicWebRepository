import React, { Component } from 'react'
import '../style.css'
import Table from '../table'
import SearchInput from '../search-input'

class Search extends Component {
    state = { }

    render() { 
        return (
            <React.Fragment>
                <main className='content content-search'>
                    <div className='title-container'>
                        <h1>Search for a piece in our repository</h1>
                    </div>
                    <SearchInput/>
                    <Table/>   
                </main>
            </React.Fragment>
        )
    }
}
 
export default Search
