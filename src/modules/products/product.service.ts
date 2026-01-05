// src/modules/products/product.service.ts
import { ProductRepository } from './product.repository.ts';
import { Product } from './product.entity.ts';

export class ProductService {
  // O "private repo" aqui é fundamental
  constructor(private repo: ProductRepository) {} 

  async getAllProducts(): Promise<Product[]> {
    return this.repo.findAll();
  }
}