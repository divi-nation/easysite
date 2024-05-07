import React from 'react'

export default function hero() {
  return (
    <div className='hero w-screen h-4/6 bg-blue-600 flex items-center justify-center flex-col' style={{
      backgroundImage: `url("/assets/mountain.jpg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'overlay'
  }}>
        
        <h4 className='text-7xl font-bold'>Boomarang UI Kit</h4>
        <p className='font-thin mt-4'>Do Something Fun</p>
  </div>
  

  )
}
