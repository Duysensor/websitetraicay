import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiYoutube, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-gray-200 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Store Information */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-extrabold text-lg">
              E
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight m-0">
              EUS <span className="text-brand-primary">FRUIT</span>
            </h3>
          </div>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Hệ thống phân phối trái cây nhập khẩu tươi sạch hàng đầu tại Việt Nam. Cam kết 100% hữu cơ chính ngạch chất lượng cao.
          </p>
          <div className="space-y-2 text-xs font-light">
            <p className="flex items-center gap-2.5">
              <FiMapPin size={16} className="text-brand-primary flex-shrink-0" />
              <span>123 Nguyễn Chí Thanh, Láng Hạ, Đống Đa, Hà Nội</span>
            </p>
            <p className="flex items-center gap-2.5">
              <FiPhone size={16} className="text-brand-primary flex-shrink-0" />
              <a href="tel:19001234" className="hover:text-brand-primary transition-colors">1900 1234</a>
            </p>
            <p className="flex items-center gap-2.5">
              <FiMail size={16} className="text-brand-primary flex-shrink-0" />
              <a href="mailto:contact@eusfruit.vn" className="hover:text-brand-primary transition-colors">contact@eusfruit.vn</a>
            </p>
          </div>
        </div>

        {/* Column 2: Customer Support */}
        <div className="text-left space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-primary">
            Hỗ Trợ Khách Hàng
          </h4>
          <ul className="space-y-2 text-xs font-light text-gray-400">
            <li><a href="#hero" className="hover:text-brand-primary transition-colors">Hướng dẫn đặt hàng online</a></li>
            <li><a href="#about" className="hover:text-brand-primary transition-colors">Chính sách vận chuyển 2h</a></li>
            <li><a href="#contact" className="hover:text-brand-primary transition-colors">Hình thức thanh toán</a></li>
            <li><a href="#promo-products" className="hover:text-brand-primary transition-colors">Tích điểm đổi quà EUS Member</a></li>
            <li><a href="#healthy-drinks" className="hover:text-brand-primary transition-colors">Tư vấn chế độ dinh dưỡng healthy</a></li>
          </ul>
        </div>

        {/* Column 3: Policies */}
        <div className="text-left space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-primary">
            Chính Sách Cửa Hàng
          </h4>
          <ul className="space-y-2 text-xs font-light text-gray-400">
            <li><a href="#hero" className="hover:text-brand-primary transition-colors">Chính sách bảo mật thông tin</a></li>
            <li><a href="#about" className="hover:text-brand-primary transition-colors">Chính sách đổi trả trong vòng 24h</a></li>
            <li><a href="#contact" className="hover:text-brand-primary transition-colors">Điều khoản dịch vụ EUS FRUIT</a></li>
            <li><a href="#promo-products" className="hover:text-brand-primary transition-colors">Chính sách kiểm hàng & bồi hoàn</a></li>
          </ul>
        </div>

        {/* Column 4: Fanpage Preview */}
        <div className="text-left space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-primary">
            Kết Nối Với Chúng Tôi
          </h4>
          <div className="flex gap-3">
            <a href="https://facebook.com" className="p-2.5 bg-white/5 hover:bg-brand-primary rounded-full transition-colors text-white">
              <FiFacebook size={16} />
            </a>
            <a href="https://youtube.com" className="p-2.5 bg-white/5 hover:bg-brand-primary rounded-full transition-colors text-white">
              <FiYoutube size={16} />
            </a>
            <a href="https://instagram.com" className="p-2.5 bg-white/5 hover:bg-brand-primary rounded-full transition-colors text-white">
              <FiInstagram size={16} />
            </a>
          </div>
          {/* Fanpage Mock Box */}
          <div className="bg-white/5 p-3 rounded-2xl border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white font-extrabold text-base">
              E
            </div>
            <div>
              <p className="text-xs font-bold text-white m-0">EUS FRUIT Fanpage</p>
              <p className="text-[10px] text-gray-400 font-light m-0">154K Likes • 20K Followers</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-gray-500">
        <p>© 2026 EUS FRUIT. All rights reserved. Designed by Google DeepMind team.</p>
        <div className="flex gap-4">
          <a href="#hero" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#hero" className="hover:text-brand-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
