import DomainGrid from '../components/DomainGrid'
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlineShieldCheck } from 'react-icons/hi';

const Home = () => {
  // Détection de l'environnement pour définir le chemin correct de l'image
  const getImagePath = (filename: string) => {
    // Si le site est servi depuis un sous-répertoire (ex: GitHub Pages)
    if (window.location.pathname.startsWith('/copy_Ingeris')) {
      return `/copy_Ingeris/${filename}`;
    }
    // En local ou racine du domaine
    return `/${filename}`;
  };

  const paysageSunsetPath = getImagePath('paysage_sunset.png');
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20">
        {/* Background image floue */}
        <img
          src={paysageSunsetPath}
          alt="Coucher de soleil"
          className="absolute inset-0 w-full h-full object-cover object-[50%_60%] scale-105"
          style={{ zIndex: 0 }}
        />
        {/* Overlay foncé pour lisibilité */}
        <div className="absolute inset-0 bg-ingeris-orange/25" style={{ zIndex: 1 }} />
        {/* Contenu */}
        <div className="container-custom relative" style={{ zIndex: 2 }}>
          <div className="bg-black bg-opacity-60 backdrop-blur-sm max-w-4xl mx-auto px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded text-center">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold uppercase text-white leading-tight">
              Nous démontrons la conformité de vos installations et de vos process.
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-200">
              INGERIS accompagne depuis 2005 et sur toute la France les professionnels dans toutes les étapes du contrôle réglementaire, technique et évaluation tierce partie dans les domaines du commerce, de l'immobilier, du tertiaire, de l'industrie, du social et du médico social.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-white">
            <div className="flex items-center space-x-2">
              <HiOutlineClock className="w-6 h-6" />
              <span className="text-sm font-medium uppercase">16 années d’expérience</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiOutlineLocationMarker className="w-6 h-6" />
              <span className="text-sm font-medium uppercase">Présent sur toute la France</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiOutlineShieldCheck className="w-6 h-6" />
              <span className="text-sm font-medium uppercase">Organisme indépendant qualifié</span>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Grid */}
      <DomainGrid />

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Partenaire global de confiance
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Partenaire global de <span className="text-ingeris-orange">confiance</span>, INGERIS accompagne les entreprises et les collectivités 
                dans la mise en conformité de leurs installations et de leurs process. Notre expertise 
                couvre l'ensemble des domaines de la sécurité et de la réglementation.
              </p>
              
              <p>
                Détenu à 100% par ses salariés, <span className="text-ingeris-orange">INGERIS</span> est un organisme indépendant qualifié qui 
                intervient dans toute la France. Notre équipe d'experts vous accompagne dans tous 
                vos projets de contrôle et de certification.
              </p>
              
              <p>
                Avec plus de <span className="text-ingeris-orange">16 années d'expérience</span>, nous avons développé une expertise reconnue 
                dans de nombreux secteurs d'activité : commerce, industrie, médical, collectivités, 
                hôtellerie, restauration et bien d'autres.
              </p>
              
              <p>
                Notre mission est de <span className="text-ingeris-orange">vous garantir la conformité de vos installations</span> tout en vous 
                apportant un accompagnement personnalisé et des solutions adaptées à vos besoins 
                spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home 