import Link from "next/link";

export default async function Home() {
    return (
        <>
                    <nav id="navbar" className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-20">
                                <div className="flex-shrink-0">
                                    <a href="#" className="text-2xl font-serif text-white">Bistro Elite</a>
                                </div>

                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-8">
                                        <Link href="/restaurant" className="text-white hover:text-amber-400 transition-colors px-3 py-2">Home</Link>
                                        <a href="#history"
                                            className="text-white hover:text-amber-400 transition-colors px-3 py-2">History</a>
                                        <a href="#chefteam"
                                            className="text-white hover:text-amber-400 transition-colors px-3 py-2">Team</a>
                                        <a href="#philosophy"
                                            className="text-white hover:text-amber-400 transition-colors px-3 py-2">Philosophy</a>
                                        <a href="#awards"
                                            className="text-white hover:text-amber-400 transition-colors px-3 py-2">Awards</a>
                                        <a href="#contact"
                                            className="bg-amber-500 text-white hover:bg-amber-600 transition-colors px-4 py-2 rounded-md">Reserve</a>
                                    </div>
                                </div>

                                <div className="md:hidden">
                                    <button id="mobile-menu-button" className="text-white hover:text-amber-400 focus:outline-none">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="mobile-menu" className="hidden md:hidden bg-neutral-900">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a href="#hero" className="text-white hover:text-amber-400 block px-3 py-2">Home</a>
                                <a href="#history" className="text-white hover:text-amber-400 block px-3 py-2">History</a>
                                <a href="#chefteam" className="text-white hover:text-amber-400 block px-3 py-2">Team</a>
                                <a href="#philosophy" className="text-white hover:text-amber-400 block px-3 py-2">Philosophy</a>
                                <a href="#awards" className="text-white hover:text-amber-400 block px-3 py-2">Awards</a>
                                <a href="#contact"
                                    className="bg-amber-500 text-white hover:bg-amber-600 block px-3 py-2 rounded-md mt-4">Reserve</a>
                            </div>
                        </div>
                    </nav>
                    <section id="hero" className="relative h-screen flex items-center justify-center bg-neutral-900">
                        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/90 z-10"></div>

                        <div className="container mx-auto px-6 relative z-20">
                            <div className="text-center">
                                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 animate__animated animate__fadeIn">
                                    Our Story: A Taste of Tradition & Passion
                                </h1>
                                <p
                                    className="text-xl md:text-2xl text-amber-400 mb-8 animate__animated animate__fadeIn animate__delay-1s">
                                    Crafting memorable dining experiences since 1995
                                </p>
                                <div className="animate__animated animate__fadeIn animate__delay-2s">
                                    <a href="#contact"
                                        className="inline-block bg-amber-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-amber-600 transition-colors duration-300">
                                        Reserve Your Table
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate__animated animate__fadeIn animate__delay-3s">
                            <div className="flex flex-col items-center">
                                <span className="text-amber-400 text-sm mb-2">Scroll to Discover</span>
                                <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
                                    <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="history" className="py-20 bg-neutral-100">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-serif text-neutral-800 mb-4 animate__animated animate__fadeIn">Our Journey
                                    Through Time</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="animate__animated animate__fadeInLeft">
                                    <h3 className="text-2xl font-serif text-neutral-800 mb-6">A Legacy of Excellence</h3>
                                    <p className="text-neutral-600 mb-6 leading-relaxed">
                                        Founded in 1995, Bistro Elite emerged from a simple yet powerful vision: to create a dining
                                        destination where traditional craftsmanship meets contemporary creativity. Our founder, Chef
                                        Antonio Romano, transformed his grandmother's recipes into a modern culinary experience.
                                    </p>
                                    <p className="text-neutral-600 mb-8 leading-relaxed">
                                        What started as a modest 20-seat restaurant has evolved into one of the city's most
                                        celebrated dining establishments, serving over 100,000 satisfied guests annually.
                                    </p>
                                </div>

                                <div className="space-y-8 animate__animated animate__fadeInRight">
                                    <div className="flex items-start">
                                        <div
                                            className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-serif">
                                            1995
                                        </div>
                                        <div className="ml-6">
                                            <h4 className="text-lg font-semibold text-neutral-800 mb-2">First Opening</h4>
                                            <p className="text-neutral-600">Opened our doors with just 20 seats and a dream</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div
                                            className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-serif">
                                            2005
                                        </div>
                                        <div className="ml-6">
                                            <h4 className="text-lg font-semibold text-neutral-800 mb-2">First Michelin Star</h4>
                                            <p className="text-neutral-600">Recognized for culinary excellence</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div
                                            className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-serif">
                                            2015
                                        </div>
                                        <div className="ml-6">
                                            <h4 className="text-lg font-semibold text-neutral-800 mb-2">Major Expansion</h4>
                                            <p className="text-neutral-600">Expanded to accommodate 120 guests</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div
                                            className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-serif">
                                            2023
                                        </div>
                                        <div className="ml-6">
                                            <h4 className="text-lg font-semibold text-neutral-800 mb-2">Global Recognition</h4>
                                            <p className="text-neutral-600">Named among World's Top 50 Restaurants</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="chefteam" className="py-20 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-serif text-neutral-800 mb-4 animate__animated animate__fadeIn">Meet Our
                                    Culinary Artists</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6 animate__animated animate__fadeInLeft">
                                    <div className="relative">
                                        <div className="aspect-w-4 aspect-h-5 bg-neutral-200 rounded-lg">
                                            <div className="w-full h-full flex items-center justify-center text-neutral-400">
                                                <img className="h-full w-full object-cover"
                                                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/80 to-transparent p-6 rounded-b-lg">
                                            <h3 className="text-xl font-serif text-white">Chef Antonio Romano</h3>
                                            <p className="text-amber-400">Executive Chef</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8 animate__animated animate__fadeInRight">
                                    <div className="mb-8">
                                        <blockquote className="text-2xl font-serif text-neutral-800 italic mb-4">
                                            "Cooking is not just an art, it's our way of life. Every dish tells a story, every
                                            flavor holds a memory."
                                        </blockquote>
                                        <p className="text-neutral-600">- Chef Antonio Romano</p>
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-neutral-600 leading-relaxed">
                                            With over 25 years of culinary expertise, Chef Antonio Romano brings his passion for
                                            traditional Italian cuisine and innovative cooking techniques to Bistro Elite. His
                                            journey through renowned kitchens across Europe has shaped his unique approach to fine
                                            dining.
                                        </p>
                                        <p className="text-neutral-600 leading-relaxed">
                                            Together with his hand-picked team of talented sous chefs and kitchen staff, Chef
                                            Antonio creates an atmosphere of excellence and creativity that reflects in every dish
                                            we serve.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mt-8">
                                        <div className="text-center p-4 bg-neutral-50 rounded-lg">
                                            <p className="text-3xl font-serif text-amber-500 mb-2">25+</p>
                                            <p className="text-neutral-600 text-sm">Years Experience</p>
                                        </div>
                                        <div className="text-center p-4 bg-neutral-50 rounded-lg">
                                            <p className="text-3xl font-serif text-amber-500 mb-2">15</p>
                                            <p className="text-neutral-600 text-sm">Expert Chefs</p>
                                        </div>
                                        <div className="text-center p-4 bg-neutral-50 rounded-lg">
                                            <p className="text-3xl font-serif text-amber-500 mb-2">3</p>
                                            <p className="text-neutral-600 text-sm">Michelin Stars</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="philosophy" className="py-20 bg-neutral-100">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-serif text-neutral-800 mb-4 animate__animated animate__fadeIn">Our
                                    Philosophy</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeInUp">
                                    <div className="text-amber-500 mb-6">
                                        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-serif text-neutral-800 mb-4 text-center">Our Mission</h3>
                                    <p className="text-neutral-600 text-center">
                                        Delivering authentic flavors with fresh, locally sourced ingredients while creating
                                        unforgettable dining experiences for our guests.
                                    </p>
                                </div>

                                <div
                                    className="bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
                                    <div className="text-amber-500 mb-6">
                                        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-serif text-neutral-800 mb-4 text-center">Our Values</h3>
                                    <ul className="text-neutral-600 space-y-3 text-center">
                                        <li>Quality Excellence</li>
                                        <li>Warm Hospitality</li>
                                        <li>Sustainability</li>
                                        <li>Culinary Innovation</li>
                                    </ul>
                                </div>

                                <div
                                    className="bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
                                    <div className="text-amber-500 mb-6">
                                        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-serif text-neutral-800 mb-4 text-center">Our Philosophy</h3>
                                    <p className="text-neutral-600 text-center">
                                        Creating dishes that bring people together and celebrate culture, turning meals into
                                        memories and tables into gathering places.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 text-center">
                                <div
                                    className="max-w-2xl mx-auto bg-neutral-800 p-8 rounded-lg animate__animated animate__fadeIn animate__delay-3s">
                                    <blockquote className="text-white text-xl font-serif italic mb-4">
                                        "We believe that every dish should tell a story, every ingredient should have purpose, and
                                        every guest should feel at home."
                                    </blockquote>
                                    <p className="text-amber-400">- Bistro Elite Team</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="awards" className="py-20 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-serif text-neutral-800 mb-4 animate__animated animate__fadeIn">Awards &
                                    Recognition</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                            </div>

                            <div className="relative max-w-4xl mx-auto overflow-hidden">
                                <div className="awards-slider flex transition-transform duration-500 ease-in-out">
                                    <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                                        <div className="bg-neutral-50 p-6 rounded-lg text-center">
                                            <div
                                                className="w-20 h-20 mx-auto mb-4 bg-amber-500 rounded-full flex items-center justify-center">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-serif text-neutral-800 mb-2">Michelin Star</h3>
                                            <p className="text-neutral-600">3 Stars Excellence</p>
                                            <p className="text-amber-500 text-sm mt-2">2023</p>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                                        <div className="bg-neutral-50 p-6 rounded-lg text-center">
                                            <div
                                                className="w-20 h-20 mx-auto mb-4 bg-amber-500 rounded-full flex items-center justify-center">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-serif text-neutral-800 mb-2">World's 50 Best</h3>
                                            <p className="text-neutral-600">Top 10 Ranking</p>
                                            <p className="text-amber-500 text-sm mt-2">2023</p>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/3 flex-shrink-0 px-4">
                                        <div className="bg-neutral-50 p-6 rounded-lg text-center">
                                            <div
                                                className="w-20 h-20 mx-auto mb-4 bg-amber-500 rounded-full flex items-center justify-center">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-serif text-neutral-800 mb-2">James Beard</h3>
                                            <p className="text-neutral-600">Excellence in Cuisine</p>
                                            <p className="text-amber-500 text-sm mt-2">2022</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-neutral-800/50 hover:bg-neutral-800 text-white p-2 rounded-full"
                                    id="prevBtn">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-neutral-800/50 hover:bg-neutral-800 text-white p-2 rounded-full"
                                    id="nextBtn">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            <div className="text-center mt-16">
                                <p className="text-xl text-neutral-600 mb-6">Experience award-winning cuisine at Bistro Elite</p>
                                <a href="#contact"
                                    className="inline-block bg-amber-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-amber-600 transition-colors duration-300">
                                    Reserve Your Table
                                </a>
                            </div>
                        </div>
                    </section>
                    <section id="gallery" className="py-20 bg-neutral-100">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-serif text-neutral-800 mb-4 animate__animated animate__fadeIn">Our Culinary
                                    Journey</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="relative group overflow-hidden rounded-lg animate__animated animate__fadeIn">
                                    <div className="aspect-w-4 aspect-h-3 bg-neutral-200 rounded-lg">
                                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                                            <img className="h-full w-full object-cover"
                                                src="https://media.admiddleeast.com/photos/66a8cd5c062b8b3a02f9430c/16:9/w_2560%2Cc_limit/abu-dhabi-broadway-interior-seating.jpeg"
                                                alt="" />
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-lg font-serif">Our Restaurant Interior</h3>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="relative group overflow-hidden rounded-lg animate__animated animate__fadeIn animate__delay-1s">
                                    <div className="aspect-w-4 aspect-h-3 bg-neutral-200 rounded-lg">
                                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                                            <img className="h-full w-full object-cover"
                                                src="https://cms.factmagazines.com/wp-content/uploads/2024/05/Broadway-Emirates-Palace-002.jpeg"
                                                alt="" />
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-lg font-serif">Signature Dishes</h3>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="relative group overflow-hidden rounded-lg animate__animated animate__fadeIn animate__delay-2s">
                                    <div className="aspect-w-4 aspect-h-3 bg-neutral-200 rounded-lg">
                                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                                            <img className="h-full w-full object-cover"
                                                src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9486.jpg"
                                                alt="" />
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-lg font-serif">Behind the Scenes</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-12">
                                <button
                                    className="bg-amber-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-amber-600 transition-colors duration-300 animate__animated animate__fadeIn animate__delay-3s">
                                    View Full Gallery
                                </button>
                            </div>
                        </div>
                    </section>
                    <section id="testimonials" className="py-20 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-serif text-neutral-800 mb-4 animate__animated animate__fadeIn">Guest
                                    Experiences</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                            </div>

                            <div className="relative max-w-5xl mx-auto">
                                <div className="testimonials-slider overflow-hidden">
                                    <div className="flex transition-transform duration-500">
                                        <div className="w-full flex-shrink-0 px-4">
                                            <div className="bg-neutral-50 p-8 rounded-lg shadow-lg">
                                                <div className="flex items-center mb-6">
                                                    <div
                                                        className="w-16 h-16 bg-neutral-200 rounded-full overflow-hidden flex items-center justify-center">
                                                        <img className="w-16 h-16 object-cover"
                                                            src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" />                                        </div>
                                                    <div className="ml-4">
                                                        <h3 className="text-xl font-serif text-neutral-800">Sarah Johnson</h3>
                                                        <p className="text-amber-500">Food Critic</p>
                                                    </div>
                                                </div>
                                                <div className="mb-4 text-amber-500">
                                                    ★★★★★
                                                </div>
                                                <p className="text-neutral-600 italic">"An extraordinary dining experience that
                                                    transcends mere food. Each dish tells a story, and the atmosphere is simply
                                                    magical."</p>
                                            </div>
                                        </div>

                                        <div className="w-full flex-shrink-0 px-4">
                                            <div className="bg-neutral-50 p-8 rounded-lg shadow-lg">
                                                <div className="flex items-center mb-6">
                                                    <div
                                                        className="w-16 h-16 bg-neutral-200 rounded-full overflow-hidden flex items-center justify-center">
                                                        <img className="w-16 h-16 object-cover"
                                                            src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg" alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <h3 className="text-xl font-serif text-neutral-800">Michael Chen</h3>
                                                        <p className="text-amber-500">Regular Guest</p>
                                                    </div>
                                                </div>
                                                <div className="mb-4 text-amber-500">
                                                    ★★★★★
                                                </div>
                                                <p className="text-neutral-600 italic">"The attention to detail and the warmth of
                                                    service make every visit special. It's more than a restaurant - it's a culinary
                                                    journey."</p>
                                            </div>
                                        </div>

                                        <div className="w-full flex-shrink-0 px-4">
                                            <div className="bg-neutral-50 p-8 rounded-lg shadow-lg">
                                                <div className="flex items-center mb-6">
                                                    <div
                                                        className="w-16 h-16 bg-neutral-200 rounded-full overflow-hidden flex items-center justify-center">
                                                        <img className="w-16 h-16 object-cover"
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMHCDMtqM_45FAek0yHA1bNk79rzvO1C1Pg&s" alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <h3 className="text-xl font-serif text-neutral-800">Emma Thompson</h3>
                                                        <p className="text-amber-500">Food Blogger</p>
                                                    </div>
                                                </div>
                                                <div className="mb-4 text-amber-500">
                                                    ★★★★★
                                                </div>
                                                <p className="text-neutral-600 italic">"The fusion of traditional and modern techniques
                                                    creates an unforgettable dining experience. Every visit reveals new flavors to
                                                    discover."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-neutral-800/50 hover:bg-neutral-800 text-white p-3 rounded-full"
                                    id="testimonialPrevBtn">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-neutral-800/50 hover:bg-neutral-800 text-white p-3 rounded-full"
                                    id="testimonialNextBtn">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section id="contact" className="py-20 bg-neutral-100">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-serif text-neutral-800 mb-4 animate__animated animate__fadeIn">Make a
                                    Reservation</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                                <div className="space-y-8 animate__animated animate__fadeInLeft">
                                    <div>
                                        <h3 className="text-2xl font-serif text-neutral-800 mb-4">Contact Details</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <p className="text-neutral-600">123 Culinary Street, Foodie City, FC 12345</p>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <p className="text-neutral-600">(555) 123-4567</p>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <p className="text-neutral-600">reservations@bistroelite.com</p>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <h4 className="text-xl font-serif text-neutral-800 mb-3">Opening Hours</h4>
                                            <div className="space-y-2 text-neutral-600">
                                                <p>Monday - Friday: 11:30 AM - 10:00 PM</p>
                                                <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form className="space-y-6 animate__animated animate__fadeInRight">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-neutral-700 mb-2" htmlFor="name">Name</label>
                                            <input type="text" id="name"
                                                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-amber-500"
                                                required/>
                                        </div>
                                        <div>
                                            <label className="block text-neutral-700 mb-2" htmlFor="email">Email</label>
                                            <input type="email" id="email"
                                                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-amber-500"
                                                required/>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-neutral-700 mb-2" htmlFor="date">Date</label>
                                            <input type="date" id="date"
                                                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-amber-500"
                                                required/>
                                        </div>
                                        <div>
                                            <label className="block text-neutral-700 mb-2" htmlFor="time">Time</label>
                                            <input type="time" id="time"
                                                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-amber-500"
                                                required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-neutral-700 mb-2" htmlFor="guests">Number of Guests</label>
                                        <select id="guests"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-amber-500"
                                            required>
                                            <option value="">Select number of guests</option>
                                            <option value="1">1 Person</option>
                                            <option value="2">2 People</option>
                                            <option value="3">3 People</option>
                                            <option value="4">4 People</option>
                                            <option value="5">5+ People</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-neutral-700 mb-2" htmlFor="message">Special Requests</label>
                                        <textarea id="message" rows="4"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-amber-500"></textarea>
                                    </div>

                                    <button type="submit"
                                        className="w-full bg-amber-500 text-white py-3 px-6 rounded-md hover:bg-amber-600 transition-colors duration-300">
                                        Reserve Your Table
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                    <footer id="footer" className="bg-neutral-900 text-white pt-16 pb-8">
                        <div className="container mx-auto px-6">
                            <div className="grid md:grid-cols-4 gap-12 mb-12">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif">Bistro Elite</h3>
                                    <p className="text-neutral-400">Crafting memorable dining experiences since 1995</p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-serif mb-4">Quick Links</h4>
                                    <ul className="space-y-2">
                                        <li><a href="#hero" className="text-neutral-400 hover:text-amber-500 transition-colors">Home</a>
                                        </li>
                                        <li><a href="#history" className="text-neutral-400 hover:text-amber-500 transition-colors">Our
                                            History</a></li>
                                        <li><a href="#chefteam" className="text-neutral-400 hover:text-amber-500 transition-colors">Meet
                                            the Team</a></li>
                                        <li><a href="#philosophy"
                                            className="text-neutral-400 hover:text-amber-500 transition-colors">Our Philosophy</a>
                                        </li>
                                        <li><a href="#awards"
                                            className="text-neutral-400 hover:text-amber-500 transition-colors">Awards</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-serif mb-4">Contact Us</h4>
                                    <ul className="space-y-2 text-neutral-400">
                                        <li>123 Culinary Street</li>
                                        <li>Foodie City, FC 12345</li>
                                        <li>(555) 123-4567</li>
                                        <li>info@bistroelite.com</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-serif mb-4">Opening Hours</h4>
                                    <ul className="space-y-2 text-neutral-400">
                                        <li>Monday - Friday</li>
                                        <li>11:30 AM - 10:00 PM</li>
                                        <li>Saturday - Sunday</li>
                                        <li>10:00 AM - 11:00 PM</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center border-t border-neutral-800 pt-8 mt-8">
                                <p className="text-xl font-serif mb-4">Come dine with us and be part of our story!</p>
                                <a href="#contact"
                                    className="inline-block bg-amber-500 text-white px-8 py-3 rounded-md hover:bg-amber-600 transition-colors duration-300">
                                    Reserve a Table
                                </a>
                            </div>

                            <div className="text-center text-neutral-400 text-sm mt-12">
                                <p>&copy; 2024 Bistro Elite. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
        </>
    )
}