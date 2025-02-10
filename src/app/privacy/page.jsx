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
            <div className="min-h-[70vh] flex items-center justify-center pt-16">
                <div className="container mx-auto px-4">
                    <div className="text-center animate__animated animate__fadeIn">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Your privacy matters to us. Learn how WebCraft protects and manages your data while providing exceptional landing page services.</p>
                    </div>
                </div>
            </div>
            <section id="introduction" className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Introduction</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-neutral-700 leading-relaxed mb-6">
                                Welcome to WebCraft, your trusted partner in creating custom landing pages. At WebCraft, we understand that your privacy is paramount, and we are committed to protecting your personal information while providing you with exceptional service.
                            </p>

                            <p className="text-neutral-700 leading-relaxed mb-6">
                                This Privacy Policy is designed to help you understand how we collect, use, and safeguard your information when you interact with our website and services. It outlines our practices regarding data protection and demonstrates our commitment to maintaining the confidentiality and security of your personal information.
                            </p>

                            <p className="text-neutral-700 leading-relaxed">
                                By using WebCraft's services, you trust us with your information. We take this responsibility seriously and are dedicated to protecting your privacy rights while delivering high-quality, affordable landing page solutions for your business.
                            </p>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r">
                            <p className="text-neutral-700 font-medium">
                                Last Updated: <span className="text-neutral-600"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="information-collection" className="py-16 bg-neutral-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Information We Collect</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="grid gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                                    <i className="fas fa-user-circle mr-2 text-blue-500"></i>
                                    Personal Information
                                </h3>
                                <p className="text-neutral-700 mb-4">We collect the following personal information when you interact with our services:</p>
                                <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                                    <li>Full Name</li>
                                    <li>Email Address</li>
                                    <li>Phone Number</li>
                                    <li>Information submitted through contact forms</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                                    <i className="fas fa-desktop mr-2 text-blue-500"></i>
                                    Usage Data
                                </h3>
                                <p className="text-neutral-700 mb-4">We automatically collect certain information when you visit our website:</p>
                                <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                                    <li>IP Address</li>
                                    <li>Browser Type and Version</li>
                                    <li>Device Information</li>
                                    <li>Pages Visited and Browsing Patterns</li>
                                    <li>Time and Date of Visits</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                                    <i className="fas fa-credit-card mr-2 text-blue-500"></i>
                                    Payment Information
                                </h3>
                                <p className="text-neutral-700">All payment processing is handled securely through trusted third-party payment processors. WebCraft does not store your complete payment information on our servers. Payment processors maintain strict security standards and comply with PCI-DSS requirements.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                                    <i className="fas fa-cookie-bite mr-2 text-blue-500"></i>
                                    Cookies and Tracking
                                </h3>
                                <p className="text-neutral-700 mb-4">We use various tracking technologies to enhance your experience:</p>
                                <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                                    <li>Essential cookies for website functionality</li>
                                    <li>Analytics tools like Google Analytics</li>
                                    <li>Performance and usage tracking mechanisms</li>
                                    <li>Marketing and advertising cookies (with consent)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r">
                            <p className="text-neutral-700">
                                <span className="font-semibold">Note:</span> You can control or delete cookies through your browser settings at any time. However, this may affect some website functionality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="data-usage" className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">How We Use Your Information</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="grid gap-8">
                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition duration-300">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4 flex items-center">
                                    <i className="fas fa-tools mr-3 text-blue-500"></i>
                                    Service Improvement
                                </h3>
                                <p className="text-neutral-700">
                                    We use your information to provide and enhance our landing page services, optimize customer support, and ensure a seamless user experience. This includes customizing content and improving our service offerings based on user feedback and interactions.
                                </p>
                            </div>

                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition duration-300">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4 flex items-center">
                                    <i className="fas fa-envelope mr-3 text-blue-500"></i>
                                    Communication
                                </h3>
                                <p className="text-neutral-700">
                                    Your information helps us:
                                </p>
                                <ul className="list-disc list-inside text-neutral-600 mt-2 space-y-2 ml-4">
                                    <li>Send important service updates and notifications</li>
                                    <li>Respond to your inquiries and support requests</li>
                                    <li>Share relevant marketing communications (with your consent)</li>
                                    <li>Provide information about new features and services</li>
                                </ul>
                            </div>

                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition duration-300">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4 flex items-center">
                                    <i className="fas fa-chart-line mr-3 text-blue-500"></i>
                                    Analytics & Improvement
                                </h3>
                                <p className="text-neutral-700">
                                    We analyze user behavior and website traffic to:
                                </p>
                                <ul className="list-disc list-inside text-neutral-600 mt-2 space-y-2 ml-4">
                                    <li>Understand how users interact with our services</li>
                                    <li>Identify areas for improvement</li>
                                    <li>Optimize website performance</li>
                                    <li>Enhance user experience</li>
                                </ul>
                            </div>

                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition duration-300">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4 flex items-center">
                                    <i className="fas fa-shield-alt mr-3 text-blue-500"></i>
                                    Legal & Security
                                </h3>
                                <p className="text-neutral-700">
                                    We process your information to:
                                </p>
                                <ul className="list-disc list-inside text-neutral-600 mt-2 space-y-2 ml-4">
                                    <li>Prevent fraudulent activities</li>
                                    <li>Maintain security of our services</li>
                                    <li>Comply with legal obligations</li>
                                    <li>Resolve disputes and enforce agreements</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r">
                            <p className="text-neutral-700">
                                <span className="font-semibold">Important:</span> We process your personal information only for the purposes outlined above and in accordance with relevant data protection laws and regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="data-sharing" className="py-16 bg-neutral-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">How We Share Your Information</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <i className="fas fa-user-shield text-2xl text-blue-500"></i>
                                </div>
                            </div>
                            <p className="text-center text-neutral-700 font-semibold mb-4">Your Trust is Our Priority</p>
                            <p className="text-center text-neutral-600">
                                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Trusted Service Providers</h3>
                                <p className="text-neutral-700 mb-4">We work with the following types of service providers:</p>
                                <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                                    <li>Payment processors for secure transactions</li>
                                    <li>Analytics services (e.g., Google Analytics)</li>
                                    <li>Email service providers</li>
                                    <li>Hosting and infrastructure providers</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Legal Requirements</h3>
                                <p className="text-neutral-700">We may disclose your information when:</p>
                                <ul className="list-disc list-inside text-neutral-600 space-y-2 mt-4 ml-4">
                                    <li>Required by law or legal process</li>
                                    <li>Necessary to protect our rights and safety</li>
                                    <li>Needed to investigate potential security incidents</li>
                                    <li>Required to comply with regulatory obligations</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Data Protection Measures</h3>
                                <p className="text-neutral-700">When sharing data with service providers, we:</p>
                                <ul className="list-disc list-inside text-neutral-600 space-y-2 mt-4 ml-4">
                                    <li>Implement strict data protection agreements</li>
                                    <li>Ensure compliance with privacy regulations</li>
                                    <li>Regularly review security practices</li>
                                    <li>Limit access to necessary information only</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r">
                            <p className="text-neutral-700">
                                <span className="font-semibold">Important Note:</span> Any third-party service providers we use are bound by confidentiality obligations and are restricted from using your personal information for any purpose other than providing services to WebCraft.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cookies" className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Cookies and Tracking Technologies</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="grid gap-8">
                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                                    <i className="fas fa-cookie mr-3 text-blue-500"></i>
                                    What Are Cookies?
                                </h3>
                                <p className="text-neutral-700">
                                    Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, understand how you use our site, and improve your browsing experience.
                                </p>
                            </div>

                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Types of Cookies We Use</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded">
                                        <h4 className="font-medium text-neutral-800 mb-2">Essential Cookies</h4>
                                        <p className="text-neutral-600">Required for basic website functionality and security</p>
                                    </div>

                                    <div className="bg-white p-4 rounded">
                                        <h4 className="font-medium text-neutral-800 mb-2">Analytics Cookies</h4>
                                        <p className="text-neutral-600">Help us understand how visitors interact with our website</p>
                                    </div>

                                    <div className="bg-white p-4 rounded">
                                        <h4 className="font-medium text-neutral-800 mb-2">Preference Cookies</h4>
                                        <p className="text-neutral-600">Remember your settings and preferences for future visits</p>
                                    </div>

                                    <div className="bg-white p-4 rounded">
                                        <h4 className="font-medium text-neutral-800 mb-2">Marketing Cookies</h4>
                                        <p className="text-neutral-600">Used to deliver relevant advertisements and track marketing campaigns</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Managing Cookie Preferences</h3>
                                <div className="space-y-4">
                                    <p className="text-neutral-700">You can manage or delete cookies through your browser settings. Options include:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                                        <li>Accepting or rejecting all cookies</li>
                                        <li>Receiving notifications when cookies are set</li>
                                        <li>Removing existing cookies</li>
                                        <li>Setting browser to block cookies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r">
                            <p className="text-neutral-700">
                                <span className="font-semibold">Please Note:</span> Blocking certain cookies may impact your experience on our website and limit access to some features.
                            </p>
                        </div>

                        <div className="mt-8 text-center">
                            <button id="cookiePreferences" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                                Update Cookie Preferences
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="security" className="py-16 bg-neutral-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Data Security</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm mb-8 text-center">
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-blue-100 p-4 rounded-full">
                                    <i className="fas fa-shield-alt text-3xl text-blue-500"></i>
                                </div>
                            </div>
                            <p className="text-neutral-700 font-semibold text-lg mb-4">Your Security is Our Priority</p>
                            <p className="text-neutral-600">
                                We implement industry-standard security measures to protect your personal information.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4 flex items-center">
                                    <i className="fas fa-lock mr-3 text-blue-500"></i>
                                    Encryption Protocols
                                </h3>
                                <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                                    <li>SSL/TLS encryption for data transmission</li>
                                    <li>Secure HTTPS protocol</li>
                                    <li>Encrypted data storage</li>
                                    <li>Protected payment processing</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4 flex items-center">
                                    <i className="fas fa-server mr-3 text-blue-500"></i>
                                    Secure Infrastructure
                                </h3>
                                <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                                    <li>Protected cloud hosting</li>
                                    <li>Regular security audits</li>
                                    <li>Firewall protection</li>
                                    <li>24/7 monitoring systems</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4 flex items-center">
                                    <i className="fas fa-user-shield mr-3 text-blue-500"></i>
                                    Access Controls
                                </h3>
                                <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                                    <li>Strict authentication protocols</li>
                                    <li>Limited staff access</li>
                                    <li>Regular access reviews</li>
                                    <li>Secure password policies</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4 flex items-center">
                                    <i className="fas fa-sync mr-3 text-blue-500"></i>
                                    Regular Updates
                                </h3>
                                <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                                    <li>Security patch management</li>
                                    <li>Continuous monitoring</li>
                                    <li>Vulnerability assessments</li>
                                    <li>System maintenance</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r">
                            <p className="text-neutral-700">
                                <span className="font-semibold">Security Notice:</span> While we implement robust security measures, no method of electronic storage or transmission is 100% secure. We continuously update our security protocols to maintain the highest standards of data protection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="user-rights" className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">User Rights & Choices</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-user-edit text-2xl text-blue-500 mr-3"></i>
                                    <h3 className="text-xl font-semibold text-neutral-800">Your Data Rights</h3>
                                </div>
                                <ul className="space-y-3 text-neutral-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Right to access your personal data</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Right to correct inaccurate information</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Right to request data deletion</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Right to restrict data processing</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-envelope-open-text text-2xl text-blue-500 mr-3"></i>
                                    <h3 className="text-xl font-semibold text-neutral-800">Email Preferences</h3>
                                </div>
                                <ul className="space-y-3 text-neutral-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Opt out of marketing communications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Choose notification frequency</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Update email preferences anytime</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white border border-neutral-200 rounded-lg p-6 mt-8">
                            <h3 className="text-xl font-semibold text-neutral-800 mb-4">How to Exercise Your Rights</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                                        <i className="fas fa-envelope text-blue-500"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-medium text-neutral-800">Email Request</h4>
                                        <p className="text-neutral-600">Send your request to web@iplust.in</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                                        <i className="fas fa-phone text-blue-500"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-medium text-neutral-800">Phone Support</h4>
                                        <p className="text-neutral-600">Call us at +91 8307056141</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r">
                            <p className="text-neutral-700">
                                <span className="font-semibold">Response Time:</span> We will respond to your requests within 30 days. For complex requests, we may need additional time and will notify you accordingly.
                            </p>
                        </div>

                        <div className="text-center mt-8">
                            <button id="requestDataBtn" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                                Submit Data Request
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="third-party" className="py-16 bg-neutral-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Third-Party Links</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="flex items-center justify-center mb-8">
                                <div className="bg-blue-100 p-4 rounded-full">
                                    <i className="fas fa-external-link-alt text-3xl text-blue-500"></i>
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">External Website Links</h3>
                                <p className="text-neutral-700">
                                    Our website may contain links to external websites that are not operated by WebCraft. Please be aware that we have no control over the content and practices of these sites.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-neutral-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-3">Our Responsibility</h4>
                                    <ul className="space-y-2 text-neutral-600">
                                        <li className="flex items-start">
                                            <i className="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                                            <span>We are not responsible for external privacy policies</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                                            <span>We cannot guarantee the safety of external sites</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                                            <span>External links are provided for convenience only</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-neutral-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-3">User Recommendations</h4>
                                    <ul className="space-y-2 text-neutral-600">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                            <span>Review privacy policies of external sites</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                            <span>Be cautious when sharing personal information</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                            <span>Verify security of external websites</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r">
                            <p className="text-neutral-700">
                                <span className="font-semibold">Important Notice:</span> Once you leave our website, please note that other sites may have different privacy policies and terms that are beyond our control. We encourage you to read the privacy statements of any external websites you visit.
                            </p>
                        </div>

                        <div className="text-center text-neutral-600 mt-6">
                            <p className="text-sm">
                                For any concerns about third-party links, please contact us at
                                <a href="mailto:web@iplust.in" className="text-blue-500 hover:underline">web@iplust.in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="data-retention" className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Data Retention Policy</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-clock text-2xl text-blue-500 mr-3"></i>
                                    <h3 className="text-xl font-semibold text-neutral-800">Retention Periods</h3>
                                </div>
                                <ul className="space-y-4 text-neutral-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Account Information: Retained while account is active</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Transaction Data: 7 years for legal compliance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Communication Records: 2 years from last interaction</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Usage Data: 12 months from collection</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-trash-alt text-2xl text-blue-500 mr-3"></i>
                                    <h3 className="text-xl font-semibold text-neutral-800">Data Deletion</h3>
                                </div>
                                <ul className="space-y-4 text-neutral-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Automatic deletion after retention period ends</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Manual deletion upon user request</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Secure erasure protocols</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>Backup data removal within 30 days</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white border border-neutral-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-neutral-800 mb-4">Exceptions to Retention</h3>
                            <div className="space-y-3 text-neutral-700">
                                <p className="flex items-start">
                                    <i className="fas fa-exclamation-circle text-yellow-500 mt-1 mr-2"></i>
                                    <span>Legal obligations requiring longer retention</span>
                                </p>
                                <p className="flex items-start">
                                    <i className="fas fa-exclamation-circle text-yellow-500 mt-1 mr-2"></i>
                                    <span>Ongoing dispute resolution processes</span>
                                </p>
                                <p className="flex items-start">
                                    <i className="fas fa-exclamation-circle text-yellow-500 mt-1 mr-2"></i>
                                    <span>Technical limitations of complete deletion</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r">
                            <p className="text-neutral-700">
                                <span className="font-semibold">Note:</span> You can request early deletion of your data at any time by contacting us at
                                <a href="mailto:web@iplust.in" className="text-blue-500 hover:underline">web@iplust.in</a>
                                or calling +91 8307056141.
                            </p>
                        </div>

                        <div className="text-center mt-8">
                            <button id="deleteDataBtn" className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300">
                                Request Data Deletion
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="children-privacy" className="py-16 bg-neutral-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Children's Privacy</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="flex items-center justify-center mb-8">
                                <div className="bg-blue-100 p-4 rounded-full">
                                    <i className="fas fa-child text-3xl text-blue-500"></i>
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Age Restriction Notice</h3>
                                <p className="text-neutral-700">
                                    WebCraft does not knowingly collect or maintain any personal information from children under the age of 13.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-neutral-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-3">Our Policy</h4>
                                    <ul className="space-y-3 text-neutral-600">
                                        <li className="flex items-start">
                                            <i className="fas fa-shield-alt text-blue-500 mt-1 mr-2"></i>
                                            <span>No intentional collection of children's data</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-shield-alt text-blue-500 mt-1 mr-2"></i>
                                            <span>Immediate deletion if discovered</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-shield-alt text-blue-500 mt-1 mr-2"></i>
                                            <span>Compliance with COPPA regulations</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-neutral-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-3">Parent/Guardian Rights</h4>
                                    <ul className="space-y-3 text-neutral-600">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                            <span>Review child's information</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                            <span>Request information deletion</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                            <span>Refuse further collection</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r">
                            <p className="text-neutral-700">
                                <span className="font-semibold">Important:</span> If you believe we have inadvertently collected personal information from a child under 13, please contact us immediately at
                                <a href="mailto:web@iplust.in" className="text-blue-500 hover:underline">web@iplust.in</a>
                                or call +91 8307056141. We will take steps to remove the information promptly.
                            </p>
                        </div>

                        <div className="text-center text-neutral-600 mt-6">
                            <p className="text-sm">
                                For more information about children's privacy protection, please visit the Federal Trade Commission's website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="policy-updates" className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8 animate__animated animate__fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Changes to This Privacy Policy</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
                            <div className="flex items-center justify-center mb-8">
                                <div className="bg-blue-100 p-4 rounded-full">
                                    <i className="fas fa-sync-alt text-3xl text-blue-500"></i>
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <p className="text-neutral-700">
                                    We reserve the right to update or modify this Privacy Policy at any time. All changes will be effective immediately upon posting to our website.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                                    <h3 className="text-xl font-semibold text-neutral-800 mb-4">Notification Process</h3>
                                    <ul className="space-y-3 text-neutral-600">
                                        <li className="flex items-start">
                                            <i className="fas fa-bell text-blue-500 mt-1 mr-2"></i>
                                            <span>Email notifications for significant changes</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-bell text-blue-500 mt-1 mr-2"></i>
                                            <span>Website announcements</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-bell text-blue-500 mt-1 mr-2"></i>
                                            <span>Updated "Last Modified" date</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                                    <h3 className="text-xl font-semibold text-neutral-800 mb-4">Your Rights</h3>
                                    <ul className="space-y-3 text-neutral-600">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                            <span>Review updated policy</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                            <span>Choose to continue using service</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                            <span>Request data deletion if disagreed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-neutral-100 p-4 rounded-lg text-center">
                                <p className="text-neutral-700 font-medium">Last Modified Date:</p>
                                <p className="text-neutral-600" id="lastModifiedDate"></p>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r">
                            <p className="text-neutral-700">
                                <span className="font-semibold">Stay Informed:</span> We encourage you to periodically review this Privacy Policy to stay informed about how we protect your information. Continued use of our services after any modifications indicates your acceptance of the updated Privacy Policy.
                            </p>
                        </div>

                        <div className="text-center text-neutral-600 mt-6">
                            <p className="text-sm">
                                Questions about policy changes? Contact us at
                                <a href="mailto:web@iplust.in" className="text-blue-500 hover:underline"> web@iplust.in </a>
                                or call +91 8307056141
                            </p>
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