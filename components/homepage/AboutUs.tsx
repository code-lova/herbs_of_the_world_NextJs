import React from 'react';
import Image from 'next/image';
import images from '@/public/images';

const AboutUs = () => {
  return (

    <div className="bg-green-900 w-full  md:max-w-[768px] lg:max-w-[1200px] rounded-xl mx-auto p-4 lg:p-14 md:px-8 lg:px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2 items-center">

            <div className="flex justify-center items-center w-full h-full lg:px-2">
                <Image
                    className="lazy object-fit w-full h-full rounded-md"
                    src={images.abtus}
                    alt="Loryhl Davis"
                    width="700"
                    height="700"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-col justify-center bg-white py-2 px-8 w-full h-full rounded-md">
                <h1 className="uppercase font-bold text-[34px] text-custom-green">Who We Are</h1>
                <div className=" mt-2 sub_text mb-8">
                    <p>
                        Herbs of the World is a company driven by Loryhl Davis,
                        a passionate Canadian herbalist with over 40 years of experience.
                    </p>
                    <p>
                        Specializing in holistic animal care, we offer over 300 herbal formulations
                        for horses, dogs, cats, and humans. From rescuing animals to advocating
                        for PMU horses and supporting Wild Mustang preservation, our mission is
                        to educate people on how to use herbs in our everyday lifestyle to help ourselves and our animals stay healthy.
                    </p>
                    <p>
                        Join us on our journey towards healthier, happier lives for all.
                        Explore our suggested traditional herbal formulations today.
                    </p>
                </div>

            </div>
        </div>
    </div>


  );
};

export default AboutUs
