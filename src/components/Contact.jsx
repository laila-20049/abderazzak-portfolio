import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message envoyé avec succès!')
    setFormData({ name: '', email: '', message: '' })
  }

  const openWhatsApp = () => {
    const phoneNumber = "212772257029"
    const message = "Bonjour Abderazzak, je souhaite discuter d'un projet avec vous."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const openEmail = () => {
    window.location.href = 'Abderarazak10@gmail.com'
  }

  const makeCall = () => {
    window.open('tel:+212772257029', '_self')
  }

  const openInstagram = () => {
    const url = 'https://www.instagram.com/abderazzakmounir?igsh=MW1yMTN4OWNsbTRvZQ%3D%3D&utm_source=qr'
    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Contact
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Section Contact Rapide */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Rapide
            </h3>
            
            <div className="space-y-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openWhatsApp}
                className="w-full py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-3"
              >
                <span className="text-xl">💬</span>
                <span>Discuter sur WhatsApp</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openEmail}
                className="w-full py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-3"
              >
                <span className="text-xl">✉️</span>
                <span>Envoyer un Email</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={makeCall}
                className="w-full py-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center space-x-3"
              >
                <span className="text-xl">📞</span>
                <span>Appeler maintenant</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openInstagram}
                className="w-full py-4 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center space-x-3"
              >
                <span className="text-xl">📸</span>
                <span>Visiter Instagram</span>
              </motion.button>
            </div>

            {/* Informations de contact */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Mes coordonnées
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 dark:text-gray-300">📧</span>
                  <span className="text-gray-700 dark:text-gray-300">Abderarazak10@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 dark:text-gray-300">📱</span>
                  <span className="text-gray-700 dark:text-gray-300">+212 7 72257029</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 dark:text-gray-300">📍</span>
                  <span className="text-gray-700 dark:text-gray-300">Casablanca, Maroc</span>
                </div>
                
              </div>
            </div>
          </div>
          
          {/* Formulaire de contact */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Ou envoyez-moi un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Décrivez votre projet..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Envoyer le message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact