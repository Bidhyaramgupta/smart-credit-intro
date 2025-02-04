import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-5 fixed w-full z-10 top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-wide">Smart Credit</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-400 transition">About</a>
          <a href="#services" className="hover:text-gray-400 transition">Services</a>
          <a href="#investor-connect" className="hover:text-gray-400 transition">Investor Connect</a>
          <a href="#tips" className="hover:text-gray-400 transition">Tips</a>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 space-y-2 text-center">
          <a href="#about" className="block hover:text-gray-400">About</a>
          <a href="#services" className="block hover:text-gray-400">Services</a>
          <a href="#investor-connect" className="block hover:text-gray-400">Investor Connect</a>
          <a href="#tips" className="block hover:text-gray-400">Tips</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to Smart Credit</h1>
        <p className="text-lg mb-8">We provide top-notch solutions to help card selection.</p>
        <a href="#services" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition">
          Explore Our Services
        </a>
      </div>
    </section>
  );
}

function Section({ id, title, content, bg }) {
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center ${bg} py-20`}>
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-6">{title}</h2>
        <p className="text-lg text-gray-200">{content}</p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto p-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Consulting", "Development", "Support"].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-600">
                {service === "Consulting" && "Expert advice and strategies to drive your business forward."}
                {service === "Development" && "Custom software solutions tailored to your business needs."}
                {service === "Support" && "Reliable support and maintenance services to keep you running 24/7."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cardImages = [
  "https://cdn.prod.website-files.com/667db973f1500b7df05aeded/669012c8dae4c0dd0810fbd7_sapphire.png",
  "https://cdn.prod.website-files.com/667db973f1500b7df05aeded/66a10df690cd94fdbe73a854_amexplatinum.avif",
  "https://cdn.prod.website-files.com/667db973f1500b7df05aeded/66a10d0abeae3fd7d1d565f5_Bilt_card_D.png",
  "https://cdn.prod.website-files.com/667db973f1500b7df05aeded/66aed91b0583ad44b52c432e_Prestige-Card-297x191-pixl.png",
  "https://cdn.prod.website-files.com/667db973f1500b7df05aeded/66aed98e8dc15bcfb4956ac5_emirates2.jpg",
  "https://cdn.prod.website-files.com/667db973f1500b7df05aeded/669eda294b804b5b81ea3c73_venture2.jpg",
];

function CardSlider() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-10">
      <h2 className="text-center text-xl font-bold text-blue-600 mb-6">
        HIGHLY RECOMMENDED CARDS BY SMART CREDIT
      </h2>

      {/* Infinite Scrolling Wrapper */}
      <div className="w-full flex items-center justify-center overflow-hidden">
        <div className="flex space-x-8 animate-marquee">
          {/* Duplicate images to create a seamless effect */}
          {cardImages.concat(cardImages).map((src, index) => (
            <img key={index} src={src} alt={`Card ${index}`} className="w-40 h-auto rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      &copy; {new Date().getFullYear()} Smart Credit. All rights reserved.
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Section id="about" title="About Us" content="We are a forward-thinking company dedicated to providing innovative solutions. Our team leverages years of industry experience to drive success and growth." bg="bg-gray-900 text-white"/>
        <Services />
        <Section id="investor-connect" title="Investor Connect" content="Connect with us to explore exciting investment opportunities. We are open to strategic partnerships that drive mutual growth." bg="bg-blue-900 text-white"/>
        <Section id="tips" title="Tips" content="Discover useful tips and insights on business growth, investment strategies, and industry trends." bg="bg-gray-800 text-white"/>
      </main>
      <CardSlider />
      <Footer />
    </div>
  );
}

export default App;
