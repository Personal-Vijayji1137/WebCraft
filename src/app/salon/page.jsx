import Link from "next/link";

export default async function Home() {
    return (
        <>
            <nav className="fixed w-full z-50 bg-neutral-900/95 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <a href="#hero" className="text-2xl font-bold text-[#c0a080] font-['Playfair_Display']">
                            Elite Barbers
                        </a>

                        <button id="menu-btn" className="lg:hidden text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <div className="hidden lg:flex space-x-8">
                            <Link href="/" className="text-white hover:text-[#c0a080] transition-colors font-['Montserrat']">
                                Home
                            </Link>
                            <a href="#featured-salons" className="text-white hover:text-[#c0a080] transition-colors font-['Montserrat']">
                                Our Salons
                            </a>
                            <a href="#services" className="text-white hover:text-[#c0a080] transition-colors font-['Montserrat']">
                                Services
                            </a>
                            <a href="#gallery" className="text-white hover:text-[#c0a080] transition-colors font-['Montserrat']">
                                Gallery
                            </a>
                            <a href="#barbers" className="text-white hover:text-[#c0a080] transition-colors font-['Montserrat']">
                                Our Barbers
                            </a>
                            <a href="#booking" className="text-white hover:text-[#c0a080] transition-colors font-['Montserrat']">
                                Book Now
                            </a>
                            <a href="#testimonials" className="text-white hover:text-[#c0a080] transition-colors font-['Montserrat']">
                                Testimonials
                            </a>
                            <a href="#pricing" className="text-white hover:text-[#c0a080] transition-colors font-['Montserrat']">
                                Pricing
                            </a>
                            <a href="#contact" className="text-white hover:text-[#c0a080] transition-colors font-['Montserrat']">
                                Contact
                            </a>
                        </div>

                        <div id="mobile-menu" className="fixed inset-0 bg-neutral-900/98 backdrop-blur-lg transform translate-x-full transition-transform duration-300 lg:hidden">
                            <div className="flex flex-col p-8 space-y-4">
                                <button id="close-menu" className="self-end text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <a href="#hero" className="text-white hover:text-[#c0a080] text-xl font-['Montserrat'] py-2">
                                    Home
                                </a>
                                <a href="#featured-salons" className="text-white hover:text-[#c0a080] text-xl font-['Montserrat'] py-2">
                                    Our Salons
                                </a>
                                <a href="#services" className="text-white hover:text-[#c0a080] text-xl font-['Montserrat'] py-2">
                                    Services
                                </a>
                                <a href="#gallery" className="text-white hover:text-[#c0a080] text-xl font-['Montserrat'] py-2">
                                    Gallery
                                </a>
                                <a href="#barbers" className="text-white hover:text-[#c0a080] text-xl font-['Montserrat'] py-2">
                                    Our Barbers
                                </a>
                                <a href="#booking" className="text-white hover:text-[#c0a080] text-xl font-['Montserrat'] py-2">
                                    Book Now
                                </a>
                                <a href="#testimonials" className="text-white hover:text-[#c0a080] text-xl font-['Montserrat'] py-2">
                                    Testimonials
                                </a>
                                <a href="#pricing" className="text-white hover:text-[#c0a080] text-xl font-['Montserrat'] py-2">
                                    Pricing
                                </a>
                                <a href="#contact" className="text-white hover:text-[#c0a080] text-xl font-['Montserrat'] py-2">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section id="hero" className="min-h-[70vh] bg-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/50 z-10"></div>

                <div className="container mx-auto px-4 relative z-20 h-full flex items-center pt-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate__animated animate__fadeInLeft">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Playfair_Display']">
                                Experience the Art of
                                <span className="text-[#c0a080] block mt-2">Premium Grooming</span>
                            </h1>
                            <p className="text-neutral-300 text-lg mb-8 font-['Montserrat']">
                                Discover exceptional styling at our luxury barbershops. Where traditional craftsmanship meets modern excellence.
                            </p>
                            <a href="#booking" className="bg-[#c0a080] hover:bg-[#a88b6a] text-white px-8 py-4 rounded-md inline-block transition-colors font-['Montserrat'] animate__animated animate__pulse animate__infinite">
                                Book Your Style
                            </a>
                        </div>

                        <div className="relative animate__animated animate__fadeInRight">
                            <div className="w-full h-[500px] rounded-lg overflow-hidden transform transition-transform duration-500">
                                <div className="w-full h-full bg-neutral-800">
                                    <img src="/sal1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-neutral-800">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>
            <section id="featured-salons" className="bg-neutral-800 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
                            Our Premium <span className="text-[#c0a080]">Locations</span>
                        </h2>
                        <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-['Montserrat']">
                            Experience luxury grooming across our four exclusive salons, each offering unique ambiance and premium services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group perspective">
                            <div className="relative transform transition-all duration-500 group-hover:rotate-y-180 preserve-3d">
                                <div className="bg-neutral-900 rounded-xl p-6 backface-hidden animate__animated animate__fadeInUp">
                                    <div className="h-64 bg-neutral-700 rounded-lg mb-6 overflow-hidden">
                                        <div className="w-full h-full bg-neutral-800">
                                            <img src="/loc1.avif" alt=""/>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 font-['Playfair_Display']">Downtown Elite</h3>
                                    <p className="text-neutral-400 mb-4 font-['Montserrat']">Modern luxury in the heart of the city</p>
                                    <div className="flex items-center text-[#c0a080] font-['Montserrat']">
                                        <span>Explore</span>
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group perspective">
                            <div className="relative transform transition-all duration-500 group-hover:rotate-y-180 preserve-3d">
                                <div className="bg-neutral-900 rounded-xl p-6 backface-hidden animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                                    <div className="h-64 bg-neutral-700 rounded-lg mb-6 overflow-hidden">
                                        <div className="w-full h-full bg-neutral-800">
                                        <img src="/loc2.webp" alt=""/>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 font-['Playfair_Display']">Vintage Corner</h3>
                                    <p className="text-neutral-400 mb-4 font-['Montserrat']">Classic charm meets modern expertise</p>
                                    <div className="flex items-center text-[#c0a080] font-['Montserrat']">
                                        <span>Explore</span>
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group perspective">
                            <div className="relative transform transition-all duration-500 group-hover:rotate-y-180 preserve-3d">
                                <div className="bg-neutral-900 rounded-xl p-6 backface-hidden animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                                    <div className="h-64 bg-neutral-700 rounded-lg mb-6 overflow-hidden">
                                        <div className="w-full h-full bg-neutral-800">
                                        <img src="/loc3.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 font-['Playfair_Display']">Harbor View</h3>
                                    <p className="text-neutral-400 mb-4 font-['Montserrat']">Waterfront sophistication</p>
                                    <div className="flex items-center text-[#c0a080] font-['Montserrat']">
                                        <span>Explore</span>
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group perspective">
                            <div className="relative transform transition-all duration-500 group-hover:rotate-y-180 preserve-3d">
                                <div className="bg-neutral-900 rounded-xl p-6 backface-hidden animate__animated animate__fadeInUp" style={{animationDelay: "0.6s"}}>
                                    <div className="h-64 bg-neutral-700 rounded-lg mb-6 overflow-hidden">
                                        <div className="w-full h-full bg-neutral-800">
                                        <img src="/loc4.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 font-['Playfair_Display']">Uptown Studio</h3>
                                    <p className="text-neutral-400 mb-4 font-['Montserrat']">Contemporary style sanctuary</p>
                                    <div className="flex items-center text-[#c0a080] font-['Montserrat']">
                                        <span>Explore</span>
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id="services" className="bg-neutral-900 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
                            Our Premium <span className="text-[#c0a080]">Services</span>
                        </h2>
                        <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-['Montserrat']">
                            Experience the finest grooming services tailored to your unique style
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group">
                            <div className="bg-neutral-800 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c0a080]/20 animate__animated animate__fadeInUp">
                                <div className="text-[#c0a080] mb-6">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Classic Haircut</h3>
                                <p className="text-neutral-400 mb-4 font-['Montserrat']">Precision cutting and styling tailored to your face shape and preferences</p>
                                <span className="text-[#c0a080] font-bold text-xl font-['Montserrat']">From $30</span>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-neutral-800 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c0a080]/20 animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                                <div className="text-[#c0a080] mb-6">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Beard Grooming</h3>
                                <p className="text-neutral-400 mb-4 font-['Montserrat']">Expert beard shaping and maintenance with hot towel service</p>
                                <span className="text-[#c0a080] font-bold text-xl font-['Montserrat']">From $25</span>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-neutral-800 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c0a080]/20 animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                                <div className="text-[#c0a080] mb-6">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Hair Coloring</h3>
                                <p className="text-neutral-400 mb-4 font-['Montserrat']">Professional color treatments and highlights</p>
                                <span className="text-[#c0a080] font-bold text-xl font-['Montserrat']">From $50</span>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-neutral-800 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c0a080]/20 animate__animated animate__fadeInUp">
                                <div className="text-[#c0a080] mb-6">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Luxury Shave</h3>
                                <p className="text-neutral-400 mb-4 font-['Montserrat']">Traditional straight razor shave with premium products</p>
                                <span className="text-[#c0a080] font-bold text-xl font-['Montserrat']">From $35</span>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-neutral-800 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c0a080]/20 animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                                <div className="text-[#c0a080] mb-6">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Hair Treatment</h3>
                                <p className="text-neutral-400 mb-4 font-['Montserrat']">Revitalizing scalp and hair treatments</p>
                                <span className="text-[#c0a080] font-bold text-xl font-['Montserrat']">From $45</span>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-neutral-800 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c0a080]/20 animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                                <div className="text-[#c0a080] mb-6">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Kids Haircut</h3>
                                <p className="text-neutral-400 mb-4 font-['Montserrat']">Gentle and fun haircuts for young customers</p>
                                <span className="text-[#c0a080] font-bold text-xl font-['Montserrat']">From $20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery" className="bg-neutral-800 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
                            Our Style <span className="text-[#c0a080]">Gallery</span>
                        </h2>
                        <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-['Montserrat']">
                            Browse through our collection of masterful haircuts and styles
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="group relative overflow-hidden rounded-xl aspect-square bg-neutral-700 animate__animated animate__fadeInUp cursor-pointer">
                            <div className="w-full h-full bg-neutral-800">
                            <img className="w-full h-full object-cover" src="/sho11.jpg" alt=""/>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-['Montserrat']">Classic Fade</span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl aspect-square bg-neutral-700 animate__animated animate__fadeInUp cursor-pointer" style={{animationDelay: "0.1s"}}>
                            <div className="w-full h-full bg-neutral-800">
                            <img className="w-full h-full object-cover" src="/sho12.jpg" alt=""/>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-['Montserrat']">Modern Pompadour</span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl aspect-square bg-neutral-700 animate__animated animate__fadeInUp cursor-pointer" style={{animationDelay: "0.2s"}}>
                            <div className="w-full h-full bg-neutral-800">
                            <img className="w-full h-full object-cover" src="/sho13.jpg" alt=""/>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-['Montserrat']">Textured Crop</span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl aspect-square bg-neutral-700 animate__animated animate__fadeInUp cursor-pointer" style={{animationDelay: "0.3s"}}>
                            <div className="w-full h-full bg-neutral-800">
                            <img className="w-full h-full object-cover" src="/sho14.webp" alt=""/>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-['Montserrat']">Slick Back</span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl aspect-square bg-neutral-700 animate__animated animate__fadeInUp cursor-pointer" style={{animationDelay: "0.4s"}}>
                            <div className="w-full h-full bg-neutral-800">
                            <img className="w-full h-full object-cover" src="/sho15.jpg" alt=""/>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-['Montserrat']">Beard Styling</span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl aspect-square bg-neutral-700 animate__animated animate__fadeInUp cursor-pointer" style={{animationDelay: "0.5s"}}>
                            <div className="w-full h-full bg-neutral-800">
                            <img className="w-full h-full object-cover" src="/sho16.jpg" alt=""/>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-['Montserrat']">Skin Fade</span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl aspect-square bg-neutral-700 animate__animated animate__fadeInUp cursor-pointer" style={{animationDelay: "0.6s"}}>
                            <div className="w-full h-full bg-neutral-800">
                            <img className="w-full h-full object-cover" src="/sho17.jpg" alt=""/>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-['Montserrat']">Quiff Style</span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl aspect-square bg-neutral-700 animate__animated animate__fadeInUp cursor-pointer" style={{animationDelay: "0.7s"}}>
                            <div className="w-full h-full bg-neutral-800">
                            <img className="w-full h-full object-cover" src="/sho18.png" alt=""/>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-['Montserrat']">Undercut</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-[#c0a080] hover:bg-[#a88b6a] text-white px-8 py-4 rounded-md inline-block transition-colors font-['Montserrat'] animate__animated animate__pulse animate__infinite">
                            View More Styles
                        </button>
                    </div>
                </div>
            </section>
            <section id="barbers" className="bg-neutral-900 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
                            Meet Our <span className="text-[#c0a080]">Expert Barbers</span>
                        </h2>
                        <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-['Montserrat']">
                            Our team of skilled professionals brings years of experience and passion to every cut
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group">
                            <div className="relative overflow-hidden rounded-xl animate__animated animate__fadeInUp">
                                <div className="aspect-[3/4] bg-neutral-800 relative group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full bg-neutral-700">
                                    <img className="w-full h-full object-cover" src="/sho21.jpg" alt=""/>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6 bg-neutral-800 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2 font-['Playfair_Display']">James Wilson</h3>
                                    <p className="text-[#c0a080] mb-4 font-['Montserrat']">Master Barber</p>
                                    <div className="flex gap-4 text-neutral-400">
                                        <a href="#" className="hover:text-[#c0a080] transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        </a>
                                        <a href="#" className="hover:text-[#c0a080] transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="relative overflow-hidden rounded-xl animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                                <div className="aspect-[3/4] bg-neutral-800 relative group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full bg-neutral-700">
                                    <img className="w-full h-full object-cover" src="/sho22.jpg" alt=""/>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6 bg-neutral-800 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2 font-['Playfair_Display']">Michael Chen</h3>
                                    <p className="text-[#c0a080] mb-4 font-['Montserrat']">Style Specialist</p>
                                    <div className="flex gap-4 text-neutral-400">
                                        <a href="#" className="hover:text-[#c0a080] transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        </a>
                                        <a href="#" className="hover:text-[#c0a080] transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="relative overflow-hidden rounded-xl animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                                <div className="aspect-[3/4] bg-neutral-800 relative group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full bg-neutral-700">
                                    <img className="w-full h-full object-cover" src="/sho23.jpg" alt=""/>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6 bg-neutral-800 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2 font-['Playfair_Display']">David Martinez</h3>
                                    <p className="text-[#c0a080] mb-4 font-['Montserrat']">Color Expert</p>
                                    <div className="flex gap-4 text-neutral-400">
                                        <a href="#" className="hover:text-[#c0a080] transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        </a>
                                        <a href="#" className="hover:text-[#c0a080] transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="relative overflow-hidden rounded-xl animate__animated animate__fadeInUp" style={{animationDelay: "0.6s"}}>
                                <div className="aspect-[3/4] bg-neutral-800 relative group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full bg-neutral-700">
                                    <img className="w-full h-full object-cover" src="/sho24.jpg" alt=""/>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6 bg-neutral-800 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2 font-['Playfair_Display']">Sarah Johnson</h3>
                                    <p className="text-[#c0a080] mb-4 font-['Montserrat']">Senior Stylist</p>
                                    <div className="flex gap-4 text-neutral-400">
                                        <a href="#" className="hover:text-[#c0a080] transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        </a>
                                        <a href="#" className="hover:text-[#c0a080] transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section id="booking" className="bg-neutral-800 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
                            Book Your <span className="text-[#c0a080]">Appointment</span>
                        </h2>
                        <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-['Montserrat']">
                            Schedule your next premium grooming experience with our expert stylists
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-neutral-900 p-8 rounded-xl shadow-2xl animate__animated animate__fadeInLeft">
                            <form id="booking-form" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-white font-['Montserrat']">Select Location</label>
                                        <select className="w-full bg-neutral-800 text-white rounded-md p-3 border border-neutral-700 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors">
                                            <option value="">Choose Salon</option>
                                            <option value="downtown">Downtown Elite</option>
                                            <option value="vintage">Vintage Corner</option>
                                            <option value="harbor">Harbor View</option>
                                            <option value="uptown">Uptown Studio</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-white font-['Montserrat']">Select Service</label>
                                        <select className="w-full bg-neutral-800 text-white rounded-md p-3 border border-neutral-700 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors">
                                            <option value="">Choose Service</option>
                                            <option value="haircut">Classic Haircut</option>
                                            <option value="beard">Beard Grooming</option>
                                            <option value="color">Hair Coloring</option>
                                            <option value="shave">Luxury Shave</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-white font-['Montserrat']">Select Date</label>
                                        <input type="date" className="w-full bg-neutral-800 text-white rounded-md p-3 border border-neutral-700 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-white font-['Montserrat']">Select Time</label>
                                        <select className="w-full bg-neutral-800 text-white rounded-md p-3 border border-neutral-700 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors">
                                            <option value="">Choose Time</option>
                                            <option value="9:00">9:00 AM</option>
                                            <option value="10:00">10:00 AM</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="12:00">12:00 PM</option>
                                            <option value="13:00">1:00 PM</option>
                                            <option value="14:00">2:00 PM</option>
                                            <option value="15:00">3:00 PM</option>
                                            <option value="16:00">4:00 PM</option>
                                            <option value="17:00">5:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white font-['Montserrat']">Your Name</label>
                                    <input type="text" className="w-full bg-neutral-800 text-white rounded-md p-3 border border-neutral-700 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors" placeholder="Enter your full name" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white font-['Montserrat']">Phone Number</label>
                                    <input type="tel" className="w-full bg-neutral-800 text-white rounded-md p-3 border border-neutral-700 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors" placeholder="Enter your phone number" />
                                </div>

                                <button type="submit" className="w-full bg-[#c0a080] hover:bg-[#a88b6a] text-white py-4 rounded-md transition-colors font-['Montserrat'] animate__animated animate__pulse animate__infinite">
                                    Book Appointment
                                </button>
                            </form>
                        </div>

                        <div className="lg:pl-12 animate__animated animate__fadeInRight">
                            <div className="space-y-8">
                                <div className="bg-neutral-900 p-6 rounded-xl">
                                    <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Why Book With Us?</h3>
                                    <ul className="space-y-4 text-neutral-300">
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-['Montserrat']">Expert stylists with years of experience</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-['Montserrat']">Premium products and equipment</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-['Montserrat']">Relaxing atmosphere</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-['Montserrat']">Convenient online booking</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-neutral-900 p-6 rounded-xl">
                                    <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Business Hours</h3>
                                    <ul className="space-y-2 text-neutral-300 font-['Montserrat']">
                                        <li className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span>9:00 AM - 6:00 PM</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Saturday</span>
                                            <span>9:00 AM - 5:00 PM</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Sunday</span>
                                            <span>Closed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section id="testimonials" className="bg-neutral-900 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
                            Client <span className="text-[#c0a080]">Testimonials</span>
                        </h2>
                        <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-['Montserrat']">
                            What our valued clients say about their experience
                        </p>
                    </div>

                    <div className="testimonial-slider relative">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="bg-neutral-800 rounded-xl p-8 h-full">
                                        <div className="flex items-center mb-6">
                                            <div className="w-16 h-16 rounded-full bg-neutral-700 mr-4 overflow-hidden">
                                                <div className="w-full h-full bg-neutral-600">
                                                <img className="w-full h-full object-cover" src="/sho12.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white font-['Playfair_Display']">John Anderson</h3>
                                                <p className="text-[#c0a080] font-['Montserrat']">Regular Client</p>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="flex text-[#c0a080]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-neutral-300 font-['Montserrat']">"Exceptional service! The attention to detail and professionalism is outstanding. My go-to place for all my grooming needs."</p>
                                    </div>
                                </div>

                                <div className="swiper-slide mt-4">
                                    <div className="bg-neutral-800 rounded-xl p-8 h-full">
                                        <div className="flex items-center mb-6">
                                            <div className="w-16 h-16 rounded-full bg-neutral-700 mr-4 overflow-hidden">
                                                <div className="w-full h-full bg-neutral-600">
                                                <img className="w-full h-full object-cover" src="/sho15.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white font-['Playfair_Display']">Michael Smith</h3>
                                                <p className="text-[#c0a080] font-['Montserrat']">VIP Member</p>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="flex text-[#c0a080]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-neutral-300 font-['Montserrat']">"The best barbershop experience I've ever had. The atmosphere is luxurious and the results are always perfect."</p>
                                    </div>
                                </div>

                            </div>

                            <div className="swiper-pagination mt-8"></div>
                        </div>

                        <div className="swiper-button-prev text-[#c0a080]"></div>
                        <div className="swiper-button-next text-[#c0a080]"></div>
                    </div>
                </div>
            </section><section id="pricing" className="bg-neutral-800 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
                            Our <span className="text-[#c0a080]">Pricing Plans</span>
                        </h2>
                        <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-['Montserrat']">
                            Choose from our range of premium grooming services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative group animate__animated animate__fadeInUp">
                            <div className="bg-neutral-900 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c0a080]/20">
                                <div className="absolute -top-4 right-4 bg-[#c0a080] text-white px-4 py-1 rounded-full text-sm font-['Montserrat']">
                                    Popular
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Classic Package</h3>
                                <div className="text-[#c0a080] text-4xl font-bold mb-6 font-['Montserrat']">
                                    $30
                                    <span className="text-sm text-neutral-400">/session</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Classic Haircut</span>
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Basic Styling</span>
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Hair Wash</span>
                                    </li>
                                </ul>
                                <button className="w-full bg-[#c0a080] hover:bg-[#a88b6a] text-white py-3 rounded-md transition-colors font-['Montserrat']">
                                    Choose Plan
                                </button>
                            </div>
                        </div>

                        <div className="relative group animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                            <div className="bg-neutral-900 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c0a080]/20">
                                <div className="absolute -top-4 right-4 bg-[#c0a080] text-white px-4 py-1 rounded-full text-sm font-['Montserrat']">
                                    Best Value
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Premium Package</h3>
                                <div className="text-[#c0a080] text-4xl font-bold mb-6 font-['Montserrat']">
                                    $50
                                    <span className="text-sm text-neutral-400">/session</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Premium Haircut</span>
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Beard Grooming</span>
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Hot Towel Service</span>
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Facial Massage</span>
                                    </li>
                                </ul>
                                <button className="w-full bg-[#c0a080] hover:bg-[#a88b6a] text-white py-3 rounded-md transition-colors font-['Montserrat']">
                                    Choose Plan
                                </button>
                            </div>
                        </div>

                        <div className="relative group animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                            <div className="bg-neutral-900 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c0a080]/20">
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Luxury Package</h3>
                                <div className="text-[#c0a080] text-4xl font-bold mb-6 font-['Montserrat']">
                                    $80
                                    <span className="text-sm text-neutral-400">/session</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">All Premium Services</span>
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Hair Treatment</span>
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Color Service</span>
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Complimentary Drink</span>
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="w-5 h-5 text-[#c0a080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-['Montserrat']">Priority Booking</span>
                                    </li>
                                </ul>
                                <button className="w-full bg-[#c0a080] hover:bg-[#a88b6a] text-white py-3 rounded-md transition-colors font-['Montserrat']">
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section id="contact" className="bg-neutral-900 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
                            Get in <span className="text-[#c0a080]">Touch</span>
                        </h2>
                        <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-['Montserrat']">
                            Have questions? We're here to help and answer any question you might have
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-neutral-800 p-8 rounded-xl shadow-2xl animate__animated animate__fadeInLeft">
                            <form id="contact-form" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-white font-['Montserrat']">First Name</label>
                                        <input type="text" className="w-full bg-neutral-700 text-white rounded-md p-3 border border-neutral-600 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors" required/>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white font-['Montserrat']">Last Name</label>
                                        <input type="text" className="w-full bg-neutral-700 text-white rounded-md p-3 border border-neutral-600 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors" required/>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white font-['Montserrat']">Email Address</label>
                                    <input type="email" className="w-full bg-neutral-700 text-white rounded-md p-3 border border-neutral-600 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors" required/>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white font-['Montserrat']">Phone Number</label>
                                    <input type="tel" className="w-full bg-neutral-700 text-white rounded-md p-3 border border-neutral-600 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white font-['Montserrat']">Message</label>
                                    <textarea rows="4" className="w-full bg-neutral-700 text-white rounded-md p-3 border border-neutral-600 focus:border-[#c0a080] focus:ring-2 focus:ring-[#c0a080] focus:ring-opacity-50 transition-colors" required></textarea>
                                </div>

                                <button type="submit" className="w-full bg-[#c0a080] hover:bg-[#a88b6a] text-white py-4 rounded-md transition-colors font-['Montserrat'] animate__animated animate__pulse animate__infinite">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="space-y-8 lg:pl-12 animate__animated animate__fadeInRight">
                            <div className="bg-neutral-800 p-6 rounded-xl">
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <svg className="w-6 h-6 text-[#c0a080] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-white font-bold mb-1 font-['Montserrat']">Our Location</h4>
                                            <p className="text-neutral-400 font-['Montserrat']">123 Luxury Street, Downtown<br />New York, NY 10001</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <svg className="w-6 h-6 text-[#c0a080] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-white font-bold mb-1 font-['Montserrat']">Phone Numbers</h4>
                                            <p className="text-neutral-400 font-['Montserrat']">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <svg className="w-6 h-6 text-[#c0a080] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-white font-bold mb-1 font-['Montserrat']">Email Address</h4>
                                            <p className="text-neutral-400 font-['Montserrat']">info@elitebarbers.com<br />booking@elitebarbers.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-neutral-800 p-6 rounded-xl">
                                <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-neutral-400 hover:text-[#c0a080] transition-colors">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-neutral-400 hover:text-[#c0a080] transition-colors">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-neutral-400 hover:text-[#c0a080] transition-colors">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer" className="bg-neutral-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">Elite Barbers</h3>
                            <p className="text-sm">Transform your style with our expert barbers. Premium grooming services in a luxurious setting.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="#" className="hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                </a>
                                <a href="#" className="hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">Classic Haircut</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Beard Trimming</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Hot Towel Shave</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Hair Styling</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Hair Coloring</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Our Locations</h3>
                            <ul className="space-y-2">
                                <li>Downtown Studio</li>
                                <li>Westside Salon</li>
                                <li>Eastgate Branch</li>
                                <li>Northpoint Center</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Contact Hours</h3>
                            <ul className="space-y-2">
                                <li>Monday - Friday: 9AM - 8PM</li>
                                <li>Saturday: 10AM - 6PM</li>
                                <li>Sunday: 10AM - 4PM</li>
                                <li>Phone: (555) 123-4567</li>
                                <li>Email: info@elitebarbers.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-neutral-800 mt-12 pt-8">
                        <div className="text-center">
                            <p className="text-sm">&copy; 2024 Elite Barbers. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}