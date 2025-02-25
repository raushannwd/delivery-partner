
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">Delivery Partner</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-red transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-red transition-colors">
              About Us
            </Link>
            <Link to="/faqs" className="text-gray-700 hover:text-brand-red transition-colors">
              FAQs
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-red transition-colors">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-brand-red transition-colors">
              User Login
            </button>
            <button className="px-4 py-2 bg-brand-red text-white rounded-md hover:bg-red-600 transition-colors">
              Ship Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
