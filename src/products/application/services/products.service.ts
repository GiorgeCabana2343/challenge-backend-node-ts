import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repository/products.repository';
import { Products } from '../../domain/entity/products.entity';
import { IProducts } from 'src/products/domain/interface/products.interface';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: ProductRepository,
  ) { }

  async createProducts(product: IProducts): Promise<Products> {
    return await this.productRepository.create(product);
  }

  async findById(id: string): Promise<Products | null> {
    return this.productRepository.findById(id);
  }

  async findByAccountId(accountId: string): Promise<Products[]> {
    return this.productRepository.findByAccountId(accountId);
  }

  async purchaseProduct(accountId: string, productId: string, quantity: number): Promise<string> {
    const accountExists = await this.productRepository.existsAccountById(accountId);
    if (!accountExists) {
      throw new BadRequestException(`Account invalid or not found: ${accountId}`);
    }

    const product = await this.productRepository.findById(productId);
    if (!product) {
      throw new BadRequestException(`Product invalid or not found: ${productId}`);
    }

    if (product.stock < quantity) {
      throw new BadRequestException(
        `Insufficient stock. Available: ${product.stock}, requested: ${quantity}`
      );
    }
    await this.productRepository.decreaseStock(productId, quantity);
    return 'Purchase made successfully';
  }
}
