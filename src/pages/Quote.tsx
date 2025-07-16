import { useState } from 'react'

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    domain: '',
    service: '',
    location: '',
    description: '',
    urgency: 'normal'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Quote request submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const domains = [
    'Commerce',
    'Esthétique',
    'Industrie',
    'Médical',
    'ESSMS',
    'Tertiaire',
    'Garage auto',
    'Restauration',
    'Hôtellerie',
    'Collectivités',
    'Autre'
  ]

  const services = [
    'Contrôle Électrique',
    'Contrôle Incendie',
    'Contrôle Gaz',
    'Contrôle Ascenseurs',
    'Contrôle Éclairage de Sécurité',
    'Contrôle Ventilation',
    'Autre'
  ]

  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Demander un devis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obtenez un devis personnalisé pour vos besoins de contrôle et de certification. 
            Notre équipe vous répondra sous 24h.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Informations personnelles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ingeris-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ingeris-orange focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ingeris-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ingeris-orange focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Informations du projet
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                      Domaine d'activité *
                    </label>
                    <select
                      id="domain"
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ingeris-orange focus:border-transparent"
                    >
                      <option value="">Sélectionnez un domaine</option>
                      {domains.map((domain) => (
                        <option key={domain} value={domain}>{domain}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service demandé *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ingeris-orange focus:border-transparent"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Localisation *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="Ville, département"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ingeris-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgence
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ingeris-orange focus:border-transparent"
                    >
                      <option value="normal">Normale</option>
                      <option value="urgent">Urgente</option>
                      <option value="very-urgent">Très urgente</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ingeris-orange focus:border-transparent"
                  placeholder="Décrivez votre projet, vos besoins spécifiques, la taille de l'installation, etc..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn-primary px-12 py-3 text-lg">
                  Demander un devis
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  Nous vous répondrons sous 24h avec un devis personnalisé
                </p>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-ingeris-orange mb-2">24h</div>
              <div className="text-gray-600">Délai de réponse</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ingeris-orange mb-2">100%</div>
              <div className="text-gray-600">Devis gratuit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ingeris-orange mb-2">France</div>
              <div className="text-gray-600">Intervention partout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote 