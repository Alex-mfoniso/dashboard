import React from 'react';

// Define the structure for a task item
const taskData = [
    {
        id: 1,
        title: "Product Review for UIB Market",
        icon: "fa-solid fa-chart-line",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        status: "In progress",
        statusColor: "text-orange-500",
        time: "4h"
    },
    {
        id: 2,
        title: "UX Research for Product",
        icon: "fa-solid fa-magnifying-glass",
        iconBg: "bg-yellow-50",
        iconColor: "text-yellow-600",
        status: "On hold",
        statusColor: "text-blue-400",
        time: "8h"
    },
    {
        id: 3,
        title: "App design and development",
        icon: "fa-solid fa-code",
        iconBg: "bg-green-50",
        iconColor: "text-green-600",
        status: "Done",
        statusColor: "text-green-500",
        time: "32h"
    },
    // Add more tasks as needed...
];


const CurrentTasks = () => {
    // You would typically fetch this data and pass it via props, 
    // but we'll use local mock data for simplicity here.
    const tasks = taskData; 

    return (
        <div className="bg-white rounded-xl p-6 shadow-md">
            
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <div className="flex items-baseline space-x-3">
                    <h3 className="text-xl font-bold text-gray-900">Current Tasks</h3>
                    <span className="text-sm font-semibold text-gray-500">Done 30%</span>
                </div>
                
                {/* Dropdown/Filter Button */}
                <button className="flex items-center space-x-1 text-sm text-gray-500 border border-gray-200 py-1 px-3 rounded-lg hover:bg-gray-50 transition">
                    <span>Week</span>
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                </button>
            </div>
            
            {/* Task List */}
            <div className="flex flex-col divide-y divide-gray-100">
                {tasks.map((task) => (
                    <div key={task.id} className="flex items-center py-4 justify-between">
                        
                        {/* Task Title and Icon */}
                        <div className="flex items-center space-x-4 flex-grow">
                            {/* Icon Circle */}
                            <div className={`p-2 rounded-lg ${task.iconBg} ${task.iconColor}`}>
                                <i className={`${task.icon} text-lg`}></i>
                            </div>
                            <span className="text-sm font-medium text-gray-800">{task.title}</span>
                        </div>
                        
                        {/* Status, Time, and Options */}
                        <div className="flex items-center space-x-6 flex-shrink-0">
                            {/* Status Dot */}
                            <div className="flex items-center space-x-2 w-24"> {/* fixed width for alignment */}
                                <span className={`h-2 w-2 rounded-full ${task.statusColor.replace('text-', 'bg-')}`}></span>
                                <span className={`text-xs font-medium ${task.statusColor}`}>{task.status}</span>
                            </div>

                            {/* Time Spent */}
                            <div className="flex items-center space-x-1 text-sm text-gray-500 w-10">
                                <i className="fa-regular fa-clock text-xs"></i>
                                <span>{task.time}</span>
                            </div>

                            {/* More Options */}
                            <button className="text-gray-400 hover:text-gray-700">
                                <i className="fa-solid fa-ellipsis-h text-sm"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurrentTasks;