import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductSection() {
  const { searchQuery } = useApp();

  // Section 1: SẢN PHẨM KHUYẾN MÃI
  const [promoTab, setPromoTab] = useState('All');
  const promoTabs = ['All', 'Gift Basket', 'Imported Fruit', 'Gift'];

  // Section 2: TRÁI CÂY CẮT SẴN
  const [readyTab, setReadyTab] = useState('All');
  const readyTabs = ['All', 'Combo', 'Premium', 'Family'];

  // Section 3: ĐỒ UỐNG HEALTHY
  const [drinkTab, setDrinkTab] = useState('All');
  const drinkTabs = ['All', 'Juices', 'Smoothies'];

  const [isLoading, setIsLoading] = useState(false);

  // Simulate tab switching loading effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [promoTab, readyTab, drinkTab]);

  // Filter products based on category, tags and search query
  const getFilteredProducts = (category, activeTab) => {
    let list = products.filter((p) => p.category === category);

    // Apply Tab Filter
    if (activeTab !== 'All') {
      list = list.filter((p) => p.tags.includes(activeTab));
    }

    // Apply Search Filter (Global)
    if (searchQuery.trim() !== '') {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return list;
  };

  const promoProducts = getFilteredProducts('promo', promoTab);
  const readyProducts = getFilteredProducts('ready', readyTab);
  const drinkProducts = getFilteredProducts('drink', drinkTab);

  // Skeleton Loader for cards
  const SkeletonCard = () => (
    <div className="bg-gray-100 rounded-2xl p-4 h-[350px] animate-pulse flex flex-col justify-between">
      <div className="bg-gray-200 aspect-square w-full rounded-xl" />
      <div className="h-4 bg-gray-200 rounded w-2/3 mt-4" />
      <div className="h-6 bg-gray-200 rounded w-1/2 mt-2" />
      <div className="h-10 bg-gray-200 rounded-xl w-full mt-4" />
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      {/* SECTION 4: SẢN PHẨM KHUYẾN MÃI */}
      <section id="promo-products" className="scroll-mt-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">
              Đặc biệt hôm nay
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-secondary mt-1 m-0">
              SẢN PHẨM KHUYẾN MÃI
            </h2>
          </div>
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {promoTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setPromoTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  promoTab === tab
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {tab === 'All' ? 'Tất cả' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array(4)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          ) : promoProducts.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-400">
              Không tìm thấy sản phẩm khuyến mãi nào.
            </div>
          ) : (
            promoProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

      {/* SECTION 5: TRÁI CÂY CẮT SẴN */}
      <section id="ready-fruits" className="scroll-mt-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">
              Tươi ngon & Tiện lợi
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-secondary mt-1 m-0">
              TRÁI CÂY CẮT SẴN
            </h2>
          </div>
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {readyTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setReadyTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  readyTab === tab
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {tab === 'All' ? 'Tất cả' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array(4)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          ) : readyProducts.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-400">
              Không tìm thấy sản phẩm trái cây cắt sẵn nào.
            </div>
          ) : (
            readyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

      {/* SECTION 6: ĐỒ UỐNG HEALTHY */}
      <section id="healthy-drinks" className="scroll-mt-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">
              Năng lượng xanh sạch
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-secondary mt-1 m-0">
              ĐỒ UỐNG HEALTHY
            </h2>
          </div>
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {drinkTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setDrinkTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  drinkTab === tab
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {tab === 'All' ? 'Tất cả' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array(4)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          ) : drinkProducts.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-400">
              Không tìm thấy thức uống healthy nào.
            </div>
          ) : (
            drinkProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
