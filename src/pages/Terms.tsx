
export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: March 15, 2024
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Delivery Partner's website for personal, non-commercial transitory viewing only.
            </p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}
