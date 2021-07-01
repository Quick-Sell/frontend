import React from 'react'
import './Home.scss'
import Main from '../../resources/home_main.jpg'

import Header from '../crossRouteComponents/Header'

const Home = () => {
    
    return (
        <div class="HomeContainer">
        <Header/>
      <div class="topHomeContainer">
          <img class="topImage" src={Main} alt="Real Airpods"/>
          <div class="topHomeTextDiv">
            <h2><span class="topHomeTextSecColor">REAL</span> People. <span class="topHomeTextSecColor">REAL</span> Products.</h2>
            <button class="topHomeButton">EXPERIENCE <span class="topHomeTextSecColor">REAL</span> SHOPPING</button>
          </div>
      </div>
      <div>
          <h2>How it Works</h2>
          <div>
              <img></img>
              <h3>Sign Up</h3>
          </div>
          <div>
              <img></img>
              <h3>Sell Things You Don't Want</h3>
          </div>
          <div>
              <img></img>
              <h3>Buy What You DO Want!</h3>
          </div>
      </div>
      </div>
    )
}

export default Home
