import React from 'react';
import Link from 'next/link';
import Nav from '@/components/nav';
import Hero from '@/components/hero';

const HomePage: React.FC = () => {
  return (
    <div className='container bg-white text-grey-800 max-w-none h-screen w-screen'>
      <Nav />
      <Hero />

        
    </div>
  );
};

export default HomePage;
