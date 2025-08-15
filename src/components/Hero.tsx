import { Play, Star } from "lucide-react";

export function Hero() {
    return (
        <section className="mt-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Launch Your Tech Career{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                Into Orbit
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 leading-relaxed">
                            Master UI/UX design and coding with our
                            project-based courses taught by industry experts.
                            Think like an astronaut, build like an engineer.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                                Explore Courses
                            </button>
                            <button className="border border-slate-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2">
                                <Play size={20} className="fill-white" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-slate-800"></div>
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-slate-800"></div>
                                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full border-2 border-slate-800"></div>
                            </div>
                            <div className="text-slate-300">
                                <p className="font-medium">
                                    Join 5,000+ students learning with us
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className="fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm">
                                        4.9/5 (1,200 reviews)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
                                <div className="bg-slate-900 rounded-xl p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-2">
                                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                            </div>
                                            <div className="text-slate-400 text-sm">
                                                Dashboard
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="h-4 bg-blue-500 rounded w-3/4"></div>
                                            <div className="h-4 bg-purple-500 rounded w-1/2"></div>
                                            <div className="h-4 bg-green-500 rounded w-5/6"></div>
                                            <div className="h-4 bg-pink-500 rounded w-2/3"></div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
                                            <div className="h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Elements */}
                        <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
