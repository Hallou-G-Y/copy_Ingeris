import { domains } from '../data/domains'

const Domains = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Domaines d'activité
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos spécialisations dans différents secteurs d'activité. 
            Nous intervenons dans toute la France pour assurer la conformité de vos installations.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 align-center">
          {domains.map((domain) => (
            <div key={domain.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src={domain.imageUrl}
                  alt={domain.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {domain.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {domain.description}
                </p>
                                 <a
                   href={domain.linkUrl}
                   className="inline-block bg-ingeris-orange text-white px-6 py-2 rounded-lg hover:bg-ingeris-orange-dark transition-colors"
                 >
                   En savoir plus
                 </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Besoin d'un contrôle dans votre domaine ?
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
  )
}

export default Domains 