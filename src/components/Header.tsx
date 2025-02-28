
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "faqs", "contact"];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoginClick = () => {
    navigate("/franchise-login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => scrollToSection("home")} 
            className="flex items-center"
          >
            <img 
              src="/lovable-uploads/c5904d57-a009-4bad-bf38-cb82f57e4d65.png" 
              alt="Delivery Partner" 
              className="h-12"
            />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")} 
              className={`${activeSection === "home" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors font-bold`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className={`${activeSection === "about" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors font-bold`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection("faqs")} 
              className={`${activeSection === "faqs" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors font-bold`}
            >
              FAQs
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className={`${activeSection === "contact" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors font-bold`}
            >
              Contact Us
            </button>
          </nav>
          
          {/* Desktop Login Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleLoginClick}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              User Login
            </button>
            <button 
              onClick={handleLoginClick}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Franchise Login
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")} 
                className={`${activeSection === "home" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors font-bold py-2`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className={`${activeSection === "about" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors font-bold py-2`}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("faqs")} 
                className={`${activeSection === "faqs" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors font-bold py-2`}
              >
                FAQs
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className={`${activeSection === "contact" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors font-bold py-2`}
              >
                Contact Us
              </button>
              <div className="flex flex-col space-y-3 pt-2">
                <button 
                  onClick={handleLoginClick}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  User Login
                </button>
                <button 
                  onClick={handleLoginClick}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Franchise Login
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
