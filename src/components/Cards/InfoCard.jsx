import React from 'react';

const InfoCard = ({ title, value, change, changeType, icon }) => {
    const isPositive = changeType === 'positive';

    // Determine the color for the change text (Note: The image uses a green/teal color for positive changes)
    const changeColorClass = isPositive ? 'text-green-500' : 'text-red-500'; 
    // The image uses a solid triangle icon, not caret-up/down
    const changeIconClass = isPositive ? 'fa-solid fa-play fa-rotate-270' : 'fa-solid fa-play fa-rotate-90'; 
    // In Tailwind, fa-play can be rotated to act as an arrow.

    return (
        // Remove text-center and center items since content is left-aligned within the container
        <div className="bg-white rounded-xl p-4 flex items-center space-x-4 border border-gray-100">
            
            {/* 1. Icon Circle (Left side) */}
            <div className="p-4 w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                {/* Use the Font Awesome icon passed in props */}
                <i className={`${icon} text-xl text-gray-800`}></i>
            </div>
            
            {/* 2. Content Block (Takes remaining space) */}
            <div className="flex-grow">
                
                {/* 2a. Title */}
                <p className="text-sm font-medium text-gray-800 mb-1">{title}</p>

                {/* 2b. Value and Change Text (Side-by-Side in the design) */}
                <div className="flex items-end space-x-2">
                    {/* Value */}
                    <p className="text-2xl font-bold text-gray-900 leading-none">{value}</p>
                    
                    {/* Change Indicator */}
                    <span className={`text-xs font-semibold ${changeColorClass} flex items-center leading-none`}>
                        {/* Adjusted icon for the small arrow */}
                        <i className={`${changeIconClass} mr-1 text-xs`} style={{fontSize: '0.6rem'}}></i>
                        <span className="text-sm">{change}</span>
                    </span>
                </div>
                
            </div>
        </div>
    );
};

export default InfoCard;