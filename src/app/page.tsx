import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { TrustedBy } from "@/components/TrustedBy"
import { FeaturedCourses } from "@/components/FeaturedCourses"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { SuccessStories } from "@/components/SuccessStories"
import { Pricing } from "@/components/Pricing"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <TrustedBy />
      <FeaturedCourses />
      <WhyChooseUs />
      <SuccessStories />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
