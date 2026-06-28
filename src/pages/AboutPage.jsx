import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiAward, FiHeart, FiShield, FiCheckCircle } from 'react-icons/fi';
import Footer from '../components/Footer';

export default function AboutPage({ onBack }) {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col">
      {/* 1. Header Navigation for Article Page */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6 sticky top-0 z-50 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-secondary hover:text-brand-primary font-bold text-sm transition-colors duration-200 cursor-pointer"
        >
          <FiArrowLeft size={18} />
          <span>Quay lại trang chủ</span>
        </button>
        <span className="text-xl font-extrabold text-brand-secondary">
          EUS <span className="text-brand-primary">FRUIT</span>
        </span>
        <div className="w-20" /> {/* Spacer */}
      </nav>

      {/* 2. Hero Section */}
      <header className="relative w-full h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=1600&auto=format&fit=crop"
          alt="Premium Fruit Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/90 to-brand-secondary/40 flex items-center" />
        <div className="absolute inset-0 flex items-center max-w-5xl mx-auto px-6 text-white text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="bg-brand-primary/20 text-brand-primary font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand-primary/30">
              Câu Chuyện Thương Hiệu
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white m-0 tracking-tight leading-tight">
              Hành Trình EUS FRUIT<br />
              Kiến Tạo Phong Cách Sống Xanh
            </h1>
            <p className="text-sm md:text-base text-gray-200 max-w-xl font-light leading-relaxed">
              Từ một cửa hàng nhỏ lẻ, EUS FRUIT đã vươn mình trở thành hệ thống 15 cửa hàng trái cây nhập khẩu cao cấp hàng đầu Việt Nam.
            </p>
          </motion.div>
        </div>
      </header>

      {/* 3. Main Content Article */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        
        {/* Left 2 Columns: Main Article */}
        <article className="lg:col-span-2 space-y-12">
          
          {/* Section 1: Vision */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-secondary m-0">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
              Chúng tôi tin rằng mỗi bữa ăn, mỗi quả chín đều có tác động sâu sắc đến sức khỏe và hạnh phúc của mỗi gia đình. Sứ mệnh của EUS FRUIT không chỉ dừng lại ở việc cung cấp những trái cây ngon, sạch mà còn định hình thói quen tiêu dùng thông minh, an lành, hướng tới cuộc sống phát triển bền vững.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/9] relative">
              <img
                src="https://images.unsplash.com/photo-1610832958506-ee56336191d1?q=80&w=1000&auto=format&fit=crop"
                alt="Premium Basket"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Section 2: Values */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-secondary m-0">
              Giá Trị Cốt Lõi Tạo Nên Sự Khác Biệt
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-secondary flex items-center justify-center flex-shrink-0">
                  <FiAward size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-secondary m-0">Cam Kết Chất Lượng Cao Nhất</h3>
                  <p className="text-sm text-gray-600 font-light mt-1 leading-relaxed">
                    Mọi quả chín đều trải qua 3 lớp kiểm tra nghiêm ngặt từ khâu thu hoạch đến vận chuyển bằng công nghệ bảo quản lạnh tiêu chuẩn châu Âu để giữ trọn vẹn dinh dưỡng khi tới tay khách hàng.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-secondary flex items-center justify-center flex-shrink-0">
                  <FiShield size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-secondary m-0">Nguồn Gốc Rõ Ràng & Hữu Cơ</h3>
                  <p className="text-sm text-gray-600 font-light mt-1 leading-relaxed">
                    EUS FRUIT liên kết trực tiếp với các nông trại đạt chứng nhận hữu cơ quốc tế và chuẩn VietGAP trên toàn cầu, tuyệt đối nói không với hóa chất bảo quản độc hại.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-secondary flex items-center justify-center flex-shrink-0">
                  <FiHeart size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-secondary m-0">Phục Vụ Tận Tâm, Chu Đáo</h3>
                  <p className="text-sm text-gray-600 font-light mt-1 leading-relaxed">
                    Khách hàng là trung tâm của mọi hoạt động. Chúng tôi cam kết giao hàng trong 2h, chính sách đổi trả linh hoạt 1-đổi-1 trong vòng 24h đối với bất kỳ sản phẩm nào không đạt chất lượng yêu cầu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Farm partners */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-secondary m-0">
              Đối Tác Nông Trại Toàn Cầu
            </h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Chúng tôi hợp tác với các nhà vườn hàng đầu tại Mỹ (Táo Envy, Nho xanh), Úc (Cam, Quýt Úc), New Zealand (Việt quất) và Hàn Quốc (Dâu tây Tây Úc, Lê vàng) để mang về dòng sản phẩm tươi ngon đúng vụ mùa.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=400&auto=format&fit=crop"
                alt="Apple Farm"
                className="w-full h-40 object-cover rounded-xl shadow"
              />
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=400&auto=format&fit=crop"
                alt="Grape Farm"
                className="w-full h-40 object-cover rounded-xl shadow"
              />
            </div>
          </section>

        </article>

        {/* Right 1 Column: Sidebar Info Cards */}
        <aside className="space-y-8">
          {/* Quick Stats Card */}
          <div className="bg-brand-secondary text-white p-6 rounded-2xl shadow-lg border border-white/5 space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider m-0">
              Số Liệu Nổi Bật
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-3xl font-black text-brand-primary m-0">15+</p>
                <p className="text-xs text-gray-300 font-light m-0">Cửa hàng toàn quốc</p>
              </div>
              <div className="border-t border-white/10 pt-3">
                <p className="text-3xl font-black text-brand-primary m-0">100.000+</p>
                <p className="text-xs text-gray-300 font-light m-0">Khách hàng tin chọn</p>
              </div>
              <div className="border-t border-white/10 pt-3">
                <p className="text-3xl font-black text-brand-primary m-0">100%</p>
                <p className="text-xs text-gray-300 font-light m-0">Chất lượng hữu cơ</p>
              </div>
            </div>
          </div>

          {/* Standards Card */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-4">
            <h4 className="text-base font-bold text-brand-secondary uppercase tracking-wider m-0">
              Tiêu Chuẩn Đạt Được
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                <FiCheckCircle className="text-brand-primary" size={16} /> Certified Organic (USDA)
              </li>
              <li className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                <FiCheckCircle className="text-brand-primary" size={16} /> Chuẩn VietGAP & GlobalGAP
              </li>
              <li className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                <FiCheckCircle className="text-brand-primary" size={16} /> ISO 22000:2018 Standard
              </li>
              <li className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                <FiCheckCircle className="text-brand-primary" size={16} /> Kiểm dịch thực vật hải quan
              </li>
            </ul>
          </div>
        </aside>

      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
