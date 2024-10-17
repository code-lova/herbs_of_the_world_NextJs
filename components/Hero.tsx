import React from 'react';
import Image from 'next/image';
import images from '@/public/images';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='relative py-4 md:py-8 lg:py-4 bg-opacity-50'>
        <div className='relative h-full'>
            <Image
                src={images.green}
                alt='hero image'
                className='object-cover w-full h-full hidden md:flex '
            />
            <div className="relative md:hidden flex">
                <Image
                    src={images.hero2}
                    alt='hero image'
                    className='object-cover w-full h-full'
                />
                {/* Dark overlay for small screens */}
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            </div>


           {/* Text positioned on the right for large screens */}
            <div className="absolute text-white top-1/4 right-4 xl:right-28 lg:right-16 lg:top-1/4 text-center lg:text-right px-4 lg:px-0 w-full lg:w-auto z-20">
                <p className='uppercase font-bold -mt-16 mb-4 text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] xl:text-[56px] leading-tight md:-mt-12 lg:-mt-20'>
                    Herbs of the World
                </p>
                <p className='px-2 uppercase font-light text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[32px] mb-4 lg:mb-6'>
                    Proven, Time Honored Formulations Since 1995
                </p>
                <p className='font-bold text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mb-2 px-2'>
                    We are a Natural Farm Store located in Salmon, Idaho, USA.
                </p>
                <p className='font-bold px-2 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mb-4'>
                    Herbs of the world has formulated over 300 herbal <br className="hidden lg:block"/> mixtures for sporting and show horses since 1997!
                </p>

                {/* Buttons */}
                <div className='lg:absolute lg:right-36 mt-4'>
                    <Link href="/products">
                    <div className='flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4 cursor-pointer'>
                        <button className='border border-white py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 font-semibold hover:font-extrabold transitioning  text-white uppercase text-[12px] sm:text-[14px] lg:text-[16px]'>
                        Rewards
                        </button>
                        <button className='bg-custom-green py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 text-white hover:bg-white hover:text-green-700 transitioning uppercase text-[12px] sm:text-[14px] lg:text-[16px]'>
                        Shop now
                        </button>
                    </div>
                    </Link>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Hero