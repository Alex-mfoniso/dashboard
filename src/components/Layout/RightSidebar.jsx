import React from 'react';
import { 
    Phone, 
    Video, 
    MoreHorizontal, 
    Paperclip, 
    Mic, 
    CheckCircle2, 
    Smile 
} from 'lucide-react';

const activityFeed = [
    { 
        user: "Floyd Miles", 
        handle: "@floydm", 
        action: "Commented on Stark Project", 
        time: "10:15 AM", 
        message: "Hi! Next week we'll start a new project. I'll tell you all the details later",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", 
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
            iconStyle: "bg-black text-white rounded-md"
        },
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", 
        statusDotColor: "bg-green-500"
    },
    { 
        user: "Kristin Watson", 
        handle: "@kristinw", 
        action: "Commented on 7Heros Project", 
        time: "10:15 AM", 
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", 
        statusDotColor: "bg-red-500"
    },
];

const RightSidebar = () => {
    return (
      
        <div className="w-80 h-screen fixed top-0 right-0 bg-white flex flex-col border-l border-slate-100 shadow-sm">
            
            {/* 1. User Profile Card (Fixed Height) */}
            <div className="p-8 text-center flex-shrink-0">
                <div className="relative inline-block mb-4">
                    <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" 
                        alt="Megan Norton" 
                        className="w-24 h-24 rounded-3xl object-cover border-4 border-white shadow-xl shadow-slate-200"
                    />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Megan Norton</h2>
                <p className="text-sm font-medium text-slate-400 mb-6">@megnorton</p>
                
                <div className="flex justify-center space-x-3">
                    <button className="p-3 bg-slate-50 rounded-2xl text-slate-600 hover:bg-slate-100 transition-colors">
                        <Phone size={20} strokeWidth={2} />
                    </button>
                    <button className="p-3 bg-slate-50 rounded-2xl text-slate-600 hover:bg-slate-100 transition-colors">
                        <Video size={20} strokeWidth={2} />
                    </button>
                    <button className="p-3 bg-slate-50 rounded-2xl text-slate-600 hover:bg-slate-100 transition-colors">
                        <MoreHorizontal size={20} strokeWidth={2} />
                    </button>
                </div>
            </div>

            <hr className="mx-8 border-slate-50 flex-shrink-0" />

        
            <div className="p-6 flex-1 overflow-y-auto min-h-0 custom-scrollbar">
                <h3 className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-[2px] mb-8">
                    Recent Activity
                </h3>

                {activityFeed.map((activity, index) => (
                    <div key={index} className="flex space-x-4 mb-8">
                        <div className="flex-shrink-0 relative">
                            <img 
                                src={activity.avatar} 
                                alt={activity.user} 
                                className="w-10 h-10 rounded-xl object-cover"
                            />
                            <span className={`absolute -bottom-0.5 -right-0.5 block h-3 w-3 rounded-full ring-2 ring-white ${activity.statusDotColor}`}></span>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <p className="font-bold text-slate-900 text-[14px]">{activity.user}</p>
                                <p className="text-[11px] font-medium text-slate-400">{activity.time}</p>
                            </div>
                            <p className="text-[12px] font-medium text-slate-400 mt-0.5">{activity.action}</p>

                            {activity.message && (
                                <div className="relative p-3 mt-3 bg-blue-50/50 rounded-2xl rounded-tl-none text-[13px] leading-relaxed text-slate-700">
                                    {activity.message}
                                    <span className="absolute -bottom-2 -right-1 bg-white px-1.5 py-0.5 rounded-full shadow-sm text-[10px] border border-slate-100">👍</span>
                                </div>
                            )}

                            {activity.file && (
                                <div className="flex items-center justify-between p-3 mt-3 bg-slate-50 rounded-2xl border border-slate-100 group cursor-pointer hover:border-blue-200 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <span className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold ${activity.file.iconStyle}`}>
                                            {activity.file.icon}
                                        </span>
                                        <div>
                                            <p className="font-bold text-slate-800 text-[12px]">{activity.file.name}</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{activity.file.size}</p>
                                        </div>
                                    </div>
                                    <CheckCircle2 size={16} className="text-blue-500" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* 3. Messaging Input*/}
            <div className="p-6 bg-white border-t border-slate-50 flex-shrink-0">
                <div className="flex items-center bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 focus-within:border-blue-200 transition-all">
                    <Paperclip size={18} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                    <input 
                        type="text" 
                        placeholder="Write a message..." 
                        className="flex-grow bg-transparent focus:outline-none text-[13px] px-3 font-medium text-slate-700 placeholder:text-slate-400"
                    />
                    <div className="flex space-x-3 text-slate-400">
                        <Smile size={18} className="cursor-pointer hover:text-slate-600" />
                        <Mic size={18} className="cursor-pointer hover:text-slate-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;