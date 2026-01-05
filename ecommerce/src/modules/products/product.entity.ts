export interface Product {
    id: string;
    title: string;
    category: 'Meta' | 'TikTok' | 'Google' | 'Proxy' | 'Lovable';
    price: number;
    originalPrice?: number;
    status: 'available' | 'sold_out';
    imageUrl: string; // URL do ícone (Meta, TikTok, etc)
  }