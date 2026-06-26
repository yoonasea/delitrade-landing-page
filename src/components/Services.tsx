import { ShoppingBag, Star, BookOpen, Gem } from 'lucide-react';
import { Anim } from '../animations';
import Section from './Section';
import SectionHeader from './SectionHeader';

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
    descriptionEn: 'Buddhist, Taoist, and other religious items including prayer beads, Buddha statues, and more.',
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
    <Section id="services" bg="bg-gray-50">
      <Anim variant="scale">
        <SectionHeader title="服务项目" subtitle="Our Services" />
      </Anim>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service, index) => (
          <Anim key={index} variant="fadeUp" delay={index * 0.1}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <img
                src={service.image}
                alt={service.titleEn}
                className="w-full h-[267px] object-cover"
              />
              <div className={`h-2 bg-feng-shui-${service.color}`}></div>
              <div className="p-6">
                <div className={`p-3 bg-feng-shui-${service.color} rounded-full w-fit mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-sm text-feng-shui-gold font-medium mb-3">{service.titleEn}</p>
                <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                <p className="text-gray-500 text-xs">{service.descriptionEn}</p>
              </div>
            </div>
          </Anim>
        ))}
      </div>
    </Section>
  );
}
