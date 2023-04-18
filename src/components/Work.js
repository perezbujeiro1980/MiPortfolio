import React from 'react';
//motion
import { motion } from "framer-motion"
//variants
import { fadeIn } from "../variants"
//img
import img1 from "../assets/martinesta.png"
import img2 from "../assets/REMAKE.PNG"
import img3 from "../assets/smokyyyy.PNG"


const Work = () => {
  return <section className='section' id='work'>
<div className='container mx-auto'>
  <div className='flex flex-col lg:flex-row gap-x-10'>
  <motion.div
     variants={fadeIn("right", 0.3)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once: false, amount: 0.3
     }}
  className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
    {/* text */}
    <div>
      <h2 className='h2 leading-tight text-accent'>Mi<br/>Portfolio</h2>
      <p className='max-w-sm mb-16 text-[20px]'>Estos proyectos se pueden apreciar también en mi GitHub.
      </p>
      <a target="_blank" href='https://github.com/Raulmoyano2970'>
      <button className='btn btn-sm'>Ver en GitHub</button></a>
    </div>
    {/* image */}
    <a href='#'>
    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
      {/* overlays */}
      <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
      {/* img */}
      <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt=""/>
      {/* pretitle */}
      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
        <span className='text-gradient text-[20px]'>Cuyo Birding</span></div>
        {/*title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3x1 text-white'>Blog Personal</span>
    </div>
    </div>
    </a>
  </motion.div>

  {/* SEGUNDA CAJA */}
  <motion.div
     variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3
      }}
  className='flex-1 flex flex-col gap-y-10 cajados'>
    {/* image */}
    <a href='#'>
    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
      {/* overlays */}
      <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
      {/* img */}
      <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt=""/>
      {/* pretitle */}
      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
        <span className='text-gradient text-[20px]'>Shoppy</span></div>
        {/*title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3x1 text-white'>Tienda Virtual de computacion</span>
    </div>
    </div>
    </a>
    {/* IMAGE TERCERA CAJA */}
    <a href='#'>
    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
      {/* overlays */}
      <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
      {/* img */}
      <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt=""/>
      {/* pretitle */}
      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
        <span className='text-gradient text-[20px]'>Smoky</span></div>
        {/*title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3x1 text-white'>Tienda Virtual de Vapers</span>
    </div>
    </div>
    </a>
  </motion.div>

  </div>
</div>
  </section>;
};

export default Work;
