export function CTA() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Ready to Launch Your{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Tech Career?
                        </span>
                    </h2>

                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of students who have transformed their
                        careers with Thinkonaut Academy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                            Enroll Now
                        </button>
                        <button className="border border-slate-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all duration-200">
                            Schedule a Call
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
