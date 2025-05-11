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
            Passionné par les technologies et actuellement en 3ème année d&apos;étude, je recherche activement un stage ou un emploi en support informatique et développement front-end. Bien que débutant, mais très Polyvalent pour m&apos;adapter rapidement et je fais preuve d&apos;une grande curiosité et d&apos;une réelle capacité d&apos;apprentissage rapide.
          </p>
          <p>
            Mon objectif est d&apos;acquérir une première expérience professionnelle concrète où je pourrais mettre en pratique mes connaissances techniques tout en développant de nouvelles compétences. Je suis particulièrement motivé par les environnements qui allient support utilisateur et développement web.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
              <p className="text-red-500 text-2xl font-bold">100%</p>
              <p className="text-white">Motivation</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
              <p className="text-red-500 text-2xl font-bold">Rapidité</p>
              <p className="text-white">D&apos;apprentissage</p>
            </div>
          </div>
        </div>

        <div className="flex-1 border-2 border-gradient-to-r from-red-500 to-cyan-500 rounded-xl p-6 mt-10 md:mt-0">
          <h4 className="text-xl font-bold text-white mb-4">Mes compétences</h4>
          <ul className="space-y-4">
            {[
              { label: 'Support IT (Hardware/Software)', value: 80 },
              { label: 'Développement Front-end', value: 80 },
              { label: 'Résolution de problèmes', value: 85 },
              { label: 'UI/UX (figma)', value: 70 },
              { label: 'Administrateur reseaux', value: 50 },
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
