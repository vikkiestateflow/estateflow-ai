export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-950 text-white">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

<div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse"></h1>
          EstateFlow AI

        <p className="text-xl text-gray-400 mb-10 animate-pulse">
          AI Powered Real Estate Rendering, Virtual Staging,
          Interior Design & Property Visualization Platform.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            View Services
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        
        <div className="bg-zinc-900 hover:scale-105 transition duration-300 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Virtual Staging
          </h2>

          <p className="text-gray-400">
            Transform empty rooms into luxury furnished spaces using AI.
          </p>
        </div>

        <div className="bg-zinc-900 hover:scale-105 transition duration-300 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Interior Rendering
          </h2>

          <p className="text-gray-400">
            Generate premium modern interior designs instantly.
          </p>
        </div>

        <div className="bg-zinc-900 hover:scale-105 transition duration-300 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Floor Plan Design
          </h2>

          <p className="text-gray-400">
            Convert 2D plans into realistic 3D visualizations.
          </p>
        </div>
      </section>
<section className="px-10 pb-24">
  <div className="bg-zinc-900 hover:scale-105 transition duration-300 p-10 rounded-3xl max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold mb-6 text-center">
      Start Your AI Rendering Project
    </h2>

    <p className="text-gray-400 text-center mb-10">
      Upload your property images or floor plans and get stunning AI-powered renders.
    </p>

    <div className="grid gap-6">

      <input
        type="text"
        placeholder="Your Name"
        className="p-4 rounded-xl bg-black border border-zinc-700"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="p-4 rounded-xl bg-black border border-zinc-700"
      />

      <select className="p-4 rounded-xl bg-black border border-zinc-700">
        <option>Virtual Staging</option>
        <option>Interior Rendering</option>
        <option>Exterior Rendering</option>
        <option>Floor Plan Rendering</option>
      </select>

      <input
        type="file"
        className="p-4 rounded-xl bg-black border border-zinc-700"
      />

      <textarea
        placeholder="Describe your project..."
        className="p-4 rounded-xl bg-black border border-zinc-700 h-40"
      ></textarea>

      <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-110 transition duration-300 shadow-2xl">
        Submit Project
      </button>

    </div>
  </div>
</section>    
<section className="px-10 pb-24">
  <h2 className="text-5xl font-bold text-center mb-14">
    Before & After AI Transformation
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-zinc-900 backdrop-blur-xl border border-white/10hover:scale-105 transition duration-300 rounded-3xl overflow-hidden">
      <img
        src="/before.jpg"
        alt="Before"
        className="w-full h-[400px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">
          Before
        </h3>

        <p className="text-gray-400">
          Original property image before AI enhancement.
        </p>
      </div>
    </div>

    <div className="bg-zinc-900 hover:scale-105 transition duration-300 rounded-3xl overflow-hidden">
      <img
        src="/after.jpg"
        alt="After"
        className="w-full h-[400px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">
          After
        </h3>

        <p className="text-gray-400">
          Luxury AI-rendered transformation with premium staging.
        </p>
      </div>
    </div>

  </div>
</section>
<section className="px-10 pb-24">

  <h2 className="text-5xl font-bold text-center mb-14">
 <section className="px-10 pb-24">

  <div className="grid md:grid-cols-3 gap-8 text-center">

    <div className="bg-zinc-900 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:scale-105 transition duration-300">
      <h2 className="text-5xl font-bold mb-4 text-purple-400">
        500+
      </h2>

      <p className="text-gray-400 text-xl">
        AI Projects Completed
      </p>
    </div>

    <div className="bg-zinc-900 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:scale-105 transition duration-300">
      <h2 className="text-5xl font-bold mb-4 text-pink-400">
        98%
      </h2>

      <p className="text-gray-400 text-xl">
        Client Satisfaction
      </p>
    </div>

    <div className="bg-zinc-900 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:scale-105 transition duration-300">
      <h2 className="text-5xl font-bold mb-4 text-blue-400">
        24h
      </h2>

      <p className="text-gray-400 text-xl">
        Fast Delivery
      </p>
    </div>

  </div>

</section>
    Pricing Plans
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-zinc-900 hover:scale-105 transition duration-300 p-8 rounded-3xl">
      <h3 className="text-3xl font-bold mb-4">
        Basic
      </h3>

      <p className="text-5xl font-bold mb-6">
        $19
      </p>

      <p className="text-gray-400 mb-8">
        AI Virtual Staging with HD rendering.
      </p>

      <button className="bg-white text-black w-full py-3 rounded-xl font-bold">
        Get Started
      </button>
    </div>

    <div className="bg-white text-black p-8 rounded-3xl">
      <h3 className="text-3xl font-bold mb-4">
        Premium
      </h3>

      <p className="text-5xl font-bold mb-6">
        $49
      </p>

      <p className="mb-8">
        Luxury AI interior & exterior rendering.
      </p>

      <button className="bg-black text-white w-full py-3 rounded-xl font-bold">
        Most Popular
      </button>
    </div>

    <div className="bg-zinc-900 hover:scale-105 transition duration-300 p-8 rounded-3xl">
      <h3 className="text-3xl font-bold mb-4">
        Enterprise
      </h3>

      <p className="text-5xl font-bold mb-6">
        $99
      </p>

      <p className="text-gray-400 mb-8">
        Full premium rendering & floor plans.
      </p>

      <button className="bg-white text-black w-full py-3 rounded-xl font-bold">
        Contact Us
      </button>
    </div>

  </div>

</section>
<a
  href="https://wa.me/917888948010"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl text-lg font-bold"
>
  WhatsApp
</a>
<section className="px-10 pb-24">

  <h2 className="text-5xl font-bold text-center mb-14">
    Luxury Render Gallery
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <img
      src="/gallery1.jpg"
      className="rounded-3xl hover:scale-105 transition duration-300"
    />

    <img
      src="/gallery2.jpg"
      className="rounded-3xl hover:scale-105 transition duration-300"
    />

    <img
      src="/gallery3.jpg"
      className="rounded-3xl hover:scale-105 transition duration-300"
    />

    <img
      src="/gallery4.jpg"
      className="rounded-3xl hover:scale-105 transition duration-300"
    />

  </div>

</section>
  <div className="fixed bottom-24 right-6 bg-black border border-zinc-700 rounded-2xl p-4 w-72 shadow-2xl">

  <h3 className="text-xl font-bold mb-2">
    AI Assistant
  </h3>

  <p className="text-gray-400 text-sm mb-4">
    Hi 👋 Need help with rendering, pricing or orders?
  </p>

  <button className="bg-white text-black px-4 py-2 rounded-xl font-bold w-full">
    Start Chat
  </button>

</div>
<a
  href="https://wa.me/917888948010"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl text-lg font-bold"
>
  WhatsApp
</a>
<footer className="border-t border-white/10 mt-20 px-10 py-10 text-center text-gray-400">

  <h2 className="text-3xl font-bold text-white mb-4">
    EstateFlow AI
  </h2>

  <p className="mb-4">
    Premium AI Rendering for Modern Real Estate
  </p>

  <div className="flex justify-center gap-6 text-lg">
    <a href="#">Instagram</a>
    <a href="#">Twitter</a>
    <a href="#">LinkedIn</a>
  </div>

</footer>
   </main>
  );
}