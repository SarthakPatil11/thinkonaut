import { Clock, Users, ArrowRight } from "lucide-react"

export function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "UI/UX Design Masterclass",
      description: "Learn the entire design process from research to prototyping with industry-standard tools.",
      duration: "8 Weeks",
      students: "1,200+ Students",
      price: "$299",
      originalPrice: "$499",
      icon: "🎨",
      iconBg: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Full-Stack Development",
      description: "Build complete web applications with React, Node.js, and modern databases.",
      duration: "12 Weeks",
      students: "950+ Students",
      price: "$399",
      originalPrice: "$699",
      icon: "</>",
      iconBg: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Mobile App Design",
      description: "Design beautiful, user-friendly mobile apps for iOS and Android platforms.",
      duration: "6 Weeks",
      students: "750+ Students",
      price: "$249",
      originalPrice: "$399",
      icon: "📱",
      iconBg: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Courses
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Learn in-demand skills with our comprehensive curriculum designed for real-world applications.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Course Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${course.iconBg} rounded-xl flex items-center justify-center text-white text-xl mb-4`}>
                {course.icon}
              </div>

              {/* Course Title */}
              <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>

              {/* Course Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">{course.description}</p>

              {/* Course Details */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock size={16} />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Users size={16} />
                  <span className="text-sm">{course.students}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold text-white">{course.price}</span>
                <span className="text-slate-400 line-through">{course.originalPrice}</span>
              </div>

              {/* Enroll Button */}
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                Enroll Now <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center">
          <button className="border border-slate-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all duration-200">
            View All Courses <ArrowRight size={20} className="inline ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}
