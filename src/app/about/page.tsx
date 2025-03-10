import React from 'react';
import Image from 'next/image';
import BT from '../assets/about.jpg'
import VH from '../assets/vehicle.jpeg'
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96">
        <Image 
          className="w-full h-full object-cover" 
          src={BT} 
          alt="Safari landscape" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Our Safari Company</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">Providing unforgettable East African safari experiences since 2010</p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2022, our safari company began with a simple mission: to share the incredible beauty of East Africa with travelers from around the world in a sustainable and authentic way.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small operation with just two vehicles and a handful of dedicated guides has grown into one of the region&apos;s most respected tour operators, known for exceptional service and unforgettable experiences.
            </p>
            <p className="text-gray-600">
              Through the years, we&apos;ve maintained our commitment to conservation, community involvement, and creating genuine connections between our guests and the remarkable landscapes and wildlife of East Africa.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-tl-[80px] -z-10 transform translate-x-8 -translate-y-8"></div>
            <Image
              src={VH} 
              alt="Safari guides" 
              className="w-full h-auto rounded-tr-[80px] shadow-xl" 
            />
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "B. Nyambura and Mudi",
                role: "Founder",
                bio: "With over 20 years of experience in the safari industry, Nyambura's and Mudi's knowledge of East African wildlife is unmatched."
              },
              {
                name: "Sheilah Amondi",
                role: "Head of Safari guide",
                bio: "Sheilah ensures that every safari runs smoothly, from initial booking to your return home."
              },
              {
                name: "Maggy Gathii",
                role: "Head of operations/marketing",
                bio: "A certified naturalist with a passion for conservation, Maggy makes every game drive an educational adventure."
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image 
                    src={`/api/placeholder/400/${300 + index}`} 
                    alt={member.name} 
                    width={400}
                    height={300 + index}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-500">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Experienced Guides",
              description: "Our guides have an average of 10+ years of experience and intimate knowledge of local wildlife and terrain."
            },
            {
              title: "Customized Itineraries",
              description: "We create personalized safari experiences tailored to your interests, timeframe, and budget."
            },
            {
              title: "Quality Vehicles",
              description: "Our fleet of well-maintained 4x4 safari vehicles ensures comfort and reliability throughout your journey."
            },
            {
              title: "Sustainable Tourism",
              description: "We're committed to conservation efforts and supporting local communities through responsible tourism practices."
            },
            {
              title: "Exceptional Value",
              description: "Competitive pricing without compromising on the quality of your safari experience."
            },
            {
              title: "24/7 Support",
              description: "Our team is available around the clock to ensure your safari experience exceeds expectations."
            }
          ].map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-duration-300">
              <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-500">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conservation Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Commitment to Conservation</h2>
              <p className="text-white/90 mb-4">
                We believe that responsible tourism plays a vital role in preserving East Africa&apos;s natural heritage for future generations. That&apos;s why we dedicate a portion of every booking to local conservation initiatives.
              </p>
              <p className="text-white/90 mb-6">
                Through partnerships with wildlife conservancies and community-based organizations, we support anti-poaching efforts, habitat preservation, and educational programs throughout the region.
              </p>
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded transition duration-300">
                LEARN MORE
              </button>
            </div>
            <div>
              <Image 
                src="/api/placeholder/600/400" 
                alt="Conservation efforts" 
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "The balloon safari over Maasai Mara was the highlight of our trip. Seeing the sunrise over the savannah while floating above herds of elephants and giraffes was truly magical.",
              author: "Emma & James, UK",
              trip: "Maasai Mara Safari, August 2024"
            },
            {
              quote: "Our guide&apos;s knowledge was incredible! He could spot animals that were completely invisible to us and taught us so much about the ecosystem. An unforgettable experience.",
              author: "Michael T., Canada",
              trip: "Tanzania & Kenya Safari, March 2024"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-duration-300">
              <div className="text-yellow-400 text-3xl mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-bold text-gray-400">{testimonial.author} </p>
              <p className="text-sm text-gray-500">{testimonial.trip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-500">Ready to Plan Your Safari Adventure?</h2>
          <p className="text-gray-600 mb-8">Contact our team of safari experts to start planning your dream East African adventure today.</p>
          <Link href="/bookings">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 mr-4">
            CONTACT US
          </button>
          </Link>
        <Link href="/services">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
            VIEW PACKAGES
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;