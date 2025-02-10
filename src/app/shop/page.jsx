import Link from "next/link";

export default async function Shop() {
    return (
        <>
            <div id="root">
                <header id="header" className="relative bg-black text-white">
                    <div className="bg-gradient-to-r from-[#5964d9] to-[#1c284f]">
                        <div className="container mx-auto px-4">
                            <div className="flex justify-between items-center h-20">
                                <div className="flex items-center">
                                    <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
                                        Demo Shop
                                    </a>
                                </div>

                                <nav className="hidden md:flex items-center space-x-8">
                                    <Link href="/" className="hover:text-purple-400 transition-colors group relative">
                                        Home
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                                    </Link>
                                    <a href="#" className="hover:text-purple-400 transition-colors group relative">
                                        Categories
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                                    </a>
                                    <a href="#" className="hover:text-purple-400 transition-colors group relative">
                                        New Arrivals
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                                    </a>
                                    <a href="#" className="hover:text-purple-400 transition-colors group relative">
                                        Deals
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                                    </a>
                                    <a href="#" className="hover:text-purple-400 transition-colors group relative">
                                        Contact
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden bg-black/95 absolute w-full transform -translate-x-full transition-transform duration-300">
                        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            <a href="#" className="text-white hover:text-purple-400 transition-colors py-2">Categories</a>
                            <a href="#" className="text-white hover:text-purple-400 transition-colors py-2">New Arrivals</a>
                            <a href="#" className="text-white hover:text-purple-400 transition-colors py-2">Deals</a>
                            <a href="#" className="text-white hover:text-purple-400 transition-colors py-2">Contact</a>
                        </nav>
                    </div>
                </header>
            </div>

            <div id="root">
                <section id="hero" className="relative h-screen overflow-hidden bg-black">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-black/70 z-10"></div>
                    <div className="absolute inset-0 bg-[url('/shop1.jpg')] bg-cover bg-center animate-scale-slow"></div>

                    <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-3xl animate-fade-in-up">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                                    Experience Shopping
                                </span>
                                <span className="block text-white">
                                    In A New Dimension
                                </span>
                            </h1>

                            <p className="text-gray-300 text-lg md:text-xl mb-8 animate-fade-in-up delay-200">
                                Discover our curated collection of premium products in an immersive 3D shopping experience.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                                <a href="#shop" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg shadow-purple-500/50 text-center">
                                    Shop Now
                                </a>
                                <a href="#categories" className="inline-block px-8 py-4 border-2 border-purple-500 text-white rounded-full text-lg font-semibold hover:bg-purple-500/20 transition-all duration-300 text-center">
                                    View Categories
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="absolute right-10 top-1/4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-float"></div>
                    <div className="absolute right-32 top-1/2 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-float-delay"></div>
                    <div className="absolute right-20 bottom-1/4 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-float-slow"></div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-8 h-14 rounded-full border-2 border-white flex items-start justify-center p-2">
                            <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
                        </div>
                    </div>
                </section>
            </div>
            <div id="root">
                <section id="featured-categories" className="bg-black py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16 animate-fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    Shop By Category
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg">Explore our curated collections</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                                <div className="h-80 bg-[url('/shop11.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-2">Electronics</h3>
                                    <p className="text-gray-300 mb-4">Latest gadgets and tech</p>
                                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        Shop Now <i className="fas fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                                <div className="h-80 bg-[url('/shop12.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-2">Fashion</h3>
                                    <p className="text-gray-300 mb-4">Trending styles and outfits</p>
                                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        Shop Now <i className="fas fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                                <div className="h-80 bg-[url('/shop13.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-2">Home & Living</h3>
                                    <p className="text-gray-300 mb-4">Modern home essentials</p>
                                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        Shop Now <i className="fas fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button className="inline-flex items-center bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 group">
                                View All Categories
                                <i className="fas fa-chevron-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                            </button>
                        </div>
                    </div>

                    <div className="absolute top-20 left-10 w-24 h-24 bg-purple-500/10 rounded-full animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full animate-float-delay"></div>
                </section>
                <section id="trending-products" className="bg-black py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    Trending Now
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg">Discover our most popular products</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="group">
                                <div className="relative overflow-hidden rounded-xl bg-gray-900 p-4 h-full transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                                    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                                        <img src="/shop21.jpg" alt="Product" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">New</div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Wireless Headphones</h3>
                                    <p className="text-gray-400 mb-4">Premium sound quality</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-purple-400 text-xl font-bold">$299.99</span>
                                        <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>

                                    <div className="absolute top-4 left-4 flex flex-col space-y-2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                                        <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-purple-500 transition-colors duration-300">
                                            <i className="fas fa-heart text-white"></i>
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-purple-500 transition-colors duration-300">
                                            <i className="fas fa-eye text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="relative overflow-hidden rounded-xl bg-gray-900 p-4 h-full transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                                    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                                        <img src="/shop22.webp" alt="Product" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm">-20%</div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Smart Watch</h3>
                                    <p className="text-gray-400 mb-4">Health & fitness tracker</p>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-purple-400 text-xl font-bold">$199.99</span>
                                            <span className="text-gray-500 line-through ml-2">$249.99</span>
                                        </div>
                                        <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>

                                    <div className="absolute top-4 left-4 flex flex-col space-y-2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                                        <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-purple-500 transition-colors duration-300">
                                            <i className="fas fa-heart text-white"></i>
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-purple-500 transition-colors duration-300">
                                            <i className="fas fa-eye text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="relative overflow-hidden rounded-xl bg-gray-900 p-4 h-full transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                                    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                                        <img src="/shop23.webp" alt="Product" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Gaming Console</h3>
                                    <p className="text-gray-400 mb-4">Next-gen gaming</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-purple-400 text-xl font-bold">$499.99</span>
                                        <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>

                                    <div className="absolute top-4 left-4 flex flex-col space-y-2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                                        <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-purple-500 transition-colors duration-300">
                                            <i className="fas fa-heart text-white"></i>
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-purple-500 transition-colors duration-300">
                                            <i className="fas fa-eye text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="relative overflow-hidden rounded-xl bg-gray-900 p-4 h-full transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                                    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                                        <img src="/shop24.jpg" alt="Product" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Hot</div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Drone Camera</h3>
                                    <p className="text-gray-400 mb-4">4K aerial photography</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-purple-400 text-xl font-bold">$799.99</span>
                                        <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>

                                    <div className="absolute top-4 left-4 flex flex-col space-y-2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                                        <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-purple-500 transition-colors duration-300">
                                            <i className="fas fa-heart text-white"></i>
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-purple-500 transition-colors duration-300">
                                            <i className="fas fa-eye text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button className="inline-flex items-center bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 group">
                                View All Products
                                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                            </button>
                        </div>
                    </div>

                    <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float"></div>
                    <div className="absolute bottom-20 left-10 w-24 h-24 bg-pink-500/10 rounded-full animate-float-delay"></div>
                </section>
                <section id="3d-showcase" className="bg-black py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    Interactive 3D Showcase
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg">Experience products in stunning 3D detail</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group perspective">
                                <div className="relative h-96 rounded-xl bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 p-6 transform-gpu transition-all duration-700 preserve-3d hover:rotate-y-180 cursor-pointer">
                                    <div className="absolute inset-0 p-6 backface-hidden">
                                        <div className="h-48 mb-4 overflow-hidden rounded-lg">
                                            <img src="/shop33.jpg" alt="Product" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">VR Headset</h3>
                                        <p className="text-gray-400">Experience virtual reality in full 3D</p>
                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                                            <span className="text-purple-400 text-xl font-bold">$399.99</span>
                                            <span className="text-white text-sm">Click to rotate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group perspective">
                                <div className="relative h-96 rounded-xl bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 p-6 transform-gpu transition-all duration-700 preserve-3d hover:rotate-y-180 cursor-pointer">
                                    <div className="absolute inset-0 p-6 backface-hidden">
                                        <div className="h-48 mb-4 overflow-hidden rounded-lg">
                                            <img src="/shop32.jpg" alt="Product" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Smart Watch</h3>
                                        <p className="text-gray-400">Next-gen wearable technology</p>
                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                                            <span className="text-purple-400 text-xl font-bold">$299.99</span>
                                            <span className="text-white text-sm">Click to rotate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group perspective">
                                <div className="relative h-96 rounded-xl bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 p-6 transform-gpu transition-all duration-700 preserve-3d hover:rotate-y-180 cursor-pointer">
                                    <div className="absolute inset-0 p-6 backface-hidden">
                                        <div className="h-48 mb-4 overflow-hidden rounded-lg">
                                            <img src="/shop31.webp" alt="Product" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Gaming Console</h3>
                                        <p className="text-gray-400">Ultimate gaming experience</p>
                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                                            <span className="text-purple-400 text-xl font-bold">$499.99</span>
                                            <span className="text-white text-sm">Click to rotate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/10 rounded-full animate-float-delay"></div>
                </section>
                <section id="special-offers" className="bg-black py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    Special Offers
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg">Limited time deals you don't want to miss</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="relative group overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 z-10"></div>
                                <div className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="bg-red-500 text-white px-4 py-2 rounded-full animate-pulse">
                                            Flash Sale
                                        </div>
                                        <div className="bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full">
                                            Ends in:
                                            <span className="font-mono">23:59:59</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">Premium Headphones</h3>
                                        <p className="text-white/90 mb-4">Noise cancelling with superior sound quality</p>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-4xl font-bold text-white">$199</span>
                                            <span className="text-xl text-white/70 line-through">$399</span>
                                            <span className="bg-white/20 text-white px-3 py-1 rounded-full">50% OFF</span>
                                        </div>
                                        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-rows-2 gap-8">
                                <div className="relative group overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-black/80 z-10"></div>
                                    <div className="w-full h-[180px] object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                                        <div className="bg-purple-500 text-white px-4 py-2 rounded-full w-fit">
                                            Bundle Deal
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Gaming Bundle</h3>
                                            <div className="flex items-center gap-4">
                                                <span className="text-2xl font-bold text-white">$799</span>
                                                <span className="text-lg text-white/70 line-through">$999</span>
                                                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300">
                                                    View Deal
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative group overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-black/80 z-10"></div>
                                    <div className="w-full h-[180px] object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                                        <div className="bg-pink-500 text-white px-4 py-2 rounded-full w-fit">
                                            Exclusive
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Smart Watch Pro</h3>
                                            <div className="flex items-center gap-4">
                                                <span className="text-2xl font-bold text-white">$299</span>
                                                <span className="text-lg text-white/70 line-through">$499</span>
                                                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300">
                                                    View Deal
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float"></div>
                        <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-pink-500/10 rounded-full animate-float-delay"></div>
                    </div>
                </section>
                <section id="shopping-experience" className="bg-black py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    Revolutionary Shopping Experience
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg">Discover the future of online shopping</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group relative bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl transform-gpu group-hover:rotate-12 transition-transform duration-300">
                                    <i className="fas fa-vr-cardboard text-3xl text-white"></i>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-2xl font-bold text-white text-center mb-4">3D Viewing</h3>
                                    <p className="text-gray-400 text-center">Experience products in immersive 3D before you buy</p>
                                </div>
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>

                            <div className="group relative bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl transform-gpu group-hover:rotate-12 transition-transform duration-300">
                                    <i className="fas fa-magic text-3xl text-white"></i>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-2xl font-bold text-white text-center mb-4">AR Try-On</h3>
                                    <p className="text-gray-400 text-center">Virtual try-on technology for perfect fit</p>
                                </div>
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>

                            <div className="group relative bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl transform-gpu group-hover:rotate-12 transition-transform duration-300">
                                    <i className="fas fa-cube text-3xl text-white"></i>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-2xl font-bold text-white text-center mb-4">360° View</h3>
                                    <p className="text-gray-400 text-center">Examine products from every angle</p>
                                </div>
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        </div>

                        <div className="mt-20 relative">
                            <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-6">
                                        <h3 className="text-3xl font-bold text-white">Experience the Difference</h3>
                                        <p className="text-gray-400">Our cutting-edge technology brings products to life right before your eyes. Try our interactive demo to see how it works.</p>
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                                                    <i className="fas fa-check text-white"></i>
                                                </div>
                                                <span className="text-white">Real-time 3D rendering</span>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                                                    <i className="fas fa-check text-white"></i>
                                                </div>
                                                <span className="text-white">Interactive product exploration</span>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                                                    <i className="fas fa-check text-white"></i>
                                                </div>
                                                <span className="text-white">Realistic lighting and textures</span>
                                            </div>
                                        </div>
                                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300">
                                            Try Demo Now
                                        </button>
                                    </div>
                                    <div className="relative group">
                                        <div className="aspect-square rounded-2xl overflow-hidden">
                                            <img src="/shop41.jpg" alt="Interactive Demo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/10 rounded-full animate-float-delay"></div>
                </section>
                <section id="customer-reviews" className="bg-black py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    Customer Experiences
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg">What our customers say about their shopping journey</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-purple-500/30">
                                        <img src="https://avatar.iran.liara.run/public" alt="Customer" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                    </div>
                                    <p className="text-gray-400 text-center mb-4">"The 3D product view feature is amazing! I could see exactly what I was buying. Best online shopping experience ever!"</p>
                                    <h4 className="text-white font-semibold">Sarah Johnson</h4>
                                    <p className="text-purple-400 text-sm">Verified Buyer</p>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-purple-500/30">
                                        <img src="https://avatar.iran.liara.run/public" alt="Customer" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star-half-alt text-yellow-500"></i>
                                    </div>
                                    <p className="text-gray-400 text-center mb-4">"Virtual try-on helped me choose the perfect size. The AR feature is a game-changer for online shopping!"</p>
                                    <h4 className="text-white font-semibold">Michael Chen</h4>
                                    <p className="text-purple-400 text-sm">Verified Buyer</p>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-purple-500/30">
                                        <img src="https://avatar.iran.liara.run/public" alt="Customer" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                    </div>
                                    <p className="text-gray-400 text-center mb-4">"Exceptional service and the 360° view feature helped me make an informed decision. Will definitely shop here again!"</p>
                                    <h4 className="text-white font-semibold">Emma Davis</h4>
                                    <p className="text-purple-400 text-sm">Verified Buyer</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-purple-400 mb-2">98%</h3>
                                <p className="text-gray-400">Satisfaction Rate</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-purple-400 mb-2">10k+</h3>
                                <p className="text-gray-400">Happy Customers</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-purple-400 mb-2">4.9</h3>
                                <p className="text-gray-400">Average Rating</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-purple-400 mb-2">24/7</h3>
                                <p className="text-gray-400">Support Available</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/10 rounded-full animate-float-delay"></div>
                </section>
                <section id="newsletter" className="bg-black py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="relative text-center">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                            Stay in the Loop
                                        </span>
                                    </h2>
                                    <p className="text-gray-400 text-lg mb-8">
                                        Subscribe to get exclusive deals, early access to new products, and 3D shopping tips
                                    </p>

                                    <form className="max-w-2xl mx-auto">
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="flex-grow relative group">
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="w-full px-6 py-4 rounded-full bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                            </div>
                                            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                                                Subscribe Now
                                            </button>
                                        </div>
                                    </form>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                                                <i className="fas fa-gift text-purple-400"></i>
                                            </div>
                                            <p className="text-gray-400">Exclusive Offers</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                                                <i className="fas fa-bell text-purple-400"></i>
                                            </div>
                                            <p className="text-gray-400">New Arrivals</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                                                <i className="fas fa-percent text-purple-400"></i>
                                            </div>
                                            <p className="text-gray-400">Special Discounts</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                                                <i className="fas fa-crown text-purple-400"></i>
                                            </div>
                                            <p className="text-gray-400">VIP Access</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-sm mt-8">
                                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/10 rounded-full animate-float-delay"></div>
                </section>
                <footer id="footer" className="bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    3D Shop
                                </h3>
                                <p className="text-gray-400">
                                    Experience the future of online shopping with immersive 3D technology and virtual try-ons.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-xl font-semibold text-white">Quick Links</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                                            <i className="fas fa-chevron-right text-sm mr-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                                            <i className="fas fa-chevron-right text-sm mr-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                            Shop
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                                            <i className="fas fa-chevron-right text-sm mr-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                            Categories
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                                            <i className="fas fa-chevron-right text-sm mr-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                                            <i className="fas fa-chevron-right text-sm mr-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-xl font-semibold text-white">Customer Service</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                                            <i className="fas fa-chevron-right text-sm mr-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                            My Account
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                                            <i className="fas fa-chevron-right text-sm mr-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                            Track Order
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                                            <i className="fas fa-chevron-right text-sm mr-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                            Shipping Info
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                                            <i className="fas fa-chevron-right text-sm mr-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                            Returns
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                                            <i className="fas fa-chevron-right text-sm mr-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                            Help Center
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-xl font-semibold text-white">Contact Us</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start space-x-3">
                                        <i className="fas fa-map-marker-alt text-purple-400 mt-1"></i>
                                        <span className="text-gray-400">123 Innovation Street, Tech City, 12345</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <i className="fas fa-phone-alt text-purple-400"></i>
                                        <span className="text-gray-400">+1 (234) 567-8900</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <i className="fas fa-envelope text-purple-400"></i>
                                        <span className="text-gray-400">support@3dshop.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-purple-500/20 py-8">
                            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                <p className="text-gray-400 text-sm">
                                    © 2024 3D Shop. All rights reserved.
                                </p>
                                <div className="flex items-center space-x-6">
                                    <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">Privacy Policy</a>
                                    <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">Terms of Service</a>
                                    <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">Shipping Policy</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <img src="https://placehold.co/40x25" alt="Visa" className="h-6 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                                    <img src="https://placehold.co/40x25" alt="Mastercard" className="h-6 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                                    <img src="https://placehold.co/40x25" alt="PayPal" className="h-6 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}