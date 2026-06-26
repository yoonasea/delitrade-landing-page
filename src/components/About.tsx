import { Building2, Award, Heart } from 'lucide-react';
import { Anim } from '../animations';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Anim variant="fadeDown">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-feng-shui-red mb-4">
              关于八寶軒
            </h2>
            <p className="text-xl text-feng-shui-gold font-semibold">
              About De Li Trade
            </p>
            <div className="w-24 h-1 bg-feng-shui-gold mx-auto mt-6"></div>
          </div>
        </Anim>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <Anim variant="fadeUp" delay={0.15}>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                八寶軒（De Li Trade）是一家位于新加坡武吉巴督的专业风水用品店，致力于为顾客提供优质的风水用品、宗教用品及专业的命理咨询服务。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a professional Feng Shui shop located in Bukit Batok, Singapore, dedicated to providing high-quality Feng Shui products, religious items, and professional astrology consultation services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                我们的使命是帮助每一位顾客通过传统的风水智慧改善生活，获得好运与平安。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to help every customer improve their lives through traditional Feng Shui wisdom, bringing good fortune and peace.
              </p>
            </div>
          </Anim>

          {/* Right Features */}
          <div className="grid gap-6">
            <Anim variant="fadeRight" delay={0.1}>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-feng-shui-red">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-feng-shui-red rounded-full">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-feng-shui-red mb-2">
                      专业品质
                    </h3>
                    <p className="text-gray-600">
                      精选优质风水用品，每件产品都经过精心挑选
                    </p>
                    <p className="text-gray-500 text-sm">
                      Premium quality Feng Shui products, carefully selected
                    </p>
                  </div>
                </div>
              </div>
            </Anim>

            <Anim variant="fadeRight" delay={0.2}>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-feng-shui-gold">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-feng-shui-gold rounded-full">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-feng-shui-gold mb-2">
                      贴心服务
                    </h3>
                    <p className="text-gray-600">
                      专业顾问一对一服务，为您量身定制解决方案
                    </p>
                    <p className="text-gray-500 text-sm">
                      Personalized service with dedicated consultants
                    </p>
                  </div>
                </div>
              </div>
            </Anim>

            <Anim variant="fadeRight" delay={0.3}>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-feng-shui-green">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-feng-shui-green rounded-full">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-feng-shui-green mb-2">
                      传承文化
                    </h3>
                    <p className="text-gray-600">
                      传承中华传统文化，结合现代生活需求
                    </p>
                    <p className="text-gray-500 text-sm">
                      Preserving Chinese traditions with modern applications
                    </p>
                  </div>
                </div>
              </div>
            </Anim>
          </div>
        </div>
      </div>
    </section>
  );
}
