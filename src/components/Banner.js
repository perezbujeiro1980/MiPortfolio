import React from 'react';
//image
import Image from "../assets/nuevaperfil1.png"
//icons
import {FaGithub , FaLinkedin} from "react-icons/fa"
//type animation 
import { TypeAnimation } from 'react-type-animation';
//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from "../variants"
import { FaInstagram } from 'react-icons/fa';
//gif
import astro2 from "../assets/cohete-unscreen1.gif"

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'> 
        <motion.h1 
        variants={fadeIn("up", 0.3)} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount: 0.7}} 
        className='text-[55px] font-bold leading-[0.8] lg:text-[95px]'>
          RAÚL <span>ANDRÉS</span>
          </motion.h1>
          <motion.div
          variants={fadeIn("up", 0.3)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount: 0.4}}  
          className='mb-6 text-[36px] lg:text-[60px] font-secondary
          font-semibold uppercase leading-[1]'>
            <span className=' text-white mr-4'>Soy</span>
            <TypeAnimation sequence={[
              "Developer",
              2000,
              "Front-end",
              2000,
              "Back-end",
              2000,
              "UX/UI_",
              2000,
            
            ]}
            speed={50}
            className="text-accent"
            wrapper='span'
            repeat={Infinity}
            />
          
          </motion.div>  
          <motion.p
          variants={fadeIn("up", 0.3)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount: 0.7}} 
          className='mb-8 max-w-lg mx-auto lg:mx-0 text-[22px]'>Estoy seguro que puedo aplicar mis habilidades a tus nuevos proyectos!<img className="inline-block bg-contain bg-no-repeat  mix-blend-lighten " src={astro2} width="63" /></motion.p>
        <motion.div
        variants={fadeIn("up", 0.6)} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount: 0.7}} 
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
         <a target="_blank" href='https://www.linkedin.com/in/raul-moyano/'> <button className='btn btn-lg'>
            Contactame
          </button></a>
          <a href='#work' className='text-gradient btn-link'>
            Mi Porfolio
            </a>
        </motion.div>
            {/* social */}
            <motion.div
            variants={fadeIn("up", 0.7)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.7}} 
            className='flex text-[20] gap-x-10 max-w-max mx-auto lg:mx-0'>
              <a target="_blank" href='https://www.instagram.com/andiimoyano/'>
                <FaInstagram />
              </a>
              <a target="_blank" href='https://github.com/Raulmoyano2970'>
                <FaGithub />
              </a>
              <a target="_blank" href='https://www.linkedin.com/in/raul-moyano/'>
                <FaLinkedin />
              </a>
            </motion.div>
        </div>
          {/* image */}
        <motion.div
        variants={fadeIn("down", 0.5)} 
        initial="hidden" 
        whileInView={"show"} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'> 
          <img className='imageInitial ' src={Image} alt=""/>
           </motion.div>
      </div>
    </div>
    </section>
  );

};

export default Banner;
