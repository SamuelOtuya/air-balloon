"use client";

import { useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Link from "next/link";
import { StaticImageData } from "next/image";
import ClientExperience from "../components/ClientExperience";
import { Suspense } from 'react';

// Import images
// import br from "../assets/breakfast.jpg";
import v5 from "../assets/v1.jpg";
import v6 from "../assets/v2.jpg";
import b5 from "../assets/b5.jpg";
import b6 from "../assets/b3.jpg";
import r6 from "../assets/r6.jpg";
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import r4 from "../assets/r4.jpg";
import r5 from "../assets/r5.jpg";
import c1 from "../assets/ac2.jpg";
import c2 from "../assets/acc1.webp";

interface Experience {
  title: string;
  images: StaticImageData[];
  description: string;
  featureItems: string[];
  slug: string;
  para:string;
  final:string;
}

const experiencesData: Record<string, Experience> = {
  "balloon-flight": {
    title: "Balloon Flight",
    images: [b6, b5],
    description:
      "Soar Above the Wild and Witness Nature Like Never Before: Embark on an exhilarating hot air balloon safari over the iconic landscapes of the Maasai Mara and Amboseli. As you ascend into the skies, prepare to be captivated by breathtaking aerial views of vast plains, meandering rivers, and roaming wildlife belo",
    featureItems: [
      "Panoramic Views of Wildlife – Observe the African wilderness from an unmatched vantage point, offering a 360-degree perspective of the savannah and its majestic inhabitants.",
      "Professional Pilots – Experience a smooth and safe ride with expert balloon pilots ensuring a seamless and enjoyable flight.",
      "Unforgettable Sunrise Experience – Take off at dawn and witness the golden sunrise painting the horizon, creating a truly magical moment.",
    ],
    para: "A hot air balloon flight over the savannah is more than just an adventure—it's a breathtaking journey that offers a bird’s-eye view of nature at its most majestic. As you ascend into the sky at sunrise, the golden hues of dawn illuminate the vast landscapes below, revealing roaming wildlife, winding rivers, and endless plains stretching to the horizon.Drifting peacefully above the wilderness, you’ll witness a world rarely seen from the ground. Herds of elephants moving gracefully, giraffes browsing treetops, and perhaps even a pride of lions basking in the morning sun—all from a vantage point that makes you feel like part of the sky itself.It’s not just the spectacular views that make this experience unforgettable; it’s the serenity, the sense of wonder, and the chance to capture once-in-a-lifetime photographs that will forever remind you of this magical journey",
    final: "Ready to take flight? 🚀 Book your balloon safari today and create memories that will last a lifetime!",
    slug: "balloon-flight"
  },
  "bush-breakfast": {
    title: "Bush Breakfast",
    images: [r1 ,r2 ,r3 ,r4 ,r5 ,r6 ],
    description: "Start your day with an unforgettable breakfast experience set in the heart of the savannah. Surrounded by breathtaking landscapes and the sights and sounds of nature, this unique dining adventure offers the perfect blend of tranquility and indulgence.",
    featureItems: ["Gourmet Meal – Savor a carefully curated menu featuring freshly prepared delicacies, from farm-fresh fruits to expertly crafted hot meals.", 
      " Scenic Wildlife Views – Enjoy your breakfast with a front-row seat to the natural beauty of the savannah, where wildlife roams freely in their natural habitat.",
       " Local Cuisine Options – Immerse yourself in authentic flavors with a selection of traditional dishes prepared using locally sourced ingredients."],
       para: "A bush breakfast offers a unique and immersive dining experience set in the heart of nature. Whether you're an avid nature lover or simply seeking a memorable meal, this outdoor breakfast takes you away from traditional dining settings and places you in a breathtaking natural environment—often in the wilderness, a safari park, or a remote scenic location.Imagine starting your day with the sights and sounds of the wild around you: birds chirping, a gentle breeze rustling through the trees, and perhaps even the distant roar of a lion or the graceful movements of grazing wildlife. The experience usually includes a delicious spread of freshly prepared food, often cooked on-site over an open fire, adding to the rustic charm.A bush breakfast is not just about the food; it's about the ambiance, the adventure, and the deep connection with nature. Whether you're watching the sunrise over the savanna or enjoying your meal by a serene riverbank, this is an experience that stays with you long after the last bite.",
       final: "",
    slug: "bush-breakfast"
  },
  "luxury-accommodation": {
    title: "Luxury Accommodation",
    images: [c1, c2],
    description:
      "Unwind in Elegance Amidst the African Wilderness: Escape to the heart of nature while indulging in world-class luxury. Our 2-day, 1-night premium accommodation offers an immersive experience where comfort meets the wild. Relax in beautifully designed African-style luxury tents, enjoy breathtaking views, and indulge in top-tier amenities.",
    featureItems: [
      "Comfortable Lodging with Premium Amenities – Experience plush bedding, en-suite bathrooms, and high-end facilities designed for ultimate relaxation.",
      "Authentic African-Style Luxury Tents – Stay in beautifully crafted tents that blend modern elegance with the charm of traditional African architecture.",
      "Stunning Views of the Reserve – Wake up to the sights and sounds of the African wilderness, offering a truly serene and picturesque retreat.",
    ],
    para: "Whether you're dreaming of a romantic getaway, an adventure-filled retreat, or simply a peaceful escape, this luxurious stay offers the perfect blend of comfort, elegance, and tranquility.Immerse yourself in breathtaking surroundings, indulge in world-class amenities, and let every moment be filled with relaxation and unforgettable experiences. From stunning views and gourmet dining to personalized service and serene ambiance, every detail is designed to make your stay truly special.",
    final: "🌿 Book your luxury retreat today and elevate your escape to pure bliss!",
    slug: "luxury-accommodation"
  },
  "all-inclusive-meals": {
    title: "All-Inclusive Meals",
    images: [r1 ,r2 ,r3 ,r4 ,r5 ,r6],
    description: "Savor delicious full board meals throughout your stay: Enjoy a full-board dining experience that blends local flavors and international cuisine in a breathtaking outdoor setting. Whether dining under the open sky or in a cozy lodge, every meal is crafted to perfection to enhance your stay.",
    featureItems: [
      "Breakfast, Lunch & Dinner Included – Indulge in a variety of gourmet meals throughout your stay, ensuring a delightful culinary journey",
      "Local and International Cuisine Options – Taste the best of African-inspired dishes along with globally recognized favorites, made from fresh, locally sourced ingredients.",
      "🥗 Dietary Accommodations Available – Whether you’re vegetarian, vegan, gluten-free, or have specific dietary needs, our chefs are happy to cater to your preferences.",
    ],
    para: "From sunrise breakfasts in the wild, where you sip freshly brewed coffee as the golden hues of dawn light up the savannah, to intimate candle-lit dinners under a starlit sky, every meal is a celebration of nature and indulgence. Our all-inclusive dining experience is carefully curated to offer a fusion of exquisite flavors, using the freshest local ingredients prepared by top chefs. Whether you’re enjoying a bush picnic surrounded by breathtaking landscapes or a gourmet feast by the fireside, every bite enhances your journey, making it as unforgettable as the scenery around you.",
    final: "🔥 Book your luxury dining experience today!",
    slug: "all-inclusive-meals"
  },
  "safari-vehicle-transport": {
    title: "Safari Vehicle Transport",
    images: [v5, v6],
    description: " Travel in Comfort and Style Across the Wild :Embark on your safari adventure with specialized 4x4 vehicles, designed to provide comfort, safety, and panoramic views of breathtaking landscapes. Our expert guides ensure a smooth and immersive journey, making every game drive an unforgettable experience.",
    featureItems: [
      "🚙 Experienced Drivers and Guides – Travel with seasoned professionals who know the terrain and the best wildlife viewing spots.",
      "🔭 Custom Vehicles with Pop-Up Roof – Enjoy 360-degree views of wildlife and scenery from our specially modified safari cruisers.",
      "🛣️ Round-Trip Service from Nairobi – Start and end your journey hassle-free with convenient transport from the capital.",
    ],
    para: "From the golden savannahs to thrilling game drives, our safari vehicle transport ensures you experience every breathtaking moment up close.Travel in comfort and style as you explore the wild, spotting majestic wildlife in their natural habitat. Whether it’s an early morning drive to witness the sunrise over the plains or an evening adventure as the animals come to life, our expertly guided safaris guarantee an unforgettable journey.",
    final: "🔥 Book your safari ride today and let the adventure begin!",
    slug: "safari-vehicle-transport"
  },
};

// Create a separate component for the experience details
function ExperienceDetails({ slug }: { slug: string }) {
  const experience = experiencesData[slug];

  if (!experience) {
    return notFound();
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Back Button */}
      <Link href="/services">
        <button className="flex items-center text-red-600 hover:text-red-700 transition duration-300">
          ← <span className="ml-1">Back to All Experiences</span>
        </button>
      </Link>
  
      {/* Title and Description above the slider */}
      <div className="mt-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{experience.title}</h1>
        <p className="text-gray-600 leading-relaxed mb-6">{experience.description}</p>
      </div>
  
      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ClientExperience images={experience.images} />
        </div>
  
        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="space-y-3">
            {experience.featureItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-600 text-white text-sm font-bold mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-600 leading-relaxed mb-6">{experience.para}</p>
        <h3 className="text-4xl font-extrabold text-gray-900 mb-4">{experience.final}</h3>
      </div>
  
      <div className="mt-8 flex justify-between items-center">
        <Link href="/services">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition">
            ← All Experiences
          </button>
        </Link>
        <Link href="/booking">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
            Book FullBoard Package
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function ClientExperiencesPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');


  return (
    <Suspense fallback={<p>Loading experience...</p>}>
      {slug ? <ExperienceDetails slug={slug} /> : <p>Select an experience.</p>}
    </Suspense>
  );
}
