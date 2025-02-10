import Link from "next/link";

export default async function name(params) {
    return (
        <>
            <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className="text-2xl font-bold">GYM ELITE</h1>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <a href="#features" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                                <a href="#classes" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Classes</a>
                                <a href="#trainers" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Trainers</a>
                                <a href="#membership" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Membership</a>
                                <a href="#schedule" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Schedule</a>
                                <a href="#testimonials" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                                <a href="#contact" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button id="mobile-menu-button" className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-neutral-700 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu" className="hidden md:hidden bg-neutral-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <a href="#features" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Features</a>
                        <a href="#classes" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Classes</a>
                        <a href="#trainers" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Trainers</a>
                        <a href="#membership" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Membership</a>
                        <a href="#schedule" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Schedule</a>
                        <a href="#testimonials" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
                        <a href="#contact" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            </nav>
            <section id="hero" className="relative h-screen bg-neutral-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 absolute inset-0">
                    <div className="absolute inset-0 opacity-20">
                        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                </div>

                <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 animate__animated animate__fadeInDown">
                        TRANSFORM YOUR BODY
                        <span className="block text-red-500">TRANSFORM YOUR LIFE</span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                        Join the elite fitness community and achieve your fitness goals with world-class trainers and state-of-the-art equipment
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate__animated animate__fadeInUp animate__delay-2s">
                        <a href="#membership" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">
                            Start Today
                        </a>
                        <a href="#classes" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">
                            View Classes
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-10 left-0 right-0 flex justify-center animate__animated animate__bounce animate__infinite">
                    <a href="#features" className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </a>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent"></div>
            </section>
            <section id="features" className="py-20 bg-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">Why Choose Us</h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-neutral-900 p-8 rounded-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                            <div className="text-red-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Modern Equipment</h3>
                            <p className="text-gray-400">State-of-the-art fitness equipment designed to maximize your workout efficiency and results.</p>
                        </div>

                        <div className="bg-neutral-900 p-8 rounded-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="text-red-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Expert Trainers</h3>
                            <p className="text-gray-400">Certified professional trainers dedicated to helping you achieve your fitness goals.</p>
                        </div>

                        <div className="bg-neutral-900 p-8 rounded-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="text-red-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Flexible Hours</h3>
                            <p className="text-gray-400">Open 24/7 to accommodate your schedule, allowing you to work out at your convenience.</p>
                        </div>

                        <div className="bg-neutral-900 p-8 rounded-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                            <div className="text-red-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Virtual Classes</h3>
                            <p className="text-gray-400">Access to online workout sessions and virtual training programs from anywhere.</p>
                        </div>

                        <div className="bg-neutral-900 p-8 rounded-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="text-red-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Nutrition Planning</h3>
                            <p className="text-gray-400">Customized nutrition advice and meal plans to complement your fitness journey.</p>
                        </div>

                        <div className="bg-neutral-900 p-8 rounded-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="text-red-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Community Support</h3>
                            <p className="text-gray-400">Join a motivated community of fitness enthusiasts who support and inspire each other.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="classes" className="py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">Our Classes</h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                            Choose from our wide range of specialized fitness classes designed to help you achieve your goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                            <div className="h-48 bg-neutral-700 flex items-center justify-center">
                                <span className="text-5xl text-red-500">💪</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Strength Training</h3>
                                <p className="text-gray-400 mb-4">Build muscle and increase strength with our comprehensive weight training program.</p>
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <span>Duration: 60 mins</span>
                                    <span>Intensity: High</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="h-48 bg-neutral-700 flex items-center justify-center">
                                <span className="text-5xl text-red-500">🏃</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">HIIT</h3>
                                <p className="text-gray-400 mb-4">High-intensity interval training to maximize calorie burn and improve endurance.</p>
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <span>Duration: 45 mins</span>
                                    <span>Intensity: Very High</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="h-48 bg-neutral-700 flex items-center justify-center">
                                <span className="text-5xl text-red-500">🧘</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Yoga</h3>
                                <p className="text-gray-400 mb-4">Improve flexibility, balance, and mental wellness with our expert-led yoga sessions.</p>
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <span>Duration: 75 mins</span>
                                    <span>Intensity: Low</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                            <div className="h-48 bg-neutral-700 flex items-center justify-center">
                                <span className="text-5xl text-red-500">🥊</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Boxing</h3>
                                <p className="text-gray-400 mb-4">Learn boxing techniques while getting an intense full-body workout.</p>
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <span>Duration: 60 mins</span>
                                    <span>Intensity: High</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="h-48 bg-neutral-700 flex items-center justify-center">
                                <span className="text-5xl text-red-500">🚴</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Spinning</h3>
                                <p className="text-gray-400 mb-4">High-energy indoor cycling classes with motivating music and instruction.</p>
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <span>Duration: 45 mins</span>
                                    <span>Intensity: Medium-High</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="h-48 bg-neutral-700 flex items-center justify-center">
                                <span className="text-5xl text-red-500">💃</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Zumba</h3>
                                <p className="text-gray-400 mb-4">Dance-based cardio workout that's fun, energetic, and effective.</p>
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <span>Duration: 60 mins</span>
                                    <span>Intensity: Medium</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a href="#schedule" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 animate__animated animate__fadeInUp">
                            View Schedule
                        </a>
                    </div>
                </div>
            </section>
            <section id="trainers" className="py-20 bg-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">Expert Trainers</h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                            Our certified trainers are here to help you achieve your fitness goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                            <div className="h-80 bg-neutral-700 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full bg-neutral-600 flex items-center justify-center">
                                    <svg className="w-24 h-24 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">John Smith</h3>
                                <p className="text-red-500 mb-3">Strength & Conditioning</p>
                                <p className="text-gray-400 mb-4">NASM Certified trainer with 10+ years of experience in bodybuilding and strength training.</p>
                                <div className="flex space-x-4 justify-center">
                                    <a href="#" className="text-gray-400 hover:text-red-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-red-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-red-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="h-80 bg-neutral-700 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full bg-neutral-600 flex items-center justify-center">
                                    <svg className="w-24 h-24 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Sarah Johnson</h3>
                                <p className="text-red-500 mb-3">Yoga & Pilates</p>
                                <p className="text-gray-400 mb-4">RYT-500 certified yoga instructor specializing in vinyasa and restorative yoga.</p>
                                <div className="flex space-x-4 justify-center">
                                    <a href="#" className="text-gray-400 hover:text-red-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-red-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-red-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="h-80 bg-neutral-700 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full bg-neutral-600 flex items-center justify-center">
                                    <svg className="w-24 h-24 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Mike Rodriguez</h3>
                                <p className="text-red-500 mb-3">CrossFit & HIIT</p>
                                <p className="text-gray-400 mb-4">CrossFit Level 2 Trainer with expertise in functional fitness and nutrition.</p>
                                <div className="flex space-x-4 justify-center">
                                    <a href="#" className="text-gray-400 hover:text-red-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-red-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-red-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="membership" className="py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">Membership Plans</h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                            Choose the perfect plan that fits your fitness journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-4">Basic Plan</h3>
                                <div className="text-red-500 text-4xl font-bold mb-6">
                                    $29<span className="text-lg text-gray-400">/month</span>
                                </div>
                                <ul className="text-gray-400 space-y-4 mb-8">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Access to Gym Equipment
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Locker Room Access
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        2 Group Classes/Month
                                    </li>
                                </ul>
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold transition duration-300">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s relative">
                            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-lg">
                                Popular
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-4">Premium Plan</h3>
                                <div className="text-red-500 text-4xl font-bold mb-6">
                                    $59<span className="text-lg text-gray-400">/month</span>
                                </div>
                                <ul className="text-gray-400 space-y-4 mb-8">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        All Basic Features
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Unlimited Group Classes
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        1 Personal Training Session/Month
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Nutrition Consulting
                                    </li>
                                </ul>
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold transition duration-300">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-4">Elite Plan</h3>
                                <div className="text-red-500 text-4xl font-bold mb-6">
                                    $99<span className="text-lg text-gray-400">/month</span>
                                </div>
                                <ul className="text-gray-400 space-y-4 mb-8">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        All Premium Features
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        4 Personal Training Sessions/Month
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Personalized Workout Plan
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        VIP Locker Room Access
                                    </li>
                                </ul>
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold transition duration-300">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="schedule" className="py-20 bg-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">Class Schedule</h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                            Find the perfect time for your workout
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-neutral-900 rounded-lg shadow-lg animate__animated animate__fadeInUp">
                        <div className="min-w-full">
                            <div className="bg-neutral-800 text-white">
                                <div className="grid grid-cols-8 border-b border-neutral-700">
                                    <div className="py-4 px-6 text-center font-semibold">Time</div>
                                    <div className="py-4 px-6 text-center font-semibold">Monday</div>
                                    <div className="py-4 px-6 text-center font-semibold">Tuesday</div>
                                    <div className="py-4 px-6 text-center font-semibold">Wednesday</div>
                                    <div className="py-4 px-6 text-center font-semibold">Thursday</div>
                                    <div className="py-4 px-6 text-center font-semibold">Friday</div>
                                    <div className="py-4 px-6 text-center font-semibold">Saturday</div>
                                    <div className="py-4 px-6 text-center font-semibold">Sunday</div>
                                </div>
                            </div>

                            <div className="bg-neutral-900">
                                <div className="grid grid-cols-8 border-b border-neutral-700 hover:bg-neutral-800 transition duration-300">
                                    <div className="py-4 px-6 text-center text-gray-400">6:00 AM</div>
                                    <div className="py-4 px-6 text-center text-red-500">Crossfit</div>
                                    <div className="py-4 px-6 text-center text-yellow-500">HIIT</div>
                                    <div className="py-4 px-6 text-center text-red-500">Crossfit</div>
                                    <div className="py-4 px-6 text-center text-yellow-500">HIIT</div>
                                    <div className="py-4 px-6 text-center text-red-500">Crossfit</div>
                                    <div className="py-4 px-6 text-center text-yellow-500">HIIT</div>
                                    <div className="py-4 px-6 text-center text-gray-500">-</div>
                                </div>

                                <div className="grid grid-cols-8 border-b border-neutral-700 hover:bg-neutral-800 transition duration-300">
                                    <div className="py-4 px-6 text-center text-gray-400">9:00 AM</div>
                                    <div className="py-4 px-6 text-center text-green-500">Yoga</div>
                                    <div className="py-4 px-6 text-center text-blue-500">Spinning</div>
                                    <div className="py-4 px-6 text-center text-green-500">Yoga</div>
                                    <div className="py-4 px-6 text-center text-blue-500">Spinning</div>
                                    <div className="py-4 px-6 text-center text-green-500">Yoga</div>
                                    <div className="py-4 px-6 text-center text-blue-500">Spinning</div>
                                    <div className="py-4 px-6 text-center text-green-500">Yoga</div>
                                </div>

                                <div className="grid grid-cols-8 border-b border-neutral-700 hover:bg-neutral-800 transition duration-300">
                                    <div className="py-4 px-6 text-center text-gray-400">12:00 PM</div>
                                    <div className="py-4 px-6 text-center text-purple-500">Boxing</div>
                                    <div className="py-4 px-6 text-center text-orange-500">Cardio</div>
                                    <div className="py-4 px-6 text-center text-purple-500">Boxing</div>
                                    <div className="py-4 px-6 text-center text-orange-500">Cardio</div>
                                    <div className="py-4 px-6 text-center text-purple-500">Boxing</div>
                                    <div className="py-4 px-6 text-center text-orange-500">Cardio</div>
                                    <div className="py-4 px-6 text-center text-gray-500">-</div>
                                </div>

                                <div className="grid grid-cols-8 border-b border-neutral-700 hover:bg-neutral-800 transition duration-300">
                                    <div className="py-4 px-6 text-center text-gray-400">4:00 PM</div>
                                    <div className="py-4 px-6 text-center text-pink-500">Zumba</div>
                                    <div className="py-4 px-6 text-center text-indigo-500">Pilates</div>
                                    <div className="py-4 px-6 text-center text-pink-500">Zumba</div>
                                    <div className="py-4 px-6 text-center text-indigo-500">Pilates</div>
                                    <div className="py-4 px-6 text-center text-pink-500">Zumba</div>
                                    <div className="py-4 px-6 text-center text-indigo-500">Pilates</div>
                                    <div className="py-4 px-6 text-center text-gray-500">-</div>
                                </div>

                                <div className="grid grid-cols-8 border-b border-neutral-700 hover:bg-neutral-800 transition duration-300">
                                    <div className="py-4 px-6 text-center text-gray-400">6:00 PM</div>
                                    <div className="py-4 px-6 text-center text-yellow-500">HIIT</div>
                                    <div className="py-4 px-6 text-center text-red-500">Crossfit</div>
                                    <div className="py-4 px-6 text-center text-yellow-500">HIIT</div>
                                    <div className="py-4 px-6 text-center text-red-500">Crossfit</div>
                                    <div className="py-4 px-6 text-center text-yellow-500">HIIT</div>
                                    <div className="py-4 px-6 text-center text-red-500">Crossfit</div>
                                    <div className="py-4 px-6 text-center text-gray-500">-</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400">
                            * Schedule subject to change during holidays
                        </p>
                        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105">
                            Book a Class
                        </button>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">Success Stories</h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                            Hear what our members have to say about their transformation journey
                        </p>
                    </div>

                    <div className="testimonial-slider relative">
                        <div className="swiper-container">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-neutral-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-white font-semibold">Sarah Thompson</h4>
                                            <p className="text-gray-400">Lost 30 lbs in 6 months</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 mb-4">"The trainers here are amazing! They helped me achieve my fitness goals and completely transformed my lifestyle. I've never felt better!"</p>
                                    <div className="flex text-yellow-500">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    </div>
                                </div>

                                <div className="bg-neutral-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-white font-semibold">Mike Johnson</h4>
                                            <p className="text-gray-400">Gained 15 lbs muscle</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 mb-4">"The facilities are top-notch and the community is so supportive. I've made great friends while achieving my fitness goals!"</p>
                                    <div className="flex text-yellow-500">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    </div>
                                </div>

                                <div className="bg-neutral-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-white font-semibold">Emma Davis</h4>
                                            <p className="text-gray-400">Fitness Enthusiast</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 mb-4">"The variety of classes and flexible schedule makes it easy to stay committed to my fitness routine. Best gym I've ever been to!"</p>
                                    <div className="flex text-yellow-500">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="py-20 bg-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">Our Gallery</h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                            Take a look at our state-of-the-art facility and community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="relative group overflow-hidden rounded-lg animate__animated animate__fadeInUp">
                            <div className="aspect-w-16 aspect-h-9 bg-neutral-700 rounded-lg flex items-center justify-center">
                                <span className="text-6xl">💪</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-center px-4">State-of-the-art Weight Training Area</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="aspect-w-16 aspect-h-9 bg-neutral-700 rounded-lg flex items-center justify-center">
                                <span className="text-6xl">🏃</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-center px-4">Cardio Zone</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="aspect-w-16 aspect-h-9 bg-neutral-700 rounded-lg flex items-center justify-center">
                                <span className="text-6xl">🧘</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-center px-4">Yoga Studio</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg animate__animated animate__fadeInUp">
                            <div className="aspect-w-16 aspect-h-9 bg-neutral-700 rounded-lg flex items-center justify-center">
                                <span className="text-6xl">🥊</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-center px-4">Boxing Ring</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="aspect-w-16 aspect-h-9 bg-neutral-700 rounded-lg flex items-center justify-center">
                                <span className="text-6xl">🚴</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-center px-4">Spinning Studio</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="aspect-w-16 aspect-h-9 bg-neutral-700 rounded-lg flex items-center justify-center">
                                <span className="text-6xl">🏋️</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-center px-4">CrossFit Area</p>
                            </div>
                        </div>
                    </div>

                    <div id="gallery-modal" className="fixed inset-0 bg-black bg-opacity-90 hidden z-50 flex items-center justify-center">
                        <div className="max-w-4xl mx-auto p-4">
                            <div id="modal-content" className="relative">
                                <button id="close-modal" className="absolute top-4 right-4 text-white hover:text-red-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="bg-neutral-900 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                        <p className="text-neutral-400">Ready to start your fitness journey? Contact us today!</p>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-neutral-800 p-8 rounded-lg">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-red-500 text-white" required/>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-red-500 text-white" required/>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Your Message</label>
                                    <textarea id="message" rows="4" className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-red-500 text-white" required></textarea>
                                </div>

                                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="bg-neutral-800 p-8 rounded-lg">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center text-neutral-300">
                                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <p>123 Fitness Street, Gym City, GC 12345</p>
                                        </div>

                                        <div className="flex items-center text-neutral-300">
                                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                            <p>info@fitnesspower.com</p>
                                        </div>

                                        <div className="flex items-center text-neutral-300">
                                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                            <p>+1 234 567 8900</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Opening Hours</h3>
                                    <div className="space-y-2 text-neutral-300">
                                        <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                                        <p>Saturday - Sunday: 6:00 AM - 10:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer" className="bg-neutral-900 text-white pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">FITNESS POWER</h3>
                            <p className="text-neutral-400">Transform your body, transform your life. Join us on the journey to becoming the best version of yourself.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>
                                </a>
                                <a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Home</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Classes</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Schedule</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Training Programs</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Personal Training</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Group Fitness</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Strength Training</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Cardio Classes</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Yoga Sessions</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
                            <p className="text-neutral-400 mb-4">Subscribe to our newsletter for tips, news and exclusive offers!</p>
                            <form className="space-y-4">
                                <input type="email" placeholder="Your email address" className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded focus:ring-2 focus:ring-red-500 text-white"/>
                                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                                        Subscribe
                                    </button>
                            </form>
                        </div>
                    </div>

                    <div className="border-t border-neutral-800 pt-8">
                        <div className="text-center text-neutral-400 text-sm">
                            <p>&copy; 2024 Fitness Power. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}