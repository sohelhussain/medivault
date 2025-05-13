"use client";

import { FC } from 'react';
import Image from 'next/image';

interface Doctor {
  id: number;
  name: string;
  image: string;
  specialty?: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Mahmuda Bo",
    image: "/images/doctor-1.png",
    specialty: "Cardiologist"
  },
  {
    id: 2,
    name: "Nadia Siana",
    image: "/images/doctor-2.png",
    specialty: "Dermatologist"
  },
  {
    id: 3,
    name: "Yakoubv Halva",
    image: "/images/doctor-3.png",
    specialty: "Pediatrician"
  }
];

const DoctorCard: FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="text-center">
      <div className="bg-blue-100 rounded-3xl p-4 mb-4">
        <div className="relative h-[200px] w-full">
          <Image
            src={doctor.image}
            alt={doctor.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <h3 className="font-bold text-lg text-gray-800">{doctor.name}</h3>
      {doctor.specialty && (
        <p className="text-gray-500 text-sm">{doctor.specialty}</p>
      )}
    </div>
  );
};

const DoctorTeam: FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm text-blue-500 font-medium mb-2">TEAM</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Doctors</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorTeam;