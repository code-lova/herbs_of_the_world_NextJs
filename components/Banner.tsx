import React from 'react';
import Image from 'next/image';
import { features } from '@/constants';
import Link from 'next/link';
import images from '@/public/images';

const Banner = () => {
    return (
        <div>
            <div className='hidden lg:flex items-center justify-between'>
    
                {features.map((item)=> (
                    <div key={item.name} className='flex flex-row items-center space-x-4 mt-8'>
                        <Image 
                            src={item.image}
                            width={22}
                            height={10}
                            alt={item.name}
                            className='object-contain'
                        />
                        <div>
                            <p className='text-black'>
                                {item.name}
                            </p>
                            <p className='text-slate-gray'>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

    
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-[4rem]'>
    
                <Link href="/">
                    <div className='cursor-pointer bg-herobg-gray rounded-sm px-4 py-1 h-auto w-full transition-all duration-500 ease-in-out xl:hover:bg-[#dbebd8]'>
                        <div className='mt-8'>
                            <div className='flex justify-center'>
                                <Image 
                                    src={images.horses} 
                                    width={276} 
                                    height={80}
                                    alt='horse herbs slides' 
                                    loading='lazy'
                                    className='object-fit mx-auto rounded-lg w-[270px] h-[370px]'
                                />
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-bold w-full text-xl font-palanquin'>Herbs Collection</h1>
                                <p className='font-extrabold text-4xl mb-1'>Horse herbs</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/">
                    <div className=' bg-herobg-gray rounded-sm px-4 py-1 h-auto w-full transition-all duration-500 ease-in-out xl:hover:bg-[#dbebd8]'>
                        <div className='mt-8'>
                            <div className='flex justify-center'>
                                <Image 
                                    src={images.human2} 
                                    width={250} 
                                    height={10}
                                    alt='human herbs' 
                                    loading='lazy'
                                    className='object-fit mx-auto rounded-lg w-[270px] h-[370px] '
                                />
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-bold w-full text-xl font-palanquin'>Herbs Collection</h1>
                                <p className='font-extrabold text-4xl'>Human Herbs</p>
                            </div>
                        </div>
                        
                    </div>
                </Link>
                <Link href="/">
                    <div className=' bg-herobg-gray rounded-sm px-4 py-1 h-auto w-full transition-all duration-500 ease-in-out xl:hover:bg-[#dbebd8]'>
                        <div className='mt-8'>
                            <div className='flex justify-center'>
                                <Image 
                                    src={images.doggz2} 
                                    width={250} 
                                    height={80}
                                    alt='pet herbs' 
                                    loading='lazy'
                                    className='object-fit mx-auto rounded-lg w-[270px] h-[370px]'
                                />
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-bold w-full text-xl font-palanquin'>Herbs Collection</h1>
                                <p className='font-extrabold text-4xl'>Pet Herbs</p>
                            </div>
                        </div>
                        
                    </div>
                </Link>
            </div>
           
        </div>
    )
}

export default Banner