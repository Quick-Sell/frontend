import React from 'react'
import './Store.scss';
import Product from '../../resources/product_example.jpg'

import Header from '../crossRouteComponents/Header'

const Store = () => {
    return (
        <div>
            <Header/>
            <div class="storeContainer">

               <div class="topStoreContainer">
                    <h2>blah blah blah blah blah blah blah blah blah blah blah blah </h2>
               </div>
               <div class="storeCategoryContainer">
                    <h3>ALL</h3>
                    <h3>TRENDING</h3>
                    <h3>ELECTRONICS</h3>
                    <h3>FASHION</h3>
                    <h3>COLLECTABLES</h3>
                    <h3>BOOKS, MOVIES, MUSIC</h3>
                    <h3>AUTO</h3>
                    <h3>HOME, GARDEN</h3>

               </div>
               <div class="middleStoreProducts">
                    <div class="productCard">
                        <div class="topCard">
                            <h3 class="productName">Example Product Name</h3>
        
                        </div>
                        <img src={Product}/>
                        <div class="bottomCard">
                            <h3 class="productPrice">$100.99</h3>
                            <h3 class="productCategory">ELECTRONICS</h3>
                        </div>
                    </div>

                    <div class="productCard">
                        <div class="topCard">
                            <h3 class="productName">Example Product Name</h3>
        
                        </div>
                        <img src={Product}/>
                        <div class="bottomCard">
                            <h3 class="productPrice">$100.99</h3>
                            <h3 class="productCategory">ELECTRONICS</h3>
                        </div>
                    </div>

                    <div class="productCard">
                        <div class="topCard">
                            <h3 class="productName">Example Product Name</h3>
        
                        </div>
                        <img src={Product}/>
                        <div class="bottomCard">
                            <h3 class="productPrice">$100.99</h3>
                            <h3 class="productCategory">ELECTRONICS</h3>
                        </div>
                    </div>
               </div>

            </div>
            
        </div>
    )
}

export default Store
