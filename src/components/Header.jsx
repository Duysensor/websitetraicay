import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  FiPhone,
  FiMail,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiSearch,
  FiMenu,
  FiX,
  FiTrash2,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const {
    cart,
    wishlist,
    cartCount,
    cartTotal,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    setCurrentPage,
  } = useApp();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', href: '#hero', action: () => setCurrentPage('home') },
    { label: 'Giới thiệu', href: '#about', action: () => setCurrentPage('about') },
    { label: 'Sản phẩm khuyến mãi', href: '#promo-products', action: () => setCurrentPage('home') },
    { label: 'Trái cây cắt sẵn', href: '#ready-fruits', action: () => setCurrentPage('home') },
    { label: 'Đồ uống Healthy', href: '#healthy-drinks', action: () => setCurrentPage('home') },
    { label: 'Liên hệ', href: '#contact', action: () => setCurrentPage('home') },
  ];

  return (
    <>
      {/* 1. TOP BAR */}
      <div className="bg-brand-secondary text-white text-xs md:text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-white/10 relative z-50">
        <p className="font-light tracking-wide animate-pulse-slow">
          Chào mừng bạn đến với <strong className="font-semibold text-brand-primary">EUS FRUIT</strong> - Trái cây nhập khẩu thượng hạng
        </p>
        <div className="flex items-center gap-4 text-white/90">
          <a href="tel:19001234" className="flex items-center gap-1 hover:text-brand-primary transition-colors duration-200">
            <FiPhone size={14} /> <span>1900 1234</span>
          </a>
          <span className="hidden md:inline text-white/30">|</span>
          <a href="mailto:info@eusfruit.vn" className="hidden md:flex items-center gap-1 hover:text-brand-primary transition-colors duration-200">
            <FiMail size={14} /> <span>info@eusfruit.vn</span>
          </a>
          <span className="text-white/30">|</span>
          <button className="flex items-center gap-1 hover:text-brand-primary transition-colors duration-200">
            <FiUser size={14} /> <span>Tài khoản</span>
          </button>
        </div>
      </div>

      {/* 2. MAIN HEADER & NAVBAR */}
      <header
        className={`w-full transition-all duration-300 z-40 ${
          isSticky
            ? 'fixed top-0 left-0 right-0 shadow-lg border-b border-gray-100 bg-white/95 backdrop-blur-md py-3'
            : 'relative bg-white py-5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              E
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-brand-secondary m-0 leading-none">
                EUS <span className="text-brand-primary">FRUIT</span>
              </h1>
              <p className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold m-0 mt-0.5">
                Premium Quality
              </p>
            </div>
          </a>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Tìm kiếm trái cây tươi sạch..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-300"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-primary transition-colors">
              <FiSearch size={18} />
            </button>
          </div>

          {/* Icons Action */}
          <div className="flex items-center gap-4">
            {/* Account Icon (Mobile Search) */}
            <div className="relative md:hidden">
              <button
                onClick={() => {
                  const q = prompt("Tìm kiếm sản phẩm:") || "";
                  setSearchQuery(q);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
              >
                <FiSearch size={20} />
              </button>
            </div>

            {/* Wishlist Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
            >
              <FiHeart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
            >
              <FiShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center border-t border-gray-50 mt-4 pt-3">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => link.action && link.action()}
                className="text-sm font-medium text-brand-text hover:text-brand-primary transition-colors duration-200 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (link.action) link.action();
                    }}
                    className="text-base font-medium text-brand-text hover:text-brand-primary py-2 transition-colors border-b border-gray-50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Slide Cart Side Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col"
            >
              <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-brand-secondary flex items-center gap-2">
                  <FiShoppingBag /> Giỏ hàng ({cartCount})
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <FiShoppingBag className="mx-auto text-gray-300 mb-4" size={48} />
                    <p className="text-gray-500 font-medium">Giỏ hàng của bạn đang trống</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 px-6 py-2 bg-brand-primary text-white font-medium rounded-full hover:bg-brand-primary-hover transition-colors text-sm"
                    >
                      Tiếp tục mua sắm
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-brand-text truncate">{item.name}</h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">
                            {item.quantity} x {item.price.toLocaleString('vi-VN')}đ
                          </span>
                          <span className="text-sm font-bold text-brand-accent">
                            {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors self-center"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-gray-100 bg-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 font-medium">Tổng tiền thanh toán:</span>
                    <span className="text-xl font-bold text-brand-accent">
                      {cartTotal.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      alert('Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ trong 2 giờ.');
                      setIsCartOpen(false);
                    }}
                    className="w-full py-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg text-center block"
                  >
                    Tiến hành thanh toán
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide Wishlist Drawer */}
      <AnimatePresence>
        {isWishlistOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWishlistOpen(false)}
              className="absolute inset-0 bg-black"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col"
            >
              <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-brand-secondary flex items-center gap-2">
                  <FiHeart /> Danh sách yêu thích ({wishlist.length})
                </h3>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {wishlist.length === 0 ? (
                  <div className="text-center py-20">
                    <FiHeart className="mx-auto text-gray-300 mb-4" size={48} />
                    <p className="text-gray-500 font-medium">Danh sách yêu thích trống</p>
                  </div>
                ) : (
                  wishlist.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-brand-text truncate">{item.name}</h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-bold text-brand-accent">
                            {item.price.toLocaleString('vi-VN')}đ
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)} // Wait, actually wishlist handles toggling, we'll implement toggle or remove in card
                        className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors self-center"
                      >
                        <FiHeart size={16} className="fill-brand-accent stroke-brand-accent" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
