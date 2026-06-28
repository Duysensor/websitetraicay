export const products = [
  // 1. SẢN PHẨM KHUYẾN MÃI (Gift Basket, Imported Fruit, Gift)
  {
    id: 'promo-1',
    name: 'Giỏ Quà Trái Cây EUS Luxury',
    category: 'promo',
    tags: ['Gift Basket', 'Gift'],
    price: 1250000,
    oldPrice: 1500000,
    image: 'https://images.unsplash.com/photo-1543157148-f79f1ec74e37?q=80&w=600&auto=format&fit=crop',
    rating: 5,
    saleBadge: '-16%',
    description: 'Giỏ quà cao cấp gồm nho mẫu đơn Hàn Quốc, táo Envy Mỹ, lê Hàn Quốc và quýt Úc trang trí sang trọng.'
  },
  {
    id: 'promo-2',
    name: 'Nho Mẫu Đơn Shine Muscat Hàn Quốc',
    category: 'promo',
    tags: ['Imported Fruit'],
    price: 690000,
    oldPrice: 850000,
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=600&auto=format&fit=crop',
    rating: 5,
    saleBadge: '-18%',
    description: 'Nho mẫu đơn chuẩn hữu cơ nhập khẩu trực tiếp từ Hàn Quốc, trái to tròn ngọt thơm tự nhiên.'
  },
  {
    id: 'promo-3',
    name: 'Táo Envy Mỹ Size Lớn Premium',
    category: 'promo',
    tags: ['Imported Fruit'],
    price: 189000,
    oldPrice: 240000,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    saleBadge: '-21%',
    description: 'Táo Envy Mỹ giòn tan, ngọt lịm với những vân sọc đặc trưng, giàu dinh dưỡng và vitamin.'
  },
  {
    id: 'promo-4',
    name: 'Hộp Quà Cherry Đỏ Chile 2kg',
    category: 'promo',
    tags: ['Imported Fruit', 'Gift'],
    price: 890000,
    oldPrice: 1100000,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    saleBadge: '-19%',
    description: 'Hộp quà Cherry đỏ tươi Chile sang trọng, trái to cứng quả, vị ngọt thanh pha chút chua nhẹ.'
  },
  {
    id: 'promo-5',
    name: 'Lê Vàng Nam Phi Thượng Hạng',
    category: 'promo',
    tags: ['Imported Fruit'],
    price: 99000,
    oldPrice: 130000,
    image: 'https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    saleBadge: '-24%',
    description: 'Lê vàng Nam Phi mọng nước, giòn ngọt, vỏ ngoài vàng óng đẹp mắt.'
  },
  {
    id: 'promo-6',
    name: 'Việt Quất Tươi New Zealand Hộp 125g',
    category: 'promo',
    tags: ['Imported Fruit'],
    price: 79000,
    oldPrice: 110000,
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    saleBadge: '-28%',
    description: 'Việt quất New Zealand giàu chất chống oxy hóa, quả mọng, vị ngọt dịu thanh mát.'
  },

  // 2. TRÁI CÂY CẮT SẴN (Combo, Premium, Family)
  {
    id: 'ready-1',
    name: 'Combo Trái Cây Office Ngọt Mát',
    category: 'ready',
    tags: ['Combo'],
    price: 65000,
    oldPrice: 85000,
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eba2672?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    saleBadge: '-23%',
    description: 'Combo văn phòng gồm Dưa hấu, Xoài chín, Ổi giòn cắt sẵn kèm muối ớt cao cấp.'
  },
  {
    id: 'ready-2',
    name: 'Khay Trái Cây Thượng Hạng EUS Gold',
    category: 'ready',
    tags: ['Premium'],
    price: 180000,
    oldPrice: 220000,
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=600&auto=format&fit=crop',
    rating: 5,
    saleBadge: '-18%',
    description: 'Khay hoa quả cắt sẵn cao cấp bao gồm Nho Mỹ, Dâu Tây Đà Lạt, Táo Envy và Cam Úc.'
  },
  {
    id: 'ready-3',
    name: 'Platter Trái Cây Family Size Lớn',
    category: 'ready',
    tags: ['Family'],
    price: 290000,
    oldPrice: 350000,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    saleBadge: '-17%',
    description: 'Khay tiệc lớn dành cho gia đình hoặc sự kiện, tổng hợp các loại trái cây nội ngoại nhập tươi ngon nhất.'
  },
  {
    id: 'ready-4',
    name: 'Khay Dâu Tây & Nho Mẫu Đơn Cắt Sẵn',
    category: 'ready',
    tags: ['Premium', 'Combo'],
    price: 150000,
    oldPrice: 190000,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    saleBadge: '-21%',
    description: 'Sự kết hợp hoàn hảo giữa những quả dâu tây Đà Lạt đỏ mọng và nho xanh Muscat giòn ngọt.'
  },

  // 3. ĐỒ UỐNG HEALTHY (Juices, Smoothies)
  {
    id: 'drink-1',
    name: 'Nước Ép Cam Dứa Tươi Nguyên Chất',
    category: 'drink',
    tags: ['Juices'],
    price: 45000,
    oldPrice: 55000,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    saleBadge: '-18%',
    description: 'Ép tươi nguyên chất 100% từ cam vàng và dứa mật thơm ngon, không thêm đường hóa học.'
  },
  {
    id: 'drink-2',
    name: 'Sinh Tố Bơ Sáp Đắc Lắc Sữa Hạt',
    category: 'drink',
    tags: ['Smoothies'],
    price: 55000,
    oldPrice: 70000,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    saleBadge: '-21%',
    description: 'Bơ sáp Đắc Lắc dẻo ngậy xay nhuyễn cùng sữa hạnh nhân hữu cơ thanh mát.'
  },
  {
    id: 'drink-3',
    name: 'Nước Ép Cần Tây Táo Xanh Detox',
    category: 'drink',
    tags: ['Juices'],
    price: 49000,
    oldPrice: 60000,
    image: 'https://images.unsplash.com/photo-1628557049597-c24b7eb46a3a?q=80&w=600&auto=format&fit=crop',
    rating: 4.6,
    saleBadge: '-18%',
    description: 'Nước ép giải độc, đẹp da chiết xuất từ cần tây hữu cơ Đà Lạt kết hợp cùng táo xanh giòn ngọt.'
  },
  {
    id: 'drink-4',
    name: 'Sinh Tố Việt Quất Dâu Tây Mâm Xôi',
    category: 'drink',
    tags: ['Smoothies'],
    price: 59000,
    oldPrice: 75000,
    image: 'https://images.unsplash.com/photo-1571006682858-a59a8795456b?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    saleBadge: '-21%',
    description: 'Hỗn hợp quả mọng tươi mát tốt cho tim mạch và tăng cường đề kháng.'
  }
];
