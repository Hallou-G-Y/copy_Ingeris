import { Routes, Route, Link } from 'react-router-dom'
import ElectricalControl from './services/ElectricalControl'

const Services = () => {
  const services = [
    {
      id: 'electricalControl',
      title: 'Contrôle Électrique',
      description: 'Vérification de la conformité électrique de vos installations',
      icon: '⚡'
    },
    {
      id: 'fire-control',
      title: 'Contrôle Incendie',
      description: 'Contrôle des équipements de sécurité incendie',
      icon: '🔥'
    },
    {
      id: 'gas-control',
      title: 'Contrôle Gaz',
      description: 'Vérification de la sécurité des installations gaz',
      icon: '⛽'
    },
    {
      id: 'elevator-control',
      title: 'Contrôle Ascenseurs',
      description: 'Contrôle et maintenance des ascenseurs',
      icon: '🛗'
    },
    {
      id: 'emergency-lighting',
      title: 'Contrôle Éclairage de Sécurité',
      description: 'Vérification des systèmes d\'éclairage de sécurité',
      icon: '💡'
    },
    {
      id: 'ventilation-control',
      title: 'Contrôle Ventilation',
      description: 'Contrôle des systèmes de ventilation',
      icon: '💨'
    }
  ]

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="py-16">
            <div className="container-custom">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Nos Prestations
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Découvrez l'ensemble de nos services de contrôle et de certification. 
                  Nous assurons la conformité de vos installations dans tous les domaines.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                                       <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ingeris-orange transition-colors">
                     {service.title}
                   </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Besoin d'un contrôle spécifique ?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Contactez-nous pour un accompagnement personnalisé
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="btn-primary">
                    Nous contacter
                  </a>
                  <a href="/quote" className="btn-secondary">
                    Demander un devis
                  </a>
                </div>
              </div>
            </div>
          </div>
        } />
        
        <Route path="/electricalControl" element={<ElectricalControl />} />
        <Route path="/fire-control" element={<ServiceDetail service={services[1]} />} />
        <Route path="/gas-control" element={<ServiceDetail service={services[2]} />} />
        <Route path="/elevator-control" element={<ServiceDetail service={services[3]} />} />
        <Route path="/emergency-lighting" element={<ServiceDetail service={services[4]} />} />
        <Route path="/ventilation-control" element={<ServiceDetail service={services[5]} />} />
      </Routes>
    </>
  )
}

const ServiceDetail = ({ service }: { service: any }) => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Détails du service
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Notre service de {service.title.toLowerCase()} comprend une vérification complète 
                de vos installations selon les normes en vigueur. Nos experts qualifiés interviennent 
                sur site pour assurer la conformité et la sécurité de vos équipements.
              </p>
              <p>
                Nous vous accompagnons dans l'ensemble du processus, de l'audit initial jusqu'à 
                la certification finale, en passant par les recommandations d'amélioration si nécessaire.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/services" className="btn-secondary mr-4">
              Retour aux services
            </Link>
            <a href="/quote" className="btn-primary">
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 