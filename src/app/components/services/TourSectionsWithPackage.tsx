"use client"; // Required for useRouter in App Router

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import br from '../../assets/breakfast.jpg';
import br2 from '../../assets/br2.jpg';
import fat from '../../assets/fat.jpg';
import ac from '../../assets/ac3.jpg';
import v from '../../assets/v1.jpg'
import b from '../../assets/b5.jpg'
import Link from 'next/link';
import WhyUs from '../WhyUs';
import OurTeam from '../OurTeam';

interface TourFeature {
  title: string;
  image: StaticImageData;
  description: string;
  featureItems: string[];
  slug: string;
  id: string; // Add an 'id' property
}

const TourSectionsWithPackage = () => {
  const router = useRouter(); // Use Next.js App Router navigation

  const tourFeatures: TourFeature[] = [
    {
      title: "Balloon-flight Adventure",
      image: b,
      description: "Experience breathtaking sunrise views over Maasai Mara and Amboseli, spotting wildlife and Mt. Kilimanjaro from above.",
      featureItems: ["Panoramic views of wildlife and landscapes", "Professional pilots with years of experience", "Unforgettable sunrise experience"],
      slug: "balloon-flight",
      id: "balloon-flight" // Add an 'id' property
    },
    {
      title: "Bush Breakfast",
      image: br,
      description: "Enjoy a delicious breakfast in the heart of the savannah after your balloon adventure.",
      featureItems: ["Gourmet meal in the wilderness", "Scenic location with wildlife views", "Full continental and local cuisine options"],
      slug: "bush-breakfast",
       id: "bush-breakfast"// Add an 'id' property
    },
    {
      title: "Luxury Accommodation",
      image: ac,
      description: "Relax in comfort with our premium 2-day, 1-night accommodation package in the Maasai Mara.",
      featureItems: ["Comfortable lodging with premium amenities", "Authentic African-style luxury tents", "Stunning views of the reserve"],
      slug: "luxury-accommodation",
       id: "luxury-accommodation"// Add an 'id' property
    },
    {
      title: "All-Inclusive Meals",
      image: br2,
      description: "Savor delicious full board meals throughout your stay in the Maasai Mara.",
      featureItems: ["Breakfast, lunch & dinner included", "Local and international cuisine options", "Dietary accommodations available"],
      slug: "all-inclusive-meals",
       id: "all-inclusive-meals"// Add an 'id' property
    },
    {
      title: "Safari Vehicle Transport",
      image: v,
      description: "Travel in comfort with our specialized safari vehicles designed for the terrain.",
      featureItems: ["Experienced drivers and guides", "Custom  vehicles with pop-up roof", "Round-trip service from Nairobi"],
      slug: "safari-vehicle-transport",
       id: "safari-vehicle-transport"// Add an 'id' property
    }
  ];

  const handleNavigation = (id: string) => {
    router.push(`/experiences?slug=${id}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourFeatures.slice(0, 3).map((feature, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image src={feature.image} alt={feature.title} className="w-full h-48 object-fill" fill style={{objectFit: "cover"}} sizes="100vw"/>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h2>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="mb-6">
                  {feature.featureItems.map((item, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleNavigation(feature.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mb-16 mt-0">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {tourFeatures.slice(3, 5).map((feature, index) => (
      <div 
        key={index} 
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        {/* Image Section */}
        <div className="relative h-64">
          <Image 
            src={feature.image} 
            alt={feature.title} 
            className="w-full h-full object-cover"
            fill
            style={{objectFit: "cover"}}
            sizes="100vw"
          />
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h2>
          <p className="text-gray-600 mb-4">{feature.description}</p>

          <ul className="mb-6">
            {feature.featureItems.map((item, i) => (
              <li key={i} className="flex items-center mb-2">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-gray-500">{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleNavigation(feature.id)}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    ))}
  </div>
</div>... <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-48">
            <Image className="w-full h-full object-cover" src={fat} alt="Maasai Mara landscape with hot air balloon" fill style={{objectFit: "cover"}} sizes="100vw"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-2xl font-bold">DESTINATION MAASAI MARA AND AMBOSELI</h1>
              <p className="text-lg font-semibold">PACKAGE (FULL BOARD)</p>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-4">
              <span className="text-3xl font-bold text-red-600">USD 800/=</span>
              <span className="text-xl font-semibold text-gray-700">person</span>
            </div>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-white text-xs mr-2 mt-0.5">1</span>
                <span className="text-gray-700">Balloon flight</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-white text-xs mr-2 mt-0.5">2</span>
                <span className="text-gray-700">Bush breakfast</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-white text-xs mr-2 mt-0.5">3</span>
                <span className="text-gray-700">2 days, 1 night accommodation</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-white text-xs mr-2 mt-0.5">4</span>
                <span className="text-gray-700">Meals on all inclusive</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-white text-xs mr-2 mt-0.5">5</span>
                <span className="text-gray-700">Transport in a safari vehicle to and fro</span>
              </li>
            </ul>
            <Link href="/booking">
            <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
              BOOK NOW
            </button> 
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-full bg-black py-2">
          <p className="text-white text-4xl text-center font-bold">Why Choose Us</p>
        </div>
      <WhyUs/>
      <div className="flex justify-center items-center h-full w-full bg-black py-2">
          <p className="text-white text-4xl text-center font-bold">Meet Our Team</p>
          
        </div>
        <OurTeam/>
    </div>
    
  );
};

export default TourSectionsWithPackage;
