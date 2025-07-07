import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { ProductRepository } from 'src/products/domain/repository/products.repository';
import { Products } from 'src/products/domain/entity/products.entity';
import { Account } from 'src/accounts/domain/entity/accounts.entity';

@Injectable()
export class ProductsRepositoryImpl implements ProductRepository {
  constructor(
    @InjectModel('Products', 'products') private productsModel: Model<Products>,
    @InjectModel('Accounts', 'accounts') private accountsModel: Model<Account>,
  ) {}

  async create(product: Partial<Products>): Promise<Products> {
    return await new this.productsModel(product).save();
  }

  async findById(id: string): Promise<Products | null> {
    return await this.productsModel.findById(id).exec();
  }

  async findByAccountId(accountId: string): Promise<Products[]> {
    return await this.productsModel.find({ accountId }).exec();
  }

  async existsAccountById(accountId: string): Promise<boolean> {
    if (!isValidObjectId(accountId)) return false;
    return await this.accountsModel.exists({ _id: accountId }).then(Boolean);
  }

  async decreaseStock(productId: string, quantity: number): Promise<void> {
    await this.productsModel.updateOne(
      { _id: productId },
      { $inc: { stock: -quantity } }
    ).exec();
  }
}
