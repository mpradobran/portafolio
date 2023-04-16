import React from 'react';
//images
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between itens-center'>
        <a href='#'>
          <img src={Logo} width={120} alt='' />
        </a>
        <Link className='btn btn-sm cursor-pointer justify-center items-center pt-4' to="contact">Work with me</Link>

      </div>
    </div>
  </header>
  );
};

export default Header;
