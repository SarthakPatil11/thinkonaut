import { Check, X } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      id: 1,
      name: "Basic",
      description: "Perfect for self-starters",
      price: "$29",
      period: "/month",
      features: [
        { text: "Access to all course materials", included: true },
        { text: "Community support", included: true },
        { text: "1:1 Mentorship", included: false },
        { text: "Career coaching", included: false },
        { text: "Certificate of completion", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      id: 2,
      name: "Pro",
      description: "Best for career changers",
      price: "$99",
      period: "/month",
      features: [
        { text: "Access to all course materials", included: true },
        { text: "Community support", included: true },
        { text: "Weekly 1:1 Mentorship", included: true },
        { text: "Resume & portfolio reviews", included: true },
        { text: "Guaranteed internship", included: false },
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      id: 3,
      name: "Premium",
      description: "Fast-track your career",
      price: "$199",
      period: "/month",
      features: [
        { text: "Access to all course materials", included: true },
        { text: "Community support", included: true },
        { text: "Unlimited 1:1 Mentorship", included: true },
        { text: "Full career coaching", included: true },
        { text: "Guaranteed internship", included: true },
      ],
      cta: "Get Started",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="text-white">Simple, Transparent</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the plan that works best for your learning goals and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                  : "border-slate-700/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 border border-slate-500 rounded flex items-center justify-center">
                        <X size={12} className="text-slate-500" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? "text-slate-300" : "text-slate-500"}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
                    : "border border-slate-400 text-white hover:bg-slate-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
