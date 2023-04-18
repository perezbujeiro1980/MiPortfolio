import React from 'react';
//count
import CountUp from 'react-countup';
//intersection observer
import {useInView} from "react-intersection-observer";
//motion
import {motion} from "framer-motion";
//variant
import {fadeIn} from "../variants";

const About = () => {
const [ref, inView] = useInView({
  threshold:0.5,
});
  return (
  
  <section className='section' id='about' ref={ref}>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      {/* img */}
      <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3
      }}
       className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
      
        </motion.div>
       {/*text*/}
       <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3
          }}
       className='flex-1'>
        <h2 className='h2 text-accent'>Sobre mi.</h2>
        <h3 className='h3 mb-4'>Soy desarrollador Web y Mobile.
        </h3>
        <p className='mb-6 bold text-[20px]'>Soy técnico Universitario en Programación, para poder potenciar mi stack de habilidades realicé un intensivo Bootcamp en MindHub LA con más de 1200 hs aprendiendo las nuevas tecnologías más requeridas en el mercado y con una simulación de ambiente de trabajo 100% real. Actualmente, trabajo para Andes Salud como desarrollador Front-end. Soy muy responsable, constante, predispuesto y creativo a la hora de trabajar, puedo adaptarme versátilmente a proyectos desafiantes que me permitan dar lo mejor de mí y seguir aprendiendo.
        </p>

<div className='flex gap-x-8 items-center'>
  <a href='#work'className='text-gradient btn-link text-[20px]'>Ir a Porftolio</a>
</div>
       </motion.div>
    </div>
  </div>
    </section>
  );
};

export default About;
