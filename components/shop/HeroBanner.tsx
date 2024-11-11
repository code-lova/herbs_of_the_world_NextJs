import React from 'react'

interface titleProps {
  title: string;
}

const HeroBanner = ({ title }: titleProps) => {
  return (
    <div className='bg-green-50 w-full relative py-10'>
      <p className='text-center p-14 text-4xl uppercase font-extrabold green_gradient'>{title}</p>
    </div>
  )
}

export default HeroBanner