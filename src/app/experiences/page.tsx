"use client"

import dynamic from 'next/dynamic';

const ClientExperiencesPage = dynamic(() => import('./ClientExperiencesPage'), {
  ssr: false, // Disable server-side rendering
  loading: () => <p>Loading...</p>, // Optional: Add a loading indicator
});

export default function ExperiencesPage() {
  return <ClientExperiencesPage />;
}

