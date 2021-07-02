import React from 'react'
import './crossRouteComponents.scss'

const Footer = () => {
    return (
        <div class='footer'>
            <div class="footerContent">
                <div class="footerBrand">
                    <h2>QuickSell</h2>
                    <h3>REAL People. REAL Products.</h3>
                </div>
                <div class="footerExplore">
                    <h3>Explore</h3>
                    <a href="/">Home</a>
                    <a href="/">Store</a>
                    <a href="/">Account</a>
                </div>
                <div>
                    <h3>Contact</h3>
                    <h3>123 Example St.</h3>
                    <h3>LA, California</h3>
                    <h3>contact@quicksell.com</h3>
                    <h3>123-456-7890</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
