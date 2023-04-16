import React, { useState } from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
//email
import emailjs from '@emailjs/browser';

// const sendEmail = (event) => {
//   event.preventDefault();

//   emailjs.sendForm('service_pkksfo5','template_n6fgki7',event.target,'PrZqNgCgdLP4tCxRj')
//   .then(() => {
//     console.log('Email sent successfully');
//     setIsEmailSent(true);
//   })
//   .catch(error => {
//     console.log(error);
//   })
// }

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_pkksfo5',
        'template_n6fgki7',
        event.target,
        'PrZqNgCgdLP4tCxRj'
      )
      .then(() => {
        console.log('Email sent successfully');
        setIsEmailSent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
  <section className='py-12 lg:section' id="contact">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}                        
        className="flex-1 flex justify-start items-center">
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together!
            </h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form 
        variants={fadeIn('left',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        onSubmit={sendEmail}                                
        className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' name='user_name' placeholder='Your Name'/>  
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='email' name='user_email' placeholder='Your Email'/>  
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' name='user_message' placeholder='Your message'>
          </textarea>
          <button className='btn btn-lg'>Send Message</button>
          {isEmailSent && (
              <p className='text-green-500'>Email sent successfully!</p>
          )}
        </motion.form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
