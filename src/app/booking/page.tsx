"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaUmbrellaBeach, FaUtensils,  FaCalendarAlt, FaCar, FaTimes } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import { MdHotel, MdFlight } from "react-icons/md";

// Import your local images
import car1 from "../assets/b3.jpg";
import car2 from "../assets/br2.jpg";
import car3 from "../assets/ac3.jpg";
import car4 from "../assets/b3.jpg"
import car5 from "../assets/b4.jpg"
import car6 from "../assets/b5.jpg"
import car7 from "../assets/Lion.jpg"
import car8 from "../assets/v1.jpg"
import car9 from "../assets/v3.jpg"
import car10 from "../assets/v2.jpg"

const images = [car1, car2, car3,car4,car5,car6,car7,car8,car9,car10]; // Array of local images

const BookingPage = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    message: ""
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successType, setSuccessType] = useState("");

  const handleInputChange = (e: { target: { name: string; value: string | number | boolean } }) => { 
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
};


  // Direct link function - more reliable than the API approach
  const createWhatsAppLink = (message: string | number | boolean) => {
    // Clean the phone number to ensure proper format
    const phoneNumber = "254724035332";
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleCallbackSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*Call Back Request*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCheck-in: ${formData.checkInDate}\nCheck-out: ${formData.checkOutDate}`;
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = createWhatsAppLink(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    setSuccessType("callback");
    setShowSuccessMessage(true);
    
    // Reset form and close modal
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkInDate: "",
        checkOutDate: "",
        message: ""
      });
      setShowCallbackForm(false);
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleOfferSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*Make an Offer*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCheck-in: ${formData.checkInDate}\nCheck-out: ${formData.checkOutDate}\nOffer Message: ${formData.message}`;
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = createWhatsAppLink(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    setSuccessType("offer");
    setShowSuccessMessage(true);
    
    // Reset form and close modal
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkInDate: "",
        checkOutDate: "",
        message: ""
      });
      setShowOfferForm(false);
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleDirectWhatsApp = () => {
    const message = "Hello! I'm interested in the Maasai Mara Full Board Package (USD 800).";
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = createWhatsAppLink(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
      {/* Left: Swiper Image Gallery */}
      <div className="md:col-span-2">
        <Swiper 
          navigation={true} 
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]} 
          className="w-full h-[400px] rounded-lg overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px]">
                <Image src={image} alt={`Maasai Mara ${index + 1}`} fill className="object-cover rounded-lg" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Thumbnail Images */}
        <div className="mt-2 flex space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <div key={index} className="w-20 h-16 border border-gray-300 rounded-lg overflow-hidden">
              <Image src={image} alt={`Thumbnail ${index + 1}`} width={80} height={40} className="object-cover" />
            </div>
          ))}
        </div>
        
        {/* Package details section */}
<div className="mt-8 bg-gray-50 p-6 rounded-lg">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">🌍 DESTINATION: MAASAI MARA</h2>

  <div className="bg-yellow-100 px-4 py-2 rounded-md inline-block mb-4">
    <p className="text-2xl font-bold text-gray-900">USD 800/- FULL BOARD</p>
    <p className="text-gray-700 text-sm">*Experience the ultimate luxury safari adventure*</p>
  </div>

  <p className="text-lg text-gray-800 mb-6">
    Embark on a breathtaking **2-day, 1-night safari** in the **world-famous Maasai Mara**, where luxury meets wilderness. 
    From an unforgettable **hot air balloon flight** to thrilling **game drives**, this all-inclusive package offers an unparalleled safari experience.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left Column */}
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <MdFlight className="text-2xl text-green-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700"><strong>Hot Air Balloon Safari:</strong> Witness the sunrise over the savannah as you glide above the vast plains, spotting wildlife from an aerial view.</p>
      </div>
      <div className="flex items-start space-x-3">
        <FaUtensils className="text-2xl text-green-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700"><strong>Bush Breakfast in the Wilderness:</strong> After landing, enjoy a **chef-prepared breakfast** in the wild, surrounded by natures beauty.</p>
      </div>
      <div className="flex items-start space-x-3">
        <MdHotel className="text-2xl text-green-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700"><strong>Luxury Accommodation:</strong> Stay in a **high-end lodge or tented camp**, offering comfort, privacy, and stunning views.</p>
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <FaUmbrellaBeach className="text-2xl text-green-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700"><strong>All-Inclusive Meals:</strong> Savor delicious **breakfast, lunch, and dinner**, expertly prepared to complement your adventure.</p>
      </div>
      <div className="flex items-start space-x-3">
        <FaCar className="text-2xl text-green-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700"><strong>Safari Vehicle Transport:</strong> Enjoy a comfortable, scenic ride to and from Maasai Mara in a **4x4 safari vehicle** designed for wildlife viewing.</p>
      </div>
      <div className="flex items-start space-x-3">
        <HiOutlineTicket className="text-2xl text-green-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700"><strong>Game Drive After Balloon Flight:</strong> Continue the adventure with a **guided safari drive**, spotting lions, elephants, and other incredible wildlife.</p>
      </div>
    </div>
  </div>

  {/* Important Note */}
  <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
    <p className="text-gray-700 text-lg"><span className="font-semibold">📌 Note:</span> The tour operator will **arrange transport, itinerary planning, and accommodation** to ensure a seamless experience.</p>
  </div>

  {/* Call to Action */}
  <div className="mt-6 text-center">
    <button 
    onClick={() => setShowOfferForm(true)} 
    className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition">
      🌿 Book Your Safari Adventure Today!
    </button>
  </div>
