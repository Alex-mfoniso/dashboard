import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const PerformanceChart = ({ data }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md h-96">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">Performance</h3>

        <button className="flex items-center space-x-1 text-sm text-gray-500 border border-gray-200 py-1 px-3 rounded-lg hover:bg-gray-50 transition">
          <span>01-07 May</span>
          <i className="fa-solid fa-chevron-down text-xs"></i>
        </button>
      </div>

      <div style={{ width: "100%", height: "85%" }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              stroke="#9ca3af"
              padding={{ left: 20, right: 20 }}
            />

            <YAxis
              tickFormatter={(value) => `${value}h`}
              domain={[0, 12]}
              axisLine={false}
              tickLine={false}
              width={35}
              stroke="#9ca3af"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="Sales"
              stroke="#3b82f6"
              fillOpacity={0.1}
              fill="#3b82f6"
              strokeWidth={2}
              activeDot={{ r: 6, fill: "#3b82f6", stroke: "white", strokeWidth: 2 }}
            />

            <Area
              type="monotone"
              dataKey="Traffic"
              stroke="#f97316"
              fillOpacity={0.05}
              fill="#f97316"
              strokeWidth={2}
              activeDot={{ r: 6, fill: "#f97316", stroke: "white", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PerformanceChart
