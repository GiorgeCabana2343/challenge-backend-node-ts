import { Products } from '../entity/products.entity';

export interface ProductRepository {
  create(product: Partial<Products>): Promise<Products>;
  findById(id: string): Promise<Products | null>;
  findByAccountId(accountId: string): Promise<Products[]>;
  existsAccountById(accountId: string): Promise<boolean>;
  decreaseStock(productId: string, quantity: number): Promise<void>
}
