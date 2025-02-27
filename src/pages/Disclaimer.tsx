
export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <p className="text-gray-600 mb-4">
              The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="text-gray-600 mb-4">
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}
