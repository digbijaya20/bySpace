import { AppBar, Container } from '@material-ui/core'
import Head from 'next/head'
import NavBar from '../src/NavBar'
import Box from '@material-ui/core/Box';
import styles from '../styles/Home.module.css'
import BodyButter from '../src/BodyButter';
import WhatWeOffer from '../src/WhatWeOffer';
import BannerPage from '../src/BannerPage';
import CustomerReviews from '../src/CustomerReviews';
import Footer from '../src/Footer';
// import logo from '../public/HomePage/download.jpeg'


export default function Home() {
  return (
    <div >
     <NavBar/>
     
      <Box >
      <BannerPage />
        <BodyButter/>
        <WhatWeOffer/>
        {/* <img src={logo}/> */}
        <CustomerReviews/>
      </Box>
      <Footer/>
     
      </div>
  )
}


