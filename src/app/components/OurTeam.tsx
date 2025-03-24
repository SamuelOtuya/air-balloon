import React from 'react'
import Image from 'next/image'

const OurTeam = () => {
  return (
     <div className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
              {/* <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2> */}
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
                    name: "Maggie Gathii",
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

    
  )
}

export default OurTeam