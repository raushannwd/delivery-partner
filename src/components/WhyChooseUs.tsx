
export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose a Delivery Partner?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-brand-red mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Professional Expertise",
    description:
      "Our experienced industry specialists guide you at every step—helping you select the perfect franchise and ensuring seamless dealership acquisition.",
  },
  {
    title: "Extensive Delivery Network",
    description:
      "Gain exclusive access to top franchise opportunities through our strong partnerships with industry-leading delivery companies. Expand your business with trusted connections and reliable delivery services.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We recognize that every client is unique. Our personalized approach helps you find the perfect franchise that aligns with your goals and budget. Start your journey today!",
  },
  {
    title: "Our Comprehensive Services",
    description:
      "From consultation to ongoing support, we guide you every step of the way for a smooth and successful franchise acquisition.",
  },
];
