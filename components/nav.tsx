// components/Nav.tsx

import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className='p-4 grid grid-cols-2 absolute top-0 left-0 w-screen'>
        <span>
            Logo
        
        </span>
        <span className='flex items-center justify-around'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        {/* Add more navigation links as needed */}

        </span>
     
    </nav>
  );
};

export default Nav;
