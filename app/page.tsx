"use client";

export default function Home() {
  return (
  <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
  <h2 className="text-2xl font-bold text-white">
    EstateFlow AI
  </h2>
  <div className="flex gap-6 items-center">
  <a href="#" className="text-white hover:text-purple-400">
    Home
  </a>

  <a href="#services" className="text-white hover:text-purple-400">
    About
  </a>

  <a href="#services" className="text-white hover:text-purple-400">
  Services
</a>

<a href="#footer" className="text-white hover:text-purple-400">
  Contact
</a>
</div>
  </div>
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-950 text-white selection:bg-purple-500 selection:text-white">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

<div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
  EstateFlow AI
</h1>
<p className="text-purple-400 text-lg font-semibold mb-4">
  🚀 AI-Powered Real Estate Platform
</p>
        <p className="text-xl text-gray-400 mb-10 ">
          The Complete AI Platform to Buy, Sell, Rent & Transform Properties with AI Virtual Staging, Interior Design, Smart Search and Professional Real Estate Tools.

        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
  onClick={() =>
    document.getElementById("upload-section")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300 shadow-2xl"
>
            Get Started
            <p className="mt-8 text-gray-500 text-sm">
  ⭐ Trusted by 500+ Real Estate Professionals Worldwide
</p>
          </button>

          <button
  onClick={() =>
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="border border-white px-6 py-3 rounded-xl"
>
            View Services
          </button>
        </div>
      </section>

      <section id="services" className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        
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
<section id="upload-section" className="px-10 pb-24">
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
        className="p-4 rounded-xl bg-black border border-zinc-700 backdrop-blur-md"
      />
      <input
  type="tel"
  placeholder="Phone Number"
  className="p-4 rounded-xl bg-black border border-zinc-700"
/>
<input
  type="text"
  placeholder="Property Address"
  className="p-4 rounded-xl bg-black border border-zinc-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
/>
<input
  type="text"
  placeholder="City"
  className="p-4 rounded-xl bg-black border border-zinc-700 backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
/>
<input
  type="text"
  placeholder="Country"
  className="p-4 rounded-xl bg-black border border-zinc-700 backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
/>
      <input
        type="email"
        placeholder="Your Email"
        className="p-4 rounded-xl bg-black border border-zinc-700 backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
      />

      <select className="p-4 rounded-xl bg-black border border-zinc-700 backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none">
        <option>Virtual Staging</option>
        <option>Interior Rendering</option>
        <option>Exterior Rendering</option>
        <option>Floor Plan Rendering</option>
      </select>

      <input
        type="file"
        className="p-4 rounded-xl bg-black border border-zinc-700 backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
      />

      <textarea
        placeholder="Describe your project..."
        className="p-4 rounded-xl bg-black border border-zinc-700 h-40 backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
      ></textarea>

      <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl w-full hover:shadow-purple-500/40 active:scale-95">
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

    <div className="bg-zinc-900 backdrop-blur-x border-white/10 hover:scale-105 transition duration-300 rounded-3xl overflow-hidden">
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


<section id="pricing" className="px-10 py-20">
  <h2 className="text-5xl font-bold text-center mb-16">
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
  Perfect for homeowners and agents. Includes AI Virtual Staging, HD Rendering, 24-hour delivery and Email Support.
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
<section className="px-10 py-16 text-center">
  <h2 className="text-3xl font-bold text-white mb-8">
    Trusted by Modern Real Estate Professionals
  </h2>

  <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-lg font-semibold">
    <span>🏡 Real Estate Agents</span>
    <span>🏢 Property Developers</span>
    <span>🎨 Interior Designers</span>
    <span>📸 Real Estate Photographers</span>
  </div>
</section>
</section>
  <div className="fixed bottom-24 right-6 bg-black border border-zinc-700 rounded-2xl p-4 w-72 shadow-2xl">

  <h3 className="text-xl font-bold mb-2">
    AI Assistant
  </h3>

  <p className="text-gray-400 text-sm mb-4">
    Hi 👋 Need help with rendering, pricing or orders?
  </p>

  <button onClick={() => alert("AI Chat Coming Soon!")} className="bg-white text-black px-4 py-2 rounded-xl font-bold w-full">
    Start Chat
  </button>

</div>

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
</nav>
);
}