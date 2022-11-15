import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

function Home() {
    return (
        <React.Fragment>
            <main className='content'>
                <div className='title-container'>
                    <h1>Classical Music Repository</h1>
                </div>
                <div className='sub-title-container'>
                    <h2>The place to find music that never gets old</h2>
                </div>
                <div className='btn-container'>
                    <Link className='btn' to='/search'>Browse repository</Link>
                </div>              
            </main>
        </React.Fragment>
    )
}
 
export default Home