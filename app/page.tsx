import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Articles from '@/components/Articles'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SchemaOrg />
      <Navbar />
      <Hero />
      <Features />
      <Articles />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
