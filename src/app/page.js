import Image from "next/image";
import Link from "next/link";
import Contact from "./contact";
export function WebCraftLogo() {
  return (
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text drop-shadow-lg">
        Web<span className="text-white">Craft</span>
      </h1>
  );
}

export default function Home() {
  const services = [
    {
      title: "Responsive Design",
      description: "Perfect display across all devices - mobile, tablet, and desktop",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround time with professional quality assurance",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    },
    {
      title: "Customizable",
      description: "Tailored to match your brand identity and requirements",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    },
    {
      title: "SEO Optimized",
      description: "Built with best practices for search engine visibility",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    },
    {
      title: "Affordable Price",
      description: "Premium quality landing page at just ₹999",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    },
    {
      title: "24/7 Support",
      description: "Dedicated assistance throughout the development process",
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    }
  ]
  return (
    <>
      <nav className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <WebCraftLogo/>
              {/* <span className="text-white text-xl font-bold">WebCraft</span> */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#hero" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</a>
                <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
                <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
                <a href="#process" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button id="menu-btn" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden bg-neutral-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
            <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <a href="#process" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How It Works</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-[70vh] bg-neutral-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between h-full py-20">
            <div className="w-full md:w-1/2 space-y-8 animate__animated animate__fadeInLeft">
              <h1 className="text-4xl md:text-6xl font-bold text-white font-['Space_Grotesk']">
                Transform Your Business with Custom Landing Pages
              </h1>
              <p className="text-xl text-gray-400 font-['Inter']">
                Get a professional, high-converting landing page for just ₹999. Stand out from the competition with modern 3D designs and responsive layouts.
              </p>
              <div className="flex space-x-4">
                <a href="#pricing" className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-full font-medium transition-colors animate__animated animate__pulse animate__infinite">
                  Start at ₹999
                </a>
                <a href="#portfolio" className="border border-purple-700 text-purple-400 hover:text-purple-300 px-8 py-3 rounded-full font-medium transition-colors">
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0 animate__animated animate__fadeInRight">
              <div className="relative w-full h-[400px]">
                <div className="absolute w-full h-full bg-gradient-to-r from-purple-700/20 to-blue-700/20 rounded-lg transform rotate-6 animate-pulse"></div>
                <div className="absolute w-full h-full bg-gradient-to-l from-purple-700/20 to-blue-700/20 rounded-lg transform -rotate-6 animate-pulse delay-75"></div>
                <div className="relative w-full h-full bg-neutral-800 rounded-lg p-8">
                  <div className="w-full h-full border-2 border-purple-700/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src="/vid.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Professional Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We create stunning landing pages that convert visitors into customers, all at an unbeatable price of ₹999</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => {
              return <div key={index} className="bg-neutral-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
                <div className="w-14 h-14 bg-[#6C63FF] rounded-lg flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Recent Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Check out some of our amazing landing pages created for just ₹999</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/ai.html" className="group perspective animate__animated animate__fadeInUp">
              <div className="bg-neutral-700 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="aspect-video bg-neutral-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="h-full w-full object-cover" src="/5img.jpg" alt="" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">AI World</h3>
                  <p className="text-gray-300 mb-4">Revolutionizing the World with Robotics & AI</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">3D Elements</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Animation</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Responsive</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/land.html" className="group perspective animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
              <div className="bg-neutral-700 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="aspect-video bg-neutral-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="h-full w-full object-cover" src="/6img.jpg" alt="" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Real Estate</h3>
                  <p className="text-gray-300 mb-4">Property listing landing page</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Interactive</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Modern UI</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Dark Theme</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="https://www.iplust.in/" className="group perspective animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="bg-neutral-700 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="aspect-video bg-neutral-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="h-full w-full object-cover" src="/7img.jpg" alt="" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Tech Startup</h3>
                  <p className="text-gray-300 mb-4">SaaS product landing page</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Creative</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">3D Effects</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Smooth</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/gym" className="group perspective animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="bg-neutral-700 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="aspect-video bg-neutral-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="h-full w-full object-cover" src="/4img.jpg" alt="" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Fitness Studio</h3>
                  <p className="text-gray-300 mb-4">Spa and salon services showcase</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">GYM</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">3D Effects</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">BG</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/restaurant" className="group perspective animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="bg-neutral-700 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="aspect-video bg-neutral-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="h-full w-full object-cover" src="/1img.jpg" alt="" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Restaurant Landing Page</h3>
                  <p className="text-gray-300 mb-4">Modern design for a local restaurant</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Food</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Life</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Dream</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/salon" className="group perspective animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="bg-neutral-700 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="aspect-video bg-neutral-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="h-full w-full object-cover" src="/8img.jpg" alt="" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Beauty Salon</h3>
                  <p className="text-gray-300 mb-4">Spa and salon services showcase</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Art</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">3D Effects</span>
                    <span className="px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">Beauty Salon</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-8">Want a website like these? Get started at just ₹999!</p>
            <a href="#contact" className="inline-block bg-[#6C63FF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5b54ff] transition-colors animate__animated animate__pulse animate__infinite">
              Start Your Project Now
            </a>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Get your dream landing page at an unbeatable price</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-900 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-4">Complete Landing Page Package</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Modern & Professional Look
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      7-10 Custom Pages
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Fast Loading Speed
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Modern 3D Elements
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Smooth Animations
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Responsive Design (Mobile-Friendly)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      SEO Optimization
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Contact Form Integration
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      2 months update support ( Free )
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      24/7 Support
                    </li>
                  </ul>
                </div>

                <div className="text-center md:text-right">
                  <div className="mb-6">
                    <p className="text-gray-400 text-lg line-through">₹2,999</p>
                    <div className="flex items-center justify-center md:justify-end">
                      <span className="text-5xl font-bold text-white">₹999</span>
                      <span className="text-gray-400 ml-2">only</span>
                    </div>
                  </div>
                  <a href="#contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                    Get Started Now
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-700">
                <p className="text-purple-400 font-semibold mb-4">Additional Benefits:</p>
                <div className="grid md:grid-cols-3 gap-4 text-gray-300">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Fast Delivery
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Premium Support
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    Free Revisions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Landing Pages?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We deliver high-quality, feature-rich landing pages that help your business grow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-neutral-800 p-8 rounded-2xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp">
              <div className="h-12 w-12 bg-[#6C63FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-400">Optimized for speed to ensure visitors stay engaged with your content</p>
            </div>

            <div className="group bg-neutral-800 p-8 rounded-2xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 bg-[#6C63FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Modern Design</h3>
              <p className="text-gray-400">Contemporary layouts that capture attention and drive conversions</p>
            </div>

            <div className="group bg-neutral-800 p-8 rounded-2xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="h-12 w-12 bg-[#6C63FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile First</h3>
              <p className="text-gray-400">Perfect display and functionality across all devices and screen sizes</p>
            </div>

            <div className="group bg-neutral-800 p-8 rounded-2xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp">
              <div className="h-12 w-12 bg-[#6C63FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-400">Built with security best practices and reliable hosting solutions</p>
            </div>

            <div className="group bg-neutral-800 p-8 rounded-2xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 bg-[#6C63FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">SEO Ready</h3>
              <p className="text-gray-400">Optimized for search engines to improve your online visibility</p>
            </div>

            <div className="group bg-neutral-800 p-8 rounded-2xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="h-12 w-12 bg-[#6C63FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Integration</h3>
              <p className="text-gray-400">Built-in forms to capture leads and stay connected with customers</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Here's what businesses have achieved with our landing pages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#6C63FF] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">R</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Rahul Sharma</h4>
                  <p className="text-gray-400 text-sm">Restaurant Owner</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-[#6C63FF]">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-300">"The landing page exceeded my expectations. It's beautiful, fast, and helped increase our online orders by 40%!"</p>
            </div>

            <div className="bg-neutral-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#6C63FF] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">P</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Priya Patel</h4>
                  <p className="text-gray-400 text-sm">Fashion Boutique</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-[#6C63FF]">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-300">"Best investment for my business! The landing page looks professional and my customers love it."</p>
            </div>

            <div className="bg-neutral-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#6C63FF] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">A</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Amit Kumar</h4>
                  <p className="text-gray-400 text-sm">Fitness Trainer</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-[#6C63FF]">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-300">"The process was smooth and the results are amazing. Got more client inquiries within the first week!"</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Get your landing page up and running in 3 simple steps</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#6C63FF] transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="relative animate__animated animate__fadeInUp">
                <div className="bg-neutral-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#6C63FF] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Contact Us</h3>
                  <p className="text-gray-400 text-center">
                    Reach out through our contact form or WhatsApp. Share your business details and requirements.
                  </p>
                </div>
                <div className="hidden lg:block absolute -right-6 top-1/2 w-12 h-12 bg-[#6C63FF] rounded-full transform -translate-y-1/2 z-10"></div>
              </div>

              <div className="relative animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
                <div className="bg-neutral-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#6C63FF] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Design & Development</h3>
                  <p className="text-gray-400 text-center">
                    We create your landing page with modern design and all required features.
                  </p>
                </div>
                <div className="hidden lg:block absolute -right-6 top-1/2 w-12 h-12 bg-[#6C63FF] rounded-full transform -translate-y-1/2 z-10"></div>
              </div>

              <div className="relative animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
                <div className="bg-neutral-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#6C63FF] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Launch</h3>
                  <p className="text-gray-400 text-center">
                    Your landing page goes live within 24-48 hours, ready to attract customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="#contact" className="inline-block bg-[#6C63FF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5b54ff] transition-colors animate__animated animate__pulse animate__infinite">
              Start Your Project Now
            </a>
          </div>
        </div>
      </section>
      <section id="faq" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Everything you need to know about our web development services</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="faq-item bg-neutral-800 rounded-xl overflow-hidden animate__animated animate__fadeInUp">
                <button className="faq-button w-full px-6 py-4 text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">What's included in the ₹999 package?</span>
                  <svg className="w-6 h-6 text-purple-500 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="faq-answer px-6 py-4 text-gray-300">
                  Our ₹999 package includes 7-10 custom pages, modern 3D elements, smooth animations, responsive design, and High Level SEO optimization. You'll get a professionally designed website that works perfectly on all devices.
                </div>
              </div>

              <div className="faq-item bg-neutral-800 rounded-xl overflow-hidden animate__animated animate__fadeInUp" style={{animationDelay: "0.1s"}}>
                <button className="faq-button w-full px-6 py-4 text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">How long does it take to complete a website?</span>
                  <svg className="w-6 h-6 text-purple-500 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="faq-answer px-6 py-4 text-gray-300">
                  Typically, we complete projects within 1-2 business days. However, the exact timeline may vary depending on the complexity and your specific requirements.
                </div>
              </div>

              <div className="faq-item bg-neutral-800 rounded-xl overflow-hidden animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                <button className="faq-button w-full px-6 py-4 text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Do you offer revisions?</span>
                  <svg className="w-6 h-6 text-purple-500 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="faq-answer px-6 py-4 text-gray-300">
                  Yes, we offer up to 2 rounds of revisions to ensure you're completely satisfied with your website. Additional revisions can be discussed if needed.
                </div>
              </div>

              <div className="faq-item bg-neutral-800 rounded-xl overflow-hidden animate__animated animate__fadeInUp" style={{animationDelay: "0.3s"}}>
                <button className="faq-button w-full px-6 py-4 text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Can I customize the design?</span>
                  <svg className="w-6 h-6 text-purple-500 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="faq-answer px-6 py-4 text-gray-300">
                  Absolutely! We work closely with you to customize the design according to your brand and preferences while maintaining modern design principles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Ready to get your professional landing page? Contact us now!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate__animated animate__fadeInLeft">
              <div className="bg-neutral-900 p-8 rounded-2xl">
                <Contact/>
              </div>
            </div>

            <div className="animate__animated animate__fadeInRight">
              <div className="bg-neutral-900 p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Other Ways to Connect</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#6C63FF] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Email Us</h4>
                      <a href={`mailto:${process.env.EMAIL_NAME}`} className="text-gray-400 hover:text-[#6C63FF]">{process.env.EMAIL_NAME}</a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#6C63FF] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">WhatsApp</h4>
                      <a href="https://wa.me/918307056141" target="_blank" className="text-gray-400 hover:text-[#6C63FF]">+918307056141</a>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-white font-medium mb-4">Working Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-400">Sunday: Always Open</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-neutral-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="animate__animated animate__fadeInUp">
              <h3 className="text-xl font-bold text-white mb-4">WebCraft</h3>
              <p className="text-gray-400 mb-4">Professional landing pages at an unbeatable price. Transform your business today.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#6C63FF]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#6C63FF]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#6C63FF]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-[#6C63FF] transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-[#6C63FF] transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-[#6C63FF] transition-colors">Contact</a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-[#6C63FF] transition-colors">Portfolio</a>
                </li>
              </ul>
            </div>

            <div className="animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#6C63FF] transition-colors">Landing Pages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#6C63FF] transition-colors">Business Websites</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#6C63FF] transition-colors">E-commerce</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#6C63FF] transition-colors">Portfolio Sites</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#6C63FF] transition-colors">And More</a></li>
              </ul>
            </div>

            <div className="animate__animated animate__fadeInUp" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  {process.env.EMAIL_NAME}
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  +918307056141
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8">
            <p className="text-center text-gray-400">&copy; 2024 WebCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
