import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaBars, FaTimes, FaChevronDown, FaUser } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const servicesItems = [
    { name: 'Contrôle Électrique', href: '/services/electrical-control' },
    { name: 'Contrôle Incendie', href: '/services/fire-control' },
    { name: 'Contrôle Gaz', href: '/services/gas-control' },
    { name: 'Contrôle Ascenseurs', href: '/services/elevator-control' },
    { name: 'Contrôle Éclairage de Sécurité', href: '/services/emergency-lighting' },
    { name: 'Contrôle Ventilation', href: '/services/ventilation-control' },
  ]

  const groupItems = [
    { name: 'Nous rejoindre', href: '/careers' },
    { name: 'À propos', href: '/about' },
    { name: 'Nos valeurs', href: '/values' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-ingeris-orange">INGERIS</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-ingeris-orange font-semibold px-3'
                  : 'text-gray-700 hover:text-ingeris-orange px-3 transition-colors'
              }
              end
            >
              Accueil
            </NavLink>
            <span className="text-gray-400 mx-2">|</span>
            <NavLink
              to="/domains"
              className={({ isActive }) =>
                isActive
                  ? 'text-ingeris-orange font-semibold px-3'
                  : 'text-gray-700 hover:text-ingeris-orange px-3 transition-colors'
              }
            >
              Domaines d'activité
            </NavLink>
            <span className="text-gray-400 mx-2">|</span>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-ingeris-orange font-semibold px-3'
                  : 'text-gray-700 hover:text-ingeris-orange px-3 transition-colors'
              }
            >
              Prestations
            </NavLink>
            <span className="text-gray-400 mx-2">|</span>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive
                  ? 'text-ingeris-orange font-semibold px-3'
                  : 'text-gray-700 hover:text-ingeris-orange px-3 transition-colors'
              }
            >
              Recrutement
            </NavLink>
            <span className="text-gray-400 mx-2">|</span>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-ingeris-orange font-semibold px-3'
                  : 'text-gray-700 hover:text-ingeris-orange px-3 transition-colors'
              }
            >
              Contact
            </NavLink>
            <span className="text-gray-400 mx-2">|</span>
            <NavLink
              to="/quote"
              className={({ isActive }) =>
                isActive
                  ? 'btn-primary px-3 py-1 text-white font-semibold'
                  : 'btn-primary px-3 py-1'
              }
            >
              Devis
            </NavLink>
            <span className="text-gray-400 mx-2">|</span>
            <a
              href="https://my.ingeris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border border-gray-300 text-gray-700 hover:text-ingeris-orange px-3 py-1 rounded"
            >
              <FaUser className="mr-2" />
              My Ingeris
            </a>
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/ingeris"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-ingeris-orange transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/ingeris"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-ingeris-orange transition-colors"
            >
              <FaFacebook size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
                             <NavLink
                 to="/"
                 className={({ isActive }) =>
                   isActive
                     ? 'block text-ingeris-orange font-semibold transition-colors'
                     : 'block text-gray-700 hover:text-ingeris-orange transition-colors'
                 }
                 onClick={() => setIsMenuOpen(false)}
               >
                 Accueil
               </NavLink>
               
               <NavLink
                 to="/domains"
                 className={({ isActive }) =>
                   isActive
                     ? 'block text-ingeris-orange font-semibold transition-colors'
                     : 'block text-gray-700 hover:text-ingeris-orange transition-colors'
                 }
                 onClick={() => setIsMenuOpen(false)}
               >
                 Domaines d'activité
               </NavLink>

              {/* Mobile Prestations Dropdown */}
              <div>
                                 <button
                   className="flex items-center justify-between w-full text-gray-700 hover:text-ingeris-orange transition-colors"
                   onClick={() => toggleDropdown('prestations-mobile')}
                 >
                   Prestations
                   <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'prestations-mobile' ? 'rotate-180' : ''}`} />
                 </button>
                 {activeDropdown === 'prestations-mobile' && (
                   <div className="mt-2 ml-4 space-y-2">
                     {servicesItems.map((item) => (
                       <Link
                         key={item.href}
                         to={item.href}
                         className="block text-gray-600 hover:text-ingeris-orange transition-colors"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         {item.name}
                       </Link>
                     ))}
                   </div>
                 )}
              </div>

              {/* Mobile Le Groupe Dropdown */}
              <div>
                                 <button
                   className="flex items-center justify-between w-full text-gray-700 hover:text-ingeris-orange transition-colors"
                   onClick={() => toggleDropdown('groupe-mobile')}
                 >
                   Le Groupe
                   <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'groupe-mobile' ? 'rotate-180' : ''}`} />
                 </button>
                 {activeDropdown === 'groupe-mobile' && (
                   <div className="mt-2 ml-4 space-y-2">
                     {groupItems.map((item) => (
                       <Link
                         key={item.href}
                         to={item.href}
                         className="block text-gray-600 hover:text-ingeris-orange transition-colors"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         {item.name}
                       </Link>
                     ))}
                   </div>
                 )}
              </div>

                             <NavLink
                 to="/contact"
                 className={({ isActive }) =>
                   isActive
                     ? 'block text-ingeris-orange font-semibold transition-colors'
                     : 'block text-gray-700 hover:text-ingeris-orange transition-colors'
                 }
                 onClick={() => setIsMenuOpen(false)}
               >
                 Contact
               </NavLink>
               
               <Link
                 to="/quote"
                 className="block btn-primary text-center"
                 onClick={() => setIsMenuOpen(false)}
               >
                 Devis
               </Link>
               
               <a
                 href="https://my.ingeris.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block text-gray-700 hover:text-ingeris-orange transition-colors"
                 onClick={() => setIsMenuOpen(false)}
               >
                 My Ingeris
               </a>

              {/* Mobile Social Icons */}
              <div className="flex space-x-4 pt-4">
                                 <a
                   href="https://www.linkedin.com/company/ingeris"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-600 hover:text-ingeris-orange transition-colors"
                 >
                   <FaLinkedin size={20} />
                 </a>
                 <a
                   href="https://www.facebook.com/ingeris"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-600 hover:text-ingeris-orange transition-colors"
                 >
                   <FaFacebook size={20} />
                 </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 