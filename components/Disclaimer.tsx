import React from "react";

const Disclaimer = () => {
  return (
    <div className="mt-8">
      <div className="mt-2">
        <h1 className="text-center hero-text-gray uppercase font-bold text-[24px] underline">
          Google Ratings and Review/Disclaimer
        </h1>
      </div>
      <div className="mt-4 px-6 text-center justify-center max-w-[800px] mx-auto">
        <p className='text-[16px]'>
          Herbs of the World bases our formulas on the herbal folklore of our
          ancestors and the traditions they may have used. Herbal formulas
          designed to support herbivores and omnivores as per ancient knowledge.
          Testimonials are for information only. 
        </p>
        <p className='text-[16px] mt-4'>
         Testimonials are written by real customers who use herbal formulas and represent their own
          experiences. <br />The information on our website is not a substitute for
          professional veterinary care.If your animal needs a Vet, consult a
          Vet. These observations are not guaranteed,and are not medically
          proven. Results may not be the same for other animals.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
