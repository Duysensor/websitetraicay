import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('eus_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('eus_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'about'
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('eus_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('eus_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        showToast(`Đã cập nhật số lượng ${product.name} trong giỏ hàng!`);
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      showToast(`Đã thêm ${product.name} vào giỏ hàng!`);
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Đã xóa sản phẩm khỏi giỏ hàng.');
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const isFav = prev.find((item) => item.id === product.id);
      if (isFav) {
        showToast(`Đã xóa ${product.name} khỏi danh sách yêu thích.`, 'info');
        return prev.filter((item) => item.id !== product.id);
      }
      showToast(`Đã thêm ${product.name} vào danh sách yêu thích!`);
      return [...prev, product];
    });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        searchQuery,
        setSearchQuery,
        addToCart,
        removeFromCart,
        toggleWishlist,
        cartCount,
        cartTotal,
        toast,
        showToast,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
