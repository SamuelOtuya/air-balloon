'use client';

import { useState } from "react";
import Header from "./header"; // Assuming Header is in the same directory

export default function HeaderWrapper() {
  const [language, setLanguage] = useState('English');
  
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    // Add any language change logic here
  };

  return (
    <Header 
      currentLanguage={language} 
      onLanguageChange={handleLanguageChange} 
    />
  );
}