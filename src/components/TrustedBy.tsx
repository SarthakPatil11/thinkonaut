export function TrustedBy() {
  const companies = [
    { name: "Google", logo: "G" },
    { name: "Spotify", logo: "S" },
    { name: "Airbnb", logo: "A" },
    { name: "Shopify", logo: "S" },
    { name: "Netflix", logo: "N" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-400 text-lg mb-8">Trusted by teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {companies.map((company) => (
            <div key={company.name} className="text-4xl font-bold text-white">
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
