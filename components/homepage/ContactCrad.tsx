import React from "react";
import Image from "next/image";
import images from "@/public/images";

const ContactCrad = () => {
  return (
    <div>
      <h1 className="text-center text-[34px] uppercase font-extrabold mb-12">
        Have Any Questions ?
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="p-6 item-start shadow-lg rounded-lg">
          <h1 className="text-green-900 font-extrabold text-xl py-8">
            Our Office Location
          </h1>
          <div className="flex flex-row items-center space-x-2 lg:justify-evenly lg:space-x-4">
            <Image
              src={images.location}
              alt="address"
              className="w-[40px] h-[40px]"
            />
            <p className="text-base sub_text">
              211 Lehner Valleys Apt. 287 Harrisstad
            </p>
          </div>
          <p className="py-6 sub_text">
            Tincidunt vitae semper quis lectus nulla. Viverra accumsan in nisl
            nisi scelerisque eu ultrices
          </p>
        </div>
        <div className="p-6 item-start shadow-lg rounded-lg bg-green-900">
          <h1 className="text-white font-extrabold text-xl py-8">
            Our Office Location
          </h1>
          <div className="flex flex-row items-center space-x-2 lg:justify-evenly lg:space-x-4">
            <Image
              src={images.location}
              alt="address"
              className="w-[40px] h-[40px]"
            />
            <p className="text-base text-white">
              211 Lehner Valleys Apt. 287 Harrisstad
            </p>
          </div>
          <p className="py-6 text-white">
            Tincidunt vitae semper quis lectus nulla. Viverra accumsan in nisl
            nisi scelerisque eu ultrices
          </p>
        </div>
        <div className="p-6 item-start shadow-lg rounded-lg">
          <h1 className="text-green-900 font-extrabold text-xl py-8">
            Our Phone
          </h1>
          <div className="flex flex-row items-center space-x-2 lg:justify-evenly lg:space-x-4">
            <Image
              src={images.location}
              alt="address"
              className="w-[40px] h-[40px]"
            />
            <p className="text-base sub_text">
              211 Lehner Valleys Apt. 287 Harrisstad
            </p>
          </div>
          <p className="py-6 sub_text">
            Tincidunt vitae semper quis lectus nulla. Viverra accumsan in nisl
            nisi scelerisque eu ultrices
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCrad;
