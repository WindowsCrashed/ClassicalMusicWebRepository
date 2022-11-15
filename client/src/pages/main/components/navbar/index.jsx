import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <header className='header'>
                    <div className='brand'>
                        <Link to='/home'>Classical Music Repository</Link>                     
                    </div>
                    <nav className='navigation'>
                        <ul>
                            <li>
                                <Link to='/search'>Search</Link>
                            </li>
                            <li>
                                <Link to='/add'>Add</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}
 
export default Navbar
