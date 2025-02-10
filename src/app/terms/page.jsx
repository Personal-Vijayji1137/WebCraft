export default async function Privacy() {
    return (
        <>
            <nav className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <span className="text-white text-xl font-bold">WebCraft</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/#hero" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                                <a href="/#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                                <a href="/#portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</a>
                                <a href="/#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
                                <a href="/#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                                <a href="/#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
                                <a href="/#process" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</a>
                                <a href="/#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
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
                        <a href="/#hero" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="/#services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
                        <a href="/#portfolio" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
                        <a href="/#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
                        <a href="/#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
                        <a href="/#testimonials" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
                        <a href="/#process" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How It Works</a>
                        <a href="/#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto px-4 py-20 min-h-[70vh] flex items-center">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInDown">Terms & Conditions</h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 animate__animated animate__fadeInUp">Your Legal Agreement with Our Business</p>
                    <div className="flex justify-center gap-4">
                        <a href="#termsContent" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-full transition duration-300 animate__animated animate__fadeInLeft">Read Terms</a>
                        <a href="#contactLegal" className="border border-white hover:bg-white hover:text-neutral-900 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-full transition duration-300 animate__animated animate__fadeInRight">Contact Legal</a>
                    </div>
                </div>
            </div>
            <section id="introduction" className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-neutral-800 animate__animated animate__fadeInDown">Introduction to Our Terms & Conditions</h2>

                        <div className="space-y-8 animate__animated animate__fadeIn">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-4 text-neutral-700">Welcome to Premier Retail</h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    These Terms and Conditions ("Terms") govern your use of Premier Retail's website and services. By accessing or using our website and services, you agree to be bound by these Terms. Please read them carefully before proceeding.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-4 text-neutral-700">Agreement to Terms</h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    By accessing our website, creating an account, or making a purchase, you acknowledge that you have read, understood, and agree to be bound by these Terms, including any additional guidelines and future modifications.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-4 text-neutral-700">Key Definitions</h3>
                                <ul className="list-disc list-inside space-y-3 text-neutral-600">
                                    <li><span className="font-semibold">Company:</span> Premier Retail, its subsidiaries, affiliates, and authorized representatives</li>
                                    <li><span className="font-semibold">Customer:</span> Any individual or entity that accesses our website or purchases our products</li>
                                    <li><span className="font-semibold">Website:</span> The official Premier Retail website and all associated web pages</li>
                                    <li><span className="font-semibold">Products:</span> All items available for purchase through our website</li>
                                    <li><span className="font-semibold">Services:</span> Any services provided by Premier Retail, including but not limited to online shopping</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-4 text-neutral-700">Last Updated</h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    These Terms were last updated on <span className="font-semibold">January 1, 2024</span>. We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="termsContent" className="bg-neutral-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12">
                            <div className="bg-white p-8 rounded-lg shadow-sm animate__animated animate__fadeIn">
                                <h2 className="text-2xl font-bold mb-6 text-neutral-800">2. Use of Website</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 text-neutral-700">2.1 Eligibility</h3>
                                        <p className="text-neutral-600">You must be at least 18 years old to use this website or have parental consent. By using this website, you warrant that you meet these eligibility requirements.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 text-neutral-700">2.2 Compliance</h3>
                                        <p className="text-neutral-600">Users must comply with all applicable local, state, and federal laws while using our services.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 text-neutral-700">2.3 Prohibited Activities</h3>
                                        <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                            <li>Unauthorized access to website systems</li>
                                            <li>Fraudulent transactions or activities</li>
                                            <li>Misuse of website content</li>
                                            <li>Distribution of malicious software</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm animate__animated animate__fadeIn">
                                <h2 className="text-2xl font-bold mb-6 text-neutral-800">3. Product Information & Availability</h2>
                                <div className="space-y-4">
                                    <p className="text-neutral-600">We strive to maintain accurate product descriptions, images, and availability information. However, we reserve the right to modify or discontinue products without notice.</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Product images are representative but may vary slightly</li>
                                        <li>Stock availability is subject to change</li>
                                        <li>Prices may be adjusted due to errors or market conditions</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm animate__animated animate__fadeIn">
                                <h2 className="text-2xl font-bold mb-6 text-neutral-800">4. Pricing, Payments & Billing</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 text-neutral-700">4.1 Payment Methods</h3>
                                        <p className="text-neutral-600">We accept major credit cards, debit cards, and selected digital wallets. All transactions are processed securely.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 text-neutral-700">4.2 Pricing Policy</h3>
                                        <p className="text-neutral-600">Prices are subject to change without notice. Special promotional prices are valid only for the specified duration.</p>
                                    </div>
                                </div>
                            </div>

                            <div id="accordion" className="space-y-4">
                                <div className="border border-gray-200 rounded-lg">
                                    <button className="accordion-button w-full text-left p-4 font-semibold bg-white hover:bg-gray-50 transition-colors duration-200" data-section="section5">
                                        5. Order Processing & Shipping
                                        <span className="float-right">+</span>
                                    </button>
                                    <div className="accordion-content hidden p-4 bg-white border-t border-gray-200">
                                        <p className="text-neutral-600">Standard shipping times vary by location. We are not responsible for delays caused by incorrect shipping information.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="legalDisclaimer" className="bg-neutral-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12 animate__animated animate__fadeIn">
                            <h2 className="text-3xl font-bold mb-4">Legal Disclaimer</h2>
                            <p className="text-gray-300">Important legal information regarding your use of our services</p>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-neutral-800 p-6 rounded-lg animate__animated animate__fadeInUp">
                                <h3 className="text-xl font-semibold mb-4 text-blue-400">General Disclaimer</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
                                </p>
                            </div>

                            <div className="bg-neutral-800 p-6 rounded-lg animate__animated animate__fadeInUp">
                                <h3 className="text-xl font-semibold mb-4 text-blue-400">Limitation of Liability</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                                </p>
                            </div>

                            <div className="bg-neutral-800 p-6 rounded-lg animate__animated animate__fadeInUp">
                                <h3 className="text-xl font-semibold mb-4 text-blue-400">Accuracy of Information</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Product descriptions and prices are subject to change without notice</li>
                                    <li>We reserve the right to modify or discontinue services without prior notice</li>
                                    <li>Technical specifications may be updated or corrected at any time</li>
                                </ul>
                            </div>

                            <div className="bg-neutral-800 p-6 rounded-lg animate__animated animate__fadeInUp">
                                <h3 className="text-xl font-semibold mb-4 text-blue-400">Legal Compliance</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    By using our website and services, you agree to comply with all applicable laws and regulations. Any disputes shall be resolved in accordance with our Terms and Conditions under the jurisdiction specified therein.
                                </p>
                            </div>

                            <div className="mt-8 text-center animate__animated animate__fadeIn">
                                <p className="text-sm text-gray-400">
                                    Last updated: January 1, 2024. Please review our full Terms and Conditions for complete details.
                                </p>
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
    )
}