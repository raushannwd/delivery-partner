
export default function Cookies() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: March 15, 2024
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies to improve your experience on our website and to understand how you interact with our content.
            </p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}
