import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', section: 'hero' },
  { label: 'About', section: 'about' },
  { label: 'Services', section: 'services' },
  { label: 'Testimonials', section: 'testimonials' },
  { label: 'Contact', section: 'contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-feng-shui-red">
              <span className="mr-2">八寶軒</span>
              <span className="text-feng-shui-gold">De Li Trade</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="text-gray-700 hover:text-feng-shui-red transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-feng-shui-red p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => scrollToSection(link.section)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-feng-shui-red hover:bg-red-50 rounded-md transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
