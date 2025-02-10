import Link from "next/link";

export default async function Home() {
    return (
        <>
            <nav id="Navbar" className="fixed w-full bg-neutral-900 text-white z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className="text-2xl font-bold">Gourmet Dining</span>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/restaurant" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <a href="#MenuCategories" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Categories</a>
                                <a href="#MenuItems" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Menu</a>
                                <a href="#SpecialOffers" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Specials</a>
                                <a href="#DietaryFilters" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Dietary</a>
                                <a href="#Reservations" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Reserve</a>
                                <a href="#ContactInfo" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <button type="button" className="hamburger-menu inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu hidden md:hidden bg-neutral-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#Hero" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#MenuCategories" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Categories</a>
                        <a href="#MenuItems" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Menu</a>
                        <a href="#SpecialOffers" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Specials</a>
                        <a href="#DietaryFilters" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Dietary</a>
                        <a href="#Reservations" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Reserve</a>
                        <a href="#ContactInfo" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            </nav>
            <section id="Hero" className="relative h-screen bg-neutral-900 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')] bg-cover bg-center opacity-50"></div>

                <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate__animated animate__fadeIn">
                        Our Menu: A Feast for Every Taste
                    </h1>

                    <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-1s">
                        Explore our delicious selection of handcrafted dishes, where tradition meets innovation
                    </p>

                    <div className="animate__animated animate__fadeIn animate__delay-2s">
                        <a href="#MenuCategories" className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                            Explore Menu
                        </a>
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent"></div>
            </section>
            <section id="MenuCategories" className="py-16 bg-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="sticky top-16 bg-neutral-100 py-4 z-40 shadow-md">
                        <nav className="flex flex-wrap justify-center gap-4" id="category-nav">
                            <button className="category-btn bg-neutral-800 text-white px-6 py-2 rounded-full hover:bg-neutral-700 transition-all duration-300 active" data-category="appetizers">
                                Appetizers
                            </button>
                            <button className="category-btn bg-neutral-800 text-white px-6 py-2 rounded-full hover:bg-neutral-700 transition-all duration-300" data-category="main-course">
                                Main Course
                            </button>
                            <button className="category-btn bg-neutral-800 text-white px-6 py-2 rounded-full hover:bg-neutral-700 transition-all duration-300" data-category="desserts">
                                Desserts
                            </button>
                            <button className="category-btn bg-neutral-800 text-white px-6 py-2 rounded-full hover:bg-neutral-700 transition-all duration-300" data-category="beverages">
                                Beverages
                            </button>
                            <button className="category-btn bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300" data-category="specials">
                                Specials
                            </button>
                        </nav>
                    </div>
                </div>
            </section>
            <section id="MenuItems" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <button id="gridViewBtn" className="bg-neutral-800 text-white px-4 py-2 rounded-l-lg active">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <button id="listViewBtn" className="bg-neutral-800 text-white px-4 py-2 rounded-r-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full md:w-auto">
                            <input type="text" id="searchMenu" placeholder="Search menu items..." className="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"/>
                        </div>
                    </div>

                    <div id="menuItemsContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div id="appetizers" className="menu-category space-y-8">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c')] bg-cover bg-center transform hover:scale-110 transition-transform duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-neutral-900">Bruschetta</h3>
                                        <span className="text-lg font-bold text-neutral-800">$12.99</span>
                                    </div>
                                    <p className="text-neutral-600 mb-4">Fresh tomatoes, basil, and garlic on toasted bread</p>
                                    <div className="flex gap-2">
                                        <span className="text-sm">🌱</span>
                                        <span className="text-sm">🌾</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="SpecialOffers" className="py-16 bg-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 animate__animated animate__fadeIn">
                        Chef's Special Recommendations
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="relative h-64">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center transform hover:scale-110 transition-transform duration-300"></div>
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full">
                                    Featured
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Signature Steak</h3>
                                <p className="text-neutral-300 mb-4">Prime cut beef with truffle sauce and seasonal vegetables</p>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-red-500">$34.99</span>
                                    <div className="flex gap-2">
                                        <span className="text-sm">🥩</span>
                                        <span className="text-sm">🌶️</span>
                                    </div>
                                </div>
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                                    Order Now
                                </button>
                            </div>
                        </div>

                        <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="relative h-64">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327')] bg-cover bg-center transform hover:scale-110 transition-transform duration-300"></div>
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full">
                                    New
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Seafood Platter</h3>
                                <p className="text-neutral-300 mb-4">Fresh catch of the day with citrus butter sauce</p>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-red-500">$42.99</span>
                                    <div className="flex gap-2">
                                        <span className="text-sm">🌾</span>
                                    </div>
                                </div>
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                                    Order Now
                                </button>
                            </div>
                        </div>

                        <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="relative h-64">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551782450-a2132b4ba21d')] bg-cover bg-center transform hover:scale-110 transition-transform duration-300"></div>
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full">
                                    Limited
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Veggie Delight</h3>
                                <p className="text-neutral-300 mb-4">Seasonal grilled vegetables with quinoa</p>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-red-500">$28.99</span>
                                    <div className="flex gap-2">
                                        <span className="text-sm">🌱</span>
                                        <span className="text-sm">🌾</span>
                                    </div>
                                </div>
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="DietaryFilters" className="py-16 bg-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-12 animate__animated animate__fadeIn">
                        Dietary Preferences
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg p-6 animate__animated animate__fadeInUp">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <button className="dietary-filter flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-neutral-200 hover:border-neutral-800 transition-all duration-300">
                                    <span className="text-2xl">🌱</span>
                                    <span className="font-medium text-neutral-900">Vegan</span>
                                </button>

                                <button className="dietary-filter flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-neutral-200 hover:border-neutral-800 transition-all duration-300">
                                    <span className="text-2xl">🌾</span>
                                    <span className="font-medium text-neutral-900">Gluten-Free</span>
                                </button>

                                <button className="dietary-filter flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-neutral-200 hover:border-neutral-800 transition-all duration-300">
                                    <span className="text-2xl">🌶️</span>
                                    <span className="font-medium text-neutral-900">Spicy</span>
                                </button>

                                <button className="dietary-filter flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-neutral-200 hover:border-neutral-800 transition-all duration-300">
                                    <span className="text-2xl">🥩</span>
                                    <span className="font-medium text-neutral-900">Contains Meat</span>
                                </button>
                            </div>

                            <div className="text-center">
                                <button id="applyFilters" className="bg-neutral-800 text-white px-8 py-3 rounded-lg hover:bg-neutral-700 transition-all duration-300">
                                    Apply Filters
                                </button>
                                <button id="clearFilters" className="ml-4 text-neutral-600 hover:text-neutral-800 transition-all duration-300">
                                    Clear All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Reservations" className="py-16 bg-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-white animate__animated animate__fadeInLeft">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Indulge?</h2>
                            <p className="text-xl text-neutral-300 mb-8">Reserve your table now and experience our culinary masterpieces in an elegant setting.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Exclusive dining experience</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Special dietary accommodations</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Personalized service</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg animate__animated animate__fadeInRight">
                            <form id="reservationForm" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Date</label>
                                        <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-neutral-800 focus:border-transparent" required/>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Time</label>
                                        <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-neutral-800 focus:border-transparent" required>
                                            <option value="">Select time</option>
                                            <option value="17:00">5:00 PM</option>
                                            <option value="18:00">6:00 PM</option>
                                            <option value="19:00">7:00 PM</option>
                                            <option value="20:00">8:00 PM</option>
                                            <option value="21:00">9:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Number of Guests</label>
                                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-neutral-800 focus:border-transparent" required>
                                        <option value="">Select guests</option>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 People</option>
                                        <option value="3">3 People</option>
                                        <option value="4">4 People</option>
                                        <option value="5">5+ People</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Special Requests</label>
                                    <textarea rows="3" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-neutral-800 focus:border-transparent" placeholder="Any dietary restrictions or special occasions?"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-neutral-800 text-white py-3 px-6 rounded-lg hover:bg-neutral-700 transition-colors duration-300">
                                    Reserve Table
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ContactInfo" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-12 animate__animated animate__fadeIn">
                        Get in Touch
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-neutral-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate__animated animate__fadeInUp">
                            <div className="mb-4">
                                <svg className="w-12 h-12 mx-auto text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-neutral-900">Location</h3>
                            <p className="text-neutral-600">123 Gourmet Street</p>
                            <p className="text-neutral-600">Culinary District</p>
                            <p className="text-neutral-600">Food City, FC 12345</p>
                        </div>

                        <div className="text-center p-6 bg-neutral-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="mb-4">
                                <svg className="w-12 h-12 mx-auto text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-neutral-900">Hours</h3>
                            <p className="text-neutral-600">Monday - Thursday: 11am - 10pm</p>
                            <p className="text-neutral-600">Friday - Saturday: 11am - 11pm</p>
                            <p className="text-neutral-600">Sunday: 12pm - 9pm</p>
                        </div>

                        <div className="text-center p-6 bg-neutral-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="mb-4">
                                <svg className="w-12 h-12 mx-auto text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-neutral-900">Contact</h3>
                            <p className="text-neutral-600">Phone: (555) 123-4567</p>
                            <p className="text-neutral-600">Email: info@gourmetdining.com</p>
                            <div className="flex justify-center space-x-4 mt-4">
                                <a href="#" className="text-neutral-800 hover:text-neutral-600 transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-neutral-800 hover:text-neutral-600 transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-neutral-800 hover:text-neutral-600 transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="Footer" className="bg-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Gourmet Dining</h3>
                            <p className="text-neutral-400">Crafting culinary experiences since 1995</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#Hero" className="text-neutral-400 hover:text-white transition-colors">Home</a></li>
                                <li><a href="#MenuCategories" className="text-neutral-400 hover:text-white transition-colors">Menu</a></li>
                                <li><a href="#SpecialOffers" className="text-neutral-400 hover:text-white transition-colors">Specials</a></li>
                                <li><a href="#Reservations" className="text-neutral-400 hover:text-white transition-colors">Reservations</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Contact</h3>
                            <ul className="space-y-2 text-neutral-400">
                                <li>123 Gourmet Street</li>
                                <li>Food City, FC 12345</li>
                                <li>(555) 123-4567</li>
                                <li>info@gourmetdining.com</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Hours</h3>
                            <ul className="space-y-2 text-neutral-400">
                                <li>Monday - Thursday: 11am - 10pm</li>
                                <li>Friday - Saturday: 11am - 11pm</li>
                                <li>Sunday: 12pm - 9pm</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-neutral-800 py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-neutral-400 text-sm">© 2024 Gourmet Dining. All rights reserved.</p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-neutral-400 hover:text-white text-sm">Privacy Policy</a>
                                <a href="#" className="text-neutral-400 hover:text-white text-sm">Terms of Service</a>
                                <a href="#" className="text-neutral-400 hover:text-white text-sm">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}