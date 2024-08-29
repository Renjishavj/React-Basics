import React from 'react'
import Header from '../../Components/header'
import Banner from '../../Components/banner'
import SubHeader from '../../Components/subHeader'
import "../../assets/styles/Style.css"
function HomePage() {
  return (
    <div className='mainContainer'>
      <Header/>
        <SubHeader/>
     <Banner/>
      
    </div>
  )
}

export default HomePage
