import { MapPin, Phone, Clock, Navigation2 } from 'lucide-react';
import { Anim } from '../animations';
import Section from './Section';
import SectionHeader from './SectionHeader';
import ContactCard from './ContactCard';

export default function Contact() {
  return (
    <Section id="contact" bg="bg-gray-900" className="text-white">
      <Anim variant="scale">
        <SectionHeader title="联系我们" subtitle="Contact Us" color="yellow" />
      </Anim>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <Anim variant="fadeLeft" delay={0.1}>
            <ContactCard icon={MapPin} label="地址 Address">
              <p className="text-gray-300">
                154 Bukit Batok Street 11<br />
                #01-304 Block 154<br />
                Singapore 650154
              </p>
            </ContactCard>
          </Anim>

          <Anim variant="fadeRight" delay={0.2}>
            <ContactCard icon={Phone} label="电话 Phone">
              <a href="tel:94317868" className="text-gray-300 hover:text-yellow-400 transition-colors text-2xl font-bold">
                9431 7868
              </a>
            </ContactCard>
          </Anim>

          <Anim variant="fadeRight" delay={0.3}>
            <ContactCard icon={Clock} label="营业时间 Business Hours">
              <p className="text-gray-300 text-lg">每日 10:00 AM – 6:00 PM</p>
              <p className="text-gray-500 text-sm">Open daily including weekends & public holidays</p>
            </ContactCard>
          </Anim>
        </div>

        <Anim variant="slideUp" delay={0.15}>
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">位置 Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5640.893067207722!2d103.74205743764452!3d1.3482480177140215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da114fdcd7b267%3A0xd389408fda2d4d28!2sDe%20Li%20Trade!5e0!3m2!1sen!2ssg!4v1770095891474!5m2!1sen!2ssg"
              className="w-full h-64 rounded-lg mb-4"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a
              href="https://maps.app.goo.gl/zK1YFRPAgRq13vPR8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-lg transition-colors"
            >
              <Navigation2 className="w-5 h-5" />
              获取路线 Get Directions
            </a>
          </div>
        </Anim>
      </div>

      <Anim variant="fadeUp" delay={0.25}>
        <div className="mt-12 text-center">
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Accepted Payment Methods</h3>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <img src="/images/payment/paynow.png" alt="PayNow" className="h-20 object-contain" />
            <img src="/images/payment/cdc.png" alt="CDC Vouchers" className="h-20 object-contain" />
          </div>
        </div>
      </Anim>

      <div className="mt-16 pt-8 border-t border-gray-700 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
          <span className="text-2xl font-bold text-yellow-400">八寶軒</span>
          <span className="text-gray-400">|</span>
          <span className="text-xl text-gray-300">De Li Trade</span>
        </div>
        <p className="text-gray-500">© 2024 De Li Trade. All rights reserved.</p>
      </div>
    </Section>
  );
}
