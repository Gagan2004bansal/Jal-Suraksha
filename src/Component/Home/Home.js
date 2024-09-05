import React from 'react';
import Header from '../Header/Header';
import Header2 from '../Header/Header2';
import ImageSlider from '../Slider/ImageSlider';
import Service from '../Services/Service';
import Tender from '../Tender/Tender';
import JalWorks from '../JalWorks/JalWorks';
import Footer1 from '../Footer1/Footer1';

const Home = () => {
  return (
    <div>
        <Header/>
        <Header2/>
        <ImageSlider />
        <Tender/>
        <Service/>
        <JalWorks/>
        <Footer1/>
    </div>
  )
}

export default Home