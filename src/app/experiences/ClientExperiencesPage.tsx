"use client";

import { useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Link from "next/link";
import { StaticImageData } from "next/image";
import ClientExperience from "../components/ClientExperience";
import { Suspense } from 'react';

// Import images
import br from "../assets/breakfast.jpg";
import v5 from "../assets/v1.jpg";
import v6 from "../assets/v2.jpg";
import b5 from "../assets/b5.jpg";
import b6 from "../assets/b3.jpg";
import br5 from "../assets/br2.jpg";
import c1 from "../assets/ac2.jpg";
import c2 from "../assets/acc1.webp";

interface Experience {
  title: string;
  images: StaticImageData[];
  description: string;
  featureItems: string[];
  slug: string;
}

const experiencesData: Record<string, Experience> = {
  "balloon-flight": {
    title: "Balloon Flight",
    images: [b6, b5],
    description:
      "Experience breathtaking views of the Maasai Mara and Amboseli from above",
    featureItems: [
      "Panoramic views of wildlife",
      "Professional pilots",
      "Unforgettable sunrise experience",
    ],
    slug: "balloon-flight"
  },
  "bush-breakfast": {
    title: "Bush Breakfast",
    images: [br5, br5],
    description: "Enjoy a delicious breakfast in the heart of the savannah...",
    featureItems: ["Gourmet meal", "Scenic wildlife views", "Local cuisine options"],
    slug: "bush-breakfast"
  },
  "luxury-accommodation": {
    title: "Luxury Accommodation",
    images: [c1, c2],
    description:
      "Relax in comfort with our premium 2-day, 1-night accommodation...",
    featureItems: [
      "Comfortable lodging with premium amenities",
      "Authentic African-style luxury tents",
      "Stunning views of the reserve",
    ],
    slug: "luxury-accommodation"
  },
  "all-inclusive-meals": {
    title: "All-Inclusive Meals",
    images: [br, br],
    description: "Savor delicious full board meals throughout your stay...",
    featureItems: [
      "Breakfast, lunch & dinner included",
      "Local and international cuisine options",
      "Dietary accommodations available",
    ],
    slug: "all-inclusive-meals"
  },
  "safari-vehicle-transport": {
    title: "Safari Vehicle Transport",
    images: [v5, v6],
    description: "Travel in comfort with our specialized safari vehicles...",
    featureItems: [
      "Experienced drivers and guides",
      "Custom vehicles with pop-up roof",
      "Round-trip service from Nairobi",
    ],
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

      {/* Two-Column Layout */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ClientExperience images={experience.images} />
        </div>

        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{experience.title}</h1>
          <p className="text-gray-600 leading-relaxed">{experience.description}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Key Features</h2>
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

      <div className="mt-8 flex justify-between items-center">
        <Link href="/services">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition">
            ← All Experiences
          </button>
        </Link>
        <Link href="/booking">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
            Book This Experience
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
