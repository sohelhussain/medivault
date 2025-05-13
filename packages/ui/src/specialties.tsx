"use client";

import { FC } from 'react';
import Image from 'next/image';

const Specialties: FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm text-blue-500 font-medium mb-2">FEATURES</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Specialty</h2>
        </div>
        
        {/* Online Appointment */}
        <div className="bg-blue-500 rounded-xl p-8 mb-16 flex flex-col md:flex-row items-center">
          <div className="md:w-3/4 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="bg-white p-3 rounded-lg mr-4">
                <Image src="https://png.pngtree.com/png-vector/20250421/ourmid/pngtree-cartoon-doctor-with-clipboard-png-image_16070074.png" alt="Calendar" width={50} height={50} />
              </div>
              <h3 className="text-white font-bold text-xl">Online Appointment</h3>
            </div>
            <p className="text-white opacity-90 mb-6">
              Schedule your appointment online and avoid waiting times.
              Our easy-to-use system allows you to book your preferred 
              time slot with your chosen doctor.
            </p>
            <button className="bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-blue-50 transition duration-300">
              Learn more
            </button>
          </div>
          <div className="md:w-1/4 flex justify-center">
            <div className="relative h-[400px] w-[400px]">
              <Image
                src="https://png.pngtree.com/png-vector/20250210/ourmid/pngtree-female-and-male-doctors-standing-with-smartphones-in-a-3d-cartoon-png-image_15433575.png"
                alt="Stethoscope"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        
        {/* Appointment Schedules */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="text-sm text-blue-500 font-medium mb-2">TIME TABLE</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Appointment Schedules</h3>
            <p className="text-gray-600 mb-6 max-w-lg">
              Organizing your medical appointments has never been easier.
              Our calendar system helps you keep track of all your upcoming
              visits and reminds you when it's time for your next check-up.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
              Schedule
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-[250px] w-full">
              <Image
                src="/images/calendar-3d.png"
                alt="3D Calendar"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
