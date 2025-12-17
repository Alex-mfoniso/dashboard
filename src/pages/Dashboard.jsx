import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import InfoCard from '../components/Cards/InfoCard';
import LineChart from '../components/Charts/LineChart';
import RecentOrders from '../components/Widgets/RecentOrders';
import CurrentTasks from '../components/Widgets/CurrentTasks';
// Import the new RightSidebar component
import RightSidebar from '../components/Layout/RightSidebar'; 
// Icon components to map JSON icon class strings to React components
import { ThumbsUp, Timer, TrendingUp } from 'lucide-react';

// Import the simulated data
import data from '../data/dashboardData.json';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Simulate the data fetch (GET request)
  useEffect(() => {
    // Simulate network delay
    setTimeout(() => {
      setDashboardData(data);
      setIsLoading(false);
    }, 500); 
  }, []);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50">Loading Dashboard Data...</div>;
  }

  // Destructure data for cleaner component usage
  const { summaryCards, mainChartData, recentOrders } = dashboardData;

  // Render static InfoCard components instead of reading titles/values from JSON
  // This keeps the cards identical to the design example (Finished / Tracked / Efficiency)

  return (
    <div className="flex">
      {/* 2. Left Sidebar - Fixed on the left (w-64) */}
      <Sidebar />
      
      {/* Main Layout Wrapper (excluding the Left Sidebar) */}
      <div className="flex-1 ml-64 bg-gray-50 min-h-screen">
        
        {/* 3. Header - Fixed at the top */}
        <Header />
        
        {/* Content Wrapper: Contains the Dashboard Main Content and the Right Sidebar */}
        <div className="flex pt-24 pr-80"> {/* pt-24 matches Header's h-24; pr-80 leaves room for fixed RightSidebar */}

            {/* Left/Main Content Area (flex-1 makes it take remaining space) */}
            <main className="flex-1 p-6 overflow-y-auto"> 
            
                {/* 4. Info Cards Row (static, matches design) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <InfoCard
                    title="Finished"
                    value="18"
                    change="+8 tasks"
                    changeType="positive"
                    icon={ThumbsUp}
                  />
                  <InfoCard
                    title="Tracked"
                    value="31h"
                    change="-6 hours"
                    changeType="negative"
                    icon={Timer}
                  />
                  <InfoCard
                    title="Efficiency"
                    value="93%"
                    change="+12%"
                    changeType="positive"
                    icon={TrendingUp}
                  />
                </div>
                
             <div className="grid grid-cols-1 gap-6"> 
        
        {/* Main Chart (Now spans the full width) */}
        <div className="col-span-full">
            <LineChart data={mainChartData} />
        </div>
        
        {/* REMOVED: The 1/3 width right-side content placeholder is removed. */}
    </div>

                {/* 6. Recent Orders Table (Full Width) */}
                <div className="mt-6">
                    {/* <RecentOrders orders={recentOrders} /> */}
                    <CurrentTasks/>
                </div>

            </main>

            {/* Right Sidebar is fixed; render it so it floats at the viewport edge */}
            <RightSidebar />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;