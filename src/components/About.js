import React from 'react';
// count up
import CountUp from 'react-countup'
// intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1'>

            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>Passionate about technology and web design.</h3>
            <p className='mb-6'>I have collaborated in multidisciplinary teams, where I have learned to communicate
            effectively and to work together to achieve common goals. My goal is to continue learning and growing as a professional in
            this ever-evolving field</p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={-1} end={2} duration={3}/> : null} 
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/>
                Experiencie
              </div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={-1} end={4} duration={3}/> : null} +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br/>
                Completed
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <Link className='btn btn-lg cursor-pointer justify-center items-center pt-4' to="contact">Contact me</Link>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a> 
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
