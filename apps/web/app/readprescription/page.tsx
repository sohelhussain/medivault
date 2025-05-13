"use client";
import { FC, FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { NavbarProps } from "@repo/ui/navBar";
import { X } from 'lucide-react';
import axios from 'axios';

const HeroSection: FC<NavbarProps> = ({ isOpen, setIsOpen }: NavbarProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "", // Changed from separate doctor/patient fields to a single role field
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", form); // Added /api prefix
      console.log(response.data);
      // Add success handling here (reset form, show success message, etc.)
    } catch (error) {
      console.error("Signup error:", error);
      // Add error handling here
    }
  };

  return (
    <div className='bg-zinc-800 h-screen'>
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
        <div onClick={() => {}} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition duration-300">
          Video Call
        </div>
      </div>
            </nav>

            <div className="w-full h-screen bg-zinc-500 mt-5 relative">
                <div className='w-2 rounded-md absolute left-1/2 h-screen bg-zinc-300'></div>
                <div className='w-full p-5 flex justify-center'>
                  <div className='w-96 p-3 h-32 bg-red-300  -translate-x-1/2 rounded-br-xl rounded-bl-xl rounded-tl-xl'>
                  <h2 className='text-xl capitalize font-bold'>feaver</h2>
                  <div className=''>
                  <h5 className='text-lg'>Meddicine</h5>
                  <h6 className='pl-3'>acetaminophen, Crocin</h6>
                  <h6 className='pl-3'>ibuprofen</h6>
                  </div>
                  </div>
                </div>
                <div className='w-full p-5 mt-5 flex justify-center'>
                  <div className='w-96 p-3 h-32 bg-red-300 translate-x-1/2 rounded-br-xl rounded-bl-xl rounded-tr-xl'>
                  <h2 className='text-xl capitalize font-bold'>typhoid</h2>
                  <div className=''>
                  <h5 className='text-lg'>Meddicine</h5>
                  <h6 className='pl-3'>ceftriaxone, azithromycin</h6>
                  <h6 className='pl-3'>ciprofloxacin</h6>
                  </div>
                  </div>
                </div>
            </div>
    </div>
  );
};

export default HeroSection;