import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Import images
import br from "../../../assets/breakfast.jpg";
import fat from "../../../assets/fat.jpg";

// Define experiences data
const experiencesData: Record<string, { 
  title: string; 
  image: any; 
  description: string;
  featureItems: string[];
}> = {
  "balloon-flight": {
    title: "Balloon Flight",
    image: fat,
    description: "Experience breathtaking views of the Maasai Mara from above...",
    featureItems: [
      "Panoramic views of wildlife and landscapes", 
      "Professional pilots with years of experience", 
      "Unforgettable sunrise experience"
    ]
  },
  "bush-breakfast": {
    title: "Bush Breakfast",
    image: br,
    description: "Enjoy a delicious breakfast in the heart of the savannah...",
    featureItems: [
      "Gourmet meal in the wilderness", 
      "Scenic location with wildlife views", 
      "Full continental and local cuisine options"
    ]
  },
  "luxury-accommodation": {
    title: "Luxury Accommodation",
    image: fat,
    description: "Relax in comfort with our premium 2-day, 1-night accommodation...",
    featureItems: [
      "Comfortable lodging with premium amenities", 
      "Authentic African-style luxury tents", 
      "Stunning views of the reserve"
    ]
  },
  "all-inclusive-meals": {
    title: "All-Inclusive Meals",
    image: br,
    description: "Savor delicious full board meals throughout your stay...",
    featureItems: [
      "Breakfast, lunch & dinner included", 
      "Local and international cuisine options", 
      "Dietary accommodations available"
    ]
  },
  "safari-vehicle-transport": {
    title: "Safari Vehicle Transport",
    image: fat,
    description: "Travel in comfort with our specialized safari vehicles...",
    featureItems: [
      "Experienced drivers and guides", 
      "Custom 4x4 vehicles with pop-up roof", 
      "Round-trip service from Nairobi"
    ]
  }
};

// Dynamic page component
export default function ExperiencePage() {
  const { slug } = useParams();

  if (!slug || typeof slug !== "string" || !experiencesData[slug]) {
    return notFound(); // Show 404 page if experience is not found
  }

  const experience = experiencesData[slug];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link href="/experiences">
          <button className="flex items-center text-red-600 hover:text-red-700 transition duration-300">
            ← Back to All Experiences
          </button>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="relative h-64 w-full">
          <Image 
            src={experience.image} 
            alt={experience.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{experience.title}</h1>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Description</h2>
            <p className="text-gray-600">{experience.description}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Features</h2>
            <ul className="space-y-2">
              {experience.featureItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-white text-xs mr-2 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 flex justify-between">
            <Link href="/experiences">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded transition duration-300">
                Back to All Experiences
              </button>
            </Link>
            
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
              Book This Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths
export async function generateStaticParams() {
  return Object.keys(experiencesData).map(slug => ({ slug }));
}
