"use client";

import Link from "next/link"; 
import TourSectionsWithPackage from "./components/services/TourSectionsWithPackage";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section with Video/Image Background */}
      <section className="relative w-full h-[78vh]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 object-cover w-full h-full brightness-75"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-4xl px-8 mx-auto text-white">
          <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Welcome to Two Dollars Tours and Travel
          </h1>
          
          {/* Down Arrow */}
          <div
            className="flex justify-center items-center mt-8 animate-bounce cursor-pointer"
            onClick={() => document.getElementById("target-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Stats Box */}
        <div className="absolute bottom-0 right-0 z-10 p-6 bg-black/40 backdrop-blur-sm text-white max-w-md">
          <p className="text-xl">
            450 tour operators and DMCs in 70 countries trust Two Dollars Tourplan to run their businesses.
          </p>
          <Link href="/about">
            <button className="flex items-center mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 transition-colors text-white">
              FIND OUT WHY 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main id="target-section" className="container py-4 mx-auto">
        <div className="flex justify-center items-center h-full w-full">
          <p className="text-white text-4xl text-center font-bold">Our Services</p>
        </div>
        <TourSectionsWithPackage />
      </main>

      {/* Why Us Section */}
      {/* <div>
        <WhyUs />
      </div> */}
    </div>
  );
}
