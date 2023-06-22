import React from 'react'
import Banner from '../components/Banner'
import ContactBanner from '../components/ContactBanner'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Latest from '../components/Latest'
import Navbar from '../components/Navbar'
import PhotoGrid from '../components/PhotoGrid'

const Home = () => {
  return (
    <div>
        <Navbar/>
          <Banner/>
          <Featured/>
          <PhotoGrid/>
          <Latest/>
          <ContactBanner/>
        <Footer/>
    </div>
  )
}

export default Home