"use client";

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from "react";

export interface NavbarProps {
    isOpen?: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}


const Navbar: FC<NavbarProps> = ({ isOpen, setIsOpen }) => {

  return (
    <nav className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-8 h-8 mr-2">
            <Image
              src="/images/logo.png" 
              alt="MediCare Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <span className="text-blue-500 font-semibold text-xl">MediCare</span>
        </Link>
      </div>
      
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
        <Link href="/about" className="text-gray-600 hover:text-blue-500">About</Link>
        <Link href="/services" className="text-gray-600 hover:text-blue-500">Services</Link>
        <Link href="/doctors" className="text-gray-600 hover:text-blue-500">Doctors</Link>
        <Link href="/blog" className="text-gray-600 hover:text-blue-500">Blog</Link>
        <Link href="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
      </div>
      
      <div>
        <div onClick={() => setIsOpen && setIsOpen(!isOpen)} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition duration-300">
          Appointment
        </div>
      </div>
    </nav>
  );
};

export default Navbar;