</div>

      </div>
      
      {/* Right: Booking Details */}
      <div className="p-6 bg-gray-100 rounded-lg sticky top-20 max-h-[80vh] overflow-auto self-start">

        <h1 className="text-3xl font-bold text-gray-900">Book Now</h1>
        <p className="text-gray-700 mt-2">Secure your Maasai Mara adventure</p>
        
        {/* Dates */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-green-600" />
            <span className="font-semibold text-gray-500">Select Dates</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <label className="text-sm text-gray-600">Check-in</label>
              <input 
                type="date" 
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1" 
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Check-out</label>
              <input 
                type="date" 
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1" 
              />
            </div>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="mt-6 space-y-3">
          <button 
            onClick={() => setShowOfferForm(true)} 
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center transition duration-300"
          >
            📌 Make an offer
          </button>
          <button 
            onClick={() => setShowCallbackForm(true)} 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center transition duration-300"
          >
            📞 Request a Call Back
          </button>
          <button 
            onClick={handleDirectWhatsApp} 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center transition duration-300"
          >
            <FaWhatsapp className="mr-2 text-xl" /> Book on WhatsApp
          </button>
        </div>
        
        {/* Contact Info */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-500">Contact Info</h2>
          <p className="flex items-center mt-2 text-gray-600">
            <FaPhone className="mr-2" /> (+254) 724 035332
          </p>
          <p className="flex items-center mt-2 text-gray-600">
            <FaEnvelope className="mr-2" /> info@twodollarstours.com
          </p>
          <p className="flex items-center mt-2 text-gray-600">
            <FaMapMarkerAlt className="mr-2" /> Nairobi, Kenya
          </p>
        </div>
        
        {/* Social Links */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">FOLLOW US</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/twodollarstours" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-xl hover:text-blue-800 transition-colors" />
            </a>
            <a href="https://twitter.com/twodollarssafaris" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-xl hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://www.instagram.com/twodollarstours" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 text-xl hover:text-pink-800 transition-colors" />
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleDirectWhatsApp();
              }}
            >
              <FaWhatsapp className="text-green-600 text-xl hover:text-green-800 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {successType === "callback" ? "Call Back Requested!" : "Offer Submitted!"}
            </h2>
            <p className="text-gray-600 mb-4">
              {successType === "callback" 
                ? "Your call back request has been sent. We'll contact you shortly!" 
                : "Your offer has been submitted. We'll review it and get back to you soon!"}
            </p>
            <p className="text-sm text-gray-500">WhatsApp should open in a new tab</p>
          </div>
        </div>
      )}

      {/* Request a Call Back Modal */}
      {showCallbackForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Request a Call Back</h2>
              <button onClick={() => setShowCallbackForm(false)} className="text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>
            
            <form onSubmit={handleCallbackSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="+254 7XX XXX XXX"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Make an Offer Modal */}
      {showOfferForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Make an Offer</h2>
              <button onClick={() => setShowOfferForm(false)} className="text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>
            
            <form onSubmit={handleOfferSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="+254 7XX XXX XXX"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Offer Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    // rows="3"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Tell us about your offer..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
                >
                  Submit Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;