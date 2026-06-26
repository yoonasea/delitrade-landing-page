import { MapPin, Phone, Clock, Navigation2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">
            联系我们
          </h2>
          <p className="text-xl text-gray-300 font-semibold">
            Contact Us
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500 rounded-full">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">
                    地址 Address
                  </h3>
                  <p className="text-gray-300">
                    154 Bukit Batok Street 11<br />
                    #01-304 Block 154<br />
                    Singapore 650154
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500 rounded-full">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">
                    电话 Phone
                  </h3>
                  <a 
                    href="tel:94317868" 
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-2xl font-bold"
                  >
                    9431 7868
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500 rounded-full">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">
                    营业时间 Business Hours
                  </h3>
                  <p className="text-gray-300 text-lg">
                    每日 10:00 AM – 6:00 PM
                  </p>
                  <p className="text-gray-500 text-sm">
                    Open daily including weekends & public holidays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder / Directions */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              位置 Location
            </h3>
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
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-bold text-yellow-400 mb-4">
            Accepted Payment Methods
          </h3>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <img
              src="/images/payment/paynow.png"
              alt="PayNow"
              className="h-20 object-contain"
            />
            <img
              src="/images/payment/cdc.png"
              alt="CDC Vouchers"
              className="h-20 object-contain"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-yellow-400">八宝轩</span>
            <span className="text-gray-400">|</span>
            <span className="text-xl text-gray-300">De Li Trade</span>
          </div>
          <p className="text-gray-500">
            © 2024 De Li Trade. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
