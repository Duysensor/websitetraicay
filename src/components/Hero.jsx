import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero() {
  const slides = [
    {
      id: 1,
      bgImage: 'https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=1600&auto=format&fit=crop',
      title: 'PREMIUM FRUITS',
      subtitle: 'Fresh Delivered To Your Doorstep',
      desc: 'Trải nghiệm hương vị trái cây nhập khẩu tươi ngon, chuẩn sạch được tuyển chọn khắt khe từ các nông trại hàng đầu thế giới.',
      ctaText: 'Mua ngay',
      fruitBasketImg: 'https://images.unsplash.com/photo-1610832958506-ee56336191d1?q=80&w=600&auto=format&fit=crop',
      badgeText: 'Khách hàng mới',
      badgeDiscount: '100.000đ'
    },
    {
      id: 2,
      bgImage: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1600&auto=format&fit=crop',
      title: 'ORGANIC HEALTHY',
      subtitle: '100% Sạch Tự Nhiên & Dinh Dưỡng',
      desc: 'Hệ thống EUS FRUIT mang đến những sản phẩm cắt sẵn tiện lợi và nước ép tươi ngon mỗi ngày giúp tăng cường sức khỏe của bạn.',
      ctaText: 'Xem sản phẩm',
      fruitBasketImg: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
      badgeText: 'Combo Quà Tặng',
      badgeDiscount: 'Ưu đãi 15%'
    }
  ];

  return (
    <section id="hero" className="w-full relative overflow-hidden bg-gray-50">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-[550px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Farm Image with subtle overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out transform scale-105"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 items-center text-white">
                
                {/* Left Side: Typography & CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="flex flex-col items-start text-left max-w-xl"
                >
                  <span className="bg-brand-primary text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3 shadow-md">
                    {slide.title}
                  </span>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight m-0 text-white leading-tight">
                    {slide.subtitle}
                  </h2>
                  
                  <p className="text-sm md:text-base text-gray-200 mt-4 leading-relaxed font-light">
                    {slide.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <a
                      href="#promo-products"
                      className="px-8 py-3.5 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/20 text-center"
                    >
                      {slide.ctaText}
                    </a>
                    
                    {/* Discount Badge */}
                    <div className="flex items-center gap-2 bg-yellow-400 text-brand-secondary px-4 py-2 rounded-xl shadow-md font-bold text-xs md:text-sm border border-yellow-300">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-brand-secondary/80 leading-none">{slide.badgeText}</p>
                        <p className="text-brand-accent text-lg leading-none mt-1">{slide.badgeDiscount}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side: Basket Image & Floating Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hidden lg:flex justify-center relative"
                >
                  <div className="w-[380px] h-[380px] rounded-full overflow-hidden border-8 border-white/20 shadow-2xl relative group">
                    <img
                      src={slide.fruitBasketImg}
                      alt="Premium Fruits Basket"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Circular Floating Badge */}
                    <div className="absolute top-6 right-6 bg-brand-accent text-white w-20 h-20 rounded-full flex flex-col items-center justify-center font-bold text-xs shadow-lg animate-bounce">
                      <span>100%</span>
                      <span>Organic</span>
                    </div>
                  </div>
                </motion.div>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
