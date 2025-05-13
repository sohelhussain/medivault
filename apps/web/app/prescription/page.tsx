"use client"

import Footer from "@repo/ui/footer";
import Navbar from "@repo/ui/navBar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { Program, Idl } from '@anchor/program'; // Ensure consistent import of Program type

export default function Home() {

  // const [program, setProgram] = useState<Program<Idl> | null>(null);

  // useEffect(() => {
  //   // Import anchor program dynamically on client side to avoid SSR issues
  //   const loadProgram = async () => {
  //     try {
  //       const anchorModule = await import('@anchor/program'); // Ensure consistent dynamic import
  //       setProgram(anchorModule.default);
  //     } catch (error) {
  //       console.error('Error loading anchor program:', error);
  //     }
  //   };
    
  //   loadProgram();
  // }, []);

  // const createPrescription = async () => {
  //   try {
  //     if (program?.methods?.createPrescription) {
  //       await program.methods
  //         .createPrescription('Prescription Data')
  //         .accounts({
  //           // specify required accounts
  //         })
  //         .rpc();
  //       console.log('Prescription created successfully');
  //     } else {
  //       throw new Error('Program methods or createPrescription is undefined');
  //     }
  //   } catch (error) {
  //     console.error('Error creating prescription:', error);
  //   }
  // };

  return (
    <div id="main">
      <div className="bg-zinc-800 h-screen">
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
      
      <div className="flex space-x-4">
        <div onClick={() => {}} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition duration-300 cursor-pointer">Patient Medical Record</div>
        <div onClick={() => {}} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition duration-300 cursor-pointer">
          Video Call
        </div>
      </div>
            </nav>
                          <h1 className='text-white mt-10'>Prescription of Patient:- Sohel</h1>
        <div className="max-w-7xl mx-auto py-16 mt-20 px-4 rounded-md sm:px-6 lg:px-8 bg-zinc-700">
          <form>
            <div className="flex w-full gap-4">
            <div className="w-1/2">
              <label htmlFor="name" className="block text-white text-sm font-medium mb-1">Name of Deceased</label>
              <input type="text" className="w-full px-4 py-2 border bg-zinc-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
            </div>
            <div className="w-1/2">
              <label htmlFor="age" className="block text-white text-sm font-medium mb-1">Age</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 bg-zinc-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Age" />
            </div>
            </div>
            <div className="mt-4">
              <textarea className="w-full h-96 px-4 py-2 bg-zinc-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write Prescription"></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300">Create Prescription</button>
          </form>
        </div>
      </div>
        <Footer />
    </div>
  );
}