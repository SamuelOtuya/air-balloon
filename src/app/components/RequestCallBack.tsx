import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import ad from '../assets/ss1.jpg'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

// Define interfaces for TypeScript
interface ServiceOption {
  id: number;
  name: string;
  value: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  checkInDate: string;
  checkOutDate: string;
  services: string[];
}

const RequestCallBack: React.FC = () => {
  // Initialize with empty array for services
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    services: []
  });

  // Define service options with proper typing
  const serviceOptions: ServiceOption[] = [
    { id: 1, name: 'Balloon Flight', value: 'balloon' },
    { id: 2, name: 'Bush Breakfast', value: 'breakfast' },
    { id: 3, name: 'Accommodation', value: 'accommodation' },
    { id: 4, name: 'Vehicle Service', value: 'vehicle' },
    { id: 5, name: 'Full Package', value: 'fullPackage' }
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const checked = e.target.checked;
    
    let updatedServices = [...formData.services];
    
    // If "Full Package" is selected, select all services
    if (value === 'fullPackage' && checked) {
      updatedServices = serviceOptions.map(option => option.value);
    } 
    // If "Full Package" is unselected, clear all services
    else if (value === 'fullPackage' && !checked) {
      updatedServices = [];
    }
    // For other services
    else if (checked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter(service => service !== value);
    }
    
    setFormData({
      ...formData,
      services: updatedServices
    });
  };

  // Get selected services as readable text
  const getSelectedServicesText = (): string => {
    const selectedServices = formData.services;
    
    if (selectedServices.includes('fullPackage')) {
      return "Full Package (All Services)";
    }
    
    return selectedServices
      .map(service => {
        const option = serviceOptions.find(opt => opt.value === service);
        return option ? option.name : '';
      })
      .filter(name => name !== '')
      .join(', ');
  };

  // Handle WhatsApp submission
  const handleWhatsAppSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `
*New Call Back Request*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Check-in: ${formData.checkInDate}
Check-out: ${formData.checkOutDate}
Services: ${getSelectedServicesText()}
    `.trim();
    
    // Replace with your business WhatsApp number
    const whatsappNumber = "254724035332"; // Replace with actual number
    
    // Create the WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  // Handle Email submission
  const handleEmailSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    
    // Format the email subject and body
    const subject = "New Call Back Request";
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Check-in: ${formData.checkInDate}
Check-out: ${formData.checkOutDate}
Services: ${getSelectedServicesText()}
    `.trim();
    
    // Replace with your business email
    const email = "info@twodollarstoursandtravel.co.ke"; // Replace with actual email
    
    // Create the mailto URL
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
      {/* Form Column - Takes up more width */}
      <div className="w-full md:w-1/2 pr-0 md:pr-6">
        <h2 className="text-2xl font-bold mb-6 text-black">Request a Call Back</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+254 7XX XXX XXX"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
              required
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="checkInDate" className="block text-gray-700 mb-2">Check-in Date</label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
                required
              />
            </div>
            
            <div className="w-full sm:w-1/2">
              <label htmlFor="checkOutDate" className="block text-gray-700 mb-2">Check-out Date</label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Choose Services</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviceOptions.map((service) => (
                <div key={service.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`service-${service.id}`}
                    name="services"
                    value={service.value}
                    checked={formData.services.includes(service.value)}
                    onChange={handleServiceChange}
                    className="mr-2 h-4 w-4 text-amber-600 focus:ring-amber-500"
                  />
                  <label htmlFor={`service-${service.id}`} className="text-gray-700">
                    {service.name}
                  </label>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">*Full Package includes all services listed above</p>
          </div>
          <div className="flex flex-col gap-2 mt-2 items-center">
            <button 
              type="button" 
              onClick={handleWhatsAppSubmit}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded transition duration-200 flex items-center justify-center"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Submit to WhatsApp
            </button>

            <button 
              type="button"
              onClick={handleEmailSubmit}
              className="w-full py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded transition duration-200 flex items-center justify-center"
            >
              <FaEnvelope className="w-5 h-5 mr-2" />
              Submit to Email
            </button>
          </div>
        </form>
      </div>
      
      {/* Image Column */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <div className="relative h-full min-h-64 w-full rounded-lg overflow-hidden">
          <Image 
            src={ad}
            alt="Safari experience" 
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{objectFit: "cover"}}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RequestCallBack;