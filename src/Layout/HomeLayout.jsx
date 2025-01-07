import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Slider from '../components/Slider';
import { AuthContext } from '../AuthProvider/AuthProvider';

import img1 from '../assets/banner01.jpg'
// import img2 from '../assets/banner02.jpg'
import img2 from '../assets/ac3.jpg'
import img3 from '../assets/banner03.jpg'
// import img4 from '../assets/banner04.jpg'
import img4 from '../assets/ww3.jpg'
import StoryOnInstra from '../components/StoryOnInstra';
import HighestRated from '../components/HighestRated';
import Newsletter from '../components/Newsletter';
import CountCard from '../components/CountCard';
import Promotion1 from '../components/Promotions/Promotion1';



const slidesContent = [
  <div className="flex items-center justify-center w-fit text-white text-2xl">
    {/* Slide 1 */}

    <img 
    className='w-fit object-cover'
    src={img1} 
    alt="" />
  </div>,
  <div className="flex items-center justify-center text-white text-2xl">
    {/* Slide 2 */}

    <img 
    className='w-fit h-fit object-cover'
    src={img2} 
    alt="" />
  </div>,
  <div className="flex items-center justify-center text-white text-2xl">
    {/* Slide 3 */}

    <img 
    className='w-fit object-cover'
    src={img3} 
    alt="" />
  </div>,
  <div className="flex items-center justify-center text-white text-2xl">
    {/* Slide 3 */}

    <img 
    className='w-fit object-cover'
    src={img4} 
    alt="" />
  </div>,
];

const HomeLayout = () => {

  const { darkMode } = useContext(AuthContext);

  const themeMode = darkMode
    ? "bg-black text-white"
    : "bg-[#FFF5CD] text-black";


      useEffect(() => {
        // Smoothly scroll to the top when the component is mounted
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);



  return (
    <div className={`${themeMode} `}>

      <span   className='   bg-black     '></span>
      
      <Helmet>
        <title>Home - GameInsight</title>
      </Helmet>


      <main className={`py-2 ${themeMode}`}>
        <div>
        <Slider slides={slidesContent} autoplayDelay={3000} />
        </div>

        <div>
          <HighestRated></HighestRated>
        </div>


        <div>
          <StoryOnInstra></StoryOnInstra>
        </div>

        <div>
          <CountCard></CountCard>
        </div>

        <div>
          <Promotion1></Promotion1>
        </div>

        <div>
          <Newsletter></Newsletter>
        </div>

      </main>
    </div>
  );
};

export default HomeLayout;