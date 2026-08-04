'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

export default function About() {
  return (
    <section className="min-h-screen w-full px-6 py-20 bg-[#0a0a0a] text-white flex flex-col items-center justify-center max-w-7xl mx-auto" id="about">
      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-10"
      >
        À propos de moi
      </motion.h2>

      {/* Section A propos + compétences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="w-full mt-10 p-6 rounded-xl bg-[#0f0f0f] shadow-lg md:flex justify-between gap-10"
      >
        <div className="flex-1 space-y-4">
          <h3 className="text-3xl font-bold text-cyan-400">Qui je suis ?</h3>
          <p>
            Développeur FullStack passionné avec <strong className="text-cyan-400">5 ans d&apos;expérience</strong> dans la conception et le développement d&apos;applications web et mobiles. J&apos;ai travaillé sur des projets variés allant des plateformes d&apos;épargne aux outils de gestion RH, en passant par des bots Telegram et des systèmes de géolocalisation.
          </p>
          <p>
            Polyvalent et autonome, je maîtrise aussi bien le front-end (React, Next.js, Tailwind) que le back-end (NestJS, Django, Node.js) ainsi que l&apos;administration système et le support IT. Je m&apos;adapte rapidement aux nouvelles technologies et apprécie les environnements techniques exigeants.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
              <p className="text-red-500 text-2xl font-bold">5 ans</p>
              <p className="text-white">D&apos;expérience</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
              <p className="text-red-500 text-2xl font-bold">+10</p>
              <p className="text-white">Projets livrés</p>
            </div>
          </div>
        </div>

        <div className="flex-1 border-2 border-gradient-to-r from-red-500 to-cyan-500 rounded-xl p-6 mt-10 md:mt-0">
          <h4 className="text-xl font-bold text-white mb-4">Mes compétences</h4>
          <ul className="space-y-4">
            {[
              { label: 'Développement FullStack', value: 90 },
              { label: 'Support IT (Hardware/Software)', value: 85 },
              { label: 'Résolution de problèmes', value: 90 },
              { label: 'UI/UX (Figma)', value: 75 },
              { label: 'Administration réseaux', value: 65 },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <div className="flex justify-between mb-1">
                  <span>{item.label}</span>
                  <span className="text-cyan-400 font-bold">{item.value}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-800">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
