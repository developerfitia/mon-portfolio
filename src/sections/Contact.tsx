'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

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
            Vous recherchez un stagiaire motivé ou un collaborateur pour votre équipe ? Je suis ouvert aux opportunités de stage et d’emploi dans le domaine du développement. N’hésitez pas à me contacter pour discuter de comment je pourrais contribuer à votre entreprise.
          </p>

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
                <p className="text-gray-400">Fianarantsoa , Soatsihadino</p>
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
              <option>Sélectionnez une option</option>
              <option>Stage</option>
              <option>Freelance</option>
              <option>CDI / CDD</option>
            </select>
            <textarea rows={4} placeholder="Décrivez l’opportunité, les compétences recherchées..." className="w-full px-4 py-2 bg-[#0a0a0a] text-white border border-gray-700 rounded"></textarea>
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