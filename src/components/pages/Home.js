import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import React from 'react';
import ThreeDObject from '../ThreeDObject';

function Home() {
  return (
    <>
        <HeroSection />
        <Cards/>
        <Footer/>
    </>
  );
}

export default Home;