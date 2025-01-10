import { Product } from '@/types/store';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Logo T-Shirt',
    description: 'Comfortable cotton t-shirt with embroidered comedy logo',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
    category: 'clothing'
  },
  {
    id: '2',
    name: 'Stand-up Special DVD',
    description: 'Recorded live at the Comedy Club - 90 minutes of non-stop laughs',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80',
    category: 'media'
  },
  {
    id: '3',
    name: 'Comedy Club Hoodie',
    description: 'Premium quality hoodie with front pocket and hood',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80',
    category: 'clothing'
  },
  {
    id: '4',
    name: 'Signed Poster',
    description: 'Limited edition tour poster with signature',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80',
    category: 'accessories'
  }
];