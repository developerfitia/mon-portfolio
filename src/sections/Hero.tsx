'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="min-h-screen w-full px-6 py-20 bg-[#0a0a0a] text-white flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto" id="home">
            <div className="flex-1 space-y-6 md:pr-16">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-cyan-400 text-xl font-semibold"
                >
                    Bonjour, je me présente
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                >
                    Bède RASOJAFITIA
                </motion.h1>


                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col gap-1 relative"
                >
                    <div className="absolute left-0 top-[48px] w-20 h-2 bg-gradient-to-r from-red-500 to-cyan-500 rounded-full" />
                    <div className="pl-32 text-4xl font-light">
                        <p>Développeur FullStack</p>
                        <p>&</p>
                        <p>Technicien Support IT</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 mt-6"
                >
                    <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-cyan-500 text-white rounded shadow">
                        Me Contacter
                    </button>
                    <a
                        href="/cv.pdf"
                        download
                        className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
                    >
                        Télécharger mon CV
                    </a>
                </motion.div>

                <motion.div className="flex gap-4 text-2xl pt-4">
                    <a href="#" className="hover:text-cyan-400"><FaLinkedin /></a>
                    <a href="#" className="hover:text-gray-400"><FaGithub /></a>
                </motion.div>
            </div>

            <motion.div
                className="flex-1 flex justify-center mt-10 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
            >
                <div className="relative w-64 h-64 rounded-full overflow-hidden border border-gradient-to-r from-cyan-500 to-pink-500 shadow-lg">
                    <Image
                        src="/images/fitia.png"
                        alt="Fitia"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </motion.div>
        </section>
    )
}
