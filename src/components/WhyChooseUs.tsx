import { Briefcase, GitBranch, User, Settings, Users, RefreshCw } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Industry-Relevant Curriculum",
      description: "Our courses are designed with direct input from hiring managers at top tech companies to ensure you learn exactly what employers want.",
      icon: Briefcase,
      iconBg: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Project-Based Learning",
      description: "Learn by building real projects that you can add to your portfolio, not just following tutorials.",
      icon: GitBranch,
      iconBg: "from-blue-500 to-indigo-500",
    },
    {
      id: 3,
      title: "Mentorship",
      description: "Get 1:1 guidance from experienced designers and developers who work at companies like Google, Airbnb, and Spotify.",
      icon: User,
      iconBg: "from-pink-500 to-purple-500",
    },
    {
      id: 4,
      title: "Career Support",
      description: "Resume reviews, mock interviews, and our hiring partner network help you land your dream job.",
      icon: Settings,
      iconBg: "from-blue-500 to-teal-500",
    },
    {
      id: 5,
      title: "Community",
      description: "Join our active Slack community of 10,000+ designers and developers for networking and collaboration.",
      icon: Users,
      iconBg: "from-purple-500 to-pink-500",
    },
    {
      id: 6,
      title: "Lifetime Access",
      description: "Get free updates to course content forever as technologies evolve.",
      icon: RefreshCw,
      iconBg: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Thinkonaut
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our unique approach to tech education sets us apart from traditional learning methods.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Feature Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.iconBg} rounded-xl flex items-center justify-center text-white mb-4`}>
                <feature.icon size={24} />
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>

              {/* Feature Description */}
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
