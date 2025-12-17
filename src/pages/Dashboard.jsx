
"use client"
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

// import {  useEffect } from "react"
// import Sidebar from "../components/Layout/Sidebar"
// import Header from "../components/Layout/Header"
// import InfoCard from "../components/Cards/InfoCard"
import PerformanceChart from "../components/Charts/PerfomanceChart"
// import CurrentTasks from "../components/Widgets/CurrentTasks"
// import RightSidebar from "../components/Layout/RightSidebar"
import data from "../data/dashboardData.json"

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setDashboardData(data)
      setIsLoading(false)
    }, 500)
  }, [])

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50">Loading Dashboard Data...</div>
  }

  const { summaryCards, mainChartData } = dashboardData

  // Render static InfoCard components instead of reading titles/values from JSON
  // This keeps the cards identical to the design example (Finished / Tracked / Efficiency)

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-64 bg-gray-50 min-h-screen">
        <Header />

        <div className="flex pt-20">
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {summaryCards.map((card) => (
                <InfoCard key={card.id} {...card} />
              ))}
            </div>

            <div className="mb-6">
              <PerformanceChart data={mainChartData} />
            </div>

            <div className="mt-6">
              <CurrentTasks />
            </div>
          </main>

          <div className="w-80 border-l border-gray-200">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
