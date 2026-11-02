import { StoreConfig, Product, ProductCategory } from '@/types';

export const STORE_CONFIG: StoreConfig = {
  brandName: 'JABHA FASHIONS',
  brandTagline: 'Exquisite Designer Wear & Bespoke Tailoring Studio',
  cityName: 'Chennai',
  seoRegionPhrase: 'Best Designer Boutique & Custom Tailoring in Thiruvanmiyur, Chennai',
  contact: {
    whatsappNumber: '918608168862', // Sanitized format: country code + 10 digits
    displayPhone: '+91 86081 68862',
    email: 'contact@jabhafashions.com',
    address: {
      line1: '18/1, Kamaraj Salai, Lakshmipuram',
      line2: 'Radhakrishnan Nagar, Thiruvanmiyur',
      city: 'Chennai',
      state: 'Tamil Nadu',
      postalCode: '600041',
      googleMapsUrl: 'https://maps.app.goo.gl/LVFYCXZX1bjukXFB8',
    },
  },
  timings: [
    { days: 'Monday – Saturday', hours: '10:00 AM – 08:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
  usps: [
    {
      icon: 'Scissors',
      title: 'Bespoke Custom Tailoring',
      description: 'Signature bridal blouses, aari embroidery, and precision-fit pattern sculpting tailored to your measurements.',
    },
    {
      icon: 'Sparkles',
      title: 'Handcrafted Artistry',
      description: 'Intricate zardozi, hand embroidery, beadwork, and custom necklines handcrafted by skilled karigars.',
    },
    {
      icon: 'Gem',
      title: 'Premium Fabrics & Sarees',
      description: 'Handpicked pure Kanchipuram silks, Banarasi brocades, raw silks, organza, and festive weaves.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Personalized Styling & Delivery',
      description: 'One-on-one styling consultations in Thiruvanmiyur with safe doorstep courier across Chennai and worldwide.',
    },
  ],
};

export const CATEGORIES: ProductCategory[] = [
  'All',
  'Festive Wear',
  'Designer Sarees',
  'Casual Kurtis',
  'Bridal Couture',
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    sku: 'JF-BC-01',
    title: 'Bridal Magenta Aari Silk Lehenga',
    category: 'Bridal Couture',
    tagline: 'Heavy hand-embroidered floral creepers with zardozi and antique gold embellishments',
    price: {
      amount: 45000,
      currency: 'INR',
      displayPrice: '₹45,000',
    },
    fabric: 'Pure Raw Silk with Handloom Net Dupatta',
    craftsmanship: 'Traditional Chennai Aari needlework and dabka work',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop', // Replace with your Image 1
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'prod-002',
    sku: 'JF-DS-02',
    title: 'Temple Border Kanchipuram Silk Saree',
    category: 'Designer Sarees',
    tagline: 'Authentic South Indian festive drape adorned with pure silver-gilt zari motifs',
    price: {
      amount: 28500,
      currency: 'INR',
      displayPrice: '₹28,500',
    },
    fabric: '100% Pure Kanchipuram Mulberry Silk',
    craftsmanship: 'Traditional Korvai handloom weaving technique',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop', // Replace with your Image 2
    isNewArrival: false,
    isFeatured: true,
  },
  {
    id: 'prod-003',
    sku: 'JF-FW-03',
    title: 'Emerald Green Festive Anarkali Set',
    category: 'Festive Wear',
    tagline: 'Flared floor-length kalidar silhouette with hand-detailed gota patti',
    price: {
      amount: 16500,
      currency: 'INR',
      displayPrice: '₹16,500',
    },
    fabric: 'Chanderi Silk with Sheer Organza Dupatta',
    craftsmanship: 'Scalloped zardozi hems and hand-crafted potli buttons',
    imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop', // Replace with your Image 3
    isNewArrival: true,
    isFeatured: false,
  },
  {
    id: 'prod-004',
    sku: 'JF-CK-04',
    title: 'Ivory Hand-Block Muslin Kurti',
    category: 'Casual Kurtis',
    tagline: 'Comfortable everyday elegance with understated pearl and sequin neck details',
    price: {
      amount: 4800,
      currency: 'INR',
      displayPrice: '₹4,800',
    },
    fabric: 'Handloom Modal Cotton Muslin',
    craftsmanship: 'Artisanal vegetable dye hand-block prints',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop', // Replace with your Image 4
    isNewArrival: false,
    isFeatured: false,
  },
  {
    id: 'prod-005',
    sku: 'JF-BC-05',
    title: 'Custom Bridal Maggam Blouse & Skirt',
    category: 'Bridal Couture',
    tagline: 'Peacock motif cutwork blouse paired with matching gathered silk skirt',
    price: {
      amount: 38000,
      currency: 'INR',
      displayPrice: '₹38,000',
    },
    fabric: 'Heavy Bridal Brocade Silk & Tulle',
    craftsmanship: 'Intricate Maggam embroidery with French knots and crystals',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop', // Replace with your Image 5
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'prod-006',
    sku: 'JF-DS-06',
    title: 'Lavender Scallop Organza Saree',
    category: 'Designer Sarees',
    tagline: 'Modern pastel evening drape with hand-embellished mirror work borders',
    price: {
      amount: 14500,
      currency: 'INR',
      displayPrice: '₹14,500',
    },
    fabric: 'Pure Translucent Silk Organza',
    craftsmanship: 'Hand-cut scalloped borders with foil mirror needlework',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop', // Replace with your Image 6
    isNewArrival: false,
    isFeatured: false,
  },
  {
    id: 'prod-007',
    sku: 'JF-FW-07',
    title: 'Rani Pink Peplum Sharara Suite',
    category: 'Festive Wear',
    tagline: 'Tailored flared kalidar sharara with floral dabka embroidery',
    price: {
      amount: 18500,
      currency: 'INR',
      displayPrice: '₹18,500',
    },
    fabric: 'Georgette & Raw Silk Blend',
    craftsmanship: 'Threadwork and sequins with handmade beaded tassels',
    imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop', // Replace with your Image 7
    isNewArrival: false,
    isFeatured: true,
  },
  {
    id: 'prod-008',
    sku: 'JF-CK-08',
    title: 'Indigo A-Line Tunic with Pants',
    category: 'Casual Kurtis',
    tagline: 'Relaxed contemporary cut with contrast thread stitching and wooden buttons',
    price: {
      amount: 5200,
      currency: 'INR',
      displayPrice: '₹5,200',
    },
    fabric: '100% Breathable Khadi Cotton',
    craftsmanship: 'Hand-spun yarn and natural indigo vat dyeing',
    imageUrl: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1200&auto=format&fit=crop', // Replace with your Image 8
    isNewArrival: false,
    isFeatured: false,
  },
];