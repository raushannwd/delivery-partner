
export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: March 15, 2024
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including your name, email address, phone number, and any other information you choose to provide.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
            </p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}
