import {
  Home,
  LayoutGrid,
  CheckSquare,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
} from 'lucide-react';

const Sidebar = () => {
  const mainNavLinks = [
    { name: 'Home', icon: Home, isSelected: true },
    { name: 'Projects', icon: LayoutGrid, hasArrow: true },
    { name: 'Tasks', icon: CheckSquare, hasArrow: true },
    { name: 'Team', icon: Users },
    { name: 'Settings', icon: Settings },
  ];

  const bottomNavLinks = [
    { name: 'Help & information', icon: HelpCircle },
    { name: 'Log out', icon: LogOut },
  ];

  return (
    <div className="w-64 fixed h-full bg-white shadow-xl p-6 flex flex-col">
      
      {/* Logo */}
      <div className="flex items-center space-x-2 pb-8 border-b border-gray-100">
        <span className="text-xl font-bold text-gray-900">logip</span>
      </div>

      {/* Main Nav */}
      <nav className="flex flex-col space-y-1 mt-6 flex-grow">
        {mainNavLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.name}
              href="#"
              className={`flex items-center justify-between p-2 rounded-lg transition
                ${link.isSelected
                  ? 'bg-gray-100 font-semibold text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5" />
                <span className="text-sm">{link.name}</span>
              </div>

              {link.hasArrow && (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </a>
          );
        })}
      </nav>

      {/* Upgrade Card */}
      <div className="p-4 bg-gray-50 rounded-xl mb-6 mt-4 text-center">
        <p className="font-bold text-gray-900 text-base">Upgrade to Pro</p>
        <p className="text-xs text-gray-500 my-2">
          Get 1 month free and unlock
        </p>

        <button className="w-full py-2 rounded-lg text-sm font-semibold text-white bg-blue-400 hover:bg-blue-500 transition shadow-md shadow-blue-200">
          Upgrade
        </button>
      </div>

      {/* Bottom Nav */}
      <nav className="flex flex-col space-y-1 pb-4">
        {bottomNavLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.name}
              href="#"
              className="flex items-center space-x-3 p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition"
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{link.name}</span>
            </a>
          );
        })}
      </nav>

    </div>
  );

};

export default Sidebar;
