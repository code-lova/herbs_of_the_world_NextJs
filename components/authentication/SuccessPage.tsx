import React from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/public/images";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center justify-center">
            <Image 
                src={images.logodark} 
                width={120} 
                height={60} 
                alt='herb of the world logo'
                className='object-contain w-[98px] h-[80] md:w-24 '
            />
          <h1 className="text-2xl font-bold mb-1 text-center green_gradient">
            Please check your email for verification link
          </h1>
        </div>
        <Link href="/signin">
        <h2 className="text-base font-medium text-custom-green mb-6 text-center mt-8"> {" << "}Back to Login</h2>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
