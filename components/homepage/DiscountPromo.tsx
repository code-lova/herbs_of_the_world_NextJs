import React from 'react';
import Image from 'next/image';
import images from '@/public/images';

export const DiscountPromo = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12">
            <div className="items-start px-14 md:px-8 lg:px-6 xl:px-0">
                <h1 className="hero-text-gray uppercase font-bold text-[34px]">Herbs For Pets: <br/> Black Seed Oil for Dogs P50 </h1>
                <p className="sub_text mt-2">Do you need a natural herbal antibiotic for your dog™ Traditonal Plant Based, according to stories told anciently
                    Black Seed Oil is an herbs for pet product known for its antibiotic, anti-oxidant, anti-inflammatory and anticancer properties.</p>
                    <p className="heading_color font-bold text-lg mt-4 item-start">READ MORE..</p>
                <div className="flex flex-row  items-start space-x-6 mt-6">
                    <p className="text-gray-500 font-bold text-4xl line-through">$400</p>
                    <p className="heading_color font-bold text-4xl">$300</p>
                </div>

                <div className="flex flex-row items-start space-x-4 mt-4">
                    <div className="border border-green-900 rounded-md w-[60px] h-[60px] lg:w-[100px] lg:h-[80px] ">
                        <div className="flex flex-col items-center lg:text-center lg:mt-2">
                            <p className="heading_color font-extrabold text-base lg:text-xl mt-1" x-text="days">00</p>
                            <p className="sub_text sm:text-sm">Days</p>
                        </div>
                    </div>

                    <div className="border border-green-900 rounded-md w-[60px] h-[60px] lg:w-[100px] lg:h-[80px]">
                        <div className="flex flex-col items-center lg:text-center lg:mt-2">
                            <p className="heading_color font-extrabold text-base lg:text-xl mt-1" x-text="hours">00</p>
                            <p className="sub_text sm:text-sm">Hours</p>
                        </div>
                    </div>

                    <div className="border border-green-900 rounded-md w-[60px] h-[60px] lg:w-[100px] lg:h-[80px]">
                        <div className="flex flex-col items-center lg:text-center lg:mt-2">
                            <p className="heading_color font-extrabold text-base lg:text-xl mt-1" x-text="minutes">00</p>
                            <p className="sub_text sm:text-sm">Mins</p>
                        </div>
                    </div>

                    <div className="border border-green-900 rounded-md w-[60px] h-[60px] lg:w-[100px] lg:h-[80px]">
                        <div className="flex flex-col items-center lg:text-center lg:mt-2">
                            <p className="heading_color font-extrabold text-base lg:text-xl mb-1" x-text="seconds">00</p>
                            <p className="sub_text sm:text-sm">Secs</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <button className='bg-custom-green py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 text-white hover:font-extrabold transitioning uppercase text-[12px] sm:text-[14px] lg:text-[16px]'>
                        Shop now
                    </button>
                </div>
            </div>
            <div className="items-center mx-auto mt-16 lg:mt-0">
                <Image
                    src={images.countdown}
                    alt="Herbs for dogs"
                    className="object-cover w-auto h-auto"
                />

            </div>
        </div>
    );
};
