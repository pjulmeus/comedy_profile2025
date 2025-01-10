export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'clothing' | 'accessories' | 'media';
}

export interface CartItem extends Product {
  quantity: number;
}