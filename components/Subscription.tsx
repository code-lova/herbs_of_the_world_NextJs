import React from 'react';

const Subscription = () => {
    return (
        <div>
            <div className="mt-2 text-black font-extrabold text-xl">
                <div className="w-full mx-auto flex flex-col space-y-8 xl:space-y-0 xl:flex-row justify-center items-center">
                    <div className="px-6 lg:px-1">
                        <p className="text-center">Subscribe for the latest health advice, insights, and discounts!</p>
                    </div>
                    <div className="px-1">
                        <form action="" className="flex flex-col md:flex-row lg:flex-row gap-2">
                            <input type="text" placeholder="Full name" className="form-control rounded-lg"/>
                            <input type="email" placeholder="email" className="form-control rounded-lg mb-5 md:mb-0"/>
                            <button className="form-button text-[16px]">Join Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
