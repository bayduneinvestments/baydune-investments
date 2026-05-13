export default function BayduneWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-slate-900 text-white py-6 px-6 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Baydune Investments LLC</h1>
            <p className="text-slate-300 mt-1">
              Real Estate Investment & Property Management
            </p>
          </div>
          <div className="text-sm text-slate-200">
            <p>Santa Rosa Beach, Florida</p>
            <p>510-861-8999</p>
            <p>wagdydemyan@gmail.com</p>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Investment Properties Designed for Comfort & Value
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Baydune Investments LLC is a Florida-based real estate investment company focused on acquiring, furnishing, managing, and leasing residential investment properties and vacation rentals.
          </p>
          <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl shadow hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

        <div className="bg-slate-100 rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Residential Real Estate Investments</li>
            <li>• Vacation Rental Property Setup</li>
            <li>• Property Furnishing & Design</li>
            <li>• Long-Term Rental Management</li>
            <li>• Property Renovation Coordination</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-14 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">About Baydune Investments</h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-8">
            We specialize in acquiring and improving residential investment properties across Florida. Our goal is to create comfortable, modern, and high-quality living spaces while building long-term value for our portfolio and guests.
          </p>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 text-center py-6 mt-10">
        <p>© 2026 Baydune Investments LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
