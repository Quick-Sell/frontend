import React, {useState, useEffect} from 'react'
import './Home.scss'
import flatArt from '../../resources/fhome_flatart.png'
import Second from '../../resources/home_second.jpg'

import Header from '../crossRouteComponents/Header'
import Footer from '../crossRouteComponents/Footer'

const Home = () => {


   
    
    return (
      <>
      <Header/>
        <div class="homeContainer">
       
      <div class="topHomeContainer">

       
        <img src={flatArt} class="topImage"/>

          <div class="topHomeTextDiv">
{/* 
            {
              mainImage === Main ? <h2><span class="topHomeTextSecColor">REAL</span> People. <span class="topHomeTextSecColor">REAL</span> Products.</h2>
              : mainImage === Main2 ?  <h2><span class="topHomeTextSecColor">REAL</span> People. <span class="topHomeTextSecColor">REAL</span> Electronics.</h2>
              : mainImage === Main3 ?  <h2><span class="topHomeTextSecColor">REAL</span> People. <span class="topHomeTextSecColor">REAL</span> Fashion.</h2>
              : console.log("error")
            } */}
            <h2>Real <span>People.</span><br/> Real <span>Products.</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet massa.</p>
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
