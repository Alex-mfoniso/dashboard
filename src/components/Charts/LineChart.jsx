import React from 'react';
import { 
  LineChart as RechartsLineChart, // <--- Rename the Recharts import to avoid conflict (optional, but good practice)
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area // Used for the shaded area under the line
} from 'recharts';

// FIX: Renaming the component to PerformanceChart
const PerformanceChart = ({ data }) => {

  // Recharts requires the parent to define the height/width for ResponsiveContainer
  return (
    <div className="bg-white rounded-xl p-6 shadow-md h-96">
      
      {/* Chart Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">Performance</h3>
        
        {/* Date Range Dropdown */}
        <button className="flex items-center space-x-1 text-sm text-gray-500 border border-gray-200 py-1 px-3 rounded-lg hover:bg-gray-50 transition">
            <span>01-07 May</span>
            <i className="fa-solid fa-chevron-down text-xs"></i>
        </button>
      </div>

      {/* Recharts Area */}
      <div style={{ width: '100%', height: '85%' }}>
        <ResponsiveContainer>
          <AreaChart
            data={data} 
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" />

            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              stroke="#9ca3af" // gray-400
              padding={{ left: 20, right: 20 }}
            />

            <YAxis 
              tickFormatter={(value) => `${value}h`} // Format to add 'h' suffix
              domain={[0, 12]} // Set a fixed max domain for hours
              axisLine={false} 
              tickLine={false} 
              width={35} // Give space for the labels
              stroke="#9ca3af" // gray-400
            />

            <Tooltip /> 

            {/* First Performance Line (Blue) */}
            <Area 
              type="monotone" 
              dataKey="Sales" 
              stroke="#3b82f6" 
              fillOpacity={0.1}
              fill="#3b82f6"
              strokeWidth={2}
              activeDot={{ r: 6, fill: '#3b82f6', stroke: 'white', strokeWidth: 2 }}
            />
            
            {/* Second Performance Line (Orange/Yellow) */}
            <Area 
              type="monotone" 
              dataKey="Traffic" 
              stroke="#f97316" 
              fillOpacity={0.05}
              fill="#f97316"
              strokeWidth={2}
              activeDot={{ r: 6, fill: '#f97316', stroke: 'white', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart; // <-- Export the new name