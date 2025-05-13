"use client";


import { FC } from 'react';
import Image from 'next/image';

const MedicalServices: FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm text-blue-500 font-medium mb-2">SERVICES</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Medical Services</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 relative">
            <div className="relative h-[400px] w-full">
              <Image
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_384,h_417/https://www.interimphysicians.com/wp-content/uploads/2023/05/Doc-2.png"
                alt="Doctor Illustration"
                layout="fill"
                objectFit="contain"
              />
              
              {/* Service bubbles */}
              {/* <div className="absolute top-1/4 left-1/4 bg-blue-100 p-3 rounded-full">
                <Image src="/images/eye-care-icon.png" alt="Eye Care" width={28} height={28} />
              </div>
              
              <div className="absolute top-1/2 left-1/6 bg-blue-500 p-3 rounded-full">
                <Image src="/images/cardiology-icon.png" alt="Cardiology" width={28} height={28} />
              </div>
              
              <div className="absolute bottom-1/4 left-1/3 bg-white shadow-md p-3 rounded-full">
                <Image src="/images/medicine-icon.png" alt="Medicine" width={28} height={28} />
              </div>
              
              <div className="absolute bottom-1/3 right-1/4 bg-white shadow-md p-3 rounded-full">
                <Image src="/images/dental-icon.png" alt="Dental" width={28} height={28} />
              </div> */}
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Dental Care Service</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Blanditiis quis odio voluptatum quasi reprehenderit 
              nesciunt deserunt quo asperiores unde dolorem 
              aspernatur iure beatae nisi laboriosam eos fugiat quaerat.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;