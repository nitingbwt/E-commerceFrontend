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
import RecentlyView from './RecentlyView';
import OnsaleProduct from './OnsaleProduct';
import Header from './Header';
import Testshimpi from './Testshimpi';

const Home = () => {
  return (
    <>
    <Header />
    <Navbar />
    <HeroSlider />
    <ShopNow />
    <Products />
    <BestDeals />
    <BestSeller />
    <Poster />
    <RecentlyView />
    <Brand dataType="home" />
    <OnsaleProduct />
    <Testshimpi/>
    <Footer />
    </>
  )
}

export default Home