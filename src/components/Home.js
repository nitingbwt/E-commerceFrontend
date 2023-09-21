import React from 'react';
import Navbar from './Navbar';
import HeroSlider from './HeroSlider';
import ShopNow from './ShopNow';
import Products from './Products';
import BestDeals from './BestDeals';
import Footer from './Footer';
import Brand from './Brand';
import BestSeller from './BestSeller';
import Poster from './Poster';
import Test from './Test';
// import Login from './Login';

const Home = () => {
  return (
    <>
    {/* <Login /> */}
    <Navbar />
    <HeroSlider />
    <Test/>
    <ShopNow />
    <Products />
    <BestDeals />
    <BestSeller />
    <Poster />
    <Brand />
    <Footer />
    </>
  )
}

export default Home