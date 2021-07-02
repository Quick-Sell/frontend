import React from 'react'
import './Home.scss'
import Main from '../../resources/home_main.jpg'
import Second from '../../resources/home_second.jpg'

import Header from '../crossRouteComponents/Header'
import Footer from '../crossRouteComponents/Footer'

const Home = () => {
    
    return (
      <>
      <Header/>
        <div class="homeContainer">
       
      <div class="topHomeContainer">
          <img class="topImage" src={Main} alt="Real Airpods"/>
          <div class="topHomeTextDiv">
            <h2><span class="topHomeTextSecColor">REAL</span> People. <span class="topHomeTextSecColor">REAL</span> Products.</h2>
            <button class="topHomeButton">EXPERIENCE <span class="topHomeTextSecColor">REAL</span> SHOPPING</button>
          </div>
      </div>

        <div class="fillerDiv">

        </div>

        <div class="middleHomeContainer">
          <img class="middleImage" src={Second} alt="Real Airpods"/>
          <div class="middleHomeTextDiv">
            <h2>Sell what you don't need, <br/> so you can buy <br/> what you do.</h2>
            <button class="middleHomeButton">EXPERIENCE <span class="middleHomeTextSecColor">REAL</span> SELLING</button>
          </div>
      </div>
     
      </div>
       <Footer />
       </>
    )
}

export default Home
