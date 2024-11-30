'use client';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ProductDetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    price: string;
    image: string;
    description: string;
    ratings: number;
  } | null;
}

export default function ProductDetailDrawer({
  isOpen,
  onClose,
  product,
}: ProductDetailDrawerProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out">
              <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="absolute -inset-2.5" />
                  <span className="sr-only">Close panel</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold text-gray-900">
                    {product?.title || 'Product Details'}
                  </DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {product ? (
                    <div className="space-y-4">
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="rounded-t-lg object-cover w-[200px] h-[200px] mx-auto"
                        width={200}
                        height={200}
                      />
                      <p className="text-gray-700 text-lg">{product.description}</p>
                      <p className="text-xl font-bold text-gray-900">Price: ${product.price}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={i < product.ratings ? 'text-yellow-500' : 'text-gray-300'}
                          >
                            ★
                          </span>
                        ))}
                        <span className="ml-2 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100">
                          {product.ratings.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">No product details available.</p>
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
