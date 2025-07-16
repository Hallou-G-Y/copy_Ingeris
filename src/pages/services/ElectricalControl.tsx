import { FaPaperPlane } from 'react-icons/fa'
import { electricalControlContent } from '../../data/electricalControlContent'
import { Link } from 'react-router-dom'

const ElectricalControl = () => {
  return (
    <div>
      <div
        className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/electricalWorking.jpg')" }}
      >
        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Contenu centré */}
        <div className="relative z-10 text-white text-center flex flex-col items-center justify-center w-full px-4 py-24">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4 tracking-wide">
            {electricalControlContent.hero.title}
          </h1>
          <p className="text-lg md:text-2xl font-semibold uppercase mb-8 max-w-6xl mx-auto leading-snug">
            {electricalControlContent.hero.description}
          </p>
          <Link
            to="/quote"
            className="btn-primary flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <FaPaperPlane className="text-white text-xl" />
            {electricalControlContent.hero.cta}
          </Link>
          {/* Optionnel : petit trait blanc sous le bouton */}
          <div className="mt-8 w-12 h-1 bg-white rounded-full opacity-70" />
        </div>
      </div>
        {/* Section modulaire style maquette Ingeris */}
        <section className="w-full bg-white py-16 px-2">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            {/* Ligne du haut : 3 colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Colonne 1 */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-ingeris-orange text-lg font-bold uppercase mb-2">{electricalControlContent.sections[0].title}</h3>
                <p className="text-gray-800 text-base mb-2">{electricalControlContent.sections[0].paragraphs?.[0]}</p>
                <a href="#" className="text-ingeris-orange underline text-sm">Consulter la page pour en apprendre davantage.</a>
              </div>
              {/* Colonne 2 */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-ingeris-orange text-lg font-bold uppercase mb-2">{electricalControlContent.sections[1].title}</h3>
                <ul className="text-gray-800 text-base list-disc list-inside mb-2">
                  {electricalControlContent.sections[1].list?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="text-xs text-gray-500">Périodicité : Annuelle.</div>
              </div>
              {/* Colonne 3 */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-ingeris-orange text-lg font-bold uppercase mb-2">{electricalControlContent.sections[3].title}</h3>
                <ul className="text-gray-800 text-base list-disc list-inside mb-2">
                  {electricalControlContent.sections[3].list?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="text-xs text-ingeris-orange italic">La prestation Conseil n'est pas sous accréditation Cofrac.</div>
              </div>
            </div>
            {/* Ligne du milieu : 2 blocs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bloc réglementation */}
              <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center">
                <h4 className="text-ingeris-orange font-bold uppercase mb-2 text-lg">Réglementation en vigueur</h4>
                <ul className="text-gray-800 text-base list-disc list-inside">
                  {electricalControlContent.sections[3].list?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Bloc Cofrac */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-gray-800 text-base">Accréditation n°3-0200<br/>Portée disponible sur<br/><a href="https://www.cofrac.fr" className="text-ingeris-orange underline">www.cofrac.fr</a></div>
              </div>
            </div>
            {/* Ligne du bas : 2 grands blocs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bloc déroulement + qui est concerné */}
              <div className="md:col-span-1 bg-white rounded-lg p-6 flex flex-col gap-4">
                <h4 className="text-ingeris-orange font-bold uppercase mb-2 text-lg">Comment se déroule une inspection ?</h4>
                <ul className="text-gray-800 text-base mb-2">{electricalControlContent.sections[5].paragraphs?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}</ul>
                <h5 className="text-ingeris-orange font-bold uppercase mb-2 text-base">Qui est concerné ?</h5>
                <p className="text-gray-800 text-base">{electricalControlContent.sections[6].paragraphs?.[0]}</p>
              </div>
              {/* Bloc points forts orange */}
              <div className="bg-ingeris-orange rounded-lg p-6 flex flex-col justify-center text-white">
                <h4 className="font-bold uppercase mb-2 text-lg">Nos points forts</h4>
                <ul className="list-disc list-inside text-base space-y-1">
                  {electricalControlContent.sections[7].list?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ElectricalControl