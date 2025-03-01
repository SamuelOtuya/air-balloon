import { useRouter } from "next/router";

const experiencesData = {
  "balloon-flight": {
    title: "Balloon Flight",
    image: "/images/balloon.jpg",
    description: "Experience breathtaking views of the Maasai Mara from above...",
  },
  "bush-breakfast": {
    title: "Bush Breakfast",
    image: "/images/breakfast.jpg",
    description: "Enjoy a delicious breakfast in the heart of the savannah...",
  },
  "luxury-accommodation": {
    title: "Luxury Accommodation",
    image: "/images/accommodation.jpg",
    description: "Relax in comfort with our premium 2-day, 1-night accommodation...",
  },
};

export default function ExperiencePage() {
  const router = useRouter();
  const { slug } = router.query;
  const experience = experiencesData[slug];

  if (!experience) return <p>Experience not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={experience.image} alt={experience.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{experience.title}</h1>
      <p className="mt-2 text-gray-700">{experience.description}</p>
    </div>
  );
}
