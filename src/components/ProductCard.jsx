import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FiHeart, FiShoppingBag, FiEye, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useApp();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const isFavorite = wishlist.some((item) => item.id === product.id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col group relative"
      >
        {/* Sale Badge */}
        {product.saleBadge && (
          <span className="absolute top-3 left-3 bg-brand-accent text-white text-xs font-extrabold px-2.5 py-1 rounded-full z-10 shadow-sm">
            {product.saleBadge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute top-3 right-3 p-2.5 rounded-full z-10 transition-all duration-300 shadow-md ${
            isFavorite
              ? 'bg-red-50 text-red-500 hover:bg-red-100'
              : 'bg-white/80 text-gray-500 hover:text-red-500 hover:bg-white'
          }`}
        >
          <FiHeart size={16} className={isFavorite ? 'fill-red-500' : ''} />
        </button>

        {/* Product Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Quick View Button overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={() => setIsQuickViewOpen(true)}
              className="bg-white/95 text-brand-secondary hover:bg-brand-primary hover:text-white px-4 py-2 rounded-full font-semibold text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5 transition-all duration-300 transform scale-90 group-hover:scale-100"
            >
              <FiEye size={14} /> Quick View
            </button>
          </div>
        </div>

        {/* Content Info */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex gap-1.5 mb-1.5">
            {product.tags?.map((tag) => (
              <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-sm md:text-base font-bold text-brand-text group-hover:text-brand-primary transition-colors duration-200 line-clamp-2 min-h-[40px] m-0">
            {product.name}
          </h3>

          {/* Pricing */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-base font-extrabold text-red-600">
              {product.price.toLocaleString('vi-VN')}đ
            </span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                {product.oldPrice.toLocaleString('vi-VN')}đ
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="w-full mt-4 py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <FiShoppingBag size={15} /> Thêm vào giỏ
          </button>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isQuickViewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuickViewOpen(false)}
              className="absolute inset-0 bg-black"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsQuickViewOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-gray-700 hover:text-brand-primary rounded-full shadow-md transition-colors"
              >
                <FiX size={20} />
              </button>

              {/* Product Image */}
              <div className="aspect-square md:aspect-auto md:h-full bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product details */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] bg-brand-primary/10 text-brand-secondary font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase">
                    {product.tags?.[0] || 'Premium'}
                  </span>
                  
                  <h3 className="text-xl font-extrabold text-brand-secondary mt-3 mb-2 leading-snug">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-black text-red-600">
                      {product.price.toLocaleString('vi-VN')}đ
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.oldPrice.toLocaleString('vi-VN')}đ
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed font-light mb-6">
                    {product.description || 'Sản phẩm trái cây nhập khẩu tươi ngon chất lượng cao, giàu dinh dưỡng, đảm bảo tiêu chuẩn vệ sinh an toàn thực phẩm.'}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      addToCart(product);
                      setIsQuickViewOpen(false);
                    }}
                    className="flex-1 py-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <FiShoppingBag size={18} /> Thêm vào giỏ
                  </button>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-3 rounded-xl border transition-colors ${
                      isFavorite
                        ? 'border-red-200 bg-red-50 text-red-500'
                        : 'border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <FiHeart size={20} className={isFavorite ? 'fill-red-500' : ''} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
