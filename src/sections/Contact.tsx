'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

const domains = ['FullStack', 'Support IT', 'DevOps', 'Freelance', 'CDI', 'Remote']

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#0a0a0a] py-20 px-6 text-white max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          Contactez-moi
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-cyan-400 text-xl font-semibold">Opportunités professionnelles</h3>
          <p className="text-gray-300">
            Développeur FullStack avec 5 ans d&apos;expérience, je suis disponible pour des missions en <span className="text-cyan-400 font-semibold">freelance</span> ou en <span className="text-cyan-400 font-semibold">CDI</span>, de préférence en <span className="text-pink-400 font-semibold">remote</span>. Que ce soit pour construire une application web, maintenir un système IT ou accompagner une équipe technique, je m&apos;adapte rapidement aux besoins.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {domains.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full border border-cyan-500 text-cyan-400 bg-[#0f1a1f] hover:bg-cyan-500 hover:text-black transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <div>
                <p className="text-sm text-white">Email</p>
                <p className="text-gray-400">fitia25.rasoja@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-red-500" />
              <div>
                <p className="text-sm text-white">Téléphone</p>
                <p className="text-gray-400">+261 38 82 212 20</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <div>
                <p className="text-sm text-white">Localisation</p>
                <p className="text-gray-400">Fianarantsoa, Madagascar · Remote</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-white mb-2">Suivez-moi</p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-cyan-400"><FaLinkedin /></a>
              <a href="#" className="hover:text-gray-400"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 bg-[#111111] p-6 rounded-xl">
          <h3 className="text-white text-lg font-semibold mb-6">Proposez-moi une opportunité</h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="Votre nom" className="w-full px-4 py-2 bg-[#0a0a0a] text-white border border-gray-700 rounded" />
              <input type="email" placeholder="Votre email" className="w-full px-4 py-2 bg-[#0a0a0a] text-white border border-gray-700 rounded" />
            </div>
            <select className="w-full px-4 py-2 bg-[#0a0a0a] text-white border border-gray-700 rounded">
              <option>Sélectionnez un type de contrat</option>
              <option>Freelance</option>
              <option>CDI</option>
              <option>CDD</option>
              <option>Régie / Consulting</option>
            </select>
            <textarea rows={4} placeholder="Décrivez l'opportunité, les compétences recherchées..." className="w-full px-4 py-2 bg-[#0a0a0a] text-white border border-gray-700 rounded"></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold rounded shadow"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
