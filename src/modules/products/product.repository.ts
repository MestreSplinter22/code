import { Product } from './product.entity.ts';

export class ProductRepository {
  // Simulação de um banco de dados.
  // No futuro, aqui entraria um "db.select().from(products)..."
  async findAll(): Promise<Product[]> {
    return [
      {
        id: '1',
        title: 'BM REESTABELECIDA 🇧🇷 R$267 LIMITE DIÁRIO',
        category: 'Meta',
        price: 139.90,
        originalPrice: 177.00,
        status: 'available',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
      },
      {
        id: '2',
        title: 'CONTA BRASIL TIKTOK ADS - CNPJ VERIFICADA',
        category: 'TikTok',
        price: 79.90,
        originalPrice: 99.88,
        status: 'available',
        imageUrl: 'https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-dark-e95da587b61837f72273483031b27e6e.svg'
      },
      {
        id: '3',
        title: 'PERFIL ANTIGO USA IP 🇺🇸',
        category: 'Meta',
        price: 59.90,
        originalPrice: 75.82,
        status: 'sold_out',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
      },
       {
        id: '4',
        title: '10 Créditos Lovable',
        category: 'Lovable',
        price: 7.90,
        originalPrice: 9.19,
        status: 'available',
        imageUrl: 'https://lovable.dev/favicon.ico'
      },
    ];
  }
}