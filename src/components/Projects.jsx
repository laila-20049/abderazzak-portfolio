import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [playingVideo, setPlayingVideo] = useState(null)
  const videoRefs = useRef([])

  const projects = [
    {
      title: "Video Snack - Campagne Marketing",
      description: "Création de contenu & gestion des réseaux sociaux pour augmenter l'engagement et la visibilité de la marque.",
      video: "/snack.mp4",
      tags: ["Instagram", "Content", "Community", "Marketing"],
      duration: "0:30",
      views: "15K"
    },
    {
      title: "Video Restaurant",
      description: "Création de contenu visuel pour promouvoir les offres spéciales et l'ambiance du restaurant.",
      video: "/restaurant.mp4",
      tags: ["Photographie", "Content", "Promotion"],
      duration: "0:45",
      views: "12K"
    },
    {
      title: "Video TGCC",
      description: "Production vidéo corporate pour présenter les services et renforcer l'image de marque.",
      video: "/tgcc.mp4",
      tags: ["Corporate", "Content", "Branding"],
      duration: "1:15",
      views: "8K"
    }
  ]

  const handleVideoHover = (index) => {
    setPlayingVideo(index)
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch(error => {
        console.log("Erreur de lecture vidéo:", error)
      })
    }
  }

  const handleVideoLeave = (index) => {
    setPlayingVideo(null)
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause()
      videoRefs.current[index].currentTime = 0
    }
  }

  const handleVideoClick = (index) => {
    if (playingVideo === index) {
      handleVideoLeave(index)
    } else {
      handleVideoHover(index)
    }
  }

  // Fonction pour ajouter une référence vidéo
  const addVideoRef = (el, index) => {
    videoRefs.current[index] = el
  }

  return (
    <section id="projets" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets Vidéo
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mes réalisations en création vidéo alliant stratégie digitale et innovation visuelle.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
            >
              {/* Conteneur Vidéo */}
              <div 
                className="relative overflow-hidden bg-gray-900 cursor-pointer"
                onMouseEnter={() => handleVideoHover(index)}
                onMouseLeave={() => handleVideoLeave(index)}
                onClick={() => handleVideoClick(index)}
              >
                <div className="aspect-video relative">
                  <video
                    ref={(el) => addVideoRef(el, index)}
                    src={project.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={project.poster}
                  />
                  
                  {/* Overlay de contrôle */}
                  <div className={`absolute inset-0 bg-black transition-all duration-300 flex items-center justify-center ${
                    playingVideo === index ? 'bg-opacity-0' : 'bg-opacity-40'
                  }`}>
                    <div className={`transform transition-all duration-300 ${
                      playingVideo === index ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
                    }`}>
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
                        <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Badge de durée */}
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-sm font-medium">
                    {project.duration}
                  </div>

                  {/* Indicateur de lecture */}
                  {playingVideo === index && (
                    <div className="absolute top-3 left-3 flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium bg-black bg-opacity-70 px-2 py-1 rounded-lg">
                        En lecture
                      </span>
                    </div>
                  )}

                  {/* Message si vidéo non trouvée */}
                  <div className="absolute inset-0 hidden items-center justify-center bg-gray-800 video-error">
                    <div className="text-center text-white">
                      <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm">Vidéo non disponible</p>
                      <p className="text-xs text-gray-400 mt-1">Vérifiez le chemin du fichier</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 pr-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    <span className="text-sm font-medium">{project.views}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                  <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group/btn">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Voir le projet</span>
                  </button>
                  
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section d'information pour le développement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl"
        >
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Information pour l'affichage des vidéos
              </h3>
              <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                Assurez-vous que vos fichiers vidéo sont dans le dossier <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">public/</code> de votre projet Next.js.
                Les chemins doivent être : <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">/snack.mp4</code>, <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">/restaurant.mp4</code>, etc.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        video::-webkit-media-controls {
          display: none !important;
        }
        
        video {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        /* Cache les contrôles natifs de la vidéo */
        video::-webkit-media-controls-panel {
          display: none !important;
        }
        
        video::-webkit-media-controls-play-button {
          display: none !important;
        }
        
        video::-webkit-media-controls-start-playback-button {
          display: none !important;
        }
      `}</style>
    </section>
  )
}

export default Projects