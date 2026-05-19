export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <h1 className="text-6xl font-bold text-white">
        EstateFlow <span className="text-yellow-400">AI</span>
      </h1><section className="px-10 py-24">
  <h2 className="text-5xl font-bold text-center mb-16 text-white">
    Featured Properties
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800">
      <img
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
        alt="House"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Miami Luxury Villa
        </h3>

        <p className="text-yellow-400 text-xl mb-4">
          $450,000
        </p>

        <p className="text-gray-400 mb-6">
          4 Beds • 3 Baths • Smart Home • Pool
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
          View Property
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800">
      <img
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
        alt="House"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          California Smart Home
        </h3>

        <p className="text-yellow-400 text-xl mb-4">
          $620,000
        </p>

        <p className="text-gray-400 mb-6">
          5 Beds • Solar Energy • Modern Design
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
          View Property
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800">
      <img
        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
        alt="House"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          New York Penthouse
        </h3>

        <p className="text-yellow-400 text-xl mb-4">
          $980,000
        </p>

        <p className="text-gray-400 mb-6">
          Skyline View • Premium Location
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
          View Property
        </button>
      </div>
    </div>

  </div>
</section><footer className="bg-black border-t border-gray-800 py-10 text-center">
  <h2 className="text-3xl font-bold text-white mb-4">
    EstateFlow <span className="text-yellow-400">AI</span>
  </h2>

  <p className="text-gray-400 mb-6">
    Modern AI-Powered Real Estate Marketplace
  </p>

  <div className="flex justify-center gap-6 text-gray-500">
    <p>Buy</p>
    <p>Sell</p>
    <p>Agents</p>
    <p>Contact</p>
  </div>
</footer>
    </div>
  );
}