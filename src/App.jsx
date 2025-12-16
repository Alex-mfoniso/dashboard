import React from "react";
// 1. Import the Dashboard component
import Dashboard from "./pages/Dashboard"; 

function App() {
  return (
    // The Dashboard component handles the full layout (Sidebar, Header, Main Content)
    // We remove the centering and height properties from App.jsx's root div
    // to allow the dashboard layout to take up the full screen height and width naturally.
    <div className="bg-gray-50">
      <Dashboard />
    </div>
  );
}

export default App;