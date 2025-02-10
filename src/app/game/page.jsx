import Link from "next/link";

export default async function Home() {
    return (
        <>
            <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 animate__animated animate__fadeIn">
                            <span className="text-2xl font-bold">3D Ludo</span>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <a href="#features" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                                <a href="#gamemode" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Game Modes</a>
                                <a href="#howtoplay" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">How to Play</a>
                                <a href="#leaderboard" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Leaderboard</a>
                                <a href="#tournaments" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Tournaments</a>
                                <a href="#community" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Community</a>
                            </div>
                        </div>

                        <div className="flex md:hidden">
                            <button type="button" className="hamburger inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path className="open" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path className="close hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu hidden md:hidden bg-neutral-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Home</Link>
                        <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Features</a>
                        <a href="#gamemode" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Game Modes</a>
                        <a href="#howtoplay" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">How to Play</a>
                        <a href="#leaderboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Leaderboard</a>
                        <a href="#tournaments" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Tournaments</a>
                        <a href="#community" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Community</a>
                    </div>
                </div>
            </nav>
            <section id="hero" className="min-h-[70vh] bg-neutral-900 text-white relative overflow-hidden pt-16">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-8 animate__animated animate__fadeInLeft">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Experience Ludo in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">3D Multiplayer</span>
                            </h1>
                            <p className="text-xl text-gray-300">
                                Join real-time matches with players worldwide. Immersive 3D graphics, dynamic animations, and classic gameplay reimagined.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all animate__animated animate__pulse animate__infinite">
                                    Play Now
                                </button>
                                <button className="border-2 border-white/30 hover:border-white/60 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all">
                                    Watch Tutorial
                                </button>
                            </div>
                        </div>

                        <div className="relative animate__animated animate__fadeInRight">
                            <div className="w-full h-[400px] rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 p-4 transform rotate-6 hover:rotate-0 transition-all duration-500">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🎲</div>
                                        <p className="text-xl font-bold">3D Interactive Board</p>
                                        <p className="text-sm text-gray-400">Loading Preview...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <div className="h-20 bg-gradient-to-t from-neutral-800 to-transparent"></div>
                </div>

                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl"></div>
            </section>
            <section id="features" className="py-20 bg-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">Game Features</h2>
                        <p className="text-xl text-neutral-600">Experience Ludo like never before with our cutting-edge features</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">3D Environment</h3>
                            <p className="text-neutral-600">Immersive 3D board with realistic textures, lighting, and dynamic camera angles</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Multiplayer</h3>
                            <p className="text-neutral-600">Play with friends or join random matches with real-time synchronization</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Power-ups</h3>
                            <p className="text-neutral-600">Exciting power-ups like double roll and immunity for enhanced gameplay</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: "0.6s"}}>
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Real-time Gameplay</h3>
                            <p className="text-neutral-600">Smooth animations and instant moves with turn-based timer system</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: "0.8s"}}>
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Special Effects</h3>
                            <p className="text-neutral-600">Stunning visual effects and animations for captures and victories</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: "1s"}}>
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Leaderboards</h3>
                            <p className="text-neutral-600">Compete globally and track your progress with detailed statistics</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gamemode" className="py-20 bg-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl font-bold mb-4">Game Modes</h2>
                        <p className="text-xl text-gray-400">Choose your preferred way to play</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group bg-neutral-800 rounded-2xl p-8 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp cursor-pointer">
                            <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Classic 4-Player</h3>
                            <p className="text-gray-400 mb-6">Play the traditional Ludo game with four players in real-time</p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Real-time multiplayer
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Classic rules
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Global matchmaking
                                </li>
                            </ul>
                        </div>

                        <div className="group bg-neutral-800 rounded-2xl p-8 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s cursor-pointer">
                            <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Quick Play</h3>
                            <p className="text-gray-400 mb-6">Fast-paced matches with AI players and shorter rounds</p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    AI opponents
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Shorter rounds
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Power-ups enabled
                                </li>
                            </ul>
                        </div>

                        <div className="group bg-neutral-800 rounded-2xl p-8 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s cursor-pointer">
                            <div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Tournament</h3>
                            <p className="text-gray-400 mb-6">Compete in ranked tournaments for prizes and glory</p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Weekly tournaments
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Prize pools
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Global rankings
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="howtoplay" className="bg-neutral-900 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">How to Play 3D Ludo</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-neutral-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-emerald-500 text-3xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">1. Join or Create Game</h3>
                            <p className="text-neutral-300">Create a new game room or join an existing one. Invite up to 3 other players or play with AI.</p>
                        </div>

                        <div className="bg-neutral-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-emerald-500 text-3xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">2. Roll the Dice</h3>
                            <p className="text-neutral-300">Click to roll the dice on your turn. Get a 6 to release tokens from home and start moving.</p>
                        </div>

                        <div className="bg-neutral-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-emerald-500 text-3xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">3. Move Your Tokens</h3>
                            <p className="text-neutral-300">Click on a token to move it. Capture opponent's tokens by landing on them.</p>
                        </div>

                        <div className="bg-neutral-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-emerald-500 text-3xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">4. Safe Zones</h3>
                            <p className="text-neutral-300">Use colored squares as safe zones where your tokens can't be captured.</p>
                        </div>

                        <div className="bg-neutral-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-emerald-500 text-3xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">5. Score Points</h3>
                            <p className="text-neutral-300">Get points for capturing tokens and completing the game. Climb the global leaderboard.</p>
                        </div>

                        <div className="bg-neutral-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-emerald-500 text-3xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">6. Win the Game</h3>
                            <p className="text-neutral-300">Be the first to get all your tokens home to win! Enjoy victory animations and rewards.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="leaderboard" className="bg-neutral-900 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">Leaderboard</h2>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <div className="bg-neutral-800 rounded-lg p-6">
                                <h3 className="text-2xl font-bold text-emerald-500 mb-6 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                    Global Rankings
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center bg-neutral-700 p-4 rounded-lg">
                                        <span className="text-yellow-500 text-xl font-bold w-8">1</span>
                                        <div className="flex-1 ml-4">
                                            <h4 className="text-white font-semibold">PlayerOne</h4>
                                            <p className="text-neutral-400">Wins: 342</p>
                                        </div>
                                        <span className="text-emerald-500 font-bold">9840 pts</span>
                                    </div>

                                    <div className="flex items-center bg-neutral-700 p-4 rounded-lg">
                                        <span className="text-gray-400 text-xl font-bold w-8">2</span>
                                        <div className="flex-1 ml-4">
                                            <h4 className="text-white font-semibold">LudoMaster</h4>
                                            <p className="text-neutral-400">Wins: 298</p>
                                        </div>
                                        <span className="text-emerald-500 font-bold">8654 pts</span>
                                    </div>

                                    <div className="flex items-center bg-neutral-700 p-4 rounded-lg">
                                        <span className="text-amber-700 text-xl font-bold w-8">3</span>
                                        <div className="flex-1 ml-4">
                                            <h4 className="text-white font-semibold">GameKing</h4>
                                            <p className="text-neutral-400">Wins: 275</p>
                                        </div>
                                        <span className="text-emerald-500 font-bold">7890 pts</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="bg-neutral-800 rounded-lg p-6">
                                <h3 className="text-2xl font-bold text-emerald-500 mb-6 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Weekly Champions
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center bg-neutral-700 p-4 rounded-lg">
                                        <span className="text-yellow-500 text-xl font-bold w-8">1</span>
                                        <div className="flex-1 ml-4">
                                            <h4 className="text-white font-semibold">ProGamer</h4>
                                            <p className="text-neutral-400">Wins: 45</p>
                                        </div>
                                        <span className="text-emerald-500 font-bold">1250 pts</span>
                                    </div>

                                    <div className="flex items-center bg-neutral-700 p-4 rounded-lg">
                                        <span className="text-gray-400 text-xl font-bold w-8">2</span>
                                        <div className="flex-1 ml-4">
                                            <h4 className="text-white font-semibold">LudoQueen</h4>
                                            <p className="text-neutral-400">Wins: 38</p>
                                        </div>
                                        <span className="text-emerald-500 font-bold">980 pts</span>
                                    </div>

                                    <div className="flex items-center bg-neutral-700 p-4 rounded-lg">
                                        <span className="text-amber-700 text-xl font-bold w-8">3</span>
                                        <div className="flex-1 ml-4">
                                            <h4 className="text-white font-semibold">DiceRoller</h4>
                                            <p className="text-neutral-400">Wins: 32</p>
                                        </div>
                                        <span className="text-emerald-500 font-bold">850 pts</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                            View Full Rankings
                        </button>
                    </div>
                </div>
            </section>
            <section id="tournaments" className="bg-neutral-900 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">Tournaments</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-neutral-800 rounded-lg p-6 border-2 border-emerald-500">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">ACTIVE</span>
                                <span className="text-neutral-400">32 Players</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Weekly Championship</h3>
                            <p className="text-neutral-300 mb-4">Compete for the ultimate prize pool and weekly champion title!</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-400">Prize Pool:</span>
                                    <span className="text-emerald-500 font-bold">10,000 Coins</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-400">Ends in:</span>
                                    <span className="text-yellow-500">2d 14h 23m</span>
                                </div>
                            </div>
                            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors duration-300">
                                Join Tournament
                            </button>
                        </div>

                        <div className="bg-neutral-800 rounded-lg p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">UPCOMING</span>
                                <span className="text-neutral-400">64 Players</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Monthly Masters</h3>
                            <p className="text-neutral-300 mb-4">The biggest tournament of the month with massive rewards!</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-400">Prize Pool:</span>
                                    <span className="text-emerald-500 font-bold">25,000 Coins</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-400">Starts in:</span>
                                    <span className="text-blue-500">5d 00h 00m</span>
                                </div>
                            </div>
                            <button className="w-full bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-3 rounded-lg transition-colors duration-300">
                                Register Now
                            </button>
                        </div>

                        <div className="bg-neutral-800 rounded-lg p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">PREMIUM</span>
                                <span className="text-neutral-400">16 Players</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Elite Showdown</h3>
                            <p className="text-neutral-300 mb-4">Exclusive tournament for top-ranked players!</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-400">Prize Pool:</span>
                                    <span className="text-emerald-500 font-bold">15,000 Coins</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-400">Entry:</span>
                                    <span className="text-purple-500">1,000 Coins</span>
                                </div>
                            </div>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors duration-300">
                                Buy Entry
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">Tournament Rules</h3>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="bg-neutral-800 p-4 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-neutral-300">Time limit of 30 seconds per move</p>
                            </div>
                            <div className="bg-neutral-800 p-4 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <p className="text-neutral-300">Double points for winning streak</p>
                            </div>
                            <div className="bg-neutral-800 p-4 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-neutral-300">Fair play monitoring active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="community" className="bg-neutral-900 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">Join Our Community</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-emerald-500 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Chat Rooms</h3>
                            <p className="text-neutral-300 mb-4">Connect with players in game-specific chat rooms. Make friends and form teams!</p>
                            <span className="text-emerald-500 text-sm">1.2k Active Users</span>
                        </div>

                        <div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-emerald-500 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Live Matches</h3>
                            <p className="text-neutral-300 mb-4">Watch ongoing matches and learn from top players. Spectate and cheer!</p>
                            <span className="text-emerald-500 text-sm">245 Live Games</span>
                        </div>

                        <div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-emerald-500 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Strategy Forums</h3>
                            <p className="text-neutral-300 mb-4">Share tips, discuss strategies, and improve your gameplay with the community.</p>
                            <span className="text-emerald-500 text-sm">500+ Daily Posts</span>
                        </div>
                    </div>

                    <div className="bg-neutral-800 rounded-lg p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Community Events Calendar</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-neutral-700 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-emerald-500 font-bold">Weekend Tournament</span>
                                    <span className="text-neutral-400 text-sm">Sat, 8:00 PM</span>
                                </div>
                                <p className="text-neutral-300 text-sm">Join our weekly community tournament with special prizes!</p>
                            </div>

                            <div className="bg-neutral-700 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-emerald-500 font-bold">Strategy Workshop</span>
                                    <span className="text-neutral-400 text-sm">Sun, 3:00 PM</span>
                                </div>
                                <p className="text-neutral-300 text-sm">Learn advanced tactics from professional players.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                            Join Discord Community
                        </button>
                        <p className="text-neutral-400 mt-4">Join 50,000+ players worldwide</p>
                    </div>
                </div>
            </section>
            <footer id="footer" className="bg-neutral-900 pt-20 pb-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">3D Ludo Multiplayer</h3>
                            <p className="text-neutral-400 mb-4">Experience the classic board game in stunning 3D with players worldwide.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                                </a>
                                <a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                                </a>
                                <a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">
                                    <span className="sr-only">Discord</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" /></svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">Home</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">How to Play</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">Tournaments</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">Leaderboard</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">FAQ</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">Contact Us</a></li>
                                <li><a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">Report Bug</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
                            <p className="text-neutral-400 mb-4">Stay updated with the latest features and releases.</p>
                            <form className="space-y-4">
                                <div>
                                    <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"/>
                                </div>
                                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="border-t border-neutral-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-neutral-400 text-sm mb-4 md:mb-0">&copy; 2024 3D Ludo Multiplayer. All rights reserved.</p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-neutral-400 hover:text-emerald-500 text-sm transition-colors">Privacy Policy</a>
                                <a href="#" className="text-neutral-400 hover:text-emerald-500 text-sm transition-colors">Terms of Service</a>
                                <a href="#" className="text-neutral-400 hover:text-emerald-500 text-sm transition-colors">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}