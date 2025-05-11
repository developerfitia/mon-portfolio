'use client'

import Hero from '@/src/sections/Hero'
import Navbar from '@/src/components/Navbar'
import About from '@/src/sections/About'
import SkillsGrid from '@/src/sections/SkillsGrid'
import Contact from '@/src/sections/Contact'
import Projects from '@/src/sections/Project'

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <About />
      <SkillsGrid />
      <Contact />
      <Projects />      
    </main>
  )
}
