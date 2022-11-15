import React, { Component } from 'react'
import '../style.css'

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <header className='header'>
                    <div className='brand'>
                        <a href="menu.html">Classical Music Web Repository</a>                     
                    </div>
                    <nav className='navigation'>
                        <ul>
                            <li>
                                <a href="search.html">Search</a>
                            </li>
                            <li>
                                <a href="add.html">Add</a>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}
 
export default Navbar
