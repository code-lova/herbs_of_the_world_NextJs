import React from 'react';
import Image from 'next/image';
import images from '@/public/images';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-1 lg:space-y-6 items-center space-x-2 p-16">
        <div className=" col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div className="flex-1 items-start">
                    <h1 className=" font-extrabold text-white text-xl mb-4">OUR COMPANY</h1>
                    <ul className="leading-loose text-white font-semibold text-pretty">
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Contact Us</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">About Us</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Competitive Horse Trainers</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Affiliate Program</li>
                        </a>

                    </ul>
                </div>
                <div className="flex-1 items-start">
                    <h1 className=" font-extrabold text-white text-xl mb-4">SHOP</h1>
                    <ul className="leading-loose text-white font-semibold text-pretty">
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Horse Supplements</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Dogs Supplements</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Human Supplements</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Rewards</li>
                        </a>

                    </ul>
                </div>
                <div className="flex-1 items-start">
                    <h1 className=" font-extrabold text-white text-xl mb-4">USER AREA</h1>
                    <ul className="leading-loose text-white font-semibold text-pretty">
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Sign Up</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Login</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Shipping Policy</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Return Policy</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Privacy Policy</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Terms of Service</li>
                        </a>

                    </ul>
                </div>
                <div className="flex-1 items-start">
                    <h1 className=" font-extrabold text-white text-xl mb-4">LEARN</h1>
                    <ul className="leading-loose text-white font-semibold text-pretty">
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Blog</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Horse Care Guide</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">FAQ&apos;s</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">Rewards</li>
                        </a>
                        <a href="" className="hover:underline">
                            <li className="mb-5 text-sm">How to use</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>

        <div className="col-span-2">
            <div className="item-center">
                <a href="{{ url('/') }}">
                    <Image src={images.logowhite} alt="Logo" className="object-cover w-[270px] h-[160px] mx-auto" />
                </a>
                <div className="max-w-[390px] mx-auto mb-4">
                    <p className="text-center text-white text-base leading-loose">Elementum nisi quis eleifend quam adipiscing. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin</p>
                </div>
                <div className="flex flex-row justify-center items-center space-x-3">
                    <div>
                        <a href="{{ url('/') }}">
                            <Image src={images.fb} alt="facebook" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                    <div>
                        <a href="{{ url('/') }}">
                            <Image src={images.twitterx} alt="twitter" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                    <div>
                        <a href="{{ url('/') }}">
                            <Image src={images.insta} alt="instagram" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                    <div>
                        <a href="{{ url('/') }}">
                            <Image src={images.youtube} alt="youtube" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>

  );
};

export default Footer
