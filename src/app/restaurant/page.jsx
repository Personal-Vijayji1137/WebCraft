import Link from "next/link";

export default async function Restorant() {
    return (
        <>
            <nav id="navbar" className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-serif text-amber-500">Culinary</span>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link href="/"
                                    className="text-gray-300 hover:text-amber-500 px-3 py-2 transition-colors">Home</Link>
                                <Link href="/restaurant/menu"
                                    className="text-gray-300 hover:text-amber-500 px-3 py-2 transition-colors">Menu</Link>
                                <Link href="/restaurant/about"
                                    className="text-gray-300 hover:text-amber-500 px-3 py-2 transition-colors">About</Link>
                                <a href="#testimonials"
                                    className="text-gray-300 hover:text-amber-500 px-3 py-2 transition-colors">Reviews</a>
                                <a href="#reservations"
                                    className="text-gray-300 hover:text-amber-500 px-3 py-2 transition-colors">Reservations</a>
                                <a href="#footer"
                                    className="text-gray-300 hover:text-amber-500 px-3 py-2 transition-colors">Contact</a>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <button id="mobile-menu-button" className="text-gray-300 hover:text-amber-500 focus:outline-none"
                                aria-label="Main menu">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path className="menu-icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                    <path className="close-icon hidden" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div id="mobile-menu"
                    className="hidden md:hidden bg-neutral-900/95 backdrop-blur-sm animate__animated animate__fadeIn">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#hero"
                            className="text-gray-300 hover:text-amber-500 block px-3 py-2 transition-colors">Home</a>
                        <a href="#featured-dishes"
                            className="text-gray-300 hover:text-amber-500 block px-3 py-2 transition-colors">Menu</a>
                        <a href="#ambiance"
                            className="text-gray-300 hover:text-amber-500 block px-3 py-2 transition-colors">About</a>
                        <a href="#testimonials"
                            className="text-gray-300 hover:text-amber-500 block px-3 py-2 transition-colors">Reviews</a>
                        <a href="#reservations"
                            className="text-gray-300 hover:text-amber-500 block px-3 py-2 transition-colors">Reservations</a>
                        <a href="#footer"
                            className="text-gray-300 hover:text-amber-500 block px-3 py-2 transition-colors">Contact</a>
                    </div>
                </div>
            </nav>
            <section id="hero" className="relative h-screen bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/90"></div>

                <div
                    className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 animate__animated animate__fadeIn">
                        Experience <span className="text-amber-500">Culinary</span> Perfection
                    </h1>

                    <p
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl animate__animated animate__fadeIn animate__delay-1s">
                        Indulge in an extraordinary dining experience where every dish tells a story of passion and artistry
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeIn animate__delay-2s">
                        <a href="#reservations"
                            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg">
                            Reserve a Table
                        </a>

                        <a href="#featured-dishes"
                            className="px-8 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-neutral-900 font-semibold rounded-full transition-all transform hover:scale-105">
                            Order Now
                        </a>
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <a href="#featured-dishes" className="text-amber-500 hover:text-amber-400">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section id="featured-dishes" className="py-20 bg-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-neutral-900 mb-4 animate__animated animate__fadeIn">Featured
                            Dishes</h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Discover our chef's carefully curated
                            selection of signature dishes</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div
                            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 animate__animated animate__fadeIn">
                            <div className="h-64 bg-neutral-200 flex items-center justify-center overflow-hidden">
                                <img src="https://alwaysfromscratch.com/wp-content/uploads/2023/10/Mushroom-truffle-risotto-21.jpg"
                                    alt="" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif text-neutral-900 mb-2">Truffle Risotto</h3>
                                <p className="text-neutral-600 mb-4">Creamy Arborio rice with black truffle shavings and aged
                                    Parmesan</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-semibold">$32</span>
                                    <button
                                        className="px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors">Order
                                        Now</button>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
                            <div className="h-64 bg-neutral-200 flex items-center justify-center overflow-hidden">
                                <img src="https://www.dadcooksdinner.com/wp-content/uploads/2023/07/How-to-Cook-Wagyu-Ribeye-Steak-Recipe-DSCF5848-1280x.jpg"
                                    alt="" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif text-neutral-900 mb-2">Wagyu Steak</h3>
                                <p className="text-neutral-600 mb-4">Premium Japanese Wagyu with roasted seasonal vegetables</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-semibold">$85</span>
                                    <button
                                        className="px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors">Order
                                        Now</button>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
                            <div className="h-64 bg-neutral-200 flex items-center justify-center overflow-hidden">
                                <img src="https://i0.wp.com/themaplecuttingboard.com/wp-content/uploads/2019/11/Lobster-Thermidor.jpeg"
                                    alt="" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif text-neutral-900 mb-2">Lobster Thermidor</h3>
                                <p className="text-neutral-600 mb-4">Fresh Maine lobster with creamy cognac sauce</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-semibold">$65</span>
                                    <button
                                        className="px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors">Order
                                        Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a href="#"
                            className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold rounded-full transition-all transform hover:scale-105">
                            View Full Menu
                        </a>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="py-20 bg-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-neutral-900 mb-4 animate__animated animate__fadeIn">What Our
                            Guests Say</h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Discover why our guests keep coming back</p>
                    </div>

                    <div className="relative testimonial-carousel">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500 ease-out">
                                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                                    <div className="bg-white rounded-lg p-8 shadow-lg">
                                        <div className="flex justify-center mb-4">
                                            <div
                                                className="w-16 h-16 bg-neutral-200 rounded-full overflow-hidden flex items-center justify-center">
                                                <img className="w-16 h-16 object-cover"
                                                    src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
                                                    alt="" />
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb-4">
                                            <div className="flex text-amber-500">
                                                ★★★★★
                                            </div>
                                        </div>
                                        <p className="text-neutral-600 text-center mb-4">"An exceptional dining experience! The
                                            flavors were extraordinary and the service was impeccable."</p>
                                        <h4 className="text-center font-serif text-lg text-neutral-900">Emily Johnson</h4>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                                    <div className="bg-white rounded-lg p-8 shadow-lg">
                                        <div className="flex justify-center mb-4">
                                            <div
                                                className="w-16 h-16 bg-neutral-200 rounded-full overflow-hidden flex items-center justify-center">
                                                <img className="w-16 h-16 object-cover"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMHCDMtqM_45FAek0yHA1bNk79rzvO1C1Pg&s"
                                                    alt="" />
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb-4">
                                            <div className="flex text-amber-500">
                                                ★★★★★
                                            </div>
                                        </div>
                                        <p className="text-neutral-600 text-center mb-4">"The ambiance and food quality exceeded
                                            all expectations. A true culinary gem!"</p>
                                        <h4 className="text-center font-serif text-lg text-neutral-900">Michael Smith</h4>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                                    <div className="bg-white rounded-lg p-8 shadow-lg">
                                        <div className="flex justify-center mb-4">
                                            <div
                                                className="w-16 h-16 bg-neutral-200 rounded-full overflow-hidden flex items-center justify-center">
                                                <img className="w-16 h-16 object-cover"
                                                    src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb-4">
                                            <div className="flex text-amber-500">
                                                ★★★★★
                                            </div>
                                        </div>
                                        <p className="text-neutral-600 text-center mb-4">"Perfect for special occasions. The
                                            attention to detail and presentation is outstanding."</p>
                                        <h4 className="text-center font-serif text-lg text-neutral-900">Sarah Williams</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-amber-50 focus:outline-none prev-btn">
                            <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-amber-50 focus:outline-none next-btn">
                            <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <section id="why-choose-us" className="py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-white mb-4 animate__animated animate__fadeIn">Why Choose Us</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Experience the perfect blend of cuisine,
                            ambiance, and service</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div
                            className="bg-neutral-800/50 rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn">
                            <div className="inline-block p-4 bg-amber-500 rounded-full mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-amber-500 mb-4">Fresh Ingredients</h3>
                            <p className="text-gray-300">We source only the finest and freshest ingredients for our dishes,
                                ensuring exceptional quality in every bite.</p>
                        </div>

                        <div
                            className="bg-neutral-800/50 rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
                            <div className="inline-block p-4 bg-amber-500 rounded-full mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-amber-500 mb-4">Cozy Atmosphere</h3>
                            <p className="text-gray-300">Immerse yourself in our carefully crafted ambiance designed for your
                                ultimate comfort and enjoyment.</p>
                        </div>

                        <div
                            className="bg-neutral-800/50 rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
                            <div className="inline-block p-4 bg-amber-500 rounded-full mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-amber-500 mb-4">Award-Winning Chef</h3>
                            <p className="text-gray-300">Our expert culinary team crafts innovative dishes under the leadership
                                of our renowned executive chef.</p>
                        </div>

                        <div
                            className="bg-neutral-800/50 rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
                            <div className="inline-block p-4 bg-amber-500 rounded-full mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-amber-500 mb-4">Fast Delivery</h3>
                            <p className="text-gray-300">Enjoy our delicious meals in the comfort of your home with our prompt
                                and reliable delivery service.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="reservations" className="py-20 bg-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-lg shadow-xl p-8 animate__animated animate__fadeIn">
                            <h2 className="text-3xl font-serif text-neutral-900 mb-6">Reserve Your Table</h2>
                            <form id="reservation-form" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="name">Full
                                            Name</label>
                                        <input type="text" id="name"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2"
                                            htmlFor="email">Email</label>
                                        <input type="email" id="email"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2"
                                            htmlFor="date">Date</label>
                                        <input type="date" id="date"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2"
                                            htmlFor="time">Time</label>
                                        <select id="time"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required>
                                            <option value="">Select time</option>
                                            <option value="17:00">5:00 PM</option>
                                            <option value="18:00">6:00 PM</option>
                                            <option value="19:00">7:00 PM</option>
                                            <option value="20:00">8:00 PM</option>
                                            <option value="21:00">9:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="guests">Number
                                            of Guests</label>
                                        <select id="guests"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required>
                                            <option value="">Select guests</option>
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="3">3 Guests</option>
                                            <option value="4">4 Guests</option>
                                            <option value="5">5 Guests</option>
                                            <option value="6">6 Guests</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="phone">Phone
                                            Number</label>
                                        <input type="tel" id="phone"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2"
                                        htmlFor="special-requests">Special Requests</label>
                                    <textarea id="special-requests" rows="4"
                                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"></textarea>
                                </div>

                                <button type="submit"
                                    className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors font-semibold">
                                    Confirm Reservation
                                </button>
                            </form>
                        </div>

                        <div
                            className="lg:pl-12 flex flex-col justify-center animate__animated animate__fadeIn animate__delay-1s">
                            <h3 className="text-2xl font-serif text-neutral-900 mb-6">Dining Hours</h3>
                            <div className="space-y-4 mb-12">
                                <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                                    <span className="text-neutral-600">Monday - Thursday</span>
                                    <span className="text-neutral-900 font-semibold">5:00 PM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                                    <span className="text-neutral-600">Friday - Saturday</span>
                                    <span className="text-neutral-900 font-semibold">5:00 PM - 11:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                                    <span className="text-neutral-600">Sunday</span>
                                    <span className="text-neutral-900 font-semibold">4:00 PM - 9:00 PM</span>
                                </div>
                            </div>

                            <div className="bg-neutral-900 text-white rounded-lg p-8">
                                <h4 className="text-xl font-serif mb-4">Important Information</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd" />
                                        </svg>
                                        Reservations required for groups of 6 or more
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd" />
                                        </svg>
                                        15-minute grace period for reservations
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd" />
                                        </svg>
                                        Smart casual dress code
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-white mb-4 animate__animated animate__fadeIn">Our Gallery</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">A visual journey through our culinary excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div
                            className="group relative overflow-hidden rounded-lg aspect-square bg-neutral-800 animate__animated animate__fadeIn">
                            <div className="h-full w-full bg-neutral-800 flex items-center justify-center">
                                <img className="h-full w-full object-cover"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/56/71/59/atmosphere.jpg?w=600&h=-1&s=1"
                                    alt="" />
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white font-serif text-xl">Interior Dining</h3>
                                    <p className="text-gray-300 text-sm mt-2">Main dining area with ambient lighting</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="group relative overflow-hidden rounded-lg aspect-square bg-neutral-800 animate__animated animate__fadeIn animate__delay-1s">
                            <div className="h-full w-full bg-neutral-800 flex items-center justify-center">
                                <img className="h-full w-full object-cover"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/33/10/3e/manila-bay-kitchen-is.jpg"
                                    alt="" />
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white font-serif text-xl">Private Events</h3>
                                    <p className="text-gray-300 text-sm mt-2">Exclusive dining spaces for special occasions</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="group relative overflow-hidden rounded-lg aspect-square bg-neutral-800 animate__animated animate__fadeIn animate__delay-2s">
                            <div className="h-full w-full bg-neutral-800 flex items-center justify-center">
                                <img className="h-full w-full object-cover"
                                    src="https://thethekedaar.in/blogs/wp-content/uploads/2021/03/Restaurant-Interior.jpg"
                                    alt="" />
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white font-serif text-xl">Culinary Art</h3>
                                    <p className="text-gray-300 text-sm mt-2">Signature dishes crafted with precision</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button
                            className="px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors animate__animated animate__fadeIn animate__delay-3s">
                            View More Photos
                        </button>
                    </div>
                </div>
            </section>
            <footer id="footer" className="bg-neutral-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="animate__animated animate__fadeIn">
                            <h3 className="text-2xl font-serif text-amber-500 mb-6">Culinary</h3>
                            <p className="text-gray-300 mb-6">Experience the perfect blend of traditional and contemporary
                                cuisine in an elegant atmosphere.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="animate__animated animate__fadeIn animate__delay-1s">
                            <h4 className="text-lg font-serif text-amber-500 mb-6">Quick Links</h4>
                            <ul className="space-y-4">
                                <li><a href="#hero" className="text-gray-300 hover:text-amber-500 transition-colors">Home</a>
                                </li>
                                <li><a href="#featured-dishes"
                                    className="text-gray-300 hover:text-amber-500 transition-colors">Menu</a></li>
                                <li><a href="#reservations"
                                    className="text-gray-300 hover:text-amber-500 transition-colors">Reservations</a></li>
                                <li><a href="#gallery"
                                    className="text-gray-300 hover:text-amber-500 transition-colors">Gallery</a></li>
                                <li><a href="#about" className="text-gray-300 hover:text-amber-500 transition-colors">About
                                    Us</a></li>
                            </ul>
                        </div>

                        <div className="animate__animated animate__fadeIn animate__delay-2s">
                            <h4 className="text-lg font-serif text-amber-500 mb-6">Contact Info</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-300">123 Gourmet Street, Foodville</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-300">(555) 123-4567</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-300">info@culinary.com</span>
                                </li>
                            </ul>
                        </div>

                        <div className="animate__animated animate__fadeIn animate__delay-3s">
                            <h4 className="text-lg font-serif text-amber-500 mb-6">Opening Hours</h4>
                            <ul className="space-y-4">
                                <li className="text-gray-300">Monday - Thursday<br />5:00 PM - 10:00 PM</li>
                                <li className="text-gray-300">Friday - Saturday<br />5:00 PM - 11:00 PM</li>
                                <li className="text-gray-300">Sunday<br />4:00 PM - 9:00 PM</li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-neutral-800 mt-12 pt-8 text-center animate__animated animate__fadeIn animate__delay-4s">
                        <p className="text-gray-400">&copy; 2024 Culinary. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}