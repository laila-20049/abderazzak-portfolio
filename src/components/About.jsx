import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="apropos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Passionné par l'innovation digitale
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Je combine créativité et stratégie pour concevoir des campagnes impactantes 
                qui génèrent des résultats mesurables.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Chaque projet est une opportunité de créer des expériences digitales mémorables 
                qui connectent authentiquement les marques avec leur audience cible.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">10</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">mois d'expérience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { 
                    icon: '🎯', 
                    title: 'Stratégie', 
                    desc: 'Plans sur mesure' 
                  },
                  { 
                    icon: '📊', 
                    title: 'Analyse', 
                    desc: 'Data-driven decisions' 
                  },
                  { 
                    icon: '🎨', 
                    title: 'Créativité', 
                    desc: 'Design innovant' 
                  },
                  { 
                    icon: '🚀', 
                    title: 'Growth', 
                    desc: 'Résultats concrets' 
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About