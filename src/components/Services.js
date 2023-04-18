import React from 'react';
//icon
import {BsArrowUpRight } from "react-icons/bs";
//icon
import {motion} from "framer-motion"
//variant
import {fadeIn} from "../variants"
//services data
//skilss
import skills from "../assets/estealv.png"
const services = [
  {
Name:"Universidad Tecnologica Nacional",
Description:"Tecnico Universitario en Programacion, Carrera acreditada por CONEAU Res. n° 1147/07",
// Link:"Ver Mas"

  },
  {
    Name:"MindHub LA",
    Description:"Desarrollador Full Stack MERN. | HTML5 | CSS3 | JavaScript | MongoDB | Express | React | React Native | NodeJS | Redux Toolkit",
    // Link:"Ver Mas"
    
      },

          {
            Name:"CoderHouse",
            Description:"Diseño UX/UI, es la disciplina de crear productos digitales que sean simples, intuitivos, eficientes y visualmente atractivos para el usuario final.",
            // Link:"Ver Mas"
            
              }
]



const Services = () => {
  return (
   <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row container-skil'>
        {/* text y image*/}
        <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3
      }}
         className='flex-1  lg:bg-bottom lg:items-center bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 '>
          <h2 className='h2 text-accent mb-6'>Skills y Estudios</h2>
  
<img className= "skills" width="400px"  src={skills}/>

        </motion.div>
             {/* services */}
             <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3
              }}
             className='flex-1'>
              {/* services list */}
             <div>
              {services.map((service, index)=>{
                //destructure service
                const {Name, Description, Link} = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[39px] flex' key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{Name}</h4>
                        <p className='font-secondary leading-tight'>{Description}</p>
                      </div>
                    <div className='flex flex-col flex-1 items-end'>
                  
                      <a href='#' className='text-gradient text-sm'>{Link}
                      </a>
                    </div>
                  </div>
                );
              })}
             </div>
              </motion.div>
      </div>
    </div>
    
    </section>
  );
  };

export default Services;
