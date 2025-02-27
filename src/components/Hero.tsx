
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
    businessName: "",
    state: "",
    investment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "We'll get back to you soon!",
    });
  };

  return (
    <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Open the Door to Success with Your Delivery Franchise
            </h1>
            <p className="text-lg text-gray-600">
              Looking to start your own delivery business? Delivery Partner is here to guide you every step of the way!
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-brand-red mb-6">Apply For Franchise</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
                <select className="w-full px-4 py-2 border rounded-md" required>
                  <option value="">Select State</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                </select>
                <select className="w-full px-4 py-2 border rounded-md" required>
                  <option value="">Investment Range</option>
                  <option value="10l-20l">10L To 20L</option>
                  <option value="20l-30l">20L To 30L</option>
                  <option value="30l-plus">30L+</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" required className="w-4 h-4" />
                <span className="text-sm text-gray-600">
                  I accept terms & conditions
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-brand-red text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
