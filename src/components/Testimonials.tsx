import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Helen',
    rating: 5,
    review: '八宝轩的产品质量很好，老板也很专业。购买了风水摆件后，家里的运势确实有所改善！',
    reviewEn: 'Great quality products and very professional service. After buying Feng Shui items, my home energy has improved significantly!',
  },
  {
    name: 'Chris',
    rating: 5,
    review: '来这里算八字非常准确！师傅分析得很透彻，给了我很多有用的建议。强烈推荐！',
    reviewEn: 'The Bazi reading was incredibly accurate! The master provided thorough analysis and very helpful advice. Highly recommended!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-feng-shui-red mb-4">
            客户评价
          </h2>
          <p className="text-xl text-feng-shui-gold font-semibold">
            Customer Reviews
          </p>
          <div className="w-24 h-1 bg-feng-shui-gold mx-auto mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-red-100"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-feng-shui-gold opacity-50" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Review */}
              <p className="text-gray-800 text-lg mb-3 leading-relaxed">
                "{testimonial.review}"
              </p>
              <p className="text-gray-500 text-sm mb-6">
                "{testimonial.reviewEn}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-feng-shui-red rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
