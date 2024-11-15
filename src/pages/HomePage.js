import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeatureListing from '../components/FeatureListing';
import AboutUs from '../components/AboutUs';
import Highlights from '../components/Highlights';
import Service from '../components/Service';
import Projects from '../components/Projects';
import Newsletter from '../components/Newsletter';


const HomePage = () => {
  return (
    <>
     <HeroBanner />    
     <FeatureListing />  
     <AboutUs/>
     <Highlights />
     <Service/>
     <Newsletter />
     <Projects />
    </>
  );
};

export default HomePage;
