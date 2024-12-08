import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, X } from 'lucide-react';
import { FaUser, FaHeart, FaShoppingCart, FaGift, FaPhone } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const { logout, fetchUserName } = useAuth();

  useEffect(() => {
    const getUserName = async () => {
      const userId = sessionStorage.getItem('userId');
      if (userId) {
        try {
          const name = await fetchUserName(userId);
          setUserName(name);
        } catch (error) {
          console.error('Error fetching user name:', error);
        }
      }
    };
    getUserName();
  }, [fetchUserName]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      sessionStorage.removeItem('userId');
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const isActive = (path) => location.pathname === path;

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <nav className="bg-white text-black">
      {/* Promotional Banner */}
      <div className="bg-white text-pink-300 py-2 text-center text-sm border-b">
        <span className="inline-flex items-center">
          <FaGift className="mr-2" />
          USE CODE OFF10 TO GET FLAT 10% OFF ON ORDERS ABOVE RS.499 | FREE SHIPPING | COD AVAILABLE
        </span>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
          <div className="h-[60px] flex items-center justify-between">
            {/* Logo */}
            <Link to="/HomePage" className="text-2xl flex items-center">
              <span className="font-['Bodoni_MT'] font-bold text-xl">MERA Bestie</span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:block max-w-xl w-full mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Gifts for your loved ones...."
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-6">
              <button 
                aria-label="Search" 
                className="md:hidden hover:text-gray-500 transition duration-300"
                onClick={toggleSearch}
              >
                <Search className="w-4 h-4 stroke-[2.5] hover:stroke-[3]" />
              </button>
              <Link to="/cart" className="hover:text-gray-500 flex items-center transition duration-300"> 
                <FaShoppingCart className="w-4 h-4" />
                <span className="ml-2 hidden md:inline">Cart</span>
              </Link>
              <button aria-label="Wishlist" className="hover:text-gray-500 hidden md:block transition duration-300">
                <FaHeart className="w-4 h-4" />
              </button>
              <div className="relative">
                <button
                  aria-label="Profile"
                  onClick={toggleProfileMenu}
                  className="hover:text-gray-500 flex items-center transition duration-300"
                >
                  <FaUser className="w-4 h-4" />
                  <span className="ml-2 hidden md:inline">
                    {userName ? `Hi, ${getInitials(userName)}` : 'Hi, Profile'}
                  </span>
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-[120px] bg-white border rounded shadow-lg z-20 transition-all duration-200 opacity-100">
                    {sessionStorage.getItem('userId') ? (
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Login
                        </Link>
                        <Link
                          to="/Signup"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Signup
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-pink-600 text-white">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
          <div className="h-12 flex items-center justify-between">
            {/* Menu Items */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-normal">
              <Link to="/HomePage" className={`hover:text-gray-200 ${isActive('/HomePage') ? 'text-gray-900' : ''} hover:scale-105 transition duration-300`}>
                HOME
              </Link>
              <Link to="/shop" className={`hover:text-gray-200 ${isActive('/shop') ? 'text-gray-900' : ''} hover:scale-105 transition duration-300`}>
                SHOP
              </Link>
              <Link to="/OccasionsPage" className={`hover:text-gray-200 ${isActive('/OccasionsPage') ? 'text-gray-900' : ''} hover:scale-105 transition duration-300`}>
                OCCASIONS
              </Link>
              <Link to="/about" className={`hover:text-gray-200 ${isActive('/about') ? 'text-gray-900' : ''} hover:scale-105 transition duration-300`}>
                ABOUT
              </Link>
              <Link to="/contact" className={`hover:text-gray-200 ${isActive('/contact') ? 'text-gray-900' : ''} hover:scale-105 transition duration-300`}>
                CONTACT
              </Link>
            </div>

            {/* Phone Number */}
            <div className="hidden lg:flex items-center text-sm font-normal">
              <FaPhone className="w-4 h-4 mr-2" />
              <span>(219) 555-0114</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white transition duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white p-4 shadow-lg z-50 md:hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-pink-600 text-white py-2 px-4 space-y-2 text-sm font-normal">
          <Link to="/HomePage" className={`block py-2 hover:text-gray-200 ${isActive('/HomePage') ? 'text-gray-900' : ''} hover:scale-105 transition duration-300`}>
            HOME
          </Link>
          <Link to="/shop" className={`block py-2 hover:text-gray-200 ${isActive('/shop') ? 'text-gray-900' : ''} hover:scale-105 transition duration-300`}>
            SHOP
          </Link>
          <Link to="/OccasionsPage" className={`block py-2 hover:text-gray-200 ${isActive('/OccasionsPage') ? 'text-gray-900' : ''} hover:scale-105 transition duration-300`}>
            OCCASIONS
          </Link>
          <Link to="/about" className={`block py-2 hover:text-gray-200 ${isActive('/about') ? 'text-gray-900' : ''} hover:scale-105 transition duration-300`}>
            ABOUT
          </Link>
          <Link to="/contact" className={`block py-2 hover:text-gray-200 ${isActive('/contact') ? 'text-gray-900' : ''} hover:scale-105 transition duration-300`}>
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}
