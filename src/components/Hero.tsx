import { ChevronDown, Sparkles } from 'lucide-react';
import { Anim } from '../animations';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-red-900 via-red-800 to-red-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-yellow-400 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 border-4 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 border-4 border-yellow-400 rounded-full"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Anim variant="fadeDown">
          {/* Decorative stars */}
          <div className="flex justify-center mb-6">
            <Sparkles className="text-yellow-400 w-8 h-8 animate-pulse" />
          </div>
          
          {/* Chinese Name */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-yellow-400 mb-4 text-shadow-lg tracking-wider">
            八寶軒
          </h1>
          
          {/* English Name */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 text-shadow">
            De Li Trade
          </h2>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-yellow-200 mb-4 text-shadow">
            专业风水用品 · 宗教用品 · 命理咨询
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Professional Feng Shui Products, Religious Items & Astrology Services
          </p>
        </Anim>
        
        {/* CTA Buttons */}
        <Anim variant="fadeUp" delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>了解更多</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            <a
              href="tel:94317868"
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 font-bold rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <span>立即咨询</span>
            </a>
          </div>
        </Anim>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-yellow-400 opacity-70" />
      </div>
    </section>
  );
}
