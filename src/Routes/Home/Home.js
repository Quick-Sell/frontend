import React, {useState, useEffect} from 'react'
import './Home.scss'
import Main from '../../resources/home_main.jpg'
import Main2 from '../../resources/home_main2.jpg'
import Main3 from '../../resources/home_main3.jpg'
import Second from '../../resources/home_second.jpg'

import Header from '../crossRouteComponents/Header'
import Footer from '../crossRouteComponents/Footer'

const Home = () => {

    const initalData = Main;

    const [mainImage, setMainImage] = useState(initalData)

    useEffect(() => {
      let sheet = document.styleSheets[0]
      if (mainImage === Main) {
        setTimeout(() => {

          
          // sheet.insertRule("@keyframes {}")
          setMainImage(Main2)
          document.getElementById("image2").style.animation = "fadeInPic 2s";
          
          setTimeout(() => {document.getElementById("image2").style.removeProperty("animation");}, 2500)
          setTimeout(() => {document.getElementById("image2").style.animation = "fadeOutPic 2s";}, 4500)
          // setTimeout(() => {document.getElementById("image2").style.removeProperty("animation");}, 6000)


          // document.getElementById("image2").style[] = "opacity 0s 1s ease-in"
          
          // document.getElementById("image2").style.transition = "opacity 2s ease-in"
          // document.getElementById("image2").style.opacity = "1"
          // document.getElementById("image2").style.removeProperty("animation")
        }, 5000)
      } else if (mainImage === Main2) {
        setTimeout(() => {
          setMainImage(Main3)
          document.getElementById("image3").style.animation = "fadeInPic 2s";
          
          
          
          setTimeout(() => {document.getElementById("image3").style.removeProperty("animation");}, 2500)
          setTimeout(() => {document.getElementById("image3").style.animation = "fadeOutPic 2s";}, 4500)
        }, 5000)
      } else if (mainImage === Main3) {
        setTimeout(() => {
          setMainImage(Main)
          document.getElementById("image1").style.animation = "fadeInPic 2s";
          
          setTimeout(() => {document.getElementById("image1").style.removeProperty("animation");}, 2500)
          setTimeout(() => {document.getElementById("image1").style.animation = "fadeOutPic 2s";}, 4500)
        }, 5000)
      }

    })
    
    return (
      <>
      <Header/>
        <div class="homeContainer">
       
      <div class="topHomeContainer">

        {
        mainImage === Main ? <img key={Date.now} class="topImage" id="image1" src={Main} alt="Real Airpods"/> 
        : mainImage === Main2 ? <img key={Date.now} class="topImage" id="image2" src={Main2} alt="Real Computer"/>
        : mainImage === Main3 ? <img key={Date.now} class="topImage" id="image3" src={Main3} alt="Real Fashion"/>
        : console.log("error")
      }


          <div class="topHomeTextDiv">

            {
              mainImage === Main ? <h2><span class="topHomeTextSecColor">REAL</span> People. <span class="topHomeTextSecColor">REAL</span> Products.</h2>
              : mainImage === Main2 ?  <h2><span class="topHomeTextSecColor">REAL</span> People. <span class="topHomeTextSecColor">REAL</span> Electronics.</h2>
              : mainImage === Main3 ?  <h2><span class="topHomeTextSecColor">REAL</span> People. <span class="topHomeTextSecColor">REAL</span> Fashion.</h2>
              : console.log("error")
            }
    
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
