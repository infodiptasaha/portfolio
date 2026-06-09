import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/sections/Hero'
import { StatsSection } from '@/components/sections/Stats'
import { AboutSection } from '@/components/sections/About'
import { SkillsSection } from '@/components/sections/Skills'
import { CertificationsSection } from '@/components/sections/Certifications'
import { ProjectsSection } from '@/components/sections/Projects'
import { ExperienceSection } from '@/components/sections/Experience'
import { ServicesSection } from '@/components/sections/Services'
import { TestimonialsSection } from '@/components/sections/Testimonials'
import { ContactSection } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export const Route = createFileRoute('/')({
  component: PortfolioPage,
})

function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('sfPortfolioDarkMode')
    if (saved !== null) {
      setDarkMode(JSON.parse(saved))
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      localStorage.setItem('sfPortfolioDarkMode', JSON.stringify(next))
      return next
    })
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
