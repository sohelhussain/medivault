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
    <section className="bg-white relative py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <div className="text-xs text-blue-500 font-semibold mb-2">MEDICAL</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Healthcare Solutions</h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Experience world-class healthcare services and solutions, 
              ensuring that you and your family receive the best possible 
              attention at an affordable rate.
            </p>
            <Link href="/services" className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300">
              Read More
            </Link>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative h-[350px] w-full">
              <Image
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_748,h_417/https://www.interimphysicians.com/wp-content/uploads/2023/04/3d-3-docs.png"
                alt="Healthcare Professionals"
                layout="fill"
                objectFit="contain"
                className="rounded-bl-[100px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div className={`fixed top-1/2 left-1/2 z-10 p-8 bg-gray-200 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 ${isOpen ? "" : "hidden"}`}>
        <div className='absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          <X size={20} />
        </div>
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                id="name"
                type="text" 
                name="name" 
                value={form.name} 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                value={form.email} 
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="doctor"
                    name="role"
                    value="DOCTOR"
                    checked={form.role === "DOCTOR"}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="doctor" className="ml-2 text-sm text-gray-700">Doctor</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="patient"
                    name="role"
                    value="PATIENT"
                    checked={form.role === "PATIENT"}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="patient" className="ml-2 text-sm text-gray-700">Patient</label>
                </div>
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition duration-300"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;