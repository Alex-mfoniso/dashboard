const InfoCard = ({ title, value, change, changeType, icon }) => {
  const isPositive = changeType === "positive"
  const changeColorClass = isPositive ? "text-green-500" : "text-red-500"
  const changeIconClass = isPositive ? "fa-solid fa-play fa-rotate-270" : "fa-solid fa-play fa-rotate-90"

  return (
    <div className="bg-white rounded-xl p-4 flex items-center space-x-4 border border-gray-100">
      <div className="p-4 w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
        <i className={`${icon} text-xl text-gray-800`}></i>
      </div>

      <div className="flex-grow">
        <p className="text-sm font-medium text-gray-800 mb-1">{title}</p>

        <div className="flex items-end space-x-2">
          <p className="text-2xl font-bold text-gray-900 leading-none">{value}</p>

          <span className={`text-xs font-semibold ${changeColorClass} flex items-center leading-none`}>
            <i className={`${changeIconClass} mr-1 text-xs`} style={{ fontSize: "0.6rem" }}></i>
            <span className="text-sm">{change}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
