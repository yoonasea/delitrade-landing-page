import { ShoppingBag, Star, Clock, BookOpen, Gem } from 'lucide-react';

const services = [
  {
    icon: ShoppingBag,
    title: '风水用品',
    titleEn: 'Feng Shui Products',
    description: '提供各类专业风水用品，包括水晶、摆件、吉祥物等，助您改善居家及办公环境的气场。',
    descriptionEn: 'Professional Feng Shui products including crystals, ornaments, and auspicious items to improve your living and working spaces.',
    color: 'red',
    image: '/images/services/fengshui.jpg',
  },
  {
    icon: Gem,
    title: '宗教用品',
    titleEn: 'Religious Items',
    description: '精选佛教、道教等宗教用品，包括香炉、念珠、佛像等，满足您的信仰需求。',
    descriptionEn: 'Buddhist, Taoist, and other religious items including incense burners, prayer beads, Buddha statues, and more.',
    color: 'gold',
    image: '/images/services/religious.png',
  },
  {
    icon: BookOpen,
    title: '八字算命',
    titleEn: 'Bazi Reading',
    description: '专业八字命理分析，解读您的命运走向、事业财运、婚姻感情等人生重要方面。',
    descriptionEn: 'Professional Bazi (Eight Characters) destiny analysis for career, wealth, relationships, and life direction.',
    color: 'green',
    image: '/images/services/bazi.webp',
  },
  {
    icon: Star,
    title: '紫微斗数',
    titleEn: 'Zi Wei Dou Shu',
    description: '紫微斗数命盘解析，深入了解您的性格特质、运势起伏、吉凶祸福。',
    descriptionEn: 'Zi Wei Dou Shu (Purple Star Astrology) chart interpretation to understand your personality, fortune cycles, and destiny.',
    color: 'red',
    image: '/images/services/ziwei.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-feng-shui-red mb-4">
            服务项目
          </h2>
          <p className="text-xl text-feng-shui-gold font-semibold">
            Our Services
          </p>
          <div className="w-24 h-1 bg-feng-shui-gold mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <img
                src={service.image}
                alt={service.titleEn}
                className="w-full h-48 object-cover"
              />
              <div className={`h-2 bg-feng-shui-${service.color}`}></div>
              <div className="p-6">
                <div className={`p-3 bg-feng-shui-${service.color} rounded-full w-fit mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-feng-shui-gold font-medium mb-3">
                  {service.titleEn}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {service.description}
                </p>
                <p className="text-gray-500 text-xs">
                  {service.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        <div className="bg-feng-shui-red rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-yellow-400" />
            <h3 className="text-2xl font-bold">营业时间 Business Hours</h3>
          </div>
          <p className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
            10:00 AM – 6:00 PM
          </p>
          <p className="text-lg text-white">
            每日营业（包括周末及公共假期）
          </p>
          <p className="text-sm text-gray-200">
            Open daily including weekends and public holidays
          </p>
        </div>
      </div>
    </section>
  );
}
