import React from 'react'

function WhyUs() {
  return (
<div className="max-w-6xl mx-auto px-4 py-16 bg-white">
    {/* <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose Us</h2> */}
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
  )
}

export default WhyUs