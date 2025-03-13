"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ClientExperienceProps {
  images: StaticImageData[];
}

export default function ClientExperience({ images }: ClientExperienceProps) {
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
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="rounded-lg object-cover"
                sizes="100vw"
                style={{objectFit: "cover"}}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
