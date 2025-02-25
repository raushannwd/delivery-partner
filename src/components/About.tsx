
export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/lovable-uploads/3ada0092-51ca-4619-9562-d8c81d5d00f3.png"
              alt="Delivery Partner"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <span className="text-brand-red font-semibold">ABOUT COMPANY</span>
            <h2 className="text-4xl font-bold">
              Reliable & Digital Transport Logistics Company
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Delivery Partner, we are committed to turning your entrepreneurial dreams into reality. With extensive experience in the delivery franchise industry, we understand what it takes to build a successful business.
              </p>
              <p>
                Our team of industry professionals brings a wealth of experience and a passion for excellence. We focus on providing personalized solutions that align with your business goals and unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
