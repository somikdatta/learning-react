import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <span className="font-bold">
                <Link to="/">
                    Shop        
                </Link>
            </span>

            <Navigation/>
        </header>
    )
}

export default Header;