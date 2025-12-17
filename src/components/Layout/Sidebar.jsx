import React from 'react';
// Import specific icons that match your screenshot
import { 
  Home, 
  LayoutGrid, 
  ListTodo, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Plus 
} from 'lucide-react';

const Sidebar = () => {
    const mainNavLinks = [
        { name: 'Home', icon: Home, isSelected: true },
        { name: 'Projects', icon: LayoutGrid, hasAction: true },
        { name: 'Tasks', icon: ListTodo, hasAction: true },
        { name: 'Team', icon: Users },
        { name: 'Settings', icon: Settings },
    ];

    const bottomNavLinks = [
        { name: 'Help & information', icon: HelpCircle },
        { name: 'Log out', icon: LogOut },
    ];

    return (
        <div className="w-64 fixed h-full bg-white border-r border-gray-100 p-6 flex flex-col">
            
            {/* 1. Logo */}
            <div className="flex items-center space-x-2 pb-10">
         
                <span className="text-xl font-bold text-gray-900 tracking-tight">logip</span>
            </div>

            {/* 2. Main Navigation */}
            <nav className="flex flex-col space-y-2 flex-grow">
                {mainNavLinks.map((link) => (
                    <a 
                        key={link.name}
                        href="#" 
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 
                            ${link.isSelected 
                                ? 'bg-slate-50 text-slate-900' 
                                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                            }`}
                    >
                        <div className="flex items-center space-x-4">
                            {/* Icon Component with thin stroke width */}
                            <link.icon size={22} strokeWidth={1.5} />
                            <span className="text-[15px] font-medium">{link.name}</span>
                        </div>
                        
                        {/* Plus Action Button */}
                        {link.hasAction && (
                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                <Plus size={14} strokeWidth={3} />
                            </div>
                        )}
                    </a>
                ))}
            </nav>

            {/* 3. Upgrade to Pro Card */}
            <div className="p-5 bg-slate-50 rounded-3xl mb-8 text-center">
                <p className="font-bold text-slate-900 text-lg">Upgrade to Pro</p>
                <p className="text-xs text-slate-400 mt-2 mb-4 leading-relaxed">
                    Get 1 month free and unlock all features
                </p>
                <button className="w-full py-3 px-4 rounded-2xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                    Upgrade
                </button>
            </div>

            {/* 4. Bottom Links */}
            <nav className="flex flex-col space-y-2">
                {bottomNavLinks.map((link) => (
                    <a 
                        key={link.name}
                        href="#" 
                        className="flex items-center space-x-4 p-2.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all"
                    >
                        <link.icon size={22} strokeWidth={1.5} />
                        <span className="text-[15px] font-medium">{link.name}</span>
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;