import React, { Component } from 'react'
// import '../style.css'

class Add extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <main>
                    <h1>Add a new piece to our repository</h1>

                    <div>
                        <form id="addInput" action="search.html">
                            <div>
                                <label>Composer</label>
                                <input name="composer" type="text"/>
                                <label>Name</label>
                                <input name="name" type="text"/>
                                <label>Catalog</label>
                                <input name="catalog" type="text"/>
                                <label>Key</label>
                                <input name="key" type="text"/>
                                <input type="submit" value="Add"/>
                            </div>
                        </form>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
 
export default Add
