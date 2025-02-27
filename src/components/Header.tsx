
import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });
    }
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => scrollToSection("home")} 
            className="flex items-center"
          >
            <span className="text-2xl font-bold">Delivery Partner</span>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")} 
              className={`${activeSection === "home" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className={`${activeSection === "about" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection("faqs")} 
              className={`${activeSection === "faqs" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors`}
            >
              FAQs
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className={`${activeSection === "contact" ? "text-brand-red" : "text-gray-700"} hover:text-brand-red transition-colors`}
            >
              Contact Us
            </button>
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
