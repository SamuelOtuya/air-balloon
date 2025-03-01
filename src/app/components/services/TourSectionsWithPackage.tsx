import React from 'react';
import Image from 'next/image';
import br from '../../assets/breakfast.jpg'
import fat from '../../assets/fat.jpg'
import Link from 'next/link';

const TourSectionsWithPackage = () => {
  const tourFeatures = [
    {
      title: "Balloon Flight",
      image: "/api/placeholder/600/400",
      description: "Experience breathtaking views of the Maasai Mara from above with our sunrise hot air balloon safari.",
      featureItems: ["Panoramic views of wildlife and landscapes", "Professional pilots with years of experience", "Unforgettable sunrise experience"]
    },
    {
      title: "Bush Breakfast",
      image: "/api/placeholder/600/400",
      description: "Enjoy a delicious breakfast in the heart of the savannah after your balloon adventure.",
      featureItems: ["Gourmet meal in the wilderness", "Scenic location with wildlife views", "Full continental and local cuisine options"]
    },
    {
      title: "Luxury Accommodation",
      image: "/api/placeholder/600/400",
      description: "Relax in comfort with our premium 2-day, 1-night accommodation package in the Maasai Mara.",
      featureItems: ["Comfortable lodging with premium amenities", "Authentic African-style luxury tents", "Stunning views of the reserve"]
    },
    {
      title: "All-Inclusive Meals",
      image: "/api/placeholder/600/400",
      description: "Savor delicious full board meals throughout your stay in the Maasai Mara.",
      featureItems: ["Breakfast, lunch & dinner included", "Local and international cuisine options", "Dietary accommodations available"]
    },
    {
      title: "Safari Vehicle Transport",
      image: "/api/placeholder/600/400",
      description: "Travel in comfort with our specialized safari vehicles designed for the terrain.",
      featureItems: ["Experienced drivers and guides", "Custom 4x4 vehicles with pop-up roof", "Round-trip service from Nairobi"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Tour Feature Sections - First Row (3 items) */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourFeatures.slice(0, 3).map((feature, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                {/* <div className="absolute inset-0 bg-blue-500 rounded-tl-[120px]"></div> */}
                <Image 
                  src={fat} 
                  alt={feature.title}
                  className="absolute bottom-0 left-0 w-full h-48 object-fill " 
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h2>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="mb-6">
                  {feature.featureItems.map((item, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className='text-gray-400'>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/experiences/balloon-flight`} className="bg-red-600 text-white px-4 py-2 rounded">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
                  LEARN MORE
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Feature Sections - Second Row (2 items) */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourFeatures.slice(3, 5).map((feature, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500 rounded-tl-[120px]"></div>
                <Image 
                  src={br} 
                  alt={feature.title}
                  className="absolute bottom-0 left-0 w-full h-48 object-cover rounded-tr-[120px]" 
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h2>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="mb-6">
                  {feature.featureItems.map((item, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className='text-gray-400'>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/experiences/balloon-flight`} className="bg-red-600 text-white px-4 py-2 rounded">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
                  LEARN MORE
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Package Section */}
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-48">
            <Image 
              className="w-full h-full object-cover" 
              src={fat} 
              alt="Maasai Mara landscape with hot air balloon" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-2xl font-bold">DESTINATION MAASAI MARA</h1>
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
                <span className='text-gray-700'>Balloon flight</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-white text-xs mr-2 mt-0.5">2</span>
                <span  className='text-gray-700'>Bush breakfast</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-white text-xs mr-2 mt-0.5">3</span>
                <span  className='text-gray-700'>2 days, 1 night accommodation</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-white text-xs mr-2 mt-0.5">4</span>
                <span  className='text-gray-700'>Meals on all inclusive</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-white text-xs mr-2 mt-0.5">5</span>
                <span  className='text-gray-700'>Transport in a safari vehicle to and fro</span>
              </li>
            </ul>
            
            <div className="bg-amber-50 p-3 rounded-md mb-4">
              <p className="font-medium text-amber-800">NOTE: Game drive will apply after balloon flight on your way to breakfast</p>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium text-blue-800">NB: The tour operator will arrange transport and plan your itinerary, plans, arrangement and accommodation</p>
            </div>
            
            <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSectionsWithPackage;