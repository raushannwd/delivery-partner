
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/3dee19c3-553a-4d00-9ea4-029f9540410f.png" 
                alt="Delivery Partner" 
                className="h-12"
              />
            </Link>
            <p className="text-gray-400 mt-4">
              Delivery Partner provide expert guidance and comprehensive support from consultation to acquisition. Partner with us to make your delivery business dreams a reality.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-gray-400 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/copyright" className="text-gray-400 hover:text-white transition-colors">
                  Copyright Policy
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">
                  Legal Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  VILL-GARIBA, TOLA-GARIBA, PANCH-GARIBA, BLOCK-KALYANPUR, Gariba, Purbi Champaran, Bihar, 845432
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+918585864332</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Info@Deliverypartnar.Site</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
