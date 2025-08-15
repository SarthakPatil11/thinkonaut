import { Star } from "lucide-react";

export function SuccessStories() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah J.",
            title: "UI Designer @ Google",
            avatar: "👩‍💼",
            quote: "Thinkonaut's UI/UX course completely changed my career trajectory. Within 3 months of completing the program, I landed my dream job at Google.",
            rating: 5,
        },
        {
            id: 2,
            name: "Michael T.",
            title: "Frontend Developer @ Airbnb",
            avatar: "👨‍💻",
            quote: "The project-based approach was exactly what I needed. I built 4 real apps during the course that became the centerpiece of my portfolio.",
            rating: 5,
        },
        {
            id: 3,
            name: "Priya K.",
            title: "UX Designer @ Spotify",
            avatar: "👩‍🎨",
            quote: "The mentorship I received was invaluable. My mentor helped me refine my portfolio which led to multiple job offers including one from Airbnb.",
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        <span className="text-white">Success</span>{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Stories
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Dont just take our word for it. Hear from our students
                        who have transformed their careers.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            {/* Avatar and Name */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="text-slate-300 mb-4 leading-relaxed">
                                {testimonial.quote}
                            </blockquote>

                            {/* Rating */}
                            <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
