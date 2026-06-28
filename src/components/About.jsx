import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiTruck, FiShield, FiGlobe, FiAward } from 'react-icons/fi';

// Counter Helper Component
function Counter({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const features = [
    {
      icon: <FiTruck className="text-brand-primary" size={24} />,
      title: 'Fast Delivery',
      desc: 'Giao hàng hỏa tốc trong vòng 2 giờ nội thành.',
      highlight: '2 Hours'
    },
    {
      icon: <FiShield className="text-brand-primary" size={24} />,
      title: 'Secure Payment',
      desc: 'Thanh toán bảo mật, đa dạng thẻ và ví điện tử.',
      highlight: '100% Secure'
    },
    {
      icon: <FiGlobe className="text-brand-primary" size={24} />,
      title: 'Fresh Imported Fruits',
      desc: 'Nhập khẩu chính ngạch từ Mỹ, Úc, New Zealand, Hàn Quốc.',
      highlight: 'Global Source'
    },
    {
      icon: <FiAward className="text-brand-primary" size={24} />,
      title: 'Best Quality',
      desc: 'Trái cây đạt chứng nhận hữu cơ quốc tế & VietGAP.',
      highlight: 'Top Premium'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Premium Store Image with overlay cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop"
                alt="EUS Fruit Premium Store Inside"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>

            {/* Floating Counter Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 md:right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4"
            >
              <div className="text-4xl font-extrabold text-brand-primary">
                <Counter value={15} />+
              </div>
              <div className="text-left">
                <p className="text-xs uppercase font-bold text-gray-400 tracking-wider m-0">Hệ Thống</p>
                <p className="text-sm font-bold text-brand-secondary m-0">Cửa hàng toàn quốc</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Heading, Description & Outline Feature Boxes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <div>
              <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">
                Về Chúng Tôi
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-secondary mt-1 leading-tight m-0">
                Hệ thống <span className="text-brand-primary"><Counter value={15} /></span> cửa hàng EUS FRUIT
              </h2>
            </div>

            <p className="text-base text-gray-600 font-light leading-relaxed m-0">
              EUS FRUIT tự hào là chuỗi cửa hàng cung cấp trái cây nhập khẩu uy tín hàng đầu Việt Nam. Chúng tôi cam kết mang đến những quả chín tự nhiên, tươi mới mỗi ngày, an toàn tuyệt đối cho gia đình bạn.
            </p>

            {/* Feature Outline Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feat, index) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-4 bg-white border border-brand-primary/20 hover:border-brand-primary rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="p-3 bg-brand-primary/10 rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-secondary m-0">{feat.title}</h4>
                    <p className="text-[11px] font-semibold text-brand-accent mt-0.5">{feat.highlight}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-normal font-light">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
