import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    {
      title: "Marketing Digital",
      description: "Stratégies social media, campagnes publicitaires et brand management",
      icon: "📱"
    },
    {
      title: "Création de Contenu",
      description: "Content strategy, copywriting et storytelling engageant",
      icon: "✍️"
    },
    {
      title: "Photographie",
      description: "Photographie professionnelle, retouche et direction artistique",
      icon: "📸"
    },
    {
      title: "Analyse de Données",
      description: "Analytics, tracking performance et insights data-driven",
      icon: "📊"
    },
    {
      title: "Growth Marketing",
      description: "Acquisition, retention et stratégies de croissance",
      icon: "🚀"
    },
    {
      title: "Référencement (SEO & SEA)",
      description: "Optimisation SEO et campagnes publicitaires search",
      icon: "🔍"
    }
  ]

  return (
    <section id="competences" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une expertise diversifiée alliant stratégie digitale et création visuelle.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-2xl mb-4">
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {skill.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills