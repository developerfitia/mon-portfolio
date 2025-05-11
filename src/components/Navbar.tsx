'use client'

import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center text-sm text-white font-medium space-x-8">
        {[
          { label: 'Accueil', href: '#' },
          { label: 'A propos', href: '#about' },
          { label: 'Compétence', href: '#skills' },
          { label: 'Projets', href: '#projects' },
          { label: 'Contact', href: '#contact' },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="relative group"
          >
            <span>{item.label}</span>
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>
    </motion.nav>
  )
} 