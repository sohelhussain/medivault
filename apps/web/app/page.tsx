"use client"

import Footer from "@repo/ui/footer"
import HeroSection from "@repo/ui/heroSection"
import MedicalServices from "@repo/ui/medicalServices"
import Navbar from "@repo/ui/navBar"
import ServiceCards from "@repo/ui/serviceCard"
import Specialties from "@repo/ui/specialties"
import { useState } from "react"

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="h-screen w-screen bg-blue-500">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <HeroSection isOpen={isOpen} setIsOpen={setIsOpen} />
            <MedicalServices />
            <Specialties />
            {/* <ServiceCards /> */}
            <Footer />
        </div>
    )
}