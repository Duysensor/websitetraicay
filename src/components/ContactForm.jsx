import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      showToast('Vui lòng điền các trường bắt buộc (*)', 'error');
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      showToast('Đăng ký nhận giao hàng thành công! EUS FRUIT sẽ liên hệ sớm.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-brand-secondary text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full border border-white/5"
    >
      <div>
        <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">
          Giao Hàng Tận Nơi
        </span>
        <h3 className="text-2xl font-black mt-1 mb-2 text-white">
          ĐĂNG KÝ GIAO HÀNG ĐỊNH KỲ
        </h3>
        <p className="text-xs text-white/70 font-light mb-6">
          Điền thông tin của bạn để đăng ký nhận combo hoa quả cắt sẵn hoặc giỏ quà tặng giao định kỳ hàng tuần/tháng.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên của bạn *"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white/20 transition-all duration-300"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại *"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white/20 transition-all duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Địa chỉ Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white/20 transition-all duration-300"
          />
        </div>

        <div>
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ nhận hàng *"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white/20 transition-all duration-300"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Lời nhắn / Yêu cầu riêng (Ví dụ: Tránh dưa hấu, chỉ nhận buổi sáng...)"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white/20 transition-all duration-300 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-brand-accent hover:bg-brand-accent-hover disabled:bg-gray-500 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg shadow-brand-accent/20 cursor-pointer transform active:scale-95"
        >
          {isSubmitting ? 'Đang xử lý...' : 'ĐĂNG KÝ NGAY'}
        </button>
      </form>
    </motion.div>
  );
}
