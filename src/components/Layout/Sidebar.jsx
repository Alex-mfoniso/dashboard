import React from 'react';

const Sidebar = () => {
    // Array of navigation links to map over
    const mainNavLinks = [
        { name: 'Home', iconClass: 'fa-solid fa-house', isSelected: true },
        { name: 'Projects', iconClass: 'fa-solid fa-border-all', hasArrow: true },
        { name: 'Tasks', iconClass: 'fa-solid fa-list-check', hasArrow: true },
        { name: 'Team', iconClass: 'fa-solid fa-share-nodes' },
        { name: 'Settings', iconClass: 'fa-solid fa-gear' },
    ];

    const bottomNavLinks = [
        { name: 'Help & information', iconClass: 'fa-regular fa-clock' },
        { name: 'Log out', iconClass: 'fa-regular fa-circle-left' },
    ];

    return (
        // The main container. Adjusted padding and removed default space-y-8 to use flex spacing.
        <div className="w-64 fixed h-full bg-white shadow-xl p-6 flex flex-col">
            
            {/* 1. Logo / Title */}
            <div className="flex items-center space-x-2 pb-8 border-b border-gray-100">
                {/* Placeholder for the Logip logo structure (use the image of the logo or an SVG) */}
               
                <span className="text-xl font-bold text-gray-900">logip</span>
            </div>

            {/* 2. Main Navigation Links (This section needs to take up available space) */}
            <nav className="flex flex-col space-y-1 mt-6 flex-grow">
                {mainNavLinks.map((link) => (
                    <a 
                        key={link.name}
                        href="#" 
                        // Use a smaller p-2 and slightly smaller text, and adjust hover for minimal design
                        className={`flex items-center justify-between p-2 rounded-lg transition duration-150 
                                    ${link.isSelected 
                                        ? 'bg-gray-100 font-semibold text-gray-900' 
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                    >
                        <div className="flex items-center space-x-3">
                            {/* Icons are regular/light weight in the image */}
                            <i className={`${link.iconClass} w-5 text-lg`}></i> 
                            <span className="text-sm">{link.name}</span>
                        </div>
                        {/* Right Arrow/Indicator */}
                        {link.hasArrow && (
                            <i className={`fa-solid fa-arrow-right text-xs ${link.isSelected ? 'text-gray-900' : 'text-gray-400'}`}></i>
                        )}
                    </a>
                ))}
            </nav>

            {/* 3. Upgrade to Pro Card */}
            <div className="p-4 bg-gray-50 rounded-xl mb-6 mt-4 text-center">
                <p className="font-bold text-gray-900 text-base">Upgrade to Pro</p>
                <p className="text-xs text-gray-500 my-2">Get 1 month free and unlock</p>
                
                {/* Button styled for the light blue gradient/color */}
                <button className="w-full py-2 px-4 rounded-lg text-sm font-semibold text-white bg-blue-400 hover:bg-blue-500 transition duration-150 shadow-md shadow-blue-200">
                    Upgrade
                </button>
            </div>

            {/* 4. Help & Log out Links */}
            <nav className="flex flex-col space-y-1 pb-4">
                {bottomNavLinks.map((link) => (
                    <a 
                        key={link.name}
                        href="#" 
                        className="flex items-center space-x-3 p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition duration-150"
                    >
                        <i className={`${link.iconClass} w-5 text-lg`}></i>
                        <span className="text-sm">{link.name}</span>
                    </a>
                ))}
            </nav>
            
        </div>
    );
};

export default Sidebar;