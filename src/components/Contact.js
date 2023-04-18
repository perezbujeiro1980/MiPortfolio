import React from 'react';
//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from "../variants"
//carrousel
import SliderTail from './Carrousel/slider';
//astro
import astro from "../assets/astrocohete-unscreen.gif"
const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
<div className='flex flex-col lg:flex-row '>
{/* text */}
<motion.div
 variants={fadeIn("right", 0.3)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once: false, amount: 0.3
 }}
className='flex-1 flex justify-start items-center boxreco'>
  <div className=''>
    <h4 className='text-xl uppercase text-accent font-medium text-[32px] mb-2 tracking-wide'>Recomendaciones</h4>
    <h2 className='text-[40px] lg:text-[65px] leading-none mb-12'>Trabajemos<br/>Juntos!<img className="inline-block bg-contain bg-no-repeat  mix-blend-lighten " src={astro} width="130" /></h2>
    <a target="_blank" href='https://www.linkedin.com/in/raul-moyano/'>
    <button className="btn btn-lg">Contactame</button></a>
  </div>
</motion.div>
{/*form*/}
<motion.form
 variants={fadeIn("left", 0.3)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once: false, amount: 0.3
 }}
className='flex-1 rounded-2x1 flex flex-col gap-y-6 pb-24 items-start formulario'>
<SliderTail/>
</motion.form>
</div>
</div>
</section>;
};

export default Contact;

