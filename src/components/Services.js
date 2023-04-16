import React from 'react';
//icons
import {BsArrowUpRight} from 'react-icons/bs';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';

//services data
const services = [
  {
    name: 'Desktop Developer',
    description: 
    'My expertise in desktop development allows me to design and develop desktop applications that are efficient, user-friendly, and customized to meet specific business requirements.',
    // link: 'Learn more',
  },
  {
    name: 'FrontEnd Developer',
    description: 
    'I specialize in creating intuitive and engaging user interfaces that enhance the user experience. I am able to develop responsive and dynamic web applications.',
    // link: 'Learn more',
  },
  {
    name: 'UI/UX Design',
    description: 
    'With my knowledge in design thinking, user research, and prototyping, I am able to create user-centered designs that meet the needs of todays digital world.',
    // link: 'Learn more',
  },

]

const Services = () => {
  return (
  <section className='section' id="services">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image*/}
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}        
        className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[500px] mb-16'>
           I develop visually stunning interfaces that enhance the user experience. 
          </h3>
          {/* <button className='btn btn-sm'>See my work</button> */}
        </motion.div>
        {/* services */}
        <motion.div 
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}                
        className='flex-1'>
          {/* services list  */}
          <div>
            {services.map((service,index) => {
              //destructure service
              const {name, description, link} = service;
              return (
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'> <BsArrowUpRight/> </a>
                  <a href='#' className='text-gradient text-sm'> {link} </a>
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
