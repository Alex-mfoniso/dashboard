import React from 'react';

const Header = () => {
  // Use current date for a dynamic feel
  const currentDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    // FIX: The width must be precisely calculated: 
    // Total Screen Width - Left Sidebar (256px) - Right Sidebar (320px)
    <header 
      className="fixed top-0 left-64 w-[calc(100%-256px-320px)] bg-white shadow-sm h-20 flex items-center justify-between px-8 z-10"
      // w-[calc(100%-64px-80px)]  -> (This is using Tailwind classes as px)
      // w-[calc(100%-256px-320px)] -> (This is using actual pixel values)
    >
      
      {/* 1. Greeting and Status Message */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Hello, Margaret</h1>
        <p className="text-sm text-gray-500 mt-1">Track team progress here. You almost reach a goal!</p>
      </div>

      {/* 2. Date and Action Button */}
      <div className="flex items-center space-x-6">
        
        {/* Date Display */}
        <span className="text-sm font-medium text-gray-500">
          {currentDate}
        </span>
        
        {/* Action Button (Calendar/Action icon) */}
        <button className="p-3 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition duration-150 flex items-center justify-center">
          <i className="fa-regular fa-calendar-check text-lg"></i> 
        </button>
      </div>
    </header>
  );
};

export default Header;