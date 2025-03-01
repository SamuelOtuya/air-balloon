'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import  logo from '../../assets/logo1.jpg';
import { Dropdown } from 'flowbite-react';

interface HeaderProps {
  currentLanguage?: string;
  onLanguageChange?: (language: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentLanguage = 'English', 
  onLanguageChange = () => {} 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white w-full py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <Image 
                src={logo}
                alt="TourPlan Logo" 
                width={50} 
                height={50} 
                className="mr-2"
              />
              <span className="text-2xl font-bold">
                <span className="text-red-600">TWO</span>
                <span className="text-white">DOLLARS</span>
                <span className="text-red-600">TOURS</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <Link href="/about" className="hover:text-red-600 transition-colors duration-300">
              About <span className="ml-1">▼</span>
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg hidden group-hover:block z-10">
              <Link href="/about/company" className="block px-4 py-2 hover:bg-gray-100">Our Company</Link>
              <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Our Team</Link>
            </div>
          </div>

          <Link href="/products" className="hover:text-red-600 transition-colors duration-300">
            Products
          </Link>

          <div className="relative group">
            <Link href="/solutions" className="hover:text-red-600 transition-colors duration-300">
              Solutions <span className="ml-1">▼</span>
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg hidden group-hover:block z-10">
              <Link href="/solutions/enterprise" className="block px-4 py-2 hover:bg-gray-100">Enterprise</Link>
              <Link href="/solutions/smb" className="block px-4 py-2 hover:bg-gray-100">Small Business</Link>
            </div>
          </div>

          <Link href="/services" className="hover:text-red-600 transition-colors duration-300">
            Services
          </Link>

          <div className="relative group">
            <Link href="/resources" className="hover:text-red-600 transition-colors duration-300">
              Resources <span className="ml-1">▼</span>
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg hidden group-hover:block z-10">
              <Link href="/resources/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
              <Link href="/resources/guides" className="block px-4 py-2 hover:bg-gray-100">Guides</Link>
            </div>
          </div>

          <div className="relative group">
            <Link href="/contact" className="hover:text-red-600 transition-colors duration-300">
              Contact <span className="ml-1">▼</span>
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg hidden group-hover:block z-10">
              <Link href="/contact/sales" className="block px-4 py-2 hover:bg-gray-100">Sales</Link>
              <Link href="/contact/support" className="block px-4 py-2 hover:bg-gray-100">Support</Link>
            </div>
          </div>
        </nav>

        {/* Social Media and CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 fill-current text-white hover:text-red-600" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 fill-current text-white hover:text-red-600" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 fill-current text-white hover:text-red-600" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </Link>
          </div>
          
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
            BOOK A DEMO
          </button>

          <Dropdown label={currentLanguage} color="dark" size="sm">
            <Dropdown.Item onClick={() => onLanguageChange('English')}>
              English
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onLanguageChange('Español')}>
              Español
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onLanguageChange('Français')}>
              Français
            </Dropdown.Item>
          </Dropdown>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-2">
          <Link href="/about" className="block py-2 hover:text-red-600">About</Link>
          <Link href="/products" className="block py-2 hover:text-red-600">Products</Link>
          <Link href="/solutions" className="block py-2 hover:text-red-600">Solutions</Link>
          <Link href="/services" className="block py-2 hover:text-red-600">Services</Link>
          <Link href="/resources" className="block py-2 hover:text-red-600">Resources</Link>
          <Link href="/contact" className="block py-2 hover:text-red-600">Contact</Link>
          
          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-white hover:text-red-600">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="https://linkedin.com" className="text-white hover:text-red-600">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-red-600">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </Link>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full">
              BOOK A DEMO
            </button>
            
            <select 
              className="bg-gray-800 text-white rounded p-2"
              value={currentLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Español">Español</option>
              <option value="Français">Français</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;