import React from 'react';

// Mock data for the activity feed (Updated with status colors and file styling)
const activityFeed = [
    { 
        user: "Floyd Miles", 
        handle: "@floydm", 
        action: "Commented on Stark Project", 
        time: "10:15 AM", 
        message: "Hi! Next week we'll start a new project. I'll tell you all the details later",
        // FIX: Replaced Pinterest embed link with a working placeholder image
        avatar: "https://via.placeholder.com/150/5050C0/FFFFFF?text=FM", 
        statusDotColor: "bg-red-500"
    },
    { 
        user: "Guy Hawkins", 
        handle: "@guyh", 
        action: "Added a file to 7Heros Project", 
        time: "10:15 AM", 
        file: { 
            name: "Homepage.fig", 
            size: "13.4 Mb", 
            icon: "F", 
            iconStyle: "bg-black text-white rounded-md font-sans"
        },
        avatar: "https://via.placeholder.com/150/FFA500/FFFFFF?text=GH",
        statusDotColor: "bg-green-500"
    },
    { 
        user: "Kristin Watson", 
        handle: "@kristinw", 
        action: "Commented on 7Heros Project", 
        time: "10:15 AM", 
        avatar: "https://via.placeholder.com/150/FF0000/FFFFFF?text=KW",
        statusDotColor: "bg-red-500"
    },
];
const RightSidebar = () => {
    return (
        <div className="w-80 h-full bg-white flex flex-col shadow-lg">
            
            {/* 1. User Profile Card (Top Section) */}
            <div className="p-6 bg-gray-50 text-center border-b border-gray-200">
                <img 
                    src="https://via.placeholder.com/150/FFC0CB/000000?text=MN" 
                    alt="Megan Norton" 
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-white shadow-md"
                />
                <p className="text-lg font-semibold text-gray-900">Megan Norton</p>
                <p className="text-sm text-gray-500 mb-4">@megnorton</p>
                
                {/* Contact/Action Buttons */}
                <div className="flex justify-center space-x-3"> {/* Increased space-x for buttons */}
                    <button className="p-3 bg-white rounded-full text-gray-600 shadow-sm hover:bg-gray-100">
                        <i className="fas fa-phone-alt"></i> {/* Call icon */}
                    </button>
                    <button className="p-3 bg-white rounded-full text-gray-600 shadow-sm hover:bg-gray-100">
                        <i className="fas fa-video"></i> {/* Video icon */}
                    </button>
                    <button className="p-3 bg-white rounded-full text-gray-600 shadow-sm hover:bg-gray-100">
                        <i className="fas fa-ellipsis-h"></i> {/* More options icon */}
                    </button>
                </div>
            </div>

            {/* 2. Activity Feed */}
            <div className="p-4 flex-grow overflow-y-auto">
                <h3 className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                    Activity
                </h3>

                {activityFeed.map((activity, index) => (
                    <div key={index} className="flex space-x-3 mb-6 relative">
                        {/* Avatar */}
                        <div className="flex-shrink-0 relative">
                            <img 
                                src={activity.avatar} 
                                alt={activity.user} 
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            {/* Status Dot: Use dynamic statusDotColor */}
                            <span className={`absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white ${activity.statusDotColor}`}></span>
                        </div>
                        
                        {/* Activity Details */}
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <p className="font-semibold text-gray-900 text-sm">{activity.user}</p>
                                <p className="text-xs text-gray-400">{activity.time}</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">
                                {activity.action}
                            </p>

                            {/* Message Bubble */}
                            {activity.message && (
                                <div className="relative p-3 mt-2 bg-blue-50 rounded-xl rounded-tl-none text-sm text-gray-800">
                                    {activity.message}
                                    {/* The small thumb icon */}
                                    <span className="absolute bottom-0 right-0 transform translate-x-1 translate-y-1 p-1 bg-white rounded-full shadow-sm">
                                        👍
                                    </span>
                                </div>
                            )}

                            {/* File Bubble */}
                            {activity.file && (
                                <div className="flex items-center justify-between p-3 mt-2 bg-white rounded-xl text-sm border border-gray-200"> {/* Changed background for contrast */}
                                    <div className="flex items-center space-x-3">
                                        {/* File Icon (Stylized Figma 'F') */}
                                        <span className={`p-1 w-6 h-6 flex items-center justify-center rounded-md text-xs ${activity.file.iconStyle}`}>
                                            {activity.file.icon}
                                        </span>
                                        <div>
                                            <p className="font-medium text-gray-800">{activity.file.name}</p>
                                            <p className="text-xs text-gray-500">{activity.file.size}</p>
                                        </div>
                                    </div>
                                    {/* Replaced cloud-arrow-down with the circular check icon */}
                                    <i className="fa-regular fa-circle-check text-blue-600"></i>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* 3. Messaging Input (Bottom) */}
            <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex items-center bg-gray-50 p-3 rounded-xl border border-gray-200"> {/* Changed to rounded-xl to match image */}
                    <i className="fas fa-paperclip text-gray-400 mr-3"></i>
                    <input 
                        type="text" 
                        placeholder="Write a message" 
                        className="flex-grow bg-transparent focus:outline-none text-sm"
                    />
                    <div className="flex space-x-3 ml-3 text-gray-400"> {/* Increased space-x for icons */}
                        <i className="fa-regular fa-face-smile"></i> {/* Used fa-regular for lighter style */}
                        <i className="fas fa-microphone"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;