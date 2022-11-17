import React, { Component } from 'react'
import '../style.css'

class Search extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <main className='content content-search'>
                    <div className='title-container'>
                        <h1>Search for a piece in our repository</h1>
                    </div>
                    <div>
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
                            <tbody>
                                <tr>
                                    <td>Bach</td>
                                    <td>Violin Partita No. 2</td>
                                    <td>BWV 1004</td>
                                    <td>D minor</td>
                                </tr>
                                <tr>
                                    <td>Beethoven</td>
                                    <td>Sonata No. 23 &#40;Appassionata&#41;</td>
                                    <td>Op. 57</td>
                                    <td>F minor</td>
                                </tr>
                                <tr>
                                    <td>Chopin</td>
                                    <td>Piano Concerto No. 1</td>
                                    <td>Op. 11</td>
                                    <td>E minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                {/* <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr> */}
                                {/* <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr>
                                <tr>
                                    <td>Scriabin</td>
                                    <td>Sonata No. 2 &#40;Sonate-Fantaisie&#41;</td>
                                    <td>Op. 19</td>
                                    <td>G sharp minor</td>
                                </tr> */}
                                
                            </tbody>
                        </table>
                    </div>   
                </main>  
            </React.Fragment>
        )
    }
}
 
export default Search
