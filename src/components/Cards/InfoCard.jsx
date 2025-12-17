import React from 'react';
import { Play } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, value, change, changeType }) => {
  const isPositive = changeType === 'positive';

  return (
   
    <div className="w-full flex items-center gap-4 pr-10 mr-10 border-r border-gray-100 last:border-r-0 last:pr-0 last:mr-0">
      
      {/* 1. Icon Circle */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-50">
        {typeof Icon === 'string' ? (
          <i className={`${Icon} text-gray-900 text-lg`} aria-hidden="true"></i>
        ) : (
          <Icon className="h-5 w-5 text-gray-900" strokeWidth={1.5} />
        )}
      </div>

      {/* 2. Text Content */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-900 mb-0.5">{title}</span>
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900 leading-none">
            {value}
          </span>
          
          {/* 3. Trend Indicator with solid Triangle (Play) */}
          {change && (
            <div
              className={`flex items-center gap-1 text-[13px] font-bold ${
                isPositive ? 'text-emerald-400' : 'text-rose-500'
              }`}
            >
              <Play
                fill="currentColor"
                size={8}
                className={`${isPositive ? '-rotate-90' : 'rotate-90'}`}
              />
              <span>{change}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;