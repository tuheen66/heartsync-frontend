import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle hover with delay for better UX
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setClosing(false);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setClosing(true);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, 300); // 300ms delay before closing
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div 
      className="relative"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      {/* Mega Menu Trigger Button */}
      <button 
        className="px-4 py-2 font-semibold text-gray-700 hover:text-[#a9106b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50 rounded"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        Find Matches
        <span className="ml-1 inline-block transition-transform duration-200">
          {isOpen ? "↑" : "↓"}
        </span>
      </button>

      {/* Mega Menu Content */}
      {(isOpen || closing) && (
        <div 
          className={`absolute left-0 mt-1 w-[700px] bg-white shadow-xl rounded-lg z-50 border border-gray-200 transition-all duration-200 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Add a small invisible gap bridge between button and menu */}
          <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
          
          <div className="grid grid-cols-3 gap-6 p-6">
            
            {/* Column 1 - Search Options */}
            <div>
              <h3 className="text-lg font-bold text-[#a9106b] mb-4 pb-2 border-b border-gray-200">
                Search Options
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="#" 
                    className="block py-2 px-3 rounded hover:bg-[#a9106b]/10 text-gray-700 hover:text-[#a9106b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50"
                  >
                    Basic Search
                  </Link>
                </li>
                <li>
                  <Link 
                   to="#" 
                    className="block py-2 px-3 rounded hover:bg-[#a9106b]/10 text-gray-700 hover:text-[#a9106b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50"
                  >
                    Advanced Search
                  </Link>
                </li>
                <li>
                  <Link 
                   to="#" 
                    className="block py-2 px-3 rounded hover:bg-[#a9106b]/10 text-gray-700 hover:text-[#a9106b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50"
                  >
                    Partner Preferences
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - Community */}
            <div>
              <h3 className="text-lg font-bold text-[#a9106b] mb-4 pb-2 border-b border-gray-200">
                Community
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="#" 
                    className="block py-2 px-3 rounded hover:bg-[#a9106b]/10 text-gray-700 hover:text-[#a9106b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50"
                  >
                    New Members
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/community/premium" 
                    className="block py-2 px-3 rounded hover:bg-[#a9106b]/10 text-gray-700 hover:text-[#a9106b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50"
                  >
                    Premium Members
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className="block py-2 px-3 rounded hover:bg-[#a9106b]/10 text-gray-700 hover:text-[#a9106b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50"
                  >
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-[#a9106b] mb-4 pb-2 border-b border-gray-200">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="#" 
                    className="block py-2 px-3 rounded hover:bg-[#a9106b]/10 text-gray-700 hover:text-[#a9106b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50"
                  >
                    Marriage Tips
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className="block py-2 px-3 rounded hover:bg-[#a9106b]/10 text-gray-700 hover:text-[#a9106b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50"
                  >
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link 
                   to="#" 
                    className="block py-2 px-3 rounded hover:bg-[#a9106b]/10 text-gray-700 hover:text-[#a9106b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mega Menu Footer */}
          <div className="bg-gray-50 px-6 py-4 rounded-b-lg border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Find your perfect match today
              </span>
              <Link 
                to="/register" 
                className="px-4 py-2 bg-[#a9106b] text-white rounded-md hover:bg-[#8a0d5a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a9106b]/50"
              >
                Create Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;