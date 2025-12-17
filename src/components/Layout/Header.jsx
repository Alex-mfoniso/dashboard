
import { Calendar } from "lucide-react";

const Header = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="fixed top-0 left-64 w-[calc(100%-256px-320px)] bg-white shadow-sm h-20 flex items-center justify-between px-8 z-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Hello, Margaret</h1>
        <p className="text-sm text-gray-500 mt-1">
          Track team progress here. You almost reach a goal!
        </p>
      </div>

      <div className="flex items-center space-x-6">
        <span className="text-sm font-medium text-gray-500">{currentDate}</span>
        <button className="p-3 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition duration-150 flex items-center justify-center">
          <Calendar />
        </button>
      </div>
    </header>
  );
};

export default Header;
