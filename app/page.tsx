import AboutSection from '@/sections/home/AboutSection'
import HomeHero from '@/sections/home/Hero'
import Programs from '@/sections/home/Programs'
import Testimonials from '@/sections/home/Testimonials'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Programs />
      <AboutSection />
      <Testimonials />
    </main>
  )
}
