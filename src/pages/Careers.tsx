const Careers = () => {
  const jobOffers = [
    {
      id: 1,
      title: 'Technicien de Contrôle',
      location: 'Toute la France',
      type: 'CDI',
      description: 'Rejoignez notre équipe de techniciens pour effectuer des contrôles sur site.'
    },
    {
      id: 2,
      title: 'Ingénieur Sécurité',
      location: 'Lyon',
      type: 'CDI',
      description: 'Poste d\'ingénieur spécialisé en sécurité des installations.'
    },
    {
      id: 3,
      title: 'Chargé d\'Affaires',
      location: 'Paris',
      type: 'CDI',
      description: 'Développement commercial et accompagnement client.'
    }
  ]

  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nous rejoindre
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez une équipe dynamique et passionnée. INGERIS, détenu à 100% par ses salariés, 
            vous offre des opportunités de carrière dans un secteur en pleine croissance.
          </p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-ingeris-orange mb-2">100%</div>
            <div className="text-lg text-gray-600">Détenu par les salariés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-ingeris-orange mb-2">16</div>
            <div className="text-lg text-gray-600">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-ingeris-orange mb-2">France</div>
            <div className="text-lg text-gray-600">Présent sur tout le territoire</div>
          </div>
        </div>

        {/* Job Offers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Offres d'emploi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOffers.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-600">📍 {job.location}</span>
                  <span className="text-sm bg-ingeris-orange text-white px-2 py-1 rounded">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {job.description}
                </p>
                <button className="btn-primary w-full">
                  Postuler
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pas d'offre qui vous correspond ?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Envoyez-nous votre CV et lettre de motivation. Nous étudions toutes les candidatures spontanées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Nous contacter
            </a>
            <a href="mailto:recrutement@ingeris.com" className="btn-secondary">
              Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers 