import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsResolver } from '../ui/products.resolver';
import { ProductsSchema } from '../database/model/products.model';
import { productsProviders } from '../providers/entity/products.providers';
import { ProductsService } from '../../application/services/products.service';
import { AccountsSchema } from 'src/accounts/infraestructure/database/model/accounts.model';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Products', schema: ProductsSchema }],
      'products',
    ),
    MongooseModule.forFeature(
      [{ name: 'Accounts', schema: AccountsSchema }],
      'accounts',
    ),
  ],
  providers: [ProductsResolver, ProductsService, ...productsProviders],
})
export class ProductsModule {}
