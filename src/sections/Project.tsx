'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import { projects } from '../data/projectData'
import { useState } from 'react'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-[#0a0a0a] text-white flex flex-col items-center justify-center max-w-7xl mx-auto"
    >
      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-4 text-center"
      >
        Mes Projets GitHub
      </motion.h2>

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-white/80 max-w-3xl mx-auto mb-10"
      >
        Découvrez une sélection de mes réalisations les plus significatives. Chaque projet représente une solution unique adaptée aux besoins spécifiques de mes clients.
      </motion.p>

      {/* Grille des projets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="grid md:grid-cols-3 gap-6 w-full"
      >
        {projects.map((project) => {
          const isHovered = hoveredProject === project.id;
          const isOtherHovered = hoveredProject !== null && !isHovered;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`relative bg-[#0f0f0f] rounded-xl overflow-hidden transition-all duration-300 border border-transparent shadow-md cursor-pointer ${
                isHovered ? 'z-10 scale-105' : isOtherHovered ? 'blur-sm grayscale' : ''
              }`}
              style={{
                borderImage: isHovered ? 'linear-gradient(to right, #ec4899, #22d3ee) 1' : undefined,
                borderImageSlice: isHovered ? 1 : undefined
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h4>
                <p className="text-sm text-white/80 mb-2">{project.description}</p>
                <a
                  href={project.link}
                  className="text-sm text-pink-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir plus
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  )
}
