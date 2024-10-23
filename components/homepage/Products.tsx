import React from 'react';
import Image from 'next/image';
import images from '@/public/images';

const Products = () => {
  return (
    <div>
        <div>
            <h1 className="text-center text-[34px] uppercase font-palanquin font-extrabold">Popular Products</h1>
            <div className="mt-4">
                <p className="mt-4 text-center mb-8 max-w-[300px] mx-auto">
                    Suscipit tellus mauris a diam maecenas sed enim ut sem.
                    Turpis egestas maecenas pharetra convallis posuere
                </p>
            </div>
        </div>

        <div className='flex item-center md:grid grid-cols-3 gap-2 relative overflow-x-auto'>
            <div className="flex-shrink-0 w-full flex flex-row items-center justify-around space-x-5 p-1 md:flex-col sm:flex-col">
                <div className="w-full h-[530px] max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <Image 
                            className="p-8 rounded-t-lg  object-contain mx-auto w-[300px] h-[350px]" 
                            src={images.liverup} alt="product image" 
                        />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Liver Up™ EQ32 | Horse Liver Detox for Energy</h5>
                        </a>
                        <div className="flex items-center mt-1 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                            <a href="#" className="bg-black text-white font-bold bg-yellow hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-shrink-0 w-full flex flex-row items-center justify-around space-x-5 p-1 md:flex-col sm:flex-col">
                <div className="w-full h-[530px] max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <Image 
                            className="p-8 rounded-t-lg  object-contain mx-auto w-[200px] h-[350px]" 
                            src={images.humanherb} alt="product image" 
                        />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Liver Up™ EQ32 | Horse Liver Detox for Energy</h5>
                        </a>
                        <div className="flex items-center mt-1 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                            <a href="#" className="bg-black text-white font-bold bg-yellow hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex-shrink-0 w-full flex flex-row items-center justify-around space-x-5 p-1 md:flex-col sm:flex-col">
                <div className="w-full h-[530px] max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <Image 
                            className="p-8 rounded-t-lg  object-contain mx-auto w-[200px] h-[350px]" 
                            src={images.petherb} alt="product image" 
                        />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Liver Up™ EQ32 | Horse Liver Detox for Energy</h5>
                        </a>
                        <div className="flex items-center mt-1 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                            <a href="#" className="bg-black text-white font-bold bg-yellow hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        


    </div>
  )
}

export default Products