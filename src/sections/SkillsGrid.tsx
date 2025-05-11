'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { title: 'Flutter', desc: 'Mobile Framework', icon: '/icons/flutter.png' },
  { title: 'Dart', desc: 'Programming Language', icon: '/icons/dart.png' },
  { title: 'Next.js', desc: 'Web Framework', icon: '/icons/nextjs.png' },
  { title: 'React', desc: 'Web Framework', icon: '/icons/react.png' },
  { title: 'NestJS', desc: 'Backend Framework', icon: '/icons/nestjs.png' },
  { title: 'Node.js', desc: 'Runtime Environment', icon: '/icons/nodejs.png' },
  { title: 'TypeScript', desc: 'Programming Language', icon: '/icons/typescript.png' },
  { title: 'Tailwind CSS', desc: 'CSS Framework', icon: '/icons/tailwind.png' },
]

export default function SkillsGrid() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 text-white max-w-7xl mx-auto" id="skills">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          Mes Compétences
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Voici un ensemble de frameworks et langages que j'utilise régulièrement dans mes projets.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-[#1c1c1c] to-[#121212] rounded-2xl p-6 flex flex-col items-center text-center border border-[#2a2a2a] shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <Image src={skill.icon} alt={skill.title} width={48} height={48} />
            </div>
            <h3 className="font-semibold text-white text-lg">{skill.title}</h3>
            <p className="text-xs text-gray-400 mt-1 px-2 py-1 bg-[#1e1e1e] rounded-full mt-2">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 
