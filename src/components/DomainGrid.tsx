import { Link } from "react-router-dom";
import { domains } from "../data/domains";

const DomainGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos domaines d'activité
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos spécialisations dans différents secteurs d'activité
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center ">
          {domains.map((domain) => (
            <Link
              key={domain.id}
              to={domain.linkUrl}
              className="group transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={domain.imageUrl}
                  alt={domain.title}
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:grayscale transition duration-300 rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ingeris-orange mb-2 uppercase transition-colors text-center">
                  {domain.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainGrid;
