import React from 'react';
// Import the Calendar icon from Lucide
import { Calendar } from 'lucide-react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  });

  return (
    <header 
      className="fixed top-0 left-64 w-[calc(100%-256px-320px)] bg-white h-24 flex items-center justify-between px-10 z-10"
    >
      
      {/* 1. Greeting and Status Message */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Hello, Margaret
        </h1>
        <p className="text-slate-400 font-medium mt-1">
          Track team progress here. You almost reach a goal!
        </p>
      </div>

      {/* 2. Date and Action Button */}
      <div className="flex items-center space-x-6">
        
        {/* Date Display */}
        <span className="text-sm font-semibold text-slate-600">
          {currentDate}
        </span>
        
        {/* Action Button (Calendar icon) */}
        <button className="p-3 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-100 text-slate-900 transition-all duration-200 shadow-sm">
          <Calendar size={20} strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
};

export default Header;