import React from 'react'

import Header from '../Header'

const Home = () => {
    
    return (
        <>
        <Header/>
      <div>
          {/* auto slide images here */}
          <h2>Real People. Real Products.</h2>
          <button>Shop Now!</button>
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
      </>
    )
}

export default Home
