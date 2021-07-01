import React from 'react'
import './crossRouteComponents.scss'
import Logo from '../../resources/logo.png'

const Header = () => {
    return (
        <div class="header">
            <nav>
                <img src={Logo} alt="logo"/>
                <h1>QuickSell</h1>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">STORE</a></li>
                    <li><a href="/">ACCOUNT</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
