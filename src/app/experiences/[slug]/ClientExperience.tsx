"use client"; // ✅ Add this at the top

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";

interface ClientExperienceProps {
  slug: string;
  images: StaticImageData[];
}

export default function ClientExperience({ slug, images }: ClientExperienceProps) {
  useEffect(() => {
    console.log("Client component mounted with slug:", slug);
  }, [slug]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Gallery</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-lg shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-96">
              <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